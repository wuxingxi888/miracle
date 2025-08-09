<script setup lang="ts">
import { ref } from 'vue';
import MiPopover, { type PopoverPlacement } from '..';
import MiButton from '../../button';
import MiCell from '../../cell';
import MiPopup from '../../popup';
import MiPicker, {
    PickerConfirmEventParams,
    type PickerOption,
} from '../../picker';
import MiGrid from '../../grid';
import MiGridItem from '../../grid-item';
import { showToast } from '../../toast';
import { useTranslate } from '../../../docs/site';

const t = useTranslate({
    'zh-CN': {
        actions: [{ text: '选项一' }, { text: '选项二' }, { text: '选项三' }],
        shortActions: [{ text: '选项一' }, { text: '选项二' }],
        actionsWithIcon: [
            { text: '选项一', icon: 'add-o' },
            { text: '选项二', icon: 'music-o' },
            { text: '选项三', icon: 'more-o' },
        ],
        actionsDisabled: [
            { text: '选项一', disabled: true },
            { text: '选项二', disabled: true },
            { text: '选项三' },
        ],
        actionsDirection: '排列方向',
        horizontal: '水平排列',
        vertical: '垂直排列',
        showIcon: '展示图标',
        placement: '弹出位置',
        darkTheme: '深色风格',
        lightTheme: '浅色风格',
        showPopover: '点击弹出气泡',
        uncontrolled: '非受控模式',
        actionOptions: '选项配置',
        customContent: '自定义内容',
        disableAction: '禁用选项',
        choosePlacement: '选择弹出位置',
    },
    'en-US': {
        actions: [
            { text: 'Option 1' },
            { text: 'Option 2' },
            { text: 'Option 3' },
        ],
        shortActions: [{ text: 'Option 1' }, { text: 'Option 2' }],
        actionsWithIcon: [
            { text: 'Option 1', icon: 'add-o' },
            { text: 'Option 2', icon: 'music-o' },
            { text: 'Option 3', icon: 'more-o' },
        ],
        actionsDisabled: [
            { text: 'Option 1', disabled: true },
            { text: 'Option 2', disabled: true },
            { text: 'Option 3' },
        ],
        actionsDirection: 'Actions Direction',
        horizontal: 'Horizontal',
        vertical: 'Vertical',
        showIcon: 'Show Icon',
        placement: 'Placement',
        darkTheme: 'Dark Theme',
        lightTheme: 'Light Theme',
        showPopover: 'Show Popover',
        uncontrolled: 'Uncontrolled',
        actionOptions: 'Action Options',
        customContent: 'Custom Content',
        disableAction: 'Disable Action',
        choosePlacement: 'Placement',
    },
});

const placements: PickerOption[] = [
    'top',
    'top-start',
    'top-end',
    'left',
    'left-start',
    'left-end',
    'right',
    'right-start',
    'right-end',
    'bottom',
    'bottom-start',
    'bottom-end',
].map((item) => ({ text: item, value: item }));

const show = ref({
    horizontal: false,
    vertical: false,
    showIcon: false,
    placement: false,
    darkTheme: false,
    lightTheme: false,
    customContent: false,
    disableAction: false,
});
const showPicker = ref(false);
const currentPlacement = ref<PopoverPlacement>('top');

const onClickChoosePlacement = () => {
    showPicker.value = true;

    setTimeout(() => {
        show.value = {
            ...show.value,
            placement: true,
        };
    }, 300);
};

const onPickerChange = (option: PickerConfirmEventParams) => {
    setTimeout(() => {
        show.value.placement = true;
        currentPlacement.value = option.selectedValues[0] as PopoverPlacement;
    });
};

const onSelect = (action: { text: string }) => showToast(action.text);
</script>

<template>
    <demo-block :title="t('basicUsage')">
        <mi-popover
            v-model:show="show.lightTheme"
            :actions="t('actions')"
            placement="bottom-start"
            @select="onSelect"
        >
            <template #reference>
                <mi-button type="primary">
                    {{ t('lightTheme') }}
                </mi-button>
            </template>
        </mi-popover>

        <mi-popover
            v-model:show="show.darkTheme"
            theme="dark"
            :actions="t('actions')"
            @select="onSelect"
        >
            <template #reference>
                <mi-button type="primary">
                    {{ t('darkTheme') }}
                </mi-button>
            </template>
        </mi-popover>
    </demo-block>

    <demo-block :title="t('placement')">
        <mi-field
            is-link
            readonly
            name="picker"
            :label="t('choosePlacement')"
            @click="onClickChoosePlacement"
        />
        <mi-cell
            is-link
            :title="t('choosePlacement')"
            @click="onClickChoosePlacement"
        />

        <mi-popup
            v-model:show="showPicker"
            round
            position="bottom"
            teleport="body"
        >
            <div class="demo-popover-box">
                <mi-popover
                    v-model:show="show.placement"
                    theme="dark"
                    :actions="t('shortActions')"
                    :placement="currentPlacement"
                    @select="onSelect"
                >
                    <template #reference>
                        <div class="demo-popover-refer" />
                    </template>
                </mi-popover>
            </div>
            <mi-picker
                :columns="placements"
                :show-toolbar="false"
                @change="onPickerChange"
            />
        </mi-popup>
    </demo-block>

    <demo-block :title="t('actionsDirection')">
        <mi-popover
            v-model:show="show.horizontal"
            :actions="t('actions')"
            actions-direction="horizontal"
            placement="bottom-start"
            @select="onSelect"
        >
            <template #reference>
                <mi-button type="primary">
                    {{ t('horizontal') }}
                </mi-button>
            </template>
        </mi-popover>

        <mi-popover
            v-model:show="show.vertical"
            :actions="t('actions')"
            @select="onSelect"
        >
            <template #reference>
                <mi-button type="primary">
                    {{ t('vertical') }}
                </mi-button>
            </template>
        </mi-popover>
    </demo-block>

    <demo-block :title="t('actionOptions')">
        <mi-popover
            v-model:show="show.showIcon"
            :actions="t('actionsWithIcon')"
            placement="bottom-start"
            @select="onSelect"
        >
            <template #reference>
                <mi-button type="primary">
                    {{ t('showIcon') }}
                </mi-button>
            </template>
        </mi-popover>

        <mi-popover
            v-model:show="show.disableAction"
            :actions="t('actionsDisabled')"
            @select="onSelect"
        >
            <template #reference>
                <mi-button type="primary">
                    {{ t('disableAction') }}
                </mi-button>
            </template>
        </mi-popover>
    </demo-block>

    <demo-block :title="t('customContent')">
        <mi-popover
            v-model:show="show.customContent"
            placement="top-start"
            @select="onSelect"
        >
            <mi-grid
                square
                clickable
                :border="false"
                column-num="3"
                style="width: 240px"
            >
                <mi-grid-item
                    v-for="i in 6"
                    :key="i"
                    icon="photo-o"
                    :text="t('option')"
                    @click="show.customContent = false"
                />
            </mi-grid>
            <template #reference>
                <mi-button type="primary">
                    {{ t('customContent') }}
                </mi-button>
            </template>
        </mi-popover>
    </demo-block>

    <demo-block :title="t('uncontrolled')">
        <mi-popover
            :actions="t('actions')"
            placement="top-start"
            @select="onSelect"
        >
            <template #reference>
                <mi-button type="primary">
                    {{ t('uncontrolled') }}
                </mi-button>
            </template>
        </mi-popover>
    </demo-block>
</template>

<style lang="less">
.demo-popover {
    &-refer {
        width: 60px;
        height: 60px;
        background-color: var(--mi-blue);
        border-radius: 8px;
    }

    .mi-popover__wrapper {
        margin-left: var(--mi-padding-md);
    }

    .mi-field {
        width: auto;
        margin: 0 12px;
        overflow: hidden;
        border-radius: 8px;
    }

    &-box {
        display: flex;
        justify-content: center;
        margin: 110px 0;

        .mi-popover__wrapper {
            margin-left: 0;
        }
    }
}
</style>
