<script setup lang="ts">
import MiForm from '..';
import MiField from '../../field';
import MiButton from '../../button';
import MiCellGroup from '../../cell-group';
import { ref } from 'vue';
import { useTranslate } from '../../../docs/site';
import { FieldValidateError } from '../../field/types';

const t = useTranslate({
  'zh-CN': {
    submit: '提交',
    username: '用户名',
    password: '密码',
    requireUsername: '请填写用户名',
    requirePassword: '请填写密码',
  },
  'en-US': {
    submit: 'Submit',
    username: 'Username',
    password: 'Password',
    requireUsername: 'Username is required',
    requirePassword: 'Password is required',
  },
});

const username = ref('');
const password = ref('');

const onSubmit = (values: Record<string, string>) => {
  console.log('submit', values);
};

const onFailed = (errorInfo: {
  values: Record<string, string>;
  errors: FieldValidateError[];
}) => {
  console.log('failed', errorInfo);
};
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <mi-form @submit="onSubmit" @failed="onFailed">
      <mi-cell-group inset>
        <mi-field
          v-model="username"
          name="username"
          :label="t('username')"
          :rules="[{ required: true, message: t('requireUsername') }]"
          :placeholder="t('username')"
        />
        <mi-field
          v-model="password"
          type="password"
          name="password"
          :label="t('password')"
          :rules="[{ required: true, message: t('requirePassword') }]"
          :placeholder="t('password')"
        />
      </mi-cell-group>

      <div style="margin: 16px 16px 0">
        <mi-button round block type="primary" native-type="submit">
          {{ t('submit') }}
        </mi-button>
      </div>
    </mi-form>
  </demo-block>
</template>
