<script setup>
import MiSpace from '..';
import MiButton from '../../button';
// import MiRadio from '../../radio';
// import MIRadioGroup from '../../radio-group';
import { ref } from 'vue';
import { useTranslate } from '../../../docs/site';

const t = useTranslate({
  'zh-CN': {
    vertical: '垂直排列',
    customSize: '自定义间距',
    align: '对齐方式',
    wrap: '自动换行',
  },
  'en-US': {
    vertical: 'Vertical',
    customSize: 'Custom Size',
    align: 'Alignment',
    wrap: 'Auto Wrap',
  },
});

const align = ref('center');
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <mi-space>
      <mi-button type="primary">{{ t('button') }}</mi-button>
      <mi-button type="primary">{{ t('button') }}</mi-button>
      <mi-button type="primary">{{ t('button') }}</mi-button>
      <mi-button type="primary">{{ t('button') }}</mi-button>
    </mi-space>
  </demo-block>

  <demo-block :title="t('vertical')">
    <mi-space direction="vertical" fill>
      <mi-button type="primary" block>{{ t('button') }}</mi-button>
      <mi-button type="primary" block>{{ t('button') }}</mi-button>
      <mi-button type="primary" block>{{ t('button') }}</mi-button>
    </mi-space>
  </demo-block>

  <demo-block :title="t('customSize')">
    <mi-space :size="20" style="margin-bottom: 16px">
      <mi-button type="primary">{{ t('button') }}</mi-button>
      <mi-button type="primary">{{ t('button') }}</mi-button>
      <mi-button type="primary">{{ t('button') }}</mi-button>
    </mi-space>

    <mi-space size="3rem">
      <mi-button type="primary">{{ t('button') }}</mi-button>
      <mi-button type="primary">{{ t('button') }}</mi-button>
      <mi-button type="primary">{{ t('button') }}</mi-button>
    </mi-space>
  </demo-block>

  <demo-block :title="t('align')">
    <!-- <mi-radio-group
      v-model="align"
      direction="horizontal"
      style="margin-bottom: 16px"
    >
      <mi-radio name="start">start</mi-radio>
      <mi-radio name="center">center</mi-radio>
      <mi-radio name="end">end</mi-radio>
      <mi-radio name="baseline">baseline</mi-radio>
    </mi-radio-group> -->
    <mi-space :align="align" style="padding: 16px; background: #f3f2f5">
      <mi-button type="primary">{{ align }}</mi-button>
      <div style="padding: 40px 20px; background: #fff">Block</div>
    </mi-space>
  </demo-block>

  <demo-block :title="t('wrap')">
    <mi-space wrap>
      <mi-button type="primary" block>{{ t('button') }}</mi-button>
      <mi-button type="primary" block>{{ t('button') }}</mi-button>
      <mi-button type="primary" block>{{ t('button') }}</mi-button>
      <mi-button type="primary" block>{{ t('button') }}</mi-button>
      <mi-button type="primary" block>{{ t('button') }}</mi-button>
      <mi-button type="primary" block>{{ t('button') }}</mi-button>
      <mi-button type="primary" block>{{ t('button') }}</mi-button>
      <mi-button type="primary" block>{{ t('button') }}</mi-button>
    </mi-space>
  </demo-block>
</template>

<style lang="less">
.demo-space {
  background: var(--mi-background-2);

  .mi-doc-demo-block {
    padding: 0 var(--mi-padding-md);
  }

  .mi-doc-demo-block__title {
    padding-left: 0;
  }
}
</style>
