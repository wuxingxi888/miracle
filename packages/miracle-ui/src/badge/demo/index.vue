<script setup lang="ts">
import MiBadge from '..';
import MiIcon from '../../icon';
import { useTranslate } from '../../../docs/site';

const t = useTranslate({
    'zh-CN': {
        max: '最大值',
        standalone: '独立展示',
        customColor: '自定义颜色',
        customContent: '自定义徽标内容',
        customPosition: '自定义徽标位置',
    },
    'en-US': {
        max: 'Max',
        standalone: 'Standalone',
        customColor: 'Custom Color',
        customContent: 'Custom Content',
        customPosition: 'Custom Position',
    },
});
</script>

<template>
    <demo-block :title="t('basicUsage')">
        <mi-badge content="5">
            <div class="child" />
        </mi-badge>
        <mi-badge content="10">
            <div class="child" />
        </mi-badge>
        <mi-badge content="Hot">
            <div class="child" />
        </mi-badge>
        <mi-badge dot>
            <div class="child" />
        </mi-badge>
    </demo-block>

    <demo-block :title="t('max')">
        <mi-badge content="20" max="9">
            <div class="child" />
        </mi-badge>
        <mi-badge content="50" max="20">
            <div class="child" />
        </mi-badge>
        <mi-badge content="200" max="99">
            <div class="child" />
        </mi-badge>
    </demo-block>

    <demo-block :title="t('customColor')">
        <mi-badge content="5" color="#1989fa">
            <div class="child" />
        </mi-badge>
        <mi-badge content="10" color="#1989fa">
            <div class="child" />
        </mi-badge>
        <mi-badge dot color="#1989fa">
            <div class="child" />
        </mi-badge>
    </demo-block>

    <demo-block :title="t('customContent')">
        <mi-badge>
            <div class="child" />
            <template #content>
                <mi-icon name="success" class="badge-icon" />
            </template>
        </mi-badge>
        <mi-badge>
            <div class="child" />
            <template #content>
                <mi-icon name="cross" class="badge-icon" />
            </template>
        </mi-badge>
        <mi-badge>
            <div class="child" />
            <template #content>
                <mi-icon name="down" class="badge-icon" />
            </template>
        </mi-badge>
    </demo-block>

    <demo-block :title="t('customPosition')">
        <mi-badge content="10" position="top-left">
            <div class="child" />
        </mi-badge>
        <mi-badge content="10" position="bottom-left">
            <div class="child" />
        </mi-badge>
        <mi-badge content="10" position="bottom-right">
            <div class="child" />
        </mi-badge>
    </demo-block>

    <demo-block :title="t('standalone')">
        <mi-badge content="20" style="margin-left: 16px" />
        <mi-badge content="200" max="99" style="margin-left: 16px" />
    </demo-block>
</template>

<style lang="less">
.demo-badge {
    .mi-badge__wrapper {
        margin-left: var(--mi-padding-md);
    }

    .child {
        width: 40px;
        height: 40px;
        background: var(--mi-white);
        border-radius: 4px;
    }

    .badge-icon {
        display: block;
        margin-left: 0;
        font-size: 10px;
        line-height: 16px;
    }
}
</style>
