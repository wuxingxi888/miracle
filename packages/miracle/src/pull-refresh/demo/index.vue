<script setup lang="ts">
import MiTabs from '../../tabs';
import MiTab from '../../tab';
import MiPullRefresh from '..';
import { computed, onMounted, ref } from 'vue';
import { cdnURL, useTranslate } from '../../../docs/site';
import { showToast } from '../../toast';

const t = useTranslate({
  'zh-CN': {
    try: '下拉试试',
    text: '刷新次数',
    success: '刷新成功',
    successTip: '成功提示',
    customTips: '自定义提示',
    customAnimTips: '自定义动画提示',
  },
  'en-US': {
    try: 'Try it down',
    text: 'Refresh Count',
    success: 'Refresh success',
    successTip: 'Success Tip',
    customTips: 'Custom Tips',
    customAnimTips: 'Custom Anim Tips',
  },
});

const count = ref(0);
const loading = ref(false);

const tips = computed(() => {
  if (count.value) {
    return `${t('text')}: ${count.value}`;
  }
  return t('try');
});

const onRefresh = (isShowToast: boolean) => {
  setTimeout(() => {
    if (isShowToast) {
      showToast(t('success'));
    }
    loading.value = false;
    count.value++;
  }, 1000);
};

const preloadImage = () => {
  // preload doge image
  const doge = new Image();
  const dogeFire = new Image();

  doge.src = cdnURL('doge.png');
  dogeFire.src = cdnURL('doge-fire.jpeg');
};

onMounted(preloadImage);
</script>

<template>
  <mi-tabs>
    <mi-tab :title="t('basicUsage')">
      <mi-pull-refresh v-model="loading" @refresh="onRefresh(true)">
        <p>{{ tips }}</p>
      </mi-pull-refresh>
    </mi-tab>

    <mi-tab :title="t('successTip')">
      <mi-pull-refresh
        v-model="loading"
        :success-text="t('success')"
        @refresh="onRefresh(false)"
      >
        <p>{{ tips }}</p>
      </mi-pull-refresh>
    </mi-tab>

    <mi-tab :title="t('customTips')">
      <mi-pull-refresh
        v-model="loading"
        head-height="80"
        @refresh="onRefresh(true)"
      >
        <template #pulling="{ distance }">
          <img
            class="doge"
            :src="cdnURL('doge.png')"
            :style="{ transform: `scale(${distance / 80})` }"
          />
        </template>
        <template #loosing>
          <img :src="cdnURL('doge.png')" class="doge" />
        </template>
        <template #loading>
          <img :src="cdnURL('doge-fire.jpeg')" class="doge" />
        </template>
        <p>{{ tips }}</p>
      </mi-pull-refresh>
    </mi-tab>

    <mi-tab :title="t('customAnimTips')">
      <mi-pull-refresh
        v-model="loading"
        head-height="80"
        @refresh="onRefresh(true)"
      >
        <template #pulling="{ distance }">
          <div
            class="loader"
            :style="{ transform: `scale(${distance / 80})` }"
          ></div>
        </template>
        <template #loosing>
          <div class="loader"></div>
        </template>
        <template #loading>
          <div class="loader"></div>
        </template>
        <p>{{ tips }}</p>
      </mi-pull-refresh>
    </mi-tab>
  </mi-tabs>
</template>

<style lang="less">
.demo-pull-refresh {
  background-color: var(--mi-background-2);

  .mi-pull-refresh {
    height: calc(100vh - 50px);
  }

  .doge {
    width: 140px;
    height: 72px;
    margin-top: 8px;
    border-radius: 4px;
  }

  .loader {
    width: 80px;
    aspect-ratio: 1;
    padding: 10px;
    margin: auto;
    box-sizing: border-box;
    display: grid;
    background: #fff;
    filter: blur(5px) contrast(10) hue-rotate(300deg);
    mix-blend-mode: darken;
  }

  .loader:before,
  .loader:after {
    content: '';
    grid-area: 1/1;
    width: 20px;
    height: 20px;
    background: #ffff00;
    animation: l7 2s infinite;
  }

  .loader:after {
    animation-delay: -1s;
  }

  @keyframes l7 {
    0% {
      transform: translate(0, 0);
    }

    25% {
      transform: translate(100%, 0);
    }

    50% {
      transform: translate(100%, 100%);
    }

    75% {
      transform: translate(0, 100%);
    }

    100% {
      transform: translate(0, 0);
    }
  }

  p {
    margin: 0;
    padding: var(--mi-padding-md) 0 0 var(--mi-padding-md);
  }
}
</style>
