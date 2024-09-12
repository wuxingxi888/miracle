<template>
  <div class="van-doc-container van-doc-row" :class="{ 'van-doc-container--with-simulator': hasSimulator }">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'VanDocContainer',

  props: {
    hasSimulator: Boolean,
  },
};
</script>

<style lang="less">
.van-doc-container {
  box-sizing: border-box;
  padding-left: calc(var(--mi-doc-nav-width) + var(--mi-doc-padding));
  overflow: hidden;

  &--with-simulator {
    padding-right: calc(var(--mi-doc-simulator-width) + var(--mi-doc-padding));

    @media (max-width: 1100px) {
      padding-right: calc(var(--mi-doc-simulator-width) - 8px);
    }
  }
}
</style>
