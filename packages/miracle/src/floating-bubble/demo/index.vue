<script setup lang="ts">
import { useTranslate } from '../../../docs/site';
import MiFloatingBubble, { type FloatingBubbleOffset } from '..';
import MiTabs from '../../tabs';
import MiTab from '../../tab';
import { showToast } from '../../toast';
import { ref } from 'vue';

const t = useTranslate({
  'zh-CN': {
    clickBubble: '点击气泡',
    freeMagnetic: '自由拖拽和磁吸',
    vModel: '双向绑定',
    basicUsageText: '在 x 轴默认位置，允许 y 轴方向拖拽',
    freeMagneticText: '允许 x 和 y 轴方向拖拽，吸附到 x 轴方向最近一边',
    vModelText: '使用 offset 控制位置，',
  },
  'en-US': {
    clickBubble: 'Click bubble',
    freeMagnetic: 'Free Magnetic',
    vModel: 'vModel',
    basicUsageText:
      'In the default x position, drag in the y direction is allowed',
    freeMagneticText:
      'Allow x and y drags to attach to the nearest side of the x axis',
    vModelText: 'Use offset to control the position,',
  },
});

const onOffsetChange = (offset: FloatingBubbleOffset) => {
  showToast(`x: ${offset.x.toFixed(0)}, y: ${offset.y.toFixed(0)}`);
};

const onClick = () => {
  showToast(t('clickBubble'));
};

const activeName = ref(0);
const offset = ref<FloatingBubbleOffset>({ x: 200, y: 400 });
</script>

<template>
  <mi-tabs v-model:active="activeName">
    <mi-tab :title="t('basicUsage')">
      <p class="text">{{ t('basicUsageText') }}</p>
      <mi-floating-bubble
        v-if="activeName === 0"
        icon="chat"
        @click="onClick"
      />
    </mi-tab>
    <mi-tab :title="t('freeMagnetic')">
      <p class="text">{{ t('freeMagneticText') }}</p>
      <mi-floating-bubble
        v-if="activeName === 1"
        icon="chat"
        axis="xy"
        magnetic="x"
        @offset-change="onOffsetChange"
      />
    </mi-tab>
    <mi-tab :title="t('vModel')">
      <p class="text">
        {{ t('vModelText') }} x：{{ offset.x.toFixed(0) }} y:
        {{ offset.y.toFixed(0) }}
      </p>
      <mi-floating-bubble
        v-if="activeName === 2"
        icon="chat"
        v-model:offset="offset"
        axis="xy"
      />
    </mi-tab>
  </mi-tabs>
</template>

<style lang="less">
.text {
  text-align: center;
  padding: 100px 20px;
  font-size: 14px;
}
</style>
