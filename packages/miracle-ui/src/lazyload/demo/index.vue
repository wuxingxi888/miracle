<script lang="ts">
import Lazyload from '..';

if (window.app) {
    window.app.use(Lazyload, { lazyComponent: true });
}
</script>

<script setup lang="ts">
import { cdnURL, useTranslate } from '../../../docs/site';

const t = useTranslate({
    'zh-CN': {
        title2: '背景图懒加载',
        title3: '懒加载模块',
    },
    'en-US': {
        title2: 'Lazyload Background Image',
        title3: 'Lazyload Component',
    },
});

const imageList = [
    cdnURL('avatar.jpg'),
    cdnURL('avatar.jpg'),
    cdnURL('avatar.jpg'),
    cdnURL('avatar.jpg'),
];
const backgroundImageList = [cdnURL('avatar.jpg'), cdnURL('avatar.jpg')];
const componentImageList = [cdnURL('avatar.jpg'), cdnURL('avatar.jpg')];
</script>

<template>
    <demo-block :title="t('basicUsage')">
        <img v-for="img in imageList" :key="img" v-lazy="img" />
    </demo-block>

    <demo-block :title="t('title2')">
        <div
            v-for="img in backgroundImageList"
            :key="img"
            v-lazy:background-image="img"
        />
    </demo-block>

    <demo-block :title="t('title3')">
        <lazy-component>
            <img v-for="img in componentImageList" :key="img" v-lazy="img" />
        </lazy-component>
    </demo-block>
</template>

<style lang="less">
.demo-lazyload {
    padding-right: var(--mi-padding-md);
    padding-left: var(--mi-padding-md);

    img,
    div[lazy] {
        box-sizing: border-box;
        width: 100%;
        height: 250px;
        margin-bottom: var(--mi-padding-md);
        padding: var(--mi-padding-md);
        background-color: white;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        border-radius: 12px;
    }

    .mi-doc-demo-block__title,
    .mi-doc-demo-section__title {
        padding-left: 0;
    }
}
</style>
