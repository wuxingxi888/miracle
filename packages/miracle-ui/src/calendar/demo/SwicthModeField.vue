<script setup lang="ts">
import MiCell from '../../cell';
import MiPicker, { type PickerConfirmEventParams } from '../../picker';
import MiPopup from '../../popup';
import { ref } from 'vue';
import { useTranslate } from '../../../docs/site';
import type { CalendarSwitchMode } from '../types';

const t = useTranslate({
    'zh-CN': {
        switchMode: '选择切换模式',
    },
    'en-US': {
        switchMode: 'Select Switch Mode',
    },
});

const switchMode = defineModel<CalendarSwitchMode>({
    default: 'none',
});
const showPicker = ref(false);
const switchModeColumns = [
    { text: 'none', value: 'none' },
    { text: 'month', value: 'month' },
    { text: 'year-month', value: 'year-month' },
];

const onClickField = () => {
    showPicker.value = true;
};

const onPickerCancel = () => {
    showPicker.value = false;
};

const onPickerConfirm = ({ selectedOptions }: PickerConfirmEventParams) => {
    showPicker.value = false;
    switchMode.value = selectedOptions[0]!.value as CalendarSwitchMode;
};
</script>

<template>
    <demo-block card :title="t('switchMode')">
        <mi-cell
            is-link
            :title="t('switchMode')"
            :value="switchMode"
            @click="onClickField"
        />
        <mi-popup v-model:show="showPicker" round position="bottom">
            <mi-picker
                :columns="switchModeColumns"
                @cancel="onPickerCancel"
                @confirm="onPickerConfirm"
            />
        </mi-popup>
    </demo-block>
</template>
