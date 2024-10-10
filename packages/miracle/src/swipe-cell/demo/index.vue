<script setup lang="ts">
import MiSwipeCell from '..';
import MiButton from '../../button';
import MiCell from '../../cell';
import { useTranslate } from '../../../docs/site';
import { showConfirmDialog } from '../../dialog';

const t = useTranslate({
  'zh-CN': {
    select: '选择',
    delete: '删除',
    collect: '收藏',
    title: '单元格',
    confirm: '确定删除吗？',
    cardTitle: '商品标题',
    beforeClose: '异步关闭',
    customContent: '自定义内容',
  },
  'en-US': {
    select: 'Select',
    delete: 'Delete',
    collect: 'Collect',
    title: 'Cell',
    confirm: 'Are you sure to delete?',
    cardTitle: 'Title',
    beforeClose: 'Before Close',
    customContent: 'Custom Content',
  },
});

const beforeClose = ({ position }: { position: string }) => {
  switch (position) {
    case 'left':
    case 'cell':
    case 'outside':
      return true;
    case 'right':
      return new Promise<boolean>((resolve) => {
        showConfirmDialog({
          title: t('confirm'),
        })
          .then(() => resolve(true))
          .catch(() => resolve(false));
      });
  }
};
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <mi-swipe-cell>
      <template #left>
        <mi-button square type="primary" :text="t('select')" />
      </template>
      <mi-cell :border="false" :title="t('title')" :value="t('content')" />
      <template #right>
        <mi-button square type="danger" :text="t('delete')" />
        <mi-button square type="primary" :text="t('collect')" />
      </template>
    </mi-swipe-cell>
  </demo-block>

  <demo-block :title="t('beforeClose')">
    <mi-swipe-cell :before-close="beforeClose">
      <template #left>
        <mi-button square type="primary" :text="t('select')" />
      </template>
      <mi-cell :border="false" :title="t('title')" :value="t('content')" />
      <template #right>
        <mi-button square type="danger" :text="t('delete')" />
      </template>
    </mi-swipe-cell>
  </demo-block>
</template>

<style lang="less">
.demo-swipe-cell {
  user-select: none;

  .delete-button {
    height: 100%;
  }
}
</style>
