<script setup lang="ts">
import MiDropdownMenu from '..';
import MiDropdownItem from '../../dropdown-item';
import MiCell from '../../cell';
import MiSwitch from '../../switch';
import MiButton from '../../button';
import { computed, ref } from 'vue';
import { useTranslate } from '../../../docs/site';
import type { DropdownItemInstance } from '../../dropdown-item';

const t = useTranslate({
    'zh-CN': {
        disableMenu: '禁用菜单',
        switchTitle1: '包邮',
        switchTitle2: '团购',
        itemTitle: '筛选',
        expandDirection: '向上展开',
        customContent: '自定义菜单内容',
        customActiveColor: '自定义选中态颜色',
        swipeItems: '横向滚动',
        option1: [
            { text: '全部商品', value: 0 },
            { text: '新款商品', value: 1 },
            { text: '活动商品', value: 2 },
        ],
        option2: [
            { text: '默认排序', value: 'a' },
            { text: '好评排序', value: 'b' },
            { text: '销量排序', value: 'c' },
        ],
    },
    'en-US': {
        disableMenu: 'Disable Menu',
        switchTitle1: 'Title',
        switchTitle2: 'Title',
        itemTitle: 'Title',
        expandDirection: 'Expand Direction',
        customContent: 'Custom Content',
        customActiveColor: 'Custom Active Color',
        swipeItems: 'Swipe Items',
        option1: [
            { text: 'Option1', value: 0 },
            { text: 'Option2', value: 1 },
            { text: 'Option3', value: 2 },
        ],
        option2: [
            { text: 'Option A', value: 'a' },
            { text: 'Option B', value: 'b' },
            { text: 'Option C', value: 'c' },
        ],
    },
});

const item = ref<DropdownItemInstance>();

const switch1 = ref(true);
const switch2 = ref(false);
const value1 = ref(0);
const value2 = ref('a');

const option1 = computed(() => t('option1'));
const option2 = computed(() => t('option2'));

const onConfirm = () => {
    item.value?.toggle();
};
</script>

<template>
    <demo-block :title="t('basicUsage')">
        <mi-dropdown-menu>
            <mi-dropdown-item v-model="value1" :options="option1" />
            <mi-dropdown-item v-model="value2" :options="option2" />
        </mi-dropdown-menu>
    </demo-block>

    <demo-block :title="t('customContent')">
        <mi-dropdown-menu>
            <mi-dropdown-item v-model="value1" :options="option1" />
            <mi-dropdown-item :title="t('itemTitle')" ref="item">
                <mi-cell center :title="t('switchTitle1')">
                    <template #right-icon>
                        <mi-switch v-model="switch1" />
                    </template>
                </mi-cell>
                <mi-cell center :title="t('switchTitle2')">
                    <template #right-icon>
                        <mi-switch v-model="switch2" />
                    </template>
                </mi-cell>
                <div style="padding: 5px 16px">
                    <mi-button
                        type="primary"
                        block
                        round
                        style="height: 40px"
                        @click="onConfirm"
                    >
                        {{ t('confirm') }}
                    </mi-button>
                </div>
            </mi-dropdown-item>
        </mi-dropdown-menu>
    </demo-block>

    <demo-block :title="t('customActiveColor')">
        <mi-dropdown-menu active-color="#ee0a24">
            <mi-dropdown-item v-model="value1" :options="option1" />
            <mi-dropdown-item v-model="value2" :options="option2" />
        </mi-dropdown-menu>
    </demo-block>

    <demo-block :title="t('swipeItems')">
        <mi-dropdown-menu swipe-threshold="4">
            <mi-dropdown-item v-model="value1" :options="option1" />
            <mi-dropdown-item v-model="value2" :options="option2" />
            <mi-dropdown-item v-model="value2" :options="option2" />
            <mi-dropdown-item v-model="value2" :options="option2" />
            <mi-dropdown-item v-model="value2" :options="option2" />
        </mi-dropdown-menu>
    </demo-block>

    <demo-block :title="t('expandDirection')">
        <mi-dropdown-menu direction="up">
            <mi-dropdown-item v-model="value1" :options="option1" />
            <mi-dropdown-item v-model="value2" :options="option2" />
        </mi-dropdown-menu>
    </demo-block>

    <demo-block :title="t('disableMenu')">
        <mi-dropdown-menu>
            <mi-dropdown-item v-model="value1" disabled :options="option1" />
            <mi-dropdown-item v-model="value2" disabled :options="option2" />
        </mi-dropdown-menu>
    </demo-block>
</template>
