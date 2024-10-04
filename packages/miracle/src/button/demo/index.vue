<script setup lang="ts">
import MiButton from '..';
// import VanSwipe from '../../swipe';
// import VanSwipeItem from '../../swipe-item';
import { cdnURL, useTranslate } from '../../../docs/site';

const t = useTranslate({
  'zh-CN': {
    type: '按钮类型',
    size: '按钮尺寸',
    icon: '图标按钮',
    loading: '加载状态',
    shape: '按钮形状',
    default: '默认按钮',
    primary: '主要按钮',
    success: '成功按钮',
    danger: '危险按钮',
    warning: '警告按钮',
    large: '大号按钮',
    normal: '普通按钮',
    small: '小型按钮',
    mini: '迷你按钮',
    plain: '朴素按钮',
    square: '方形按钮',
    round: '圆形按钮',
    hairline: '细边框',
    hairlineButton: '细边框按钮',
    loadingText: '加载中...',
    router: '页面导航',
    urlRoute: 'URL 跳转',
    vueRoute: '路由跳转',
    customColor: '自定义颜色',
    pure: '单色按钮',
    gradient: '渐变色按钮',
    blockElement: '块级元素',
    animatedButton: '动画按钮',
    doTask: '做任务',
    lottery: '抽大奖',
  },
  'en-US': {
    type: 'Type',
    size: 'Size',
    icon: 'Icon',
    loading: 'Loading',
    shape: 'Shape',
    default: 'Default',
    primary: 'Primary',
    success: 'Success',
    danger: 'Danger',
    warning: 'Warning',
    large: 'Large',
    normal: 'Normal',
    small: 'Small',
    mini: 'Mini',
    plain: 'Plain',
    square: 'Square',
    round: 'Round',
    hairline: 'Hairline',
    hairlineButton: 'Hairline',
    loadingText: 'Loading...',
    router: 'Router',
    urlRoute: 'URL',
    vueRoute: 'Vue Router',
    customColor: 'Custom Color',
    pure: 'Pure',
    gradient: 'Gradient',
    blockElement: 'Block Element',
    animatedButton: 'Animated Button',
    doTask: 'Do Task',
    lottery: 'Lottery',
  },
});
</script>

<template>
  <demo-block :title="t('type')">
    <div class="demo-button-row">
      <mi-button type="primary">{{ t('primary') }}</mi-button>
      <mi-button type="success">{{ t('success') }}</mi-button>
      <mi-button type="default">{{ t('default') }}</mi-button>
    </div>
    <mi-button type="danger">{{ t('danger') }}</mi-button>
    <mi-button type="warning">{{ t('warning') }}</mi-button>
  </demo-block>

  <demo-block :title="t('plain')">
    <mi-button plain type="primary" :text="t('plain')" />
    <mi-button plain type="success" :text="t('plain')" />
  </demo-block>

  <demo-block :title="t('hairline')">
    <mi-button plain hairline type="primary" :text="t('hairlineButton')" />
    <mi-button plain hairline type="success" :text="t('hairlineButton')" />
  </demo-block>

  <demo-block :title="t('disabled')">
    <mi-button disabled type="primary" :text="t('disabled')" />
    <mi-button disabled type="success" :text="t('disabled')" />
  </demo-block>

  <demo-block :title="t('loadingStatus')">
    <mi-button loading type="primary" />
    <mi-button loading type="primary" loading-type="spinner" />
    <mi-button loading :loading-text="t('loadingText')" type="success" />
  </demo-block>

  <demo-block :title="t('shape')">
    <mi-button type="primary" square :text="t('square')" />
    <mi-button type="success" round :text="t('round')" />
  </demo-block>

  <demo-block :title="t('icon')">
    <mi-button type="primary" icon="plus" />
    <mi-button type="primary" icon="plus" :text="t('button')" />
    <mi-button
      plain
      type="primary"
      :icon="cdnURL('user-active.png')"
      :text="t('button')"
    />
  </demo-block>

  <demo-block :title="t('size')">
    <mi-button type="primary" size="large">{{ t('large') }}</mi-button>
    <mi-button type="primary" size="normal">{{ t('normal') }}</mi-button>
    <mi-button type="primary" size="small">{{ t('small') }}</mi-button>
    <mi-button type="primary" size="mini">{{ t('mini') }}</mi-button>
  </demo-block>

  <demo-block :title="t('blockElement')">
    <mi-button type="primary" block>{{ t('blockElement') }}</mi-button>
  </demo-block>

  <demo-block :title="t('router')">
    <mi-button
      :text="t('urlRoute')"
      type="primary"
      url="https://github.com/vant-ui/vant"
    />
    <mi-button :text="t('vueRoute')" type="primary" to="index" />
  </demo-block>

  <demo-block :title="t('customColor')">
    <mi-button color="#7232dd" :text="t('pure')" />
    <mi-button plain color="#7232dd" :text="t('pure')" />
    <mi-button
      color="linear-gradient(to right, #ff6034, #ee0a24)"
      :text="t('gradient')"
    />
  </demo-block>

  <!-- <demo-block :title="t('animatedButton')">
    <mi-button type="danger" round>
      <mi-swipe
        vertical
        class="notice-swipe"
        :autoplay="2000"
        :touchable="false"
        :show-indicators="false"
      >
        <mi-swipe-item>{{ t('doTask') }}</mi-swipe-item>
        <mi-swipe-item>{{ t('lottery') }}</mi-swipe-item>
      </mi-swipe>
    </mi-button>
  </demo-block> -->
</template>

<style lang="less">
.demo-button {
  .mi-button {
    &--large {
      margin-bottom: var(--mi-padding-md);
    }

    &--small,
    &--normal:not(:last-child) {
      margin-right: var(--mi-padding-md);
    }
  }

  .mi-doc-demo-block {
    padding: 0 var(--mi-padding-md);
  }

  .mi-doc-demo-block__title {
    padding-left: 0;
  }

  &-row {
    margin-bottom: var(--mi-padding-sm);
  }

  .notice-swipe {
    height: 40px;
    line-height: 40px;
  }
}
</style>
