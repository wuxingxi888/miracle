<script setup lang="ts">
import MiSkeleton from '..';
import { SkeletonImage as MiSkeletonImage } from '../../skeleton-image';
import { SkeletonParagraph as MiSkeletonParagraph } from '../../skeleton-paragraph';
import MiSwitch from '../../switch';
import { ref } from 'vue';
import { cdnURL, useTranslate } from '../../../docs/site';

const t = useTranslate({
  'zh-CN': {
    showAvatar: '显示头像',
    showChildren: '显示子组件',
    title: '关于 Miracle',
    desc: 'MIracle 是一套轻量、可定制的移动端 Vue 组件库，提供了丰富的基础组件和业务组件，帮助开发者快速搭建移动应用。',
    customContent: '自定义展示内容',
  },
  'en-US': {
    showAvatar: 'Show Avatar',
    showChildren: 'Show Children',
    title: 'About Miracle',
    desc: 'Miracle is a set of Mobile UI Components built on Vue.',
    customContent: 'Custom Content',
  },
});

const show = ref(false);
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <mi-skeleton title :row="3" />
  </demo-block>

  <demo-block :title="t('showAvatar')">
    <mi-skeleton title avatar :row="3" />
  </demo-block>

  <demo-block :title="t('showChildren')">
    <mi-switch v-model="show" />
    <mi-skeleton title avatar :row="3" :loading="!show">
      <div class="demo-preview">
        <img :src="cdnURL('logo.png')" />
        <div class="demo-content">
          <h3>{{ t('title') }}</h3>
          <p>{{ t('desc') }}</p>
        </div>
      </div>
    </mi-skeleton>
  </demo-block>

  <demo-block :title="t('customContent')">
    <mi-skeleton>
      <template #template>
        <div :style="{ display: 'flex', width: '100%' }">
          <mi-skeleton-image />
          <div :style="{ flex: 1, marginLeft: '16px' }">
            <mi-skeleton-paragraph row-width="60%" />
            <mi-skeleton-paragraph />
            <mi-skeleton-paragraph />
            <mi-skeleton-paragraph />
          </div>
        </div>
      </template>
    </mi-skeleton>
  </demo-block>
</template>

<style lang="less">
.demo-skeleton {
  background-color: var(--mi-background-2);

  .mi-switch {
    margin: 0 var(--mi-padding-md) var(--mi-padding-xs);
  }

  .demo-preview {
    display: flex;
    padding: 0 var(--mi-padding-md);

    .demo-content {
      padding-top: 6px;

      h3 {
        margin: 0;
        font-size: 18px;
        line-height: 20px;
      }

      p {
        margin: 13px 0 0;
        font-size: 14px;
        line-height: 20px;
      }
    }

    img {
      flex-shrink: 0;
      width: 32px;
      height: 32px;
      margin-right: var(--mi-padding-md);
    }
  }
}
</style>
