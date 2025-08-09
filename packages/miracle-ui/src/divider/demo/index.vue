<script setup lang="ts">
import MiDivider from '..';
import { useTranslate } from '../../../docs/site';

const t = useTranslate({
    'zh-CN': {
        text: '文本',
        dashed: '虚线',
        withText: '展示文本',
        contentPosition: '内容位置',
        customStyle: '自定义样式',
        vertical: '垂直',
    },
    'en-US': {
        text: 'Text',
        dashed: 'Dashed',
        withText: 'With Text',
        contentPosition: 'Content Position',
        customStyle: 'Custom Style',
        vertical: 'Vertical',
    },
});
</script>

<template>
    <demo-block :title="t('basicUsage')">
        <mi-divider />
    </demo-block>

    <demo-block :title="t('withText')">
        <mi-divider>
            {{ t('text') }}
        </mi-divider>
    </demo-block>

    <demo-block :title="t('contentPosition')">
        <mi-divider content-position="left">
            {{ t('text') }}
        </mi-divider>

        <mi-divider content-position="right">
            {{ t('text') }}
        </mi-divider>
    </demo-block>

    <demo-block :title="t('dashed')">
        <mi-divider dashed :hairline="false">
            {{ t('text') }}
        </mi-divider>
    </demo-block>

    <demo-block :title="t('customStyle')">
        <mi-divider
            :style="{
                borderColor: '#1989fa',
                color: '#1989fa',
                padding: '0 16px',
            }"
        >
            {{ t('text') }}
        </mi-divider>
    </demo-block>

    <demo-block :title="t('vertical')">
        <div class="content">
            <mi-divider vertical />
            {{ t('text') }}
            <mi-divider vertical dashed />
            {{ t('text') }}
            <mi-divider vertical :hairline="false" />
            {{ t('text') }}
            <mi-divider vertical :style="{ borderColor: '#1989fa' }" />
        </div>
    </demo-block>
</template>

<style lang="less">
.demo-divider {
    background-color: var(--mi-background-2);

    .mi-doc-demo-block__title {
        padding-top: var(--mi-padding-md);
    }

    .content {
        padding: 0 var(--mi-padding-md);
        color: var(--mi-text-color-2);
        font-size: var(--mi-font-size-md);
    }
}
</style>
