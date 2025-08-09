<script setup lang="ts">
import MiField from '../../field';
import MiCalendar from '../../calendar';
import { ref } from 'vue';
import { useTranslate } from '../../../docs/site';

const t = useTranslate({
    'zh-CN': {
        calendar: '日历',
        placeholder: '点击选择日期',
    },
    'en-US': {
        calendar: 'Calendar',
        placeholder: 'Select date',
    },
});

const result = ref('');
const showCalendar = ref(false);

const formatDate = (date: Date) => `${date.getMonth() + 1}/${date.getDate()}`;

const onConfirm = (date: Date) => {
    result.value = formatDate(date);
    showCalendar.value = false;
};
</script>

<template>
    <mi-field
        v-model="result"
        is-link
        readonly
        name="calendar"
        :label="t('calendar')"
        :placeholder="t('placeholder')"
        @click="showCalendar = true"
    />
    <mi-calendar
        v-model:show="showCalendar"
        round
        teleport="body"
        @confirm="onConfirm"
    />
</template>
