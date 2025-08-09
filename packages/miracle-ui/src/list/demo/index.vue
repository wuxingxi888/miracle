<script setup lang="ts">
import MiTabs from '../../tabs';
import MiTab from '../../tab';
import MiList from '..';
import MiCell from '../../cell';
import MiPullRefresh from '../../pull-refresh';
import { ref } from 'vue';
import { useTranslate } from '../../../docs/site';

const t = useTranslate({
    'zh-CN': {
        errorInfo: '错误提示',
        errorText: '请求失败，点击重新加载',
        pullRefresh: '下拉刷新',
        finishedText: '没有更多了',
    },
    'en-US': {
        errorInfo: 'Error Info',
        errorText: 'Request failed. Click to reload',
        pullRefresh: 'PullRefresh',
        finishedText: 'Finished',
    },
});

const list = ref([
    {
        items: [] as string[],
        refreshing: false,
        loading: false,
        error: false,
        finished: false,
    },
    {
        items: [] as string[],
        refreshing: false,
        loading: false,
        error: false,
        finished: false,
    },
    {
        items: [] as string[],
        refreshing: false,
        loading: false,
        error: false,
        finished: false,
    },
]);

const onLoad = (index: number) => {
    const currentList = list.value[index];
    currentList.loading = true;

    setTimeout(() => {
        if (currentList.refreshing) {
            currentList.items = [];
            currentList.refreshing = false;
        }

        for (let i = 0; i < 10; i++) {
            const text = currentList.items.length + 1;
            currentList.items.push(text < 10 ? '0' + text : String(text));
        }

        currentList.loading = false;
        currentList.refreshing = false;

        // show error info in second demo
        if (
            index === 1 &&
            currentList.items.length === 10 &&
            !currentList.error
        ) {
            currentList.error = true;
        } else {
            currentList.error = false;
        }

        if (currentList.items.length >= 40) {
            currentList.finished = true;
        }
    }, 1000);
};

const onRefresh = (index: number) => {
    list.value[index].finished = false;
    onLoad(index);
};
</script>

<template>
    <mi-tabs>
        <mi-tab :title="t('basicUsage')">
            <mi-list
                v-model:loading="list[0].loading"
                :finished="list[0].finished"
                :finished-text="t('finishedText')"
                @load="onLoad(0)"
            >
                <mi-cell
                    v-for="item in list[0].items"
                    :key="item"
                    :title="item"
                />
            </mi-list>
        </mi-tab>

        <mi-tab :title="t('errorInfo')">
            <mi-list
                v-model:loading="list[1].loading"
                v-model:error="list[1].error"
                :finished="list[1].finished"
                :error-text="t('errorText')"
                @load="onLoad(1)"
            >
                <mi-cell
                    v-for="item in list[1].items"
                    :key="item"
                    :title="item"
                />
            </mi-list>
        </mi-tab>

        <mi-tab :title="t('pullRefresh')">
            <mi-pull-refresh
                v-model="list[2].refreshing"
                @refresh="onRefresh(2)"
            >
                <mi-list
                    v-model:loading="list[2].loading"
                    :finished="list[2].finished"
                    :finished-text="t('finishedText')"
                    @load="onLoad(2)"
                >
                    <mi-cell
                        v-for="item in list[2].items"
                        :key="item"
                        :title="item"
                    />
                </mi-list>
            </mi-pull-refresh>
        </mi-tab>
    </mi-tabs>
</template>

<style lang="less">
.demo-list {
    .mi-cell {
        text-align: center;
    }

    .page-desc {
        margin: 0;
        padding: 5px 0;
        color: var(--mi-gray-7);
        font-size: 14px;
        text-align: center;

        &--text {
            margin: 0;
        }

        &--option {
            margin: 12px;
        }
    }

    .mi-checkbox__label {
        color: var(--mi-gray-7);
    }
}
</style>
