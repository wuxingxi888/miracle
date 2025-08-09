<script setup lang="ts">
import MiSearch from '..';
import { ref } from 'vue';
import { useTranslate } from '../../../docs/site';
import { showToast } from '../../toast';

const t = useTranslate({
    'zh-CN': {
        label: '地址',
        disabled: '禁用搜索框',
        inputAlign: '搜索框内容对齐',
        background: '自定义背景色',
        placeholder: '请输入搜索关键词',
        customButton: '自定义按钮',
        listenToEvents: '事件监听',
    },
    'en-US': {
        label: 'Address',
        disabled: 'Disabled',
        inputAlign: 'Input Align',
        background: 'Custom Background Color',
        placeholder: 'Placeholder',
        customButton: 'Custom Action Button',
        listenToEvents: 'Listen to Events',
    },
});

const value1 = ref('');
const value2 = ref('');
const value3 = ref('');
const value4 = ref('');
const value5 = ref('');
const value6 = ref('');

const onSearch = (val: string) => showToast(val);
const onCancel = () => showToast(t('cancel'));
const onClickButton = () => showToast(value6.value);
</script>

<template>
    <demo-block :title="t('basicUsage')">
        <mi-search v-model="value1" :placeholder="t('placeholder')" />
    </demo-block>

    <demo-block :title="t('listenToEvents')">
        <form action="/">
            <mi-search
                v-model="value5"
                :placeholder="t('placeholder')"
                show-action
                @search="onSearch"
                @cancel="onCancel"
            />
        </form>
    </demo-block>

    <demo-block :title="t('inputAlign')">
        <mi-search
            v-model="value4"
            :placeholder="t('placeholder')"
            input-align="center"
        />
    </demo-block>

    <demo-block :title="t('disabled')">
        <mi-search v-model="value3" :placeholder="t('placeholder')" disabled />
    </demo-block>

    <demo-block :title="t('background')">
        <mi-search
            v-model="value2"
            :placeholder="t('placeholder')"
            shape="round"
            background="#4fc08d"
        />
    </demo-block>

    <demo-block :title="t('customButton')">
        <mi-search
            v-model="value6"
            show-action
            :label="t('label')"
            :placeholder="t('placeholder')"
            @search="onSearch"
        >
            <template #action>
                <div @click="onClickButton">{{ t('search') }}</div>
            </template>
        </mi-search>
    </demo-block>
</template>
