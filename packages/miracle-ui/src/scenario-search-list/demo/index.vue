<script setup lang="ts">
import MiNavBar from '../../nav-bar';
import MiSearch from '../../search';
import MiTabs from '../../tabs';
import MiTab from '../../tab';
import MiDropdownMenu from '../../dropdown-menu';
import MiDropdownItem from '../../dropdown-item';
import MiList from '../../list';
import MiCell from '../../cell';
import MiTag from '../../tag';
import MiEmpty from '../../empty';
import { ref } from 'vue';

const keyword = ref('');
const activeTab = ref(0);
const sort = ref('latest');
const channel = ref('all');

const sortOptions = [
    { text: '最新创建', value: 'latest' },
    { text: '优先级高', value: 'priority' },
    { text: '即将超时', value: 'timeout' },
];

const channelOptions = [
    { text: '全部渠道', value: 'all' },
    { text: '小程序', value: 'miniapp' },
    { text: 'H5 页面', value: 'h5' },
];

const records = [
    {
        title: '订单 #2026050301',
        value: '待处理',
        label: '杭州西湖区 / 10:30 创建',
        type: 'warning',
    },
    {
        title: '会员线索 #A1024',
        value: '跟进中',
        label: '来源 H5 页面 / 今日 11:12',
        type: 'primary',
    },
    {
        title: '售后工单 #R2308',
        value: '已完成',
        label: '小程序提交 / 昨日 18:20',
        type: 'success',
    },
];
</script>

<template>
    <div class="demo-scenario-search-list">
        <mi-nav-bar title="业务列表" left-arrow left-text="返回" />

        <mi-search
            v-model="keyword"
            shape="round"
            placeholder="搜索订单号、手机号、线索编号"
            show-action
        />

        <mi-tabs v-model:active="activeTab" sticky>
            <mi-tab title="全部" />
            <mi-tab title="待处理" />
            <mi-tab title="跟进中" />
            <mi-tab title="已完成" />
        </mi-tabs>

        <mi-dropdown-menu>
            <mi-dropdown-item v-model="sort" :options="sortOptions" />
            <mi-dropdown-item v-model="channel" :options="channelOptions" />
        </mi-dropdown-menu>

        <mi-list
            finished
            :immediate-check="false"
            finished-text="已展示全部记录"
        >
            <mi-cell
                v-for="record in records"
                :key="record.title"
                is-link
                :title="record.title"
                :label="record.label"
            >
                <template #value>
                    <mi-tag :type="record.type">{{ record.value }}</mi-tag>
                </template>
            </mi-cell>
        </mi-list>

        <mi-empty
            class="demo-scenario-search-list__empty"
            image="search"
            description="切换筛选条件后无匹配结果时展示空态"
        />
    </div>
</template>

<style lang="less">
.demo-scenario-search-list {
    min-height: 100vh;
    background: var(--mi-background);

    .mi-search {
        padding-bottom: 8px;
    }

    .mi-list {
        margin-top: 8px;
    }

    &__empty {
        margin: 12px 12px 0;
        padding: 20px 0;
        background: var(--mi-background-2);
        border-radius: 8px;
    }
}
</style>
