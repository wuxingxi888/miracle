<script setup lang="ts">
import { ref } from 'vue';
import MiTabs from '../../tabs';
import MiTab from '../../tab';
import MiCell from '../../cell';
import MiCellGroup from '../../cell-group';
import MiFloatingPanel from '..';
import { useTranslate } from '../../../docs/site';
import { useWindowSize } from '@miracle-web/use';

const { height: windowHeight } = useWindowSize();

const t = useTranslate({
    'zh-CN': {
        customAnchors: '自定义锚点',
        headDragOnly: '仅头部拖拽',
        panelShowHeight: '面板显示高度',
        contentUnDrag: '内容不可拖拽',
    },
    'en-US': {
        customAnchors: 'Custom Anchors',
        headDragOnly: 'Head Drag Only',
        panelShowHeight: 'Panel Show Height',
        contentUnDrag: 'Content cannot be dragged',
    },
});

const anchors = [
    100,
    Math.round(0.4 * windowHeight.value),
    Math.round(0.7 * windowHeight.value),
];

const height = ref(anchors[0]);
</script>

<template>
    <mi-tabs>
        <mi-tab :title="t('basicUsage')">
            <mi-floating-panel>
                <mi-cell-group>
                    <mi-cell
                        v-for="i in 26"
                        :key="i"
                        :title="String.fromCharCode(i + 64)"
                        size="large"
                    />
                </mi-cell-group>
            </mi-floating-panel>
        </mi-tab>

        <mi-tab :title="t('customAnchors')">
            <mi-floating-panel v-model:height="height" :anchors="anchors">
                <div style="text-align: center; padding: 15px">
                    <p>{{ t('panelShowHeight') }} {{ height.toFixed(0) }} px</p>
                </div>
            </mi-floating-panel>
        </mi-tab>

        <mi-tab :title="t('headDragOnly')">
            <mi-floating-panel :content-draggable="false">
                <div style="text-align: center; padding: 15px">
                    <p>{{ t('contentUnDrag') }}</p>
                </div>
            </mi-floating-panel>
        </mi-tab>
    </mi-tabs>
</template>
