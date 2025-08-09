<script setup lang="ts">
import MiGrid from '..';
import MiGridItem from '../../grid-item';
import MiImage from '../../image';
import { cdnURL, useTranslate } from '../../../docs/site';

const t = useTranslate({
    'zh-CN': {
        text: '文字',
        route: '页面导航',
        gutter: '格子间距',
        square: '正方形格子',
        columnNum: '自定义列数',
        customContent: '自定义内容',
        urlRoute: 'URL 跳转',
        vueRoute: '路由跳转',
        showBadge: '徽标提示',
        horizontal: '内容横排',
    },
    'en-US': {
        text: 'Text',
        route: 'Route',
        gutter: 'Gutter',
        square: 'Square',
        columnNum: 'Column Num',
        customContent: 'Custom Content',
        urlRoute: 'URL',
        vueRoute: 'Vue Router',
        showBadge: 'Show Badge',
        horizontal: 'Horizontal',
    },
});
</script>

<template>
    <demo-block :title="t('basicUsage')">
        <mi-grid>
            <mi-grid-item
                v-for="i in 4"
                :key="i"
                icon="photo-o"
                :text="t('text')"
            />
        </mi-grid>
    </demo-block>

    <demo-block :title="t('columnNum')">
        <mi-grid :column-num="3">
            <mi-grid-item
                v-for="i in 6"
                :key="i"
                icon="photo-o"
                :text="t('text')"
            />
        </mi-grid>
    </demo-block>

    <demo-block :title="t('customContent')">
        <mi-grid :border="false" :column-num="3">
            <mi-grid-item>
                <mi-image fit="contain" :src="cdnURL('avatar.jpg')" />
            </mi-grid-item>
            <mi-grid-item>
                <mi-image fit="contain" :src="cdnURL('avatar.jpg')" />
            </mi-grid-item>
            <mi-grid-item>
                <mi-image fit="contain" :src="cdnURL('avatar.jpg')" />
            </mi-grid-item>
        </mi-grid>
    </demo-block>

    <demo-block :title="t('square')">
        <mi-grid square>
            <mi-grid-item
                v-for="i in 8"
                :key="i"
                icon="photo-o"
                :text="t('text')"
            />
        </mi-grid>
    </demo-block>

    <demo-block :title="t('gutter')">
        <mi-grid :gutter="10">
            <mi-grid-item
                v-for="i in 8"
                :key="i"
                icon="photo-o"
                :text="t('text')"
            />
        </mi-grid>
    </demo-block>

    <demo-block :title="t('horizontal')">
        <mi-grid direction="horizontal" :column-num="3">
            <mi-grid-item icon="photo-o" :text="t('text')" />
            <mi-grid-item icon="photo-o" :text="t('text')" />
            <mi-grid-item icon="photo-o" :text="t('text')" />
        </mi-grid>
    </demo-block>

    <demo-block :title="t('route')">
        <mi-grid clickable :column-num="2">
            <mi-grid-item icon="home-o" :text="t('vueRoute')" to="/" />
            <mi-grid-item
                icon="search"
                :text="t('urlRoute')"
                url="https://wuxingxi.top/"
            />
        </mi-grid>
    </demo-block>

    <demo-block :title="t('showBadge')">
        <mi-grid :column-num="2">
            <mi-grid-item icon="home-o" :text="t('text')" dot />
            <mi-grid-item icon="search" :text="t('text')" badge="99+" />
        </mi-grid>
    </demo-block>
</template>
