/**
 * 复制指令
 * 该指令用于复制某个值至剪贴板
 * v-copy
 * 基础用法：<button v-copy="'要复制的文本'">复制</button>
 * 带回调用法：<button v-copy="{ value: '要复制的文本', onSuccess: handleSuccess }">复制</button>
 */
import type { Directive, DirectiveBinding } from 'vue';

interface ElType extends HTMLElement {
  copyData: string | number | CopyOptions;
  __handleClick__: any;
}

interface CopyOptions {
  value: string | number;
  onSuccess?: () => void;
}

// 判断是否支持 Clipboard API
const hasClipboard = navigator && navigator.clipboard;

// 复制文本的具体实现
async function copyText(text: string): Promise<boolean> {
  try {
    if (hasClipboard) {
      await navigator.clipboard.writeText(text);
    } else {
      const input = document.createElement('input');
      input.value = text;
      document.body.appendChild(input);
      input.select();
      document.execCommand('Copy');
      document.body.removeChild(input);
    }
    return true;
  } catch (err) {
    console.error('复制失败:', err);
    return false;
  }
}

function handleClick(this: ElType) {
  const options = this.copyData;
  const text =
    typeof options === 'object' ? options.value.toString() : options.toString();

  copyText(text).then((success) => {
    if (success) {
      console.log('复制成功:', text);
      if (typeof options === 'object' && options.onSuccess) {
        options.onSuccess();
      }
    }
  });
}

const copy: Directive = {
  mounted(el: ElType, binding: DirectiveBinding) {
    el.copyData = binding.value;
    el.__handleClick__ = handleClick.bind(el);
    el.addEventListener('click', el.__handleClick__);
  },
  updated(el: ElType, binding: DirectiveBinding) {
    el.copyData = binding.value;
  },
  beforeUnmount(el: ElType) {
    el.removeEventListener('click', el.__handleClick__);
  },
};

export default copy;
