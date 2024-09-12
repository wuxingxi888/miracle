<template>
  <div :class="['van-doc-simulator', { 'van-doc-simulator-fixed': true }]">
    <iframe ref="iframe" :src="src" frameborder="0" />
  </div>
</template>

<script>
export default {
  name: 'VanDocSimulator',

  props: {
    src: String,
  },

  data() {
    return {
      scrollTop: window.scrollY,
      windowHeight: window.innerHeight,
    };
  },

  computed: {
    isFixed() {
      return this.scrollTop > 95;
    },

    simulatorStyle() {
      const height = Math.min(640, this.windowHeight - 90);
      return {
        height: height + 'px',
      };
    },
  },

  mounted() {
    window.addEventListener('scroll', () => {
      this.scrollTop = window.scrollY;
    });
    window.addEventListener('resize', () => {
      this.windowHeight = window.innerHeight;
    });
  },
};
</script>

<style lang="less">
.van-doc-simulator {
  position: absolute;
  top: calc(var(--mi-doc-padding) + var(--mi-doc-header-top-height));
  right: var(--mi-doc-padding);
  z-index: 1;
  box-sizing: border-box;
  width: var(--mi-doc-simulator-width);
  min-width: var(--mi-doc-simulator-width);
  height: calc(100vh - 95px - var(--mi-doc-padding));
  overflow: hidden;
  background: var(--mi-doc-background-2);
  border-radius: var(--mi-doc-border-radius);

  @media (max-width: 1100px) {
    right: auto;
    left: 750px;
  }

  @media (min-width: var(--mi-doc-row-max-width)) {
    right: 50%;
    margin-right: calc(var(--mi-doc-row-max-width) / 2 * -1 + 24px);
  }

  &-fixed {
    position: fixed;
    top: var(--mi-doc-padding);
    top: 95px
  }

  iframe {
    display: block;
    width: 100%;
    height: 100%;
  }
}
</style>
