<script setup lang="ts">
import MiPagination from '..';
import MiIcon from '../../icon';
import { ref } from 'vue';
import { useTranslate } from '../../../docs/site';

const t = useTranslate({
  'zh-CN': {
    title2: '简单模式',
    title3: '显示省略号',
    title4: '自定义按钮',
    prevText: '上一页',
    nextText: '下一页',
  },
  'en-US': {
    title2: 'Simple Mode',
    title3: 'Show ellipses',
    title4: 'Custom Button',
    prevText: 'Prev',
    nextText: 'Next',
  },
});

const currentPage1 = ref(1);
const currentPage2 = ref(1);
const currentPage3 = ref(1);
const currentPage4 = ref(1);
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <mi-pagination
      v-model="currentPage1"
      :total-items="24"
      :items-per-page="5"
      :prev-text="t('prevText')"
      :next-text="t('nextText')"
    />
  </demo-block>

  <demo-block :title="t('title2')">
    <mi-pagination
      v-model="currentPage2"
      :page-count="12"
      :prev-text="t('prevText')"
      :next-text="t('nextText')"
      mode="simple"
      size="small"
    />
  </demo-block>

  <demo-block :title="t('title3')">
    <mi-pagination
      v-model="currentPage3"
      force-ellipses
      :total-items="125"
      :show-page-size="3"
      :prev-text="t('prevText')"
      :next-text="t('nextText')"
    />
  </demo-block>

  <demo-block :title="t('title4')">
    <mi-pagination
      v-model="currentPage4"
      :total-items="125"
      :show-page-size="5"
    >
      <template #prev-text>
        <mi-icon name="arrow-left" />
      </template>
      <template #next-text>
        <mi-icon name="arrow" />
      </template>
      <template #page="{ text }">{{ text }}</template>
    </mi-pagination>
  </demo-block>
</template>

<style lang="less">
.demo-pagination {
  .mi-pagination {
    width: 100%;
    margin: 5px 0;
  }

  .mi-doc-demo-block {
    padding: 0 var(--mi-padding-md);
  }

  .mi-doc-demo-block__title {
    padding-left: 0;
  }
}
</style>
