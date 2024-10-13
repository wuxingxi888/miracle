<script setup lang="ts">
import { ref } from 'vue';
import { useTranslate } from '../../../docs/site';
import MiPickerGroup from '..';
import MiButton from '../../button';
import MiTimePicker from '../../time-picker';
import MiDatePicker from '../../date-picker';
import { showToast } from '../../toast';

const t = useTranslate({
  'zh-CN': {
    date: '选择日期',
    time: '选择时间',
    title: '预约日期',
    btnText: '点击切换 tab，当前为 ',
  },
  'en-US': {
    date: 'Date',
    time: 'Time',
    title: 'Title',
    btnText: 'toggle tab, current ',
  },
});
const activeTab = ref(0);
const currentTime = ref(['12', '00']);
const currentDate = ref(['2022', '06', '01']);
const minDate = new Date(2020, 0, 1);
const maxDate = new Date(2025, 5, 1);

const onConfirm = () => {
  showToast(`${currentDate.value.join('/')} ${currentTime.value.join(':')}`);
};
const onCancel = () => {
  showToast('cancel');
};

const setActiveTab = () => {
  activeTab.value = activeTab.value ? 0 : 1;
};
</script>

<template>
  <mi-button style="margin: 10px 0" type="primary" @click="setActiveTab">
    {{ t('btnText') + activeTab }}
  </mi-button>
  <mi-picker-group
    v-model:active-tab="activeTab"
    :title="t('title')"
    :tabs="[t('date'), t('time')]"
    @confirm="onConfirm"
    @cancel="onCancel"
  >
    <mi-date-picker
      v-model="currentDate"
      :min-date="minDate"
      :max-date="maxDate"
    />
    <mi-time-picker v-model="currentTime" />
  </mi-picker-group>
</template>
