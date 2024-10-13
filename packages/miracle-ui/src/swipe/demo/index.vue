<script setup lang="ts">
import MiSwipe from '..';
import MiSwipeItem from '../../swipe-item';
import { cdnURL, useTranslate } from '../../../docs/site';
import { showToast } from '../../toast';

const t = useTranslate({
  'zh-CN': {
    title2: '懒加载',
    title3: '监听 change 事件',
    title4: '纵向滚动',
    title5: '自定义滑块大小',
    title6: '自定义指示器',
    message: '当前 Swipe 索引：',
  },
  'en-US': {
    title2: 'Lazy Render',
    title3: 'Change Event',
    title4: 'Vertical Scrolling',
    title5: 'Set SwipeItem Size',
    title6: 'Custom indicator',
    message: 'Current Swipe index:',
  },
});

const images = [
  cdnURL('avatar.jpg'),
  cdnURL('avatar.jpg'),
  cdnURL('avatar.jpg'),
  cdnURL('avatar.jpg'),
];

const onChange = (index: number) => showToast(t('message') + index);
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <mi-swipe :autoplay="3000" indicator-color="white">
      <mi-swipe-item>1</mi-swipe-item>
      <mi-swipe-item>2</mi-swipe-item>
      <mi-swipe-item>3</mi-swipe-item>
      <mi-swipe-item>4</mi-swipe-item>
    </mi-swipe>
  </demo-block>

  <demo-block :title="t('title2')">
    <mi-swipe :autoplay="3000" lazy-render>
      <mi-swipe-item v-for="image in images" :key="image">
        <img :src="image" />
      </mi-swipe-item>
    </mi-swipe>
  </demo-block>

  <demo-block :title="t('title3')">
    <mi-swipe indicator-color="white" @change="onChange">
      <mi-swipe-item>1</mi-swipe-item>
      <mi-swipe-item>2</mi-swipe-item>
      <mi-swipe-item>3</mi-swipe-item>
      <mi-swipe-item>4</mi-swipe-item>
    </mi-swipe>
  </demo-block>

  <demo-block :title="t('title4')">
    <mi-swipe
      vertical
      :autoplay="3000"
      indicator-color="white"
      style="height: 200px"
      class="demo-swipe--vertical"
    >
      <mi-swipe-item>1</mi-swipe-item>
      <mi-swipe-item>2</mi-swipe-item>
      <mi-swipe-item>3</mi-swipe-item>
      <mi-swipe-item>4</mi-swipe-item>
    </mi-swipe>
  </demo-block>

  <demo-block :title="t('title5')">
    <mi-swipe :width="300" :loop="false" indicator-color="white">
      <mi-swipe-item>1</mi-swipe-item>
      <mi-swipe-item>2</mi-swipe-item>
      <mi-swipe-item>3</mi-swipe-item>
      <mi-swipe-item>4</mi-swipe-item>
    </mi-swipe>
  </demo-block>

  <demo-block :title="t('title6')">
    <mi-swipe>
      <mi-swipe-item>1</mi-swipe-item>
      <mi-swipe-item>2</mi-swipe-item>
      <mi-swipe-item>3</mi-swipe-item>
      <mi-swipe-item>4</mi-swipe-item>
      <template #indicator="{ active, total }">
        <div class="custom-indicator">{{ active + 1 }}/{{ total }}</div>
      </template>
    </mi-swipe>
  </demo-block>
</template>

<style lang="less">
.demo-swipe {
  padding-bottom: 30px;

  .mi-swipe {
    &-item {
      color: var(--mi-white);
      font-size: 20px;
      line-height: 150px;
      text-align: center;

      &:nth-child(even) {
        background-color: #39a9ed;
      }

      &:nth-child(odd) {
        background-color: #66c6f2;
      }
    }

    img {
      display: block;
      box-sizing: border-box;
      width: 100%;
      height: 240px;
      padding: 30px 60px;
      background-color: var(--mi-white);
      pointer-events: none;
    }
  }

  &--vertical {
    .mi-swipe-item {
      line-height: 200px;
    }
  }

  .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    color: var(--mi-white);
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
  }
}
</style>
