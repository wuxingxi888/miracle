<script setup lang="ts">
import MiCheckbox from '..';
import MiCheckboxGroup from '../../checkbox-group';
import MiButton from '../../button';
import MiCellGroup from '../../cell-group';
import MiCell from '../../cell';
import { ref, reactive } from 'vue';
import { cdnURL, useTranslate } from '../../../docs/site';
import { useRefs } from '../../composables/use-refs';
import type { CheckboxInstance } from '../types';
import type { CheckboxGroupInstance } from '../../checkbox-group';

const t = useTranslate({
    'zh-CN': {
        checkbox: '复选框',
        customIcon: '自定义图标',
        customIconSize: '自定义大小',
        customColor: '自定义颜色',
        customShape: '自定义形状',
        leftLabel: '左侧文本',
        title3: '复选框组',
        title4: '限制最大可选数',
        title5: '搭配单元格组件使用',
        toggleAll: '全选与反选',
        checkAll: '全选',
        inverse: '反选',
        horizontal: '水平排列',
        disableLabel: '禁用文本点击',
        indeterminate: '不确定状态',
    },
    'en-US': {
        checkbox: 'Checkbox',
        customIcon: 'Custom Icon',
        customIconSize: 'Custom Icon Size',
        customColor: 'Custom Color',
        customShape: 'Custom Shape',
        leftLabel: 'Left Label',
        title3: 'Checkbox Group',
        title4: 'Maximum amount of checked options',
        title5: 'Inside a Cell',
        toggleAll: 'Toggle All',
        checkAll: 'Check All',
        inverse: 'Inverse',
        horizontal: 'Horizontal',
        disableLabel: 'Disable label click',
        indeterminate: 'indeterminate',
    },
});

const state = reactive({
    checkbox1: true,
    checkbox2: true,
    checkbox3: true,
    isCheckAll: false,
    isIndeterminate: true,
    checkboxLabel: true,
    checkboxIcon: true,
    leftLabel: false,
    list: ['a', 'b'],
    result: ['a', 'b'],
    checkboxShape: ['a', 'b'],
    result2: [],
    result3: [],
    result4: ['a', 'b', 'd'],
    checkAllResult: [],
    horizontalResult: [],
});

const list = ['a', 'b', 'c', 'd'];

const activeIcon = cdnURL('check_active.png');
const inactiveIcon = cdnURL('check_inactive.png');

const group = ref<CheckboxGroupInstance>();
const [refs, setRefs] = useRefs<CheckboxInstance>();

const toggle = (index: number) => {
    refs.value[index].toggle();
};

const checkAll = () => {
    group.value?.toggleAll(true);
};

const toggleAll = () => {
    group.value?.toggleAll();
};

const checkAllChange = (val: boolean) => {
    state.result4 = val ? list : [];
    state.isIndeterminate = false;
};

const checkedResultChange = (value: string[]) => {
    const checkedCount = value.length;
    state.isCheckAll = checkedCount === list.length;
    state.isIndeterminate = checkedCount > 0 && checkedCount < list.length;
};
</script>

<template>
    <demo-block :title="t('basicUsage')">
        <mi-checkbox v-model="state.checkbox1">{{ t('checkbox') }}</mi-checkbox>
    </demo-block>

    <demo-block :title="t('disabled')">
        <mi-checkbox :model-value="false" disabled>
            {{ t('checkbox') }}
        </mi-checkbox>
        <mi-checkbox :model-value="true" disabled>
            {{ t('checkbox') }}
        </mi-checkbox>
    </demo-block>

    <demo-block :title="t('customShape')">
        <mi-checkbox-group v-model="state.checkboxShape" shape="square">
            <mi-checkbox name="a">{{ t('customShape') }} a</mi-checkbox>
            <mi-checkbox name="b">{{ t('customShape') }} b</mi-checkbox>
        </mi-checkbox-group>
    </demo-block>

    <demo-block :title="t('customColor')">
        <mi-checkbox v-model="state.checkbox2" checked-color="#ee0a24">
            {{ t('customColor') }}
        </mi-checkbox>
    </demo-block>

    <demo-block :title="t('customIconSize')">
        <mi-checkbox v-model="state.checkboxIcon" icon-size="24px">
            {{ t('customIconSize') }}
        </mi-checkbox>
    </demo-block>

    <demo-block :title="t('customIcon')">
        <mi-checkbox v-model="state.checkbox3">
            {{ t('customIcon') }}
            <template #icon="{ checked }">
                <img :src="checked ? activeIcon : inactiveIcon" />
            </template>
        </mi-checkbox>
    </demo-block>

    <demo-block :title="t('leftLabel')">
        <mi-checkbox v-model="state.leftLabel" label-position="left">
            {{ t('leftLabel') }}
        </mi-checkbox>
    </demo-block>

    <demo-block :title="t('disableLabel')">
        <mi-checkbox v-model="state.checkboxLabel" label-disabled>
            {{ t('checkbox') }}
        </mi-checkbox>
    </demo-block>

    <demo-block :title="t('title3')">
        <mi-checkbox-group v-model="state.result">
            <mi-checkbox name="a">{{ t('checkbox') }} a</mi-checkbox>
            <mi-checkbox name="b">{{ t('checkbox') }} b</mi-checkbox>
        </mi-checkbox-group>
    </demo-block>

    <demo-block :title="t('horizontal')">
        <mi-checkbox-group
            v-model="state.horizontalResult"
            direction="horizontal"
        >
            <mi-checkbox name="a">{{ t('checkbox') }} a</mi-checkbox>
            <mi-checkbox name="b">{{ t('checkbox') }} b</mi-checkbox>
        </mi-checkbox-group>
    </demo-block>

    <demo-block :title="t('title4')">
        <mi-checkbox-group v-model="state.result2" :max="2">
            <mi-checkbox name="a">{{ t('checkbox') }} a</mi-checkbox>
            <mi-checkbox name="b">{{ t('checkbox') }} b</mi-checkbox>
            <mi-checkbox name="c">{{ t('checkbox') }} c</mi-checkbox>
        </mi-checkbox-group>
    </demo-block>

    <demo-block :title="t('toggleAll')">
        <mi-checkbox-group v-model="state.checkAllResult" ref="group">
            <mi-checkbox name="a">{{ t('checkbox') }} a</mi-checkbox>
            <mi-checkbox name="b">{{ t('checkbox') }} b</mi-checkbox>
            <mi-checkbox name="c">{{ t('checkbox') }} c</mi-checkbox>
        </mi-checkbox-group>

        <div class="demo-checkbox-buttons">
            <mi-button type="primary" @click="checkAll">
                {{ t('checkAll') }}
            </mi-button>
            <mi-button type="primary" @click="toggleAll">
                {{ t('inverse') }}
            </mi-button>
        </div>
    </demo-block>

    <demo-block :title="t('title5')">
        <mi-checkbox-group v-model="state.result3">
            <mi-cell-group inset>
                <mi-cell
                    v-for="(item, index) in state.list"
                    clickable
                    :key="index"
                    :title="`${t('checkbox')} ${item}`"
                    @click="toggle(index)"
                >
                    <template #right-icon>
                        <mi-checkbox
                            :ref="setRefs(index)"
                            :name="item"
                            @click.stop
                        />
                    </template>
                </mi-cell>
            </mi-cell-group>
        </mi-checkbox-group>
    </demo-block>

    <demo-block :title="t('indeterminate')">
        <mi-checkbox
            v-model="state.isCheckAll"
            :indeterminate="state.isIndeterminate"
            @change="checkAllChange"
        >
            {{ t('checkAll') }}
        </mi-checkbox>
        <div class="divider" />
        <mi-checkbox-group
            v-model="state.result4"
            @change="checkedResultChange"
        >
            <mi-checkbox v-for="item in list" :key="item" :name="item"
                >{{ t('checkbox') }} {{ item }}</mi-checkbox
            >
        </mi-checkbox-group>
    </demo-block>
</template>

<style lang="less">
.demo-checkbox {
    .mi-checkbox {
        margin: 0 0 8px 20px;
    }

    .mi-cell {
        .mi-checkbox {
            margin: 0;
        }
    }

    img {
        height: 20px;
    }

    &-buttons {
        margin-top: var(--mi-padding-md);

        .mi-button {
            margin-left: var(--mi-padding-md);
        }
    }

    .mi-doc-demo-block__title {
        margin-top: -8px;
    }
}

.divider {
    margin: 20px;
    height: 1px;
    background: #ccc;
}
</style>
