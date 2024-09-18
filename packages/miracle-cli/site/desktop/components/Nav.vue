<template>
  <div :class="['van-doc-nav', { 'van-doc-nav-fixed': true }]">
    <div
      v-for="(group, index) in navConfig"
      class="van-doc-nav__group"
      :key="index"
    >
      <div class="van-doc-nav__title">
        {{ group.title }}
      </div>
      <template v-if="group.items">
        <div
          v-for="(item, groupIndex) in group.items"
          :key="groupIndex"
          class="van-doc-nav__item"
        >
          <van-doc-nav-link :item="item" :base="base" />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import NavLink from './NavLink.vue';

export default {
  name: 'VanDocNav',

  components: {
    [NavLink.name]: NavLink,
  },

  props: {
    lang: String,
    navConfig: Array,
  },

  data() {
    return {
      isFixed: false,
    };
  },

  computed: {
    base() {
      return this.lang ? `/${this.lang}/` : '/';
    },
  },

  created() {
    window.addEventListener('scroll', this.onScroll);
    this.onScroll();
  },

  methods: {
    onScroll() {
      const { pageYOffset: offset } = window;
      this.isFixed = offset > 95;
    },
  },
};
</script>

<style lang="less">
.van-doc-nav {
  position: absolute;
  left: 30px;
  top: var(--mi-doc-header-top-height);
  bottom: 0;
  z-index: 1;
  min-width: var(--mi-doc-nav-width);
  max-width: var(--mi-doc-nav-width);
  height: calc(100vh - 95px - var(--mi-doc-padding));
  border-radius: var(--mi-doc-border-radius);
  overflow-y: scroll;
  background-color: var(--mi-doc-background-2);

  @media (min-width: var(--mi-doc-row-max-width)) {
    left: 50%;
    margin-left: calc((var(--mi-doc-row-max-width) / 2 * -1));
  }

  &.van-doc-nav-fixed {
    position: fixed;
    top: 95px;
  }

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 6px;
  }

  &:hover::-webkit-scrollbar-thumb {
    background-color: rgba(69, 90, 100, 0.2);
  }

  &__group {
    margin-bottom: 16px;
    padding-left: 6px;
  }

  &__title {
    padding: 24px 0 0 var(--mi-doc-padding);
    color: var(--mi-doc-text-color-2);
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
  }

  &__item {
    a {
      display: block;
      margin: 4px 0;
      padding: 6px 0 6px var(--mi-doc-padding);
      color: var(--mi-doc-text-color-3);
      font-size: 14px;
      line-height: 20px;
      transition: color 0.2s;

      &:hover,
      &.active {
        color: var(--mi-doc-link-color);
      }

      &.active {
        font-weight: 600;
      }

      span {
        font-size: 13px;
      }
    }
  }

  @media (max-width: 1300px) {
    &__item {
      a {
        font-size: 13px;
      }

      &:active {
        font-size: 14px;
      }
    }
  }
}
</style>
