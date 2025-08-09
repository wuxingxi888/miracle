<script setup lang="ts">
import MiRadioGroup from '../../radio-group';
import MiRadio from '..';
import MiCellGroup from '../../cell-group';
import MiCell from '../../cell';
import { ref } from 'vue';
import { cdnURL, useTranslate } from '../../../docs/site';

const t = useTranslate({
    'zh-CN': {
        radio: '单选框',
        text1: '未选中禁用',
        text2: '选中且禁用',
        withCell: '搭配单元格组件使用',
        horizontal: '水平排列',
        leftLabel: '左侧文本',
        customIcon: '自定义图标',
        customColor: '自定义颜色',
        customShape: '自定义形状',
        customIconSize: '自定义大小',
        disableLabel: '禁用文本点击',
    },
    'en-US': {
        radio: 'Radio',
        text1: 'Disabled',
        text2: 'Disabled and checked',
        withCell: 'Inside a Cell',
        horizontal: 'Horizontal',
        leftLabel: 'Left Label',
        customIcon: 'Custom Icon',
        customColor: 'Custom Color',
        customShape: 'Custom Shape',
        customIconSize: 'Custom Icon Size',
        disableLabel: 'Disable label click',
    },
});

const radio1 = ref('1');
const radio2 = ref('2');
const radio3 = ref('1');
const radio4 = ref('1');
const radio5 = ref('1');
const radioLabel = ref('1');
const radioSquare = ref('1');
const radioDot = ref('1');
const radioIconSize = ref('1');
const radioHorizontal = ref('1');
const radioLeftLabel = ref('1');
const activeIcon = cdnURL('check_active.png');
const inactiveIcon = cdnURL('check_inactive.png');
</script>

<template>
    <demo-block :title="t('basicUsage')">
        <mi-radio-group v-model="radio1" class="demo-radio-group">
            <mi-radio name="1">{{ t('radio') }} 1</mi-radio>
            <mi-radio name="2">{{ t('radio') }} 2</mi-radio>
        </mi-radio-group>
    </demo-block>

    <demo-block :title="t('horizontal')">
        <mi-radio-group
            v-model="radioHorizontal"
            class="demo-radio-group"
            direction="horizontal"
        >
            <mi-radio name="1">{{ t('radio') }} 1</mi-radio>
            <mi-radio name="2">{{ t('radio') }} 2</mi-radio>
        </mi-radio-group>
    </demo-block>

    <demo-block :title="t('disabled')">
        <mi-radio-group v-model="radio2" class="demo-radio-group" disabled>
            <mi-radio name="1">{{ t('radio') }} 1</mi-radio>
            <mi-radio name="2">{{ t('radio') }} 2</mi-radio>
        </mi-radio-group>
    </demo-block>

    <demo-block :title="t('customShape')">
        <mi-radio-group
            v-model="radioSquare"
            class="demo-radio-group"
            shape="square"
        >
            <mi-radio name="1">{{ t('radio') }} 1</mi-radio>
            <mi-radio name="2">{{ t('radio') }} 2</mi-radio>
        </mi-radio-group>
        <mi-radio-group
            v-model="radioDot"
            class="demo-radio-group"
            shape="dot"
            style="margin-top: 20px"
        >
            <mi-radio name="1">{{ t('radio') }} 1</mi-radio>
            <mi-radio name="2">{{ t('radio') }} 2</mi-radio>
        </mi-radio-group>
    </demo-block>

    <demo-block :title="t('customColor')">
        <mi-radio-group v-model="radio3" class="demo-radio-group">
            <mi-radio name="1" checked-color="#ee0a24"
                >{{ t('radio') }} 1</mi-radio
            >
            <mi-radio name="2" checked-color="#ee0a24"
                >{{ t('radio') }} 2</mi-radio
            >
        </mi-radio-group>
    </demo-block>

    <demo-block :title="t('customIconSize')">
        <mi-radio-group v-model="radioIconSize" class="demo-radio-group">
            <mi-radio name="1" icon-size="24px">{{ t('radio') }} 1</mi-radio>
            <mi-radio name="2" icon-size="24px">{{ t('radio') }} 2</mi-radio>
        </mi-radio-group>
    </demo-block>

    <demo-block :title="t('customIcon')">
        <mi-radio-group v-model="radio4" class="demo-radio-group">
            <mi-radio name="1">
                {{ t('radio') }} 1
                <template #icon="{ checked }">
                    <img :src="checked ? activeIcon : inactiveIcon" />
                </template>
            </mi-radio>
            <mi-radio name="2">
                {{ t('radio') }} 2
                <template #icon="{ checked }">
                    <img :src="checked ? activeIcon : inactiveIcon" />
                </template>
            </mi-radio>
        </mi-radio-group>
    </demo-block>

    <demo-block :title="t('leftLabel')">
        <mi-radio-group v-model="radioLeftLabel" class="demo-radio-group">
            <mi-radio name="1" label-position="left"
                >{{ t('radio') }} 1</mi-radio
            >
            <mi-radio name="2" label-position="left"
                >{{ t('radio') }} 2</mi-radio
            >
        </mi-radio-group>
    </demo-block>

    <demo-block :title="t('disableLabel')">
        <mi-radio-group v-model="radioLabel" class="demo-radio-group">
            <mi-radio name="1" label-disabled>{{ t('radio') }} 1</mi-radio>
            <mi-radio name="2" label-disabled>{{ t('radio') }} 2</mi-radio>
        </mi-radio-group>
    </demo-block>

    <demo-block :title="t('withCell')">
        <mi-radio-group v-model="radio5">
            <mi-cell-group inset>
                <mi-cell
                    clickable
                    :title="t('radio') + 1"
                    @click="radio5 = '1'"
                >
                    <template #right-icon>
                        <mi-radio name="1" />
                    </template>
                </mi-cell>
                <mi-cell
                    clickable
                    :title="t('radio') + 2"
                    @click="radio5 = '2'"
                >
                    <template #right-icon>
                        <mi-radio name="2" />
                    </template>
                </mi-cell>
            </mi-cell-group>
        </mi-radio-group>
    </demo-block>
</template>

<style lang="less">
.demo-radio {
    &-group {
        padding: 0 16px;

        .mi-radio {
            margin-bottom: 8px;
        }
    }

    img {
        height: 20px;
    }

    .mi-doc-demo-block__title {
        margin-top: -8px;
    }
}
</style>
