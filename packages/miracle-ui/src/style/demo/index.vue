<script setup lang="ts">
import miCell from '../../cell';
import { ref } from 'vue';
import { useTranslate } from '../../../docs/site';

const t = useTranslate({
    'zh-CN': {
        hairline: '1px 边框',
        ellipsis: '文字省略',
        animation: '动画',
        toggle: '切换动画',
        text1: '这是一段最多显示一行的文字，后面的内容会省略',
        text2: '这是一段最多显示两行的文字，后面的内容会省略。这是一段最多显示两行的文字，后面的内容会省略',
        touch: '触感反馈',
        color: '主色调',
    },
    'en-US': {
        hairline: 'Hairline',
        ellipsis: 'Text Ellipsis',
        animation: 'Animation',
        toggle: 'Switch animation',
        text1: 'This is a paragraph that displays up to one line of text, and the rest of the text will be omitted.',
        text2: 'This is a paragraph that displays up to two lines of text, and the rest of the text will be omitted.',
        touch: 'Touch feedback',
        color: 'dominant tone',
    },
});

const show = ref(false);
const transitionName = ref('');

const animate = (newName: string) => {
    show.value = true;
    transitionName.value = newName;

    setTimeout(() => {
        show.value = false;
    }, 500);
};
</script>

<template>
    <demo-block card :title="t('ellipsis')">
        <div class="mi-ellipsis">{{ t('text1') }}</div>
        <div class="mi-multi-ellipsis--l2">{{ t('text2') }}</div>
    </demo-block>

    <demo-block card :title="t('hairline')">
        <div class="demo-box-block mi-hairline--top"></div>
    </demo-block>

    <demo-block card :title="t('animation')">
        <mi-cell is-link title="Fade" @click="animate('mi-fade')" />
        <mi-cell is-link title="Slide Up" @click="animate('mi-slide-up')" />
        <mi-cell is-link title="Slide Down" @click="animate('mi-slide-down')" />
        <mi-cell is-link title="Slide Left" @click="animate('mi-slide-left')" />
        <mi-cell
            is-link
            title="Slide Right"
            @click="animate('mi-slide-right')"
        />
    </demo-block>

    <transition :name="transitionName">
        <div v-show="show" class="demo-animate-block"></div>
    </transition>

    <demo-block card :title="t('touch')">
        <div class="demo-box-block mi-haptics-feedback"></div>
    </demo-block>

    <demo-block card :title="t('color')">
        <div class="demo-box-block mi-haptics-feedback primary-color"></div>
        <div class="demo-box-block mi-haptics-feedback success-color"></div>
        <div class="demo-box-block mi-haptics-feedback danger-color"></div>
        <div class="demo-box-block mi-haptics-feedback warning-color"></div>
    </demo-block>
</template>

<style lang="less">
.demo-style {
    .mi-ellipsis,
    .mi-multi-ellipsis--l2 {
        max-width: 300px;
        margin-left: var(--mi-padding-md);
        font-size: 14px;
        line-height: 18px;
    }

    .mi-ellipsis {
        margin-bottom: var(--mi-padding-md);
    }

    .mi-hairline--top {
        &::after {
            top: 5px;
        }
    }

    .demo-box-block {
        height: 30px;
        background-color: var(--mi-background-2);
    }

    .primary-color {
        background-color: var(--mi-primary-color);
    }

    .success-color {
        background-color: var(--mi-success-color);
    }

    .danger-color {
        background-color: var(--mi-danger-color);
    }

    .warning-color {
        background-color: var(--mi-warning-color);
    }

    .demo-animate-block {
        position: fixed;
        top: 50%;
        left: 50%;
        width: 100px;
        height: 100px;
        margin: -50px 0 0 -50px;
        background-color: var(--mi-red);
        border-radius: 8px;
    }
}
</style>
