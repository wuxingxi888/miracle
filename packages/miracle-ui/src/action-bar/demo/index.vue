<script setup lang="ts">
import MiActionBar from '..';
import MiActionBarIcon from '../../action-bar-icon';
import MiActionBarButton from '../../action-bar-button';
import { useTranslate } from '../../../docs/site';
import { showToast } from '../../toast';

const t = useTranslate({
  'zh-CN': {
    icon1: '客服',
    icon2: '购物车',
    icon3: '店铺',
    button1: '加入购物车',
    button2: '立即购买',
    iconBadge: '徽标提示',
    collected: '已收藏',
    clickIcon: '点击图标',
    clickButton: '点击按钮',
    customIconColor: '自定义图标颜色',
    customButtonColor: '自定义按钮颜色',
  },
  'en-US': {
    icon1: 'Icon1',
    icon2: 'Icon2',
    icon3: 'Icon3',
    button1: 'Button',
    button2: 'Button',
    iconBadge: 'Icon Badge',
    collected: 'Collected',
    clickIcon: 'Click Icon',
    clickButton: 'Click Button',
    customIconColor: 'Custom Icon Color',
    customButtonColor: 'Custom Button Color',
  },
});
const onClickIcon = () => showToast(t('clickIcon'));
const onClickButton = () => showToast(t('clickButton'));
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <mi-action-bar>
      <mi-action-bar-icon
        icon="chat-o"
        :text="t('icon1')"
        @click="onClickIcon"
      />
      <mi-action-bar-icon
        icon="cart-o"
        :text="t('icon2')"
        @click="onClickIcon"
      />
      <mi-action-bar-icon
        icon="shop-o"
        :text="t('icon3')"
        @click="onClickIcon"
      />
      <mi-action-bar-button
        type="danger"
        :text="t('button2')"
        @click="onClickButton"
      />
    </mi-action-bar>
  </demo-block>

  <demo-block :title="t('iconBadge')">
    <mi-action-bar>
      <mi-action-bar-icon icon="chat-o" dot :text="t('icon1')" />
      <mi-action-bar-icon icon="cart-o" badge="5" :text="t('icon2')" />
      <mi-action-bar-icon icon="shop-o" badge="12" :text="t('icon3')" />
      <mi-action-bar-button type="warning" :text="t('button1')" />
      <mi-action-bar-button type="danger" :text="t('button2')" />
    </mi-action-bar>
  </demo-block>

  <demo-block :title="t('customIconColor')">
    <mi-action-bar>
      <mi-action-bar-icon icon="chat-o" :text="t('icon1')" color="#ee0a24" />
      <mi-action-bar-icon icon="cart-o" :text="t('icon2')" />
      <mi-action-bar-icon icon="star" :text="t('collected')" color="#ff5000" />
      <mi-action-bar-button type="warning" :text="t('button1')" />
      <mi-action-bar-button type="danger" :text="t('button2')" />
    </mi-action-bar>
  </demo-block>

  <demo-block :title="t('customButtonColor')">
    <mi-action-bar>
      <mi-action-bar-icon icon="chat-o" :text="t('icon1')" />
      <mi-action-bar-icon icon="cart-o" :text="t('icon2')" />
      <mi-action-bar-button
        color="#be99ff"
        type="warning"
        :text="t('button1')"
      />
      <mi-action-bar-button
        color="#7232dd"
        type="danger"
        :text="t('button2')"
      />
    </mi-action-bar>
  </demo-block>
</template>

<style lang="less">
.demo-action-bar {
  .mi-action-bar {
    position: relative;
    padding-bottom: 0;
  }
}
</style>
