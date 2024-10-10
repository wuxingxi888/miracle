<script setup lang="ts">
import MiCircle from '..';
import MiButton from '../../button';
import { ref } from 'vue';
import { useTranslate } from '../../../docs/site';

const t = useTranslate({
  'zh-CN': {
    left: '左侧',
    right: '右侧',
    bottom: '底部',
    gradient: '渐变色',
    customSize: '大小定制',
    customStyle: '样式定制',
    customColor: '颜色定制',
    customWidth: '宽度定制',
    startPosition: '起始位置',
    counterClockwise: '逆时针',
  },
  'en-US': {
    left: 'Left',
    right: 'Right',
    bottom: 'Bottom',
    gradient: 'Gradient',
    customSize: 'Custom Size',
    customStyle: 'Custom Style',
    customColor: 'Custom Color',
    customWidth: 'Custom Width',
    startPosition: 'Start Position',
    counterClockwise: 'Counter Clockwise',
  },
});

const rate = ref(70);
const currentRate1 = ref(70);
const currentRate2 = ref(70);
const currentRate3 = ref(70);
const currentRate4 = ref(70);

const gradientColor = {
  '0%': '#3fecff',
  '100%': '#6149f6',
};

const format = (rate: number) => Math.min(Math.max(rate, 0), 100);

const add = () => {
  rate.value = format(rate.value + 20);
};

const reduce = () => {
  rate.value = format(rate.value - 20);
};
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <mi-circle
      v-model:current-rate="currentRate1"
      :rate="rate"
      :speed="100"
      :text="currentRate1.toFixed(0) + '%'"
    />
  </demo-block>

  <demo-block :title="t('customStyle')">
    <mi-circle
      v-model:current-rate="currentRate3"
      :rate="rate"
      :speed="100"
      :stroke-width="60"
      :text="t('customWidth')"
    />

    <mi-circle
      v-model:current-rate="currentRate3"
      color="#ee0a24"
      :rate="rate"
      layer-color="#ebedf0"
      :speed="100"
      :text="t('customColor')"
    />

    <mi-circle
      v-model:current-rate="currentRate2"
      :rate="rate"
      :speed="100"
      :color="gradientColor"
      :text="t('gradient')"
    />

    <mi-circle
      v-model:current-rate="currentRate4"
      color="#07c160"
      :rate="rate"
      :speed="100"
      :clockwise="false"
      :text="t('counterClockwise')"
      style="margin-top: 15px"
    />

    <mi-circle
      v-model:current-rate="currentRate4"
      color="#7232dd"
      :rate="rate"
      :speed="100"
      size="120px"
      :clockwise="false"
      :text="t('customSize')"
      style="margin-top: 15px"
    />
  </demo-block>

  <div style="margin-top: 15px">
    <mi-button :text="t('add')" type="primary" size="small" @click="add" />
    <mi-button
      :text="t('decrease')"
      type="danger"
      size="small"
      @click="reduce"
    />
  </div>

  <demo-block :title="t('startPosition')">
    <mi-circle
      :current-rate="75"
      :rate="rate"
      :text="t('left')"
      start-position="left"
    />
    <mi-circle
      :current-rate="75"
      :rate="rate"
      :text="t('right')"
      start-position="right"
    />
    <mi-circle
      :current-rate="75"
      :rate="rate"
      :text="t('bottom')"
      start-position="bottom"
    />
  </demo-block>
</template>

<style lang="less">
.demo-circle {
  .mi-circle {
    margin-left: var(--mi-padding-md);
  }

  .mi-button {
    margin: var(--mi-padding-md) 0 0 10px;

    &:first-of-type {
      margin-left: var(--mi-padding-md);
    }
  }
}
</style>
