<script setup lang="ts">
import MiNavBar from '..';
import MiIcon from '../../icon';
import { useTranslate } from '../../../docs/site';
import { showToast } from '../../toast';

const t = useTranslate({
  'zh-CN': {
    useSlot: '使用插槽',
    showBack: '返回上级',
    rightButton: '右侧按钮',
    disableButton: '禁用按钮',
  },
  'en-US': {
    useSlot: 'Use Slot',
    showBack: 'Back',
    rightButton: 'Right Button',
    disableButton: 'Disable Button',
  },
});

const onClickLeft = () => showToast(t('back'));
const onClickRight = () => showToast(t('button'));
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <mi-nav-bar :title="t('title')" />
  </demo-block>

  <demo-block :title="t('showBack')">
    <mi-nav-bar
      :title="t('title')"
      :left-text="t('back')"
      left-arrow
      @click-left="onClickLeft"
    />
  </demo-block>

  <demo-block :title="t('rightButton')">
    <mi-nav-bar
      :title="t('title')"
      :left-text="t('back')"
      :right-text="t('button')"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
  </demo-block>

  <demo-block :title="t('useSlot')">
    <mi-nav-bar :title="t('title')" :left-text="t('back')" left-arrow>
      <template #right>
        <mi-icon name="search" size="18" />
      </template>
    </mi-nav-bar>
  </demo-block>

  <demo-block :title="t('disableButton')">
    <mi-nav-bar
      :title="t('title')"
      :left-text="t('back')"
      :right-text="t('button')"
      left-arrow
      left-disabled
      right-disabled
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
  </demo-block>
</template>
