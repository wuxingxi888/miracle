<script setup>
import MiCalendar from '..';
import { useTranslate } from '../../../docs/site';

const { switchMode } = defineProps({
  switchMode: String,
});
const minDate = new Date(2012, 0, 10);
const maxDate = new Date(2013, 2, 20);

const t = useTranslate({
  'zh-CN': {
    calendar: '日历',
    tiledDisplay: '平铺展示',
  },
  'en-US': {
    calendar: 'Calendar',
    tiledDisplay: 'Tiled display',
  },
});
</script>

<template>
  <demo-block card :title="t('tiledDisplay')">
    <mi-calendar
      :title="t('calendar')"
      :poppable="false"
      :show-confirm="false"
      :min-date="minDate"
      :max-date="maxDate"
      :default-date="minDate"
      :switch-mode="switchMode"
      :style="{ height: '500px' }"
    />
  </demo-block>
</template>
