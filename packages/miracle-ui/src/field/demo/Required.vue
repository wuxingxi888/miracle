<script setup lang="ts">
import MiField from '..';
import MiCellGroup from '../../cell-group';
import MiForm from '../../form';
import { ref } from 'vue';
import { useTranslate } from '../../../docs/site';

const t = useTranslate({
    'zh-CN': {
        phone: '手机号',
        required: '必填星号',
        autoRequired: '自动展示星号',
        phonePlaceholder: '请输入手机号',
        usernamePlaceholder: '请输入用户名',
    },
    'en-US': {
        phone: 'Phone',
        required: 'Required',
        autoRequired: 'Auto Required',
        phonePlaceholder: 'Phone',
        usernamePlaceholder: 'Username',
    },
});

const phone = ref('123');
const username = ref('');
</script>

<template>
    <demo-block :title="t('required')">
        <mi-cell-group inset>
            <mi-field
                v-model="username"
                required
                :label="t('username')"
                :placeholder="t('usernamePlaceholder')"
            />
            <mi-field
                v-model="phone"
                required
                :label="t('phone')"
                :placeholder="t('phonePlaceholder')"
            />
        </mi-cell-group>
    </demo-block>

    <demo-block :title="t('autoRequired')">
        <mi-cell-group inset>
            <mi-form required="auto">
                <mi-field
                    v-model="username"
                    :rules="[{ required: true }]"
                    :label="t('username')"
                    :placeholder="t('usernamePlaceholder')"
                />
                <mi-field
                    v-model="phone"
                    :rules="[{ required: false }]"
                    :label="t('phone')"
                    :placeholder="t('phonePlaceholder')"
                />
            </mi-form>
        </mi-cell-group>
    </demo-block>
</template>
