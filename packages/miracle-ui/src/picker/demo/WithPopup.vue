<script setup lang="ts">
import { ref } from 'vue';
import MiPicker from '..';
import MiCell from '../../cell';
import MiPopup from '../../popup';
import { basicColumns } from './data';
import { useTranslate } from '../../../docs/site';
import type { PickerConfirmEventParams } from '../types';

const t = useTranslate({
    'zh-CN': {
        city: '城市',
        withPopup: '搭配弹出层使用',
        chooseCity: '选择城市',
        basicColumns: basicColumns['zh-CN'],
    },
    'en-US': {
        city: 'City',
        withPopup: 'With Popup',
        chooseCity: 'Choose City',
        basicColumns: basicColumns['en-US'],
    },
});

const showPicker = ref(false);
const fieldValue = ref('');

const onClickField = () => {
    showPicker.value = true;
};
const onCancel = () => {
    showPicker.value = false;
};
const onConfirm = ({ selectedOptions }: PickerConfirmEventParams) => {
    showPicker.value = false;
    fieldValue.value = selectedOptions[0]!.text as string;
};
</script>

<template>
    <demo-block card :title="t('withPopup')">
        <mi-cell
            v-model="fieldValue"
            is-link
            :title="t('city')"
            :value="t('chooseCity')"
            @click="onClickField"
        />
        <mi-popup v-model:show="showPicker" round position="bottom">
            <mi-picker
                :title="t('title')"
                :columns="t('basicColumns')"
                @cancel="onCancel"
                @confirm="onConfirm"
            />
        </mi-popup>
    </demo-block>
</template>
