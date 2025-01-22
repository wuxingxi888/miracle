<script setup lang="ts">
import { ref } from 'vue';
import MiIndicator from '..';
import { useTranslate } from '../../../docs/site';

const t = useTranslate({
  'zh-CN': {
    basicUsage: '基本用法',
    vertical: '垂直指示器',
    circle: '圆形指示器',
    square: '方形指示器',
    line: '线形指示器',
    border: '边框指示器',
  },
  'en-US': {
    basicUsage: 'Basic Usage',
    vertical: 'Vertical Indicator',
    circle: 'Circle Indicator',
    square: 'Square Indicator',
    line: 'Line Indicator',
    border: 'Border Indicator',
  },
});

const active = ref(0);

// 自动切换
setInterval(() => {
  active.value = (active.value + 1) % 3;
}, 2000);
</script>

<template>
  <div>
    <demo-block :title="t('basicUsage')">
      <div class="demo-block page-1">
        <mi-indicator type="circle" :size="3" :active="active" color="#fff" />
        <mi-indicator :size="3" :active="active" direction="vertical" />
      </div>
    </demo-block>

    <demo-block :title="t('square')">
      <div class="demo-block page-2">
        <mi-indicator type="square" :size="3" :active="active" />
        <mi-indicator
          type="square"
          :size="3"
          :active="active"
          direction="vertical"
        />
      </div>
    </demo-block>

    <demo-block :title="t('line')">
      <div class="demo-block page-3">
        <mi-indicator type="line" :size="3" :active="active" color="#fff" />
        <mi-indicator
          type="line"
          :size="3"
          :active="active"
          direction="vertical"
        />
      </div>
    </demo-block>
  </div>
</template>

<style lang="less">
.demo-indicator {
  .demo-block {
    width: 90%;
    height: 150px;
    background-color: white;
    margin: 0 auto;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  .page-1 {
    background-image: linear-gradient(135deg, #ffc46e, #f043bf 100%);
  }

  .page-2 {
    background-image: linear-gradient(-135deg, #9cece3, #4b3cf2);
  }

  .page-3 {
    background-image: linear-gradient(45deg, #8ecbe6, #e743c3);
  }

  .page-4 {
    background-image: linear-gradient(-45deg, #fbdee1, #4b3cf2);
  }
}
</style>
