<script setup lang="ts">
import MiRate from '..';
import { ref } from 'vue';
import { useTranslate } from '../../../docs/site';
import { showToast } from '../../toast';

const t = useTranslate({
  'zh-CN': {
    halfStar: '半星',
    disabled: '禁用状态',
    customIcon: '自定义图标',
    customStyle: '自定义样式',
    customCount: '自定义数量',
    clearable: '可清空',
    readonly: '只读状态',
    readonlyHalfStar: '只读状态小数显示',
    changeEvent: '监听 change 事件',
    toastContent: (value: number) => `当前值：${value}`,
  },
  'en-US': {
    halfStar: 'Half Star',
    disabled: 'Disabled',
    customIcon: 'Custom Icon',
    customStyle: 'Custom Style',
    customCount: 'Custom Count',
    clearable: 'Clearable',
    readonly: 'Readonly',
    readonlyHalfStar: 'Readonly Half Star',
    changeEvent: 'Change Event',
    toastContent: (value: number) => `current value：${value}`,
  },
});

const value1 = ref(3);
const value2 = ref(3);
const value3 = ref(3);
const value4 = ref(2.5);
const value5 = ref(4);
const value6 = ref(3);
const value7 = ref(3.3);
const value8 = ref(2);
const value9 = ref(3);

const onChange = (value: number) => showToast(t('toastContent', value));
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <mi-rate v-model="value1" />
  </demo-block>

  <demo-block :title="t('customIcon')">
    <mi-rate v-model="value2" icon="like" void-icon="like-o" />
  </demo-block>

  <demo-block :title="t('customStyle')">
    <mi-rate
      v-model="value3"
      :size="25"
      color="#ffd21e"
      void-icon="star"
      void-color="#eee"
    />
  </demo-block>

  <demo-block :title="t('halfStar')">
    <mi-rate v-model="value4" allow-half />
  </demo-block>

  <demo-block :title="t('customCount')">
    <mi-rate v-model="value5" :count="6" />
  </demo-block>

  <demo-block :title="t('clearable')">
    <mi-rate v-model="value9" clearable />
  </demo-block>

  <demo-block :title="t('disabled')">
    <mi-rate v-model="value6" disabled />
  </demo-block>

  <demo-block :title="t('readonly')">
    <mi-rate v-model="value6" readonly />
  </demo-block>

  <demo-block :title="t('readonlyHalfStar')">
    <mi-rate v-model="value7" readonly allow-half />
  </demo-block>

  <demo-block :title="t('changeEvent')">
    <mi-rate v-model="value8" @change="onChange" />
  </demo-block>
</template>

<style lang="less">
.demo-rate {
  padding-bottom: 20px;
  background-color: var(--mi-background-2);

  .mi-rate {
    margin-left: var(--mi-padding-md);
  }
}
</style>
