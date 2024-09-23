<template>
  <router-link
    v-if="item.path"
    :class="{ active: isActive }"
    :to="computedPath"
    v-html="itemName"
  />
  <a v-else-if="item.link" :href="item.link" v-html="itemName"></a>
  <a v-else v-html="itemName"></a>
</template>

<script>
export default {
  name: 'DocNavLink',

  props: {
    base: String,
    item: Object,
  },

  computed: {
    itemName() {
      // 处理 item 名称，优先显示 title
      const [firstWord, ...restWords] = (
        this.item.title || this.item.name
      ).split(' ');
      return `${firstWord} <span>${restWords.join(' ')}</span>`;
    },

    computedPath() {
      // 拼接 base 和 item.path，若 item.path 不存在则返回空
      return this.item.path ? `${this.base}${this.item.path}` : '';
    },

    isActive() {
      // 简化 active 判断逻辑
      return (
        this.$route.path === this.computedPath ||
        (this.item.path === 'home' && this.$route.path === this.base)
      );
    },
  },

  watch: {
    isActive(newVal) {
      if (newVal) {
        this.scrollToView();
      }
    },
  },

  mounted() {
    if (this.isActive) {
      this.scrollToView();
    }
  },

  methods: {
    scrollToView() {
      // 使用 Vue 的 nextTick 确保视图更新后再操作 DOM
      this.$nextTick(() => {
        if (this.$el?.scrollIntoViewIfNeeded) {
          this.$el.scrollIntoViewIfNeeded();
        }
      });
    },
  },
};
</script>
