<script setup lang="ts">
import MiField from '..';
import MiCellGroup from '../../cell-group';
import { ref } from 'vue';
import { useTranslate } from '../../../docs/site';

const t = useTranslate({
  'zh-CN': {
    label: '文本',
    placeholder: '请输入文本',
  },
  'en-US': {
    label: 'Label',
    placeholder: 'Text',
  },
});

const value = ref('');
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <mi-cell-group inset>
      <mi-field
        v-model="value"
        :label="t('label')"
        :placeholder="t('placeholder')"
      />
    </mi-cell-group>
  </demo-block>
</template>
