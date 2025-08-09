<script setup lang="ts">
import MiGrid from '../../grid';
import MiGridItem from '../../grid-item';
import MiSidebar from '..';
import MiSidebarItem from '../../sidebar-item';
import { ref } from 'vue';
import { useTranslate } from '../../../docs/site';
import { showToast } from '../../toast';

const t = useTranslate({
    'zh-CN': {
        title: '标签名',
        disabled: '禁用选项',
        showBadge: '徽标提示',
        changeEvent: '监听切换事件',
    },
    'en-US': {
        disabled: 'Disabled',
        showBadge: 'Show Badge',
        changeEvent: 'Change Event',
    },
});

const active1 = ref(0);
const active2 = ref(0);
const active3 = ref(0);
const active4 = ref(0);

const onChange = (index: number) => showToast(`${t('title')} ${index + 1}`);
</script>

<template>
    <mi-grid :column-num="2" :border="false">
        <mi-grid-item>
            <h3 class="demo-sidebar-title">{{ t('basicUsage') }}</h3>
            <mi-sidebar v-model="active1">
                <mi-sidebar-item :title="t('title')" />
                <mi-sidebar-item :title="t('title')" />
                <mi-sidebar-item :title="t('title')" />
            </mi-sidebar>
        </mi-grid-item>

        <mi-grid-item>
            <h3 class="demo-sidebar-title">{{ t('showBadge') }}</h3>
            <mi-sidebar v-model="active2">
                <mi-sidebar-item :title="t('title')" dot />
                <mi-sidebar-item :title="t('title')" badge="5" />
                <mi-sidebar-item :title="t('title')" />
            </mi-sidebar>
        </mi-grid-item>

        <mi-grid-item>
            <h3 class="demo-sidebar-title">{{ t('disabled') }}</h3>
            <mi-sidebar v-model="active3">
                <mi-sidebar-item :title="t('title')" />
                <mi-sidebar-item :title="t('title')" disabled />
                <mi-sidebar-item :title="t('title')" />
            </mi-sidebar>
        </mi-grid-item>

        <mi-grid-item>
            <h3 class="demo-sidebar-title">{{ t('changeEvent') }}</h3>
            <mi-sidebar v-model="active4" @change="onChange">
                <mi-sidebar-item :title="`${t('title')} 1`" />
                <mi-sidebar-item :title="`${t('title')} 2`" />
                <mi-sidebar-item :title="`${t('title')} 3`" />
            </mi-sidebar>
        </mi-grid-item>
    </mi-grid>
</template>

<style lang="less">
.demo-sidebar {
    background-color: var(--mi-background-2);

    .mi-sidebar {
        margin-left: var(--mi-padding-md);
    }

    &-title {
        margin-bottom: 16px;
        color: var(--mi-text-color-2);
        font-weight: normal;
        font-size: 14px;
    }
}
</style>
