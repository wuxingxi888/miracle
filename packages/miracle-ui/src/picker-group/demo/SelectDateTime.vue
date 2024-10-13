<script setup lang="ts">
import { ref } from 'vue';
import { useTranslate } from '../../../docs/site';
import MiPickerGroup from '..';
import MiTimePicker from '../../time-picker';
import MiDatePicker from '../../date-picker';
import { showToast } from '../../toast';

const t = useTranslate({
  'zh-CN': {
    date: '选择日期',
    time: '选择时间',
    title: '预约日期',
  },
  'en-US': {
    date: 'Date',
    time: 'Time',
    title: 'Title',
  },
});

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
</script>

<template>
  <mi-picker-group
    :title="t('title')"
    :tabs="[t('date'), t('time')]"
    @confirm="onConfirm"
    @cancel="onCancel"
  >
    <!-- Date -->
    <mi-date-picker
      v-model="currentDate"
      :min-date="minDate"
      :max-date="maxDate"
    />
    <!-- Time -->
    <mi-time-picker v-model="currentTime" />
  </mi-picker-group>
</template>
