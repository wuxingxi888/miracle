<script setup lang="ts">
import MiIcon from '../../icon';
import MiLoading from '..';
import { useTranslate } from '../../../docs/site';

const t = useTranslate({
    'zh-CN': {
        type: '加载类型',
        text: '加载文案',
        size: '自定义大小',
        color: '自定义颜色',
        vertical: '垂直排列',
        textColor: '自定义文本颜色',
        customIcon: '自定义图标',
    },
    'en-US': {
        type: 'Type',
        text: 'Text',
        size: 'Size',
        color: 'Color',
        vertical: 'Vertical',
        textColor: 'Text Color',
        customIcon: 'Custom Icon',
    },
});
</script>

<template>
    <demo-block :title="t('type')">
        <mi-loading />
        <mi-loading type="spinner" />
    </demo-block>

    <demo-block :title="t('color')">
        <mi-loading color="#1989fa" />
        <mi-loading type="spinner" color="#1989fa" />
    </demo-block>

    <demo-block :title="t('size')">
        <mi-loading size="24" />
        <mi-loading type="spinner" size="24" />
    </demo-block>

    <demo-block :title="t('text')">
        <mi-loading size="24px">
            {{ t('loading') }}
        </mi-loading>
    </demo-block>

    <demo-block :title="t('vertical')">
        <mi-loading size="24px" vertical>
            {{ t('loading') }}
        </mi-loading>
    </demo-block>

    <demo-block :title="t('textColor')">
        <mi-loading size="24px" vertical color="#0094ff">
            {{ t('loading') }}
        </mi-loading>
        <mi-loading size="24px" vertical text-color="#0094ff">
            {{ t('loading') }}
        </mi-loading>
    </demo-block>

    <demo-block :title="t('customIcon')">
        <mi-loading vertical>
            <template #icon>
                <mi-icon name="star-o" size="30" />
            </template>
            {{ t('loading') }}
        </mi-loading>
    </demo-block>
</template>

<style lang="less">
.demo-loading {
    .mi-loading {
        display: inline-block;
        margin: var(--mi-padding-sm);
        padding: var(--mi-padding-sm);
        border-radius: var(--mi-radius-lg);
        background-color: var(--mi-white);

        &--vertical {
            display: inline-flex;
        }
    }
}
</style>
