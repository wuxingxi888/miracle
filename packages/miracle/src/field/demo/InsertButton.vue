<script setup lang="ts">
import MiField from '..';
import MiButton from '../../button';
import MiCellGroup from '../../cell-group';
import { ref } from 'vue';
import { useTranslate } from '../../../docs/site';

const t = useTranslate({
  'zh-CN': {
    sms: '短信验证码',
    sendSMS: '发送验证码',
    insertButton: '插入按钮',
    smsPlaceholder: '请输入短信验证码',
  },
  'en-US': {
    sms: 'SMS',
    sendSMS: 'Send SMS',
    insertButton: 'Insert Button',
    smsPlaceholder: 'SMS',
  },
});

const sms = ref('');
</script>

<template>
  <demo-block :title="t('insertButton')">
    <mi-cell-group inset>
      <mi-field
        v-model="sms"
        center
        clearable
        :label="t('sms')"
        :placeholder="t('smsPlaceholder')"
      >
        <template #button>
          <mi-button size="small" type="primary">
            {{ t('sendSMS') }}
          </mi-button>
        </template>
      </mi-field>
    </mi-cell-group>
  </demo-block>
</template>
