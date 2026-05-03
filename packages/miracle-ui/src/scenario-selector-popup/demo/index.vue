<script setup lang="ts">
import MiNavBar from '../../nav-bar';
import MiCellGroup from '../../cell-group';
import MiCell from '../../cell';
import MiPopup from '../../popup';
import MiTabs from '../../tabs';
import MiTab from '../../tab';
import MiPicker, { PickerConfirmEventParams } from '../../picker';
import MiTag from '../../tag';
import MiButton from '../../button';
import { ref } from 'vue';
import { showToast } from '../../toast';

const showPicker = ref(true);
const activeTab = ref(0);
const selectedArea = ref('杭州 / 西湖区');
const selectedValues = ref(['xihu']);

const areaColumns = [
    { text: '西湖区', value: 'xihu' },
    { text: '上城区', value: 'shangcheng' },
    { text: '滨江区', value: 'binjiang' },
    { text: '余杭区', value: 'yuhang' },
];

const onConfirm = ({ selectedOptions }: PickerConfirmEventParams) => {
    const option = selectedOptions[0];
    selectedArea.value = `杭州 / ${option?.text || '西湖区'}`;
    showPicker.value = false;
    showToast('已更新配送区域');
};
</script>

<template>
    <div class="demo-scenario-selector-popup">
        <mi-nav-bar title="选择配送区域" left-arrow left-text="返回" />

        <mi-cell-group inset title="当前选择">
            <mi-cell
                title="配送区域"
                :value="selectedArea"
                is-link
                @click="showPicker = true"
            />
            <mi-cell title="服务状态">
                <template #value>
                    <mi-tag type="success">可配送</mi-tag>
                </template>
            </mi-cell>
        </mi-cell-group>

        <mi-popup
            v-model:show="showPicker"
            round
            closeable
            position="bottom"
            :style="{ minHeight: '420px' }"
        >
            <div class="demo-scenario-selector-popup__header">
                <strong>选择配送区域</strong>
                <span>当前城市：杭州</span>
            </div>

            <mi-tabs v-model:active="activeTab">
                <mi-tab title="常用区域" />
                <mi-tab title="全部区域" />
            </mi-tabs>

            <mi-picker
                v-model="selectedValues"
                title="行政区"
                :columns="areaColumns"
                @confirm="onConfirm"
            />

            <div class="demo-scenario-selector-popup__action">
                <mi-button
                    round
                    block
                    type="primary"
                    @click="showPicker = false"
                >
                    暂不修改
                </mi-button>
            </div>
        </mi-popup>
    </div>
</template>

<style lang="less">
.demo-scenario-selector-popup {
    min-height: 100vh;
    padding-top: 12px;
    background: var(--mi-background);

    &__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 18px 44px 10px 16px;

        strong {
            color: var(--mi-text-color);
            font-size: 16px;
        }

        span {
            color: var(--mi-text-color-2);
            font-size: 13px;
        }
    }

    &__action {
        padding: 0 16px 18px;
    }
}
</style>
