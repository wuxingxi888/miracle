<script setup lang="ts">
import MiCell from '../../cell';
import MiTag from '..';
import { ref } from 'vue';
import { useTranslate } from '../../../docs/site';

const t = useTranslate({
    'zh-CN': {
        type: '类型',
        mark: '标记样式',
        plain: '空心样式',
        round: '圆角样式',
        tagStyle: '样式风格',
        closeable: '可关闭标签',
        smallSize: '小号标签',
        largeSize: '大号标签',
        mediumSize: '中号标签',
        customSize: '标签大小',
        customColor: '自定义颜色',
        customBgColor: '背景颜色',
        customTextColor: '文字颜色',
        customPlainColor: '空心颜色',
    },
    'en-US': {
        mark: 'Mark style',
        plain: 'Plain style',
        round: 'Round style',
        tagStyle: 'Tag Style',
        closeable: 'Closeable',
        smallSize: 'Small Size',
        largeSize: 'Large Size',
        mediumSize: 'Medium Size',
        customColor: 'Custom Color',
        customSize: 'Custom Size',
        customBgColor: 'Background Color',
        customTextColor: 'Text Color',
        customPlainColor: 'Plain Color',
    },
});

const show = ref(true);
const close = () => {
    show.value = false;
};
</script>

<template>
    <demo-block card :title="t('basicUsage')">
        <mi-cell :title="`primary ${t('type')}`">
            <template #value>
                <mi-tag type="primary">{{ t('tag') }}</mi-tag>
            </template>
        </mi-cell>
        <mi-cell :title="`success ${t('type')}`">
            <template #value>
                <mi-tag type="success">{{ t('tag') }}</mi-tag>
            </template>
        </mi-cell>
        <mi-cell :title="`danger ${t('type')}`">
            <template #value>
                <mi-tag type="danger">{{ t('tag') }}</mi-tag>
            </template>
        </mi-cell>
        <mi-cell :title="`warning ${t('type')}`">
            <template #value>
                <mi-tag type="warning">{{ t('tag') }}</mi-tag>
            </template>
        </mi-cell>
    </demo-block>

    <demo-block card :title="t('tagStyle')">
        <mi-cell :title="t('plain')">
            <template #value>
                <mi-tag plain type="primary">{{ t('tag') }}</mi-tag>
            </template>
        </mi-cell>
        <mi-cell :title="t('round')">
            <template #value>
                <mi-tag round type="primary">{{ t('tag') }}</mi-tag>
            </template>
        </mi-cell>
        <mi-cell :title="t('mark')">
            <template #value>
                <mi-tag mark type="primary">{{ t('tag') }}</mi-tag>
            </template>
        </mi-cell>
        <mi-cell :title="t('closeable')">
            <template #value>
                <mi-tag
                    closeable
                    :show="show"
                    size="medium"
                    type="primary"
                    @close="close"
                >
                    {{ t('tag') }}
                </mi-tag>
            </template>
        </mi-cell>
    </demo-block>

    <demo-block card :title="t('customSize')">
        <mi-cell :title="t('smallSize')">
            <template #value>
                <mi-tag type="primary">{{ t('tag') }}</mi-tag>
            </template>
        </mi-cell>
        <mi-cell :title="t('mediumSize')">
            <template #value>
                <mi-tag type="primary" size="medium">{{ t('tag') }}</mi-tag>
            </template>
        </mi-cell>
        <mi-cell :title="t('largeSize')">
            <template #value>
                <mi-tag type="primary" size="large">{{ t('tag') }}</mi-tag>
            </template>
        </mi-cell>
    </demo-block>

    <demo-block card :title="t('customColor')">
        <mi-cell :title="t('customBgColor')">
            <template #value>
                <mi-tag color="#7232dd">{{ t('tag') }}</mi-tag>
            </template>
        </mi-cell>
        <mi-cell :title="t('customTextColor')">
            <template #value>
                <mi-tag color="#ffe1e1" text-color="#ad0000">{{
                    t('tag')
                }}</mi-tag>
            </template>
        </mi-cell>
        <mi-cell :title="t('customPlainColor')">
            <template #value>
                <mi-tag color="#7232dd" plain>{{ t('tag') }}</mi-tag>
            </template>
        </mi-cell>
    </demo-block>
</template>

<style lang="less">
.demo-tag {
    .mi-tag + .mi-tag {
        margin-left: var(--mi-padding-xs);
    }
}
</style>
