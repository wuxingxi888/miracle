<script setup lang="ts">
import MiRow from '../../row';
import MiCol from '..';
import { useTranslate } from '../../../docs/site';

const t = useTranslate({
  'zh-CN': {
    title2: '在列元素之间增加间距',
    justify: '对齐方式',
    vertical: '垂直间距',
  },
  'en-US': {
    title2: 'Column Spacing',
    justify: 'Justify Content',
    vertical: 'Vertical Spacing',
  },
});
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <mi-row>
      <mi-col span="8">span: 8</mi-col>
      <mi-col span="8">span: 8</mi-col>
      <mi-col span="8">span: 8</mi-col>
    </mi-row>

    <mi-row>
      <mi-col span="4">span: 4</mi-col>
      <mi-col span="10" offset="4"> offset: 4, span: 10 </mi-col>
    </mi-row>

    <mi-row>
      <mi-col offset="12" span="12"> offset: 12, span: 12 </mi-col>
    </mi-row>
  </demo-block>

  <demo-block :title="t('title2')">
    <mi-row gutter="20">
      <mi-col span="8">span: 8</mi-col>
      <mi-col span="8">span: 8</mi-col>
      <mi-col span="8">span: 8</mi-col>
    </mi-row>
  </demo-block>

  <demo-block :title="t('vertical')">
    <div class="demo-vertical-space">
      <mi-row :gutter="[20, 20]">
        <mi-col span="12">span: 12</mi-col>
        <mi-col span="12">span: 12</mi-col>
        <mi-col span="12">span: 12</mi-col>
        <mi-col span="12">span: 12</mi-col>
      </mi-row>
    </div>
  </demo-block>

  <demo-block :title="t('justify')">
    <mi-row justify="center">
      <mi-col span="6">span: 6</mi-col>
      <mi-col span="6">span: 6</mi-col>
      <mi-col span="6">span: 6</mi-col>
    </mi-row>

    <mi-row justify="end">
      <mi-col span="6">span: 6</mi-col>
      <mi-col span="6">span: 6</mi-col>
      <mi-col span="6">span: 6</mi-col>
    </mi-row>

    <mi-row justify="space-between">
      <mi-col span="6">span: 6</mi-col>
      <mi-col span="6">span: 6</mi-col>
      <mi-col span="6">span: 6</mi-col>
    </mi-row>

    <mi-row justify="space-around">
      <mi-col span="6">span: 6</mi-col>
      <mi-col span="6">span: 6</mi-col>
      <mi-col span="6">span: 6</mi-col>
    </mi-row>
  </demo-block>
</template>

<style lang="less">
.demo-col {
  .mi-doc-demo-block {
    padding: 0 var(--mi-padding-md);
  }

  .mi-doc-demo-block__title {
    padding-left: 0;
  }

  .mi-col {
    margin-bottom: 10px;
    color: var(--mi-black);
    font-size: 13px;
    line-height: 30px;
    text-align: center;
    background-clip: content-box;

    &:nth-child(odd) {
      background-color: var(--mi-orange);
    }

    &:nth-child(even) {
      background-color: var(--mi-orange-dark);
    }
  }
}

.demo-vertical-space {
  .mi-col {
    margin-bottom: 0;
  }
}
</style>
