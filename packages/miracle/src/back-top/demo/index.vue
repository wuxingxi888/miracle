<script setup lang="ts">
import { ref } from 'vue';
import MiBackTop from '..';
import MiTabs from '../../tabs';
import MiTab from '../../tab';
import MiCell from '../../cell';
import { useTranslate } from '../../../docs/site';

const t = useTranslate({
  'zh-CN': {
    backTop: '返回顶部',
    customContent: '自定义内容',
    customPosition: '自定义位置',
    immediateScroll: '瞬间滚动',
    setScrollTarget: '设置滚动目标',
  },
  'en-US': {
    backTop: 'Back Top',
    customContent: 'Custom Content',
    customPosition: 'Custom Position',
    immediateScroll: 'Immediate Scroll',
    setScrollTarget: 'Set Scroll Target',
  },
});

const activeTab = ref(0);
const list = [...Array(50).keys()];
const targetEl = ref<HTMLElement>();
</script>

<template>
  <mi-tabs v-model:active="activeTab" :ellipsis="false">
    <mi-tab :title="t('basicUsage')">
      <mi-cell v-for="item in list" :key="item" :title="item" />
      <mi-back-top v-if="activeTab === 0" />
    </mi-tab>

    <mi-tab :title="t('customPosition')">
      <mi-cell v-for="item in list" :key="item" :title="item" />
      <mi-back-top v-if="activeTab === 1" right="15vw" bottom="10vh" />
    </mi-tab>

    <mi-tab :title="t('customContent')">
      <mi-cell v-for="item in list" :key="item" :title="item" />
      <mi-back-top v-if="activeTab === 2" class="custom-back-top">
        {{ t('backTop') }}
      </mi-back-top>
    </mi-tab>

    <mi-tab :title="t('setScrollTarget')">
      <div class="back-top-wrapper" ref="targetEl">
        <mi-cell v-for="item in list" :key="item" :title="item" />
        <mi-back-top v-if="activeTab === 3" :target="targetEl" bottom="30vh" />
      </div>
    </mi-tab>

    <mi-tab :title="t('immediateScroll')">
      <mi-cell v-for="item in list" :key="item" :title="item" />
      <mi-back-top v-if="activeTab === 4" immediate />
    </mi-tab>
  </mi-tabs>
</template>

<style lang="less">
.back-top-wrapper {
  height: 60vh;
  overflow: auto;
}

.custom-back-top {
  width: 80px;
  font-size: 14px;
  text-align: center;
}
</style>
