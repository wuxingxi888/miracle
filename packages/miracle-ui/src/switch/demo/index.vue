<script setup lang="ts">
import MiSwitch from '..';
import MiCell from '../../cell';
import MiIcon from '../../icon';
import { ref } from 'vue';
import { useTranslate } from '../../../docs/site';
import { showConfirmDialog } from '../../dialog';

const t = useTranslate({
    'zh-CN': {
        title: '标题',
        confirm: '提醒',
        message: '是否切换开关？',
        withCell: '搭配单元格使用',
        customSize: '自定义大小',
        customNode: '自定义按钮',
        customColor: '自定义颜色',
        asyncControl: '异步控制',
    },
    'en-US': {
        title: 'Title',
        confirm: 'Confirm',
        message: 'Are you sure to toggle switch?',
        withCell: 'Inside a Cell',
        customSize: 'Custom Size',
        customNode: 'Custom Node',
        customColor: 'Custom Color',
        asyncControl: 'Async Control',
    },
});

const checked = ref(true);
const checked2 = ref(true);
const checked3 = ref(true);
const checked4 = ref(true);
const checked5 = ref(true);

const onUpdateValue = (checked: boolean) => {
    showConfirmDialog({
        title: t('title'),
        message: t('message'),
    }).then(() => {
        checked4.value = checked;
    });
};
</script>

<template>
    <demo-block :title="t('basicUsage')">
        <mi-switch v-model="checked" />
    </demo-block>

    <demo-block :title="t('disabled')">
        <mi-switch v-model="checked" disabled />
    </demo-block>

    <demo-block :title="t('loadingStatus')">
        <mi-switch v-model="checked" loading />
    </demo-block>

    <demo-block :title="t('customSize')">
        <mi-switch v-model="checked2" size="22px" />
    </demo-block>

    <demo-block :title="t('customColor')">
        <mi-switch
            v-model="checked3"
            active-color="#ee0a24"
            inactive-color="#dcdee0"
        />
    </demo-block>

    <demo-block :title="t('customNode')">
        <mi-switch v-model="checked3">
            <template #node>
                <div class="icon-wrapper">
                    <mi-icon :name="checked3 ? 'success' : 'cross'" />
                </div>
            </template>
        </mi-switch>
    </demo-block>

    <demo-block :title="t('asyncControl')">
        <mi-switch
            :model-value="checked4"
            @update:model-value="onUpdateValue"
        />
    </demo-block>

    <demo-block :title="t('withCell')">
        <mi-cell center :title="t('title')">
            <template #right-icon>
                <mi-switch v-model="checked5" />
            </template>
        </mi-cell>
    </demo-block>
</template>

<style lang="less">
.demo-switch {
    .mi-switch {
        margin-left: var(--mi-padding-md);
    }

    .icon-wrapper {
        display: flex;
        width: 100%;
        justify-content: center;
        font-size: 18px;

        .mi-icon {
            line-height: 32px;
        }

        .mi-icon-success {
            color: var(--mi-blue);
        }

        .mi-icon-cross {
            color: var(--mi-gray-5);
        }
    }
}
</style>
