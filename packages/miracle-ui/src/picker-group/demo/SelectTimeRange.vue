<script setup lang="ts">
import { ref } from 'vue';
import { useTranslate } from '../../../docs/site';
import MiPickerGroup from '..';
import MiTimePicker from '../../time-picker';
import { showToast } from '../../toast';

const t = useTranslate({
    'zh-CN': {
        startTime: '开始时间',
        endTime: '结束时间',
        title: '预约时间',
    },
    'en-US': {
        startTime: 'Start Time',
        endTime: 'End Time',
        title: 'Title',
    },
});

const startTime = ref(['12', '00']);
const endTime = ref(['13', '00']);

const onConfirm = () => {
    showToast(`${startTime.value.join(':')} - ${endTime.value.join(':')}`);
};
const onCancel = () => {
    showToast('cancel');
};
</script>

<template>
    <mi-picker-group
        :title="t('title')"
        :tabs="[t('startTime'), t('endTime')]"
        @confirm="onConfirm"
        @cancel="onCancel"
    >
        <mi-time-picker v-model="startTime" />
        <mi-time-picker v-model="endTime" />
    </mi-picker-group>
</template>
