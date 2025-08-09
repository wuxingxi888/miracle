<script setup lang="ts">
import MiIcon from '..';
import MiTabs from '../../tabs';
import MiTab from '../../tab';
import MiRow from '../../row';
import MiCol from '../../col';
import icons from '@miracle-web/icons';
import { ref } from 'vue';
import { cdnURL, useTranslate } from '../../../docs/site';

import { showNotify } from '../../notify';

// from https://30secondsofcode.org
function copyToClipboard(str: string) {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);

    const selection = document.getSelection();

    if (!selection) {
        return;
    }

    const selected = selection.rangeCount > 0 ? selection.getRangeAt(0) : false;

    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    if (selected) {
        selection.removeAllRanges();
        selection.addRange(selected);
    }
}

const t = useTranslate({
    'zh-CN': {
        title: '图标列表',
        badge: '徽标提示',
        basic: '基础图标',
        copied: '复制成功',
        outline: '线框风格',
        filled: '实底风格',
        demo: '用法示例',
        color: '图标颜色',
        size: '图标大小',
    },
    'en-US': {
        title: 'Icon List',
        badge: 'Show Badge',
        basic: 'Basic',
        copied: 'Copied',
        outline: 'Outline',
        filled: 'Filled',
        demo: 'Demo',
        color: 'Icon Color',
        size: 'Icon Size',
    },
});

const tab = ref(0);
const demoIcon = 'chat-o';
const demoImage = cdnURL('avatar.jpg');

const copy = (icon: string, option: Record<string, unknown> = {}) => {
    let tag = `<mi-icon name="${icon}"`;
    if ('dot' in option) {
        tag = `${tag} ${option.dot ? 'dot' : ''}`;
    }
    if ('badge' in option) {
        tag = `${tag} badge="${option.badge}"`;
    }
    if ('color' in option) {
        tag = `${tag} color="${option.color}"`;
    }
    if ('size' in option) {
        tag = `${tag} size="${option.size}"`;
    }
    tag = `${tag} />`;
    copyToClipboard(tag);

    showNotify({
        type: 'success',
        duration: 1500,
        className: 'demo-icon-notify',
        message: `${t('copied')}：${tag}`,
    });
};
</script>

<template>
    <mi-tabs v-model:active="tab" sticky>
        <mi-tab class="demo-icon-tab-panel" :title="t('demo')">
            <demo-block :title="t('basicUsage')">
                <mi-row>
                    <mi-col span="6" @click="copy(demoIcon)">
                        <mi-icon :name="demoIcon" />
                    </mi-col>
                </mi-row>
            </demo-block>

            <demo-block :title="t('usingUrl')">
                <mi-row>
                    <mi-col span="6" @click="copy(demoImage)">
                        <mi-icon :name="demoImage" />
                    </mi-col>
                </mi-row>
            </demo-block>

            <demo-block :title="t('badge')">
                <mi-row>
                    <mi-col span="6" @click="copy(demoIcon, { dot: true })">
                        <mi-icon :name="demoIcon" dot />
                    </mi-col>
                    <mi-col span="6" @click="copy(demoIcon, { badge: '9' })">
                        <mi-icon :name="demoIcon" badge="9" />
                    </mi-col>
                    <mi-col span="6" @click="copy(demoIcon, { badge: '99+' })">
                        <mi-icon :name="demoIcon" badge="99+" />
                    </mi-col>
                </mi-row>
            </demo-block>

            <demo-block :title="t('color')">
                <mi-row>
                    <mi-col
                        span="6"
                        @click="copy('cart-o', { color: '#1989fa' })"
                    >
                        <mi-icon name="cart-o" color="#1989fa" />
                    </mi-col>
                    <mi-col
                        span="6"
                        @click="copy('fire-o', { color: '#ee0a24' })"
                    >
                        <mi-icon name="fire-o" color="#ee0a24" />
                    </mi-col>
                </mi-row>
            </demo-block>

            <demo-block :title="t('size')">
                <mi-row>
                    <mi-col span="6" @click="copy(demoIcon, { size: '40' })">
                        <mi-icon :name="demoIcon" size="40" />
                    </mi-col>
                    <mi-col span="6" @click="copy(demoIcon, { size: '3rem' })">
                        <mi-icon :name="demoIcon" size="3rem" />
                    </mi-col>
                </mi-row>
            </demo-block>
        </mi-tab>

        <mi-tab class="demo-icon-tab-panel" :title="t('basic')">
            <mi-row>
                <mi-col
                    v-for="icon in icons.basic"
                    :key="icon"
                    span="6"
                    @click="copy(icon)"
                >
                    <mi-icon :name="icon" />
                    <span>{{ icon }}</span>
                </mi-col>
            </mi-row>
        </mi-tab>

        <mi-tab class="demo-icon-tab-panel" :title="t('outline')">
            <mi-row>
                <mi-col
                    v-for="icon in icons.outline"
                    :key="icon"
                    span="6"
                    @click="copy(icon)"
                >
                    <mi-icon :name="icon" />
                    <span>{{ icon }}</span>
                </mi-col>
            </mi-row>
        </mi-tab>

        <mi-tab class="demo-icon-tab-panel" :title="t('filled')">
            <mi-row>
                <mi-col
                    v-for="icon in icons.filled"
                    :key="icon"
                    span="6"
                    @click="copy(icon)"
                >
                    <mi-icon :name="icon" />
                    <span>{{ icon }}</span>
                </mi-col>
            </mi-row>
        </mi-tab>
    </mi-tabs>
</template>

<style lang="less">
.demo-icon {
    font-size: 0;

    &-notify {
        font-size: 13px;
    }

    &-tab-panel {
        width: auto;
        margin: 20px;
        background-color: var(--mi-background-2);
        border-radius: 12px;
    }

    .mi-col {
        display: inline-block;
        float: none;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;

        span {
            display: block;
            height: 36px;
            margin: -4px 0 4px;
            padding: 0 5px;
            color: var(--mi-text-color);
            font-size: 12px;
            line-height: 18px;
        }

        &:active {
            background-color: var(--mi-active-color);
        }
    }

    .mi-icon {
        margin: 16px 0 16px;
        color: var(--mi-text-color);
        font-size: 32px;
    }
}
</style>
