<script setup lang="ts">
import MiTabs from '../../tabs';
import MiTab from '../../tab';
import MiIndexBar from '..';
import MiIndexAnchor from '../../index-anchor';
import MiCell from '../../cell';
import { ref } from 'vue';
import { useTranslate } from '../../../docs/site';

const t = useTranslate({
    'zh-CN': {
        text: '文本',
        customIndexList: '自定义索引列表',
    },
    'en-US': {
        text: 'Text',
        customIndexList: 'Custom Index List',
    },
});

const activeTab = ref(0);
const indexList: string[] = [];
const customIndexList = [1, 2, 3, 4, 5, 6, 8, 9, 10];
const charCodeOfA = 'A'.charCodeAt(0);

for (let i = 0; i < 26; i++) {
    indexList.push(String.fromCharCode(charCodeOfA + i));
}
</script>

<template>
    <mi-tabs v-model:active="activeTab">
        <mi-tab :title="t('basicUsage')">
            <mi-index-bar>
                <div v-for="index in indexList" :key="index">
                    <mi-index-anchor :index="index" />
                    <mi-cell :title="t('text')" />
                    <mi-cell :title="t('text')" />
                    <mi-cell :title="t('text')" />
                </div>
            </mi-index-bar>
        </mi-tab>

        <mi-tab :title="t('customIndexList')">
            <mi-index-bar :index-list="customIndexList">
                <div v-for="index in customIndexList" :key="index">
                    <mi-index-anchor :index="index">
                        {{ t('title') + index }}
                    </mi-index-anchor>
                    <mi-cell :title="t('text')" />
                    <mi-cell :title="t('text')" />
                    <mi-cell :title="t('text')" />
                </div>
            </mi-index-bar>
        </mi-tab>
    </mi-tabs>
</template>
