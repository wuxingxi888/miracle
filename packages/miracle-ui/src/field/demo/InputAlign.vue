<script setup lang="ts">
import MiField from '..';
import MiCellGroup from '../../cell-group';
import { ref } from 'vue';
import { useTranslate } from '../../../docs/site';

const t = useTranslate({
  'zh-CN': {
    text: '文本',
    inputAlign: '输入框内容对齐',
    alignPlaceHolder: '输入框内容右对齐',
  },
  'en-US': {
    text: 'Text',
    inputAlign: 'Input Align',
    alignPlaceHolder: 'Input Align Right',
  },
});

const value = ref('');
</script>

<template>
  <demo-block :title="t('inputAlign')">
    <mi-cell-group inset>
      <mi-field
        v-model="value"
        :label="t('text')"
        :placeholder="t('alignPlaceHolder')"
        input-align="right"
      />
    </mi-cell-group>
  </demo-block>
</template>
