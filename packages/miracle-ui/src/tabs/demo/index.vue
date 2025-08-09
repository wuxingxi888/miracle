<script setup lang="ts">
import MiTabs from '..';
import MiTab from '../../tab';
import MiIcon from '../../icon';
import { ref } from 'vue';
import { useTranslate } from '../../../docs/site';
import { showToast } from '../../toast';
import Shrink from './Shrink.vue';

const t = useTranslate({
    'zh-CN': {
        tab: '标签 ',
        content: '内容',
        title2: '标签栏滚动',
        title3: '禁用标签',
        title4: '样式风格',
        title5: '点击事件',
        title6: '粘性布局',
        title7: '自定义标签',
        title8: '切换动画',
        title9: '滑动切换',
        title10: '滚动导航',
        matchByName: '通过名称匹配',
        beforeChange: '异步切换',
    },
    'en-US': {
        tab: 'Tab ',
        content: 'content of tab',
        title2: 'Swipe Tabs',
        title3: 'Disabled Tab',
        title4: 'Card Style',
        title5: 'Click Event',
        title6: 'Sticky',
        title7: 'Custom Tab',
        title8: 'Switch Animation',
        title9: 'Swipeable',
        title10: 'Scrollspy',
        matchByName: 'Match By Name',
        beforeChange: 'Before Change',
    },
});

const active1 = ref(0);
const active2 = ref(0);
const active3 = ref(0);
const active4 = ref(0);
const active5 = ref(0);
const active6 = ref(0);
const active7 = ref(0);
const active8 = ref(0);
const active9 = ref(0);
const active10 = ref(0);
const active11 = ref(0);
const activeName = ref('b');

const tabs = [1, 2, 3, 4];

const onClickTab = ({ title }: { title: string }) => {
    showToast(title);
};

const beforeChange = (name: number) => {
    if (name === 1) {
        return false;
    }
    return new Promise<boolean>((resolve) => {
        setTimeout(() => resolve(name !== 3), 1000);
    });
};
</script>

<template>
    <demo-block :title="t('basicUsage')">
        <mi-tabs v-model:active="active1">
            <mi-tab
                :title="t('tab') + index"
                v-for="index in tabs"
                :key="index"
            >
                {{ t('content') }} {{ index }}
            </mi-tab>
        </mi-tabs>
    </demo-block>

    <demo-block :title="t('matchByName')">
        <mi-tabs v-model:active="activeName">
            <mi-tab name="a" :title="t('tab') + 1">{{ t('content') }} 1</mi-tab>
            <mi-tab name="b" :title="t('tab') + 2">{{ t('content') }} 2</mi-tab>
            <mi-tab name="c" :title="t('tab') + 3">{{ t('content') }} 3</mi-tab>
        </mi-tabs>
    </demo-block>

    <demo-block :title="t('title2')">
        <mi-tabs v-model:active="active2">
            <mi-tab v-for="index in 8" :title="t('tab') + index" :key="index">
                {{ t('content') }} {{ index }}
            </mi-tab>
        </mi-tabs>
    </demo-block>

    <demo-block :title="t('title3')">
        <mi-tabs v-model:active="active3">
            <mi-tab
                v-for="index in 3"
                :title="t('tab') + index"
                :disabled="index === 2"
                :key="index"
            >
                {{ t('content') }} {{ index }}
            </mi-tab>
        </mi-tabs>
    </demo-block>

    <demo-block :title="t('title4')">
        <mi-tabs v-model:active="active4" type="card">
            <mi-tab v-for="index in 3" :title="t('tab') + index" :key="index">
                {{ t('content') }} {{ index }}
            </mi-tab>
        </mi-tabs>
    </demo-block>

    <demo-block :title="t('title5')">
        <mi-tabs v-model:active="active5" @click-tab="onClickTab">
            <mi-tab v-for="index in 2" :title="t('tab') + index" :key="index">
                {{ t('content') }} {{ index }}
            </mi-tab>
        </mi-tabs>
    </demo-block>

    <demo-block :title="t('title6')">
        <mi-tabs v-model:active="active6" sticky>
            <mi-tab
                :title="t('tab') + index"
                v-for="index in tabs"
                :key="index"
            >
                {{ t('content') }} {{ index }}
            </mi-tab>
        </mi-tabs>
    </demo-block>

    <shrink />

    <demo-block :title="t('title7')">
        <mi-tabs v-model:active="active7">
            <mi-tab v-for="index in 2" :key="index">
                <template #title>
                    <mi-icon name="more-o" />
                    {{ t('tab') }}
                </template>
                {{ t('content') }} {{ index }}
            </mi-tab>
        </mi-tabs>
    </demo-block>

    <demo-block :title="t('title8')">
        <mi-tabs v-model:active="active8" animated>
            <mi-tab
                :title="t('tab') + index"
                v-for="index in tabs"
                :key="index"
            >
                {{ t('content') }} {{ index }}
            </mi-tab>
        </mi-tabs>
    </demo-block>

    <demo-block :title="t('title9')">
        <mi-tabs v-model:active="active9" swipeable>
            <mi-tab
                :title="t('tab') + index"
                v-for="index in tabs"
                :key="index"
            >
                {{ t('content') }} {{ index }}
            </mi-tab>
        </mi-tabs>
    </demo-block>

    <demo-block :title="t('title10')">
        <mi-tabs v-model:active="active10" scrollspy sticky>
            <mi-tab :title="t('tab') + index" v-for="index in 8" :key="index">
                {{ t('content') }} {{ index }}
            </mi-tab>
        </mi-tabs>
    </demo-block>

    <demo-block :title="t('beforeChange')">
        <mi-tabs v-model:active="active11" :before-change="beforeChange">
            <mi-tab :title="t('tab') + index" v-for="index in 4" :key="index">
                {{ t('content') }} {{ index }}
            </mi-tab>
        </mi-tabs>
    </demo-block>
</template>

<style lang="less">
.demo-tabs {
    margin-bottom: 80vh;

    .mi-tab .mi-icon {
        margin-right: 5px;
        vertical-align: -2px;
    }

    .mi-tab__panel {
        padding: 24px 20px;
        background: var(--mi-background-2);
    }

    .mi-tabs--card .mi-tab__panel {
        background: transparent;
    }
}
</style>
