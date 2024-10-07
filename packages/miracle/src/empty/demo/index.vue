<script setup lang="ts">
import MiEmpty from '..';
import MiTabs from '../../tabs';
import MiTab from '../../tab';
import MiButton from '../../button';
import { ref } from 'vue';
import { cdnURL, useTranslate } from '../../../docs/site';

const t = useTranslate({
  'zh-CN': {
    error: '通用错误',
    search: '搜索提示',
    network: '网络错误',
    imageType: '图片类型',
    customSize: '自定义大小',
    description: '描述文字',
    customImage: '自定义图片',
    bottomContent: '底部内容',
  },
  'en-US': {
    error: 'Error',
    search: 'Search',
    network: 'Network',
    imageType: 'Image Type',
    customSize: 'Custom Size',
    description: 'Description',
    customImage: 'Custom Image',
    bottomContent: 'Bottom Content',
  },
});

const active = ref('error');
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <mi-empty :description="t('description')" />
  </demo-block>

  <demo-block :title="t('imageType')">
    <mi-tabs v-model:active="active">
      <mi-tab name="error" :title="t('error')">
        <mi-empty image="error" :description="t('description')" />
      </mi-tab>
      <mi-tab name="network" :title="t('network')">
        <mi-empty image="network" :description="t('description')" />
      </mi-tab>
      <mi-tab name="search" :title="t('search')">
        <mi-empty image="search" :description="t('description')" />
      </mi-tab>
    </mi-tabs>
  </demo-block>

  <demo-block :title="t('customSize')">
    <mi-empty image-size="100" :description="t('description')" />
  </demo-block>

  <demo-block :title="t('customImage')">
    <mi-empty
      :image="cdnURL('custom-empty-image.png')"
      :image-size="80"
      :description="t('description')"
    />
  </demo-block>

  <demo-block :title="t('bottomContent')">
    <mi-empty :description="t('description')">
      <mi-button round type="primary" class="bottom-button">
        {{ t('button') }}
      </mi-button>
    </mi-empty>
  </demo-block>
</template>

<style lang="less">
.demo-empty {
  background: var(--mi-background-2);

  .bottom-button {
    width: 160px;
    height: 40px;
  }
}
</style>
