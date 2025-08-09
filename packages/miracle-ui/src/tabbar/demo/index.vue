<script setup lang="ts">
import MiTabbar from '..';
import MiTabbarItem from '../../tabbar-item';
import { ref } from 'vue';
import { cdnURL, useTranslate } from '../../../docs/site';
import { showToast } from '../../toast';

const t = useTranslate({
    'zh-CN': {
        badge: '徽标提示',
        customIcon: '自定义图标',
        customColor: '自定义颜色',
        matchByName: '通过名称匹配',
        switchEvent: '监听切换事件',
    },
    'en-US': {
        badge: 'Show Badge',
        customIcon: 'Custom Icon',
        customColor: 'Custom Color',
        matchByName: 'Match by name',
        switchEvent: 'Change Event',
    },
});

const active = ref(0);
const active2 = ref(0);
const active3 = ref(0);
const active4 = ref(0);
const active5 = ref(0);
const activeName = ref('home');

const icon = {
    active: cdnURL('home-active.png'),
    inactive: cdnURL('home-inactive.png'),
};

const onChange = (index: number) => {
    showToast(`${t('tab')} ${index + 1}`);
};
</script>

<template>
    <demo-block :title="t('basicUsage')">
        <mi-tabbar v-model="active">
            <mi-tabbar-item icon="home-o">{{ t('tab') }}</mi-tabbar-item>
            <mi-tabbar-item icon="search">{{ t('tab') }}</mi-tabbar-item>
            <mi-tabbar-item icon="friends-o">{{ t('tab') }}</mi-tabbar-item>
            <mi-tabbar-item icon="setting-o">{{ t('tab') }}</mi-tabbar-item>
        </mi-tabbar>
    </demo-block>

    <demo-block :title="t('matchByName')">
        <mi-tabbar v-model="activeName">
            <mi-tabbar-item name="home" icon="home-o">
                {{ t('tab') }}
            </mi-tabbar-item>
            <mi-tabbar-item name="search" icon="search">
                {{ t('tab') }}
            </mi-tabbar-item>
            <mi-tabbar-item name="friends" icon="friends-o">
                {{ t('tab') }}
            </mi-tabbar-item>
            <mi-tabbar-item name="setting" icon="setting-o">
                {{ t('tab') }}
            </mi-tabbar-item>
        </mi-tabbar>
    </demo-block>

    <demo-block :title="t('badge')">
        <mi-tabbar v-model="active2">
            <mi-tabbar-item icon="home-o">{{ t('tab') }}</mi-tabbar-item>
            <mi-tabbar-item icon="search" dot>{{ t('tab') }}</mi-tabbar-item>
            <mi-tabbar-item icon="friends-o" badge="5">
                {{ t('tab') }}
            </mi-tabbar-item>
            <mi-tabbar-item icon="setting-o" badge="20">
                {{ t('tab') }}
            </mi-tabbar-item>
        </mi-tabbar>
    </demo-block>

    <demo-block :title="t('customIcon')">
        <mi-tabbar v-model="active3">
            <mi-tabbar-item badge="3">
                <span>{{ t('custom') }}</span>
                <template #icon="props">
                    <img :src="props.active ? icon.active : icon.inactive" />
                </template>
            </mi-tabbar-item>
            <mi-tabbar-item icon="search">{{ t('tab') }}</mi-tabbar-item>
            <mi-tabbar-item icon="setting-o">{{ t('tab') }}</mi-tabbar-item>
        </mi-tabbar>
    </demo-block>

    <demo-block :title="t('customColor')">
        <mi-tabbar v-model="active4" active-color="#ee0a24">
            <mi-tabbar-item icon="home-o">{{ t('tab') }}</mi-tabbar-item>
            <mi-tabbar-item icon="search">{{ t('tab') }}</mi-tabbar-item>
            <mi-tabbar-item icon="friends-o">{{ t('tab') }}</mi-tabbar-item>
            <mi-tabbar-item icon="setting-o">{{ t('tab') }}</mi-tabbar-item>
        </mi-tabbar>
    </demo-block>

    <demo-block :title="t('switchEvent')">
        <mi-tabbar v-model="active5" @change="onChange">
            <mi-tabbar-item icon="home-o">{{ `${t('tab')} 1` }}</mi-tabbar-item>
            <mi-tabbar-item icon="search">{{ `${t('tab')} 2` }}</mi-tabbar-item>
            <mi-tabbar-item icon="friends-o">{{
                `${t('tab')} 3`
            }}</mi-tabbar-item>
            <mi-tabbar-item icon="setting-o">{{
                `${t('tab')} 4`
            }}</mi-tabbar-item>
        </mi-tabbar>
    </demo-block>
</template>

<style lang="less">
.demo-tabbar {
    .mi-tabbar {
        position: relative;
        padding-bottom: 0;
    }
}
</style>
