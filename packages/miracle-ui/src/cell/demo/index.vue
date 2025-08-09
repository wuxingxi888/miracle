<script setup lang="ts">
import MiCellGroup from '../../cell-group';
import MiCell from '..';
import MiIcon from '../../icon';
import { useTranslate } from '../../../docs/site';

const t = useTranslate({
    'zh-CN': {
        cell: '单元格',
        group: '分组',
        router: '页面导航',
        urlRoute: 'URL 跳转',
        vueRoute: '路由跳转',
        useSlots: '使用插槽',
        showIcon: '展示图标',
        showArrow: '展示箭头',
        largeSize: '单元格大小',
        groupTitle: '分组标题',
        insetGrouped: '卡片风格',
        verticalCenter: '垂直居中',
    },
    'en-US': {
        cell: 'Cell title',
        group: 'Group',
        router: 'Router',
        urlRoute: 'URL',
        vueRoute: 'Vue Router',
        useSlots: 'Use Slots',
        showIcon: 'Left Icon',
        showArrow: 'Link',
        largeSize: 'Size',
        groupTitle: 'Group Title',
        insetGrouped: 'Inset Grouped',
        verticalCenter: 'Vertical center',
    },
});
</script>

<template>
    <demo-block :title="t('basicUsage')">
        <mi-cell-group>
            <mi-cell :title="t('cell')" :value="t('content')" />
            <mi-cell
                :title="t('cell')"
                :value="t('content')"
                :label="t('desc')"
            />
        </mi-cell-group>
    </demo-block>

    <demo-block :title="t('insetGrouped')">
        <mi-cell-group inset>
            <mi-cell :title="t('cell')" :value="t('content')" />
            <mi-cell
                :title="t('cell')"
                :value="t('content')"
                :label="t('desc')"
            />
        </mi-cell-group>
    </demo-block>

    <demo-block :title="t('largeSize')">
        <mi-cell :title="t('cell')" :value="t('content')" size="large" />
        <mi-cell
            :title="t('cell')"
            :value="t('content')"
            size="large"
            :label="t('desc')"
        />
    </demo-block>

    <demo-block :title="t('showIcon')">
        <mi-cell :title="t('cell')" :value="t('content')" icon="location-o" />
    </demo-block>

    <demo-block :title="t('showArrow')">
        <mi-cell :title="t('cell')" is-link />
        <mi-cell :title="t('cell')" is-link :value="t('content')" />
        <mi-cell
            :title="t('cell')"
            is-link
            arrow-direction="down"
            :value="t('content')"
        />
    </demo-block>

    <demo-block :title="t('router')">
        <mi-cell
            :title="t('urlRoute')"
            is-link
            url="https://wuxingxi.top/miracle/"
        />
        <mi-cell :title="t('vueRoute')" is-link to="index" />
    </demo-block>

    <demo-block :title="t('groupTitle')">
        <mi-cell-group :title="`${t('group')} 1`">
            <mi-cell :title="t('cell')" :value="t('content')" />
        </mi-cell-group>
        <mi-cell-group :title="`${t('group')} 2`">
            <mi-cell :title="t('cell')" :value="t('content')" />
        </mi-cell-group>
    </demo-block>

    <demo-block :title="t('useSlots')">
        <mi-cell :value="t('content')" is-link>
            <template #title>
                <span class="custom-title">{{ t('cell') }}</span>
                <mi-icon name="search" class="search-icon" />
            </template>
        </mi-cell>

        <mi-cell icon="shop-o" :title="t('cell')">
            <template #right-icon>
                <mi-icon name="search" class="search-icon" />
            </template>
        </mi-cell>
    </demo-block>

    <demo-block :title="t('verticalCenter')">
        <mi-cell
            center
            :title="t('cell')"
            :value="t('content')"
            :label="t('desc')"
        />
    </demo-block>
</template>

<style lang="less">
.demo-cell {
    .custom-title {
        margin-right: 4px;
        vertical-align: middle;
    }

    .search-icon {
        font-size: 16px;
        line-height: inherit;
    }
}
</style>
