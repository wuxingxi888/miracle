<script setup>
import { ref } from 'vue';
import MiSignature from '..';
import MiImage from '../../image';
import { useTranslate } from '../../../docs/site';
import { showToast } from '../../toast';

const t = useTranslate({
  'zh-CN': {
    penColor: '自定义颜色',
    lineWidth: '自定义线宽',
    backgroundColor: '自定义背景颜色',
  },
  'en-US': {
    penColor: 'Pen Color',
    lineWidth: 'Line Width',
    backgroundColor: 'Background Color',
  },
});

const demoUrl = ref('');

const onSubmit = (data) => {
  demoUrl.value = data.image;
};

const onClear = () => showToast('clear');
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <mi-signature @submit="onSubmit" @clear="onClear" />
  </demo-block>

  <mi-image v-if="demoUrl" :src="demoUrl" />

  <demo-block :title="t('penColor')">
    <mi-signature pen-color="#ff0000" @clear="onClear" @submit="onSubmit" />
  </demo-block>

  <demo-block :title="t('lineWidth')">
    <mi-signature :line-width="6" @clear="onClear" @submit="onSubmit" />
  </demo-block>

  <demo-block :title="t('backgroundColor')">
    <mi-signature background-color="#eee" @clear="onClear" @submit="onSubmit" />
  </demo-block>
</template>
