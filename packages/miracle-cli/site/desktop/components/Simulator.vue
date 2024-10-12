<template>
  <div :class="['mi-doc-simulator', { 'mi-doc-simulator-fixed': isFixed }]">
    <iframe ref="iframe" :src="src" :style="simulatorStyle" frameborder="0" />
  </div>
</template>

<script>
export default {
  name: 'MiDocSimulator',

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
      return this.scrollTop > -1;
    },

    simulatorStyle() {
      const height = Math.max(640, this.windowHeight - 120);
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
.mi-doc-simulator {
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

  // @media (max-width: 1100px) {
  //   right: auto;
  //   left: 750px;
  // }

  // @media (min-width: var(--mi-doc-row-max-width)) {
  //   right: 50%;
  //   margin-right: calc(var(--mi-doc-row-max-width) / 2 * -1 + 24px);
  // }

  &-fixed {
    position: fixed;
    top: var(--mi-doc-padding);
    top: 95px;
  }

  iframe {
    display: block;
    width: 100%;
    height: 100%;
  }
}
</style>
