<script setup lang="ts">
import MiSticky from '..';
import MiButton from '../../button';
import { ref } from 'vue';
import { useTranslate } from '../../../docs/site';

const t = useTranslate({
    'zh-CN': {
        offsetTop: '吸顶距离',
        offsetBottom: '吸底距离',
        setContainer: '指定容器',
    },
    'en-US': {
        offsetTop: 'Offset Top',
        offsetBottom: 'Offset Bottom',
        setContainer: 'Set Container',
    },
});

const container = ref<Element>();
</script>

<template>
    <demo-block :title="t('basicUsage')">
        <mi-sticky>
            <mi-button type="primary" style="margin-left: 15px">
                {{ t('basicUsage') }}
            </mi-button>
        </mi-sticky>
    </demo-block>

    <demo-block :title="t('offsetTop')">
        <mi-sticky :offset-top="50">
            <mi-button type="primary" style="margin-left: 115px">
                {{ t('offsetTop') }}
            </mi-button>
        </mi-sticky>
    </demo-block>

    <demo-block :title="t('setContainer')">
        <div
            ref="container"
            style="height: 150px; background-color: var(--mi-background-2)"
        >
            <mi-sticky :container="container">
                <mi-button type="warning" style="margin-left: 215px">
                    {{ t('setContainer') }}
                </mi-button>
            </mi-sticky>
        </div>
    </demo-block>

    <demo-block :title="t('offsetBottom')">
        <div style="height: 200px"></div>
        <mi-sticky :offset-bottom="50" position="bottom">
            <mi-button type="primary" style="margin-left: 15px">
                {{ t('offsetBottom') }}
            </mi-button>
        </mi-sticky>
    </demo-block>
</template>

<style lang="less">
.demo-sticky {
    height: 200vh;

    .mi-button {
        margin-left: var(--mi-padding-md);
    }
}
</style>
