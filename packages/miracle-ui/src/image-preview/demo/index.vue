<script setup lang="ts">
import MiCell from '../../cell';
import {
  showImagePreview,
  ImagePreviewOptions,
  ImagePreview as MiImagePreview,
} from '..';
import { ref } from 'vue';
import { cdnURL, useTranslate } from '../../../docs/site';
import { showToast } from '../../toast';

const t = useTranslate({
  'zh-CN': {
    closed: '关闭',
    showClose: '展示关闭按钮',
    showImages: '预览图片',
    beforeClose: '异步关闭',
    closeEvent: '监听关闭事件',
    customConfig: '传入配置项',
    startPosition: '指定初始位置',
    useComponent: '使用 ImagePreview 组件',
    useImageSlot: '使用 image 插槽',
    index: (index: number) => `第${index + 1}页`,
  },
  'en-US': {
    closed: 'closed',
    showClose: 'Show Close Icon',
    showImages: 'Show Images',
    beforeClose: 'Before Close',
    closeEvent: 'Close Event',
    customConfig: 'Custom Config',
    startPosition: 'Set Start Position',
    useComponent: 'Use ImagePreview Component',
    useImageSlot: 'Use image slot',
    index: (index: number) => `Page: ${index}`,
  },
});

const images = [
  cdnURL('avatar.jpg'),
  cdnURL('avatar.jpg'),
  cdnURL('avatar.jpg'),
  cdnURL('avatar.jpg'),
];

const imagesSlot = [
  'https://www.w3school.com.cn/i/movie.ogg',
  'https://www.w3school.com.cn/i/movie.ogg',
  'https://www.w3school.com.cn/i/movie.ogg',
  'https://www.w3school.com.cn/i/movie.ogg',
];

const show = ref(false);
const index = ref(0);

const showSlot = ref(false);

const onClose = () => showToast(t('closed'));

const beforeClose = () =>
  new Promise<boolean>((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });

const onChange = (newIndex: number) => {
  index.value = newIndex;
};

const showComponentCall = () => {
  show.value = true;
};

const showComponentCallSlot = () => {
  showSlot.value = true;
};

const showFunctionCall = (options: Partial<ImagePreviewOptions> = {}) => {
  const instance = showImagePreview({
    images,
    ...options,
  });

  if (options.beforeClose) {
    setTimeout(() => {
      instance?.close();
    }, 2000);
  }
};
</script>

<template>
  <demo-block card :title="t('basicUsage')">
    <mi-cell is-link :title="t('showImages')" @click="showFunctionCall()" />
  </demo-block>

  <demo-block card :title="t('customConfig')">
    <mi-cell
      is-link
      :title="t('startPosition')"
      @click="showFunctionCall({ startPosition: 1 })"
    />
    <mi-cell
      is-link
      :title="t('showClose')"
      @click="showFunctionCall({ closeable: true })"
    />
    <mi-cell
      is-link
      :title="t('closeEvent')"
      @click="showFunctionCall({ onClose })"
    />
  </demo-block>

  <demo-block card :title="t('beforeClose')">
    <mi-cell
      is-link
      :title="t('beforeClose')"
      @click="showFunctionCall({ beforeClose })"
    />
  </demo-block>

  <demo-block card :title="t('useComponent')">
    <mi-cell is-link :title="t('useComponent')" @click="showComponentCall" />
    <mi-image-preview v-model:show="show" :images="images" @change="onChange">
      <template #index>{{ t('index', index) }}</template>
    </mi-image-preview>
  </demo-block>

  <demo-block card :title="t('useImageSlot')">
    <mi-cell
      is-link
      :title="t('useImageSlot')"
      @click="showComponentCallSlot"
    />
    <mi-image-preview
      v-model:show="showSlot"
      :images="imagesSlot"
      :close-on-click-image="false"
    >
      <template #image="{ src }">
        <video style="width: 100%" controls>
          <source :src="src" />
        </video>
      </template>
    </mi-image-preview>
  </demo-block>
</template>
