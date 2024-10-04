<script setup lang="ts">
import MiRow from '../../row';
import MiImage from '..';
import MiCol from '../../col';
import MiLoading from '../../loading';
import { cdnURL, useTranslate } from '../../../docs/site';

const t = useTranslate({
  'zh-CN': {
    fitMode: '填充模式',
    position: '图片位置',
    round: '圆形图片',
    loading: '加载中提示',
    error: '加载失败提示',
    defaultTip: '默认提示',
    customTip: '自定义提示',
    loadFail: '加载失败',
  },
  'en-US': {
    fitMode: 'Fit Mode',
    position: 'Position',
    round: 'Round',
    loading: 'Loading',
    error: 'Error',
    defaultTip: 'Default Tip',
    customTip: 'Custom Tip',
    loadFail: 'Load failed',
  },
});

const image = cdnURL('avatar.jpg');
const fits = ['contain', 'cover', 'fill', 'none', 'scale-down'] as const;
const positions1 = ['left', 'center', 'right'] as const;
const positions2 = ['top', 'center', 'bottom'] as const;
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <mi-row>
      <mi-image width="100" height="100" :src="image" />
    </mi-row>
  </demo-block>

  <demo-block :title="t('fitMode')">
    <mi-row gutter="20">
      <mi-col v-for="fit in fits" span="8" :key="fit">
        <mi-image :fit="fit" width="100%" height="27vw" :src="image" />
        <div class="text">{{ fit }}</div>
      </mi-col>
    </mi-row>
  </demo-block>

  <demo-block :title="t('position')">
    <mi-row gutter="20">
      <mi-col v-for="pos in positions1" span="8" :key="pos">
        <mi-image
          :position="pos"
          width="100%"
          height="27vw"
          fit="cover"
          :src="image"
        />
        <div class="text">cover</div>
        <div class="text">{{ pos }}</div>
      </mi-col>
      <mi-col v-for="pos in positions2" span="8" :key="pos">
        <mi-image
          :position="pos"
          width="100%"
          height="27vw"
          fit="contain"
          :src="image"
        />
        <div class="text">contain</div>
        <div class="text">{{ pos }}</div>
      </mi-col>
    </mi-row>
  </demo-block>

  <demo-block :title="t('round')">
    <mi-row gutter="20">
      <mi-col v-for="fit in fits" span="8" :key="fit">
        <mi-image round :fit="fit" width="100%" height="27vw" :src="image" />
        <div class="text">{{ fit }}</div>
      </mi-col>
    </mi-row>
  </demo-block>

  <demo-block :title="t('loading')">
    <mi-row gutter="20">
      <mi-col span="8">
        <mi-image width="100%" height="27vw" />
        <div class="text">{{ t('defaultTip') }}</div>
      </mi-col>

      <mi-col span="8">
        <mi-image width="100%" height="27vw">
          <template #loading>
            <mi-loading type="spinner" size="20" />
          </template>
        </mi-image>
        <div class="text">{{ t('customTip') }}</div>
      </mi-col>
    </mi-row>
  </demo-block>

  <demo-block :title="t('error')">
    <mi-row gutter="20">
      <mi-col span="8">
        <mi-image width="100%" height="27vw" src="http://x" />
        <div class="text">{{ t('defaultTip') }}</div>
      </mi-col>

      <mi-col span="8">
        <mi-image width="100%" height="27vw" src="http://x">
          <template #error>{{ t('loadFail') }}</template>
        </mi-image>
        <div class="text">{{ t('customTip') }}</div>
      </mi-col>
    </mi-row>
  </demo-block>
</template>

<style lang="less">
.demo-image {
  overflow-x: hidden;
  background-color: var(--mi-background-2);

  .mi-row {
    padding: 0 var(--mi-padding-md);
  }

  .mi-col {
    margin-bottom: 20px;
  }

  .text {
    margin-top: 5px;
    color: var(--mi-gray-7);
    font-size: 14px;
    text-align: center;
  }
}
</style>
