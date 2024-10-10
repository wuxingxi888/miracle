<script setup lang="ts">
import MiSteps from '..';
import MiStep from '../../step';
import MiButton from '../../button';
import { ref } from 'vue';
import { useTranslate } from '../../../docs/site';

const t = useTranslate({
  'zh-CN': {
    nextStep: '下一步',
    step1: '买家下单',
    step2: '商家接单',
    step3: '买家提货',
    step4: '交易完成',
    title2: '描述信息',
    title3: '竖向步骤条',
    status1: '【城市】物流状态1',
    status2: '【城市】物流状态',
    status3: '快件已发货',
    customStyle: '自定义样式',
  },
  'en-US': {
    nextStep: 'Next Step',
    step1: 'Step1',
    step2: 'Step2',
    step3: 'Step3',
    step4: 'Step4',
    title2: 'Description',
    title3: 'Vertical Steps',
    status1: '【City】Status1',
    status2: '【City】Status2',
    status3: '【City】Status3',
    customStyle: 'Custom Style',
  },
});

const active = ref(1);

const nextStep = () => {
  active.value = ++active.value % 4;
};
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <mi-steps :active="active">
      <mi-step>{{ t('step1') }}</mi-step>
      <mi-step>{{ t('step2') }}</mi-step>
      <mi-step>{{ t('step3') }}</mi-step>
      <mi-step>{{ t('step4') }}</mi-step>
    </mi-steps>

    <mi-button @click="nextStep">{{ t('nextStep') }}</mi-button>
  </demo-block>

  <demo-block :title="t('customStyle')">
    <mi-steps
      :active="active"
      active-icon="success"
      inactive-icon="arrow"
      active-color="#07c160"
    >
      <mi-step>{{ t('step1') }}</mi-step>
      <mi-step>{{ t('step2') }}</mi-step>
      <mi-step>{{ t('step3') }}</mi-step>
      <mi-step>{{ t('step4') }}</mi-step>
    </mi-steps>
  </demo-block>

  <demo-block :title="t('title3')">
    <mi-steps :active="0" direction="vertical">
      <mi-step>
        <h3>{{ t('status1') }}</h3>
        <p>2016-07-12 12:40</p>
      </mi-step>
      <mi-step>
        <h3>{{ t('status2') }}</h3>
        <p>2016-07-11 10:00</p>
      </mi-step>
      <mi-step>
        <h3>{{ t('status3') }}</h3>
        <p>2016-07-10 09:30</p>
      </mi-step>
    </mi-steps>
  </demo-block>
</template>

<style lang="less">
.demo-steps {
  .mi-button {
    margin: var(--mi-padding-md) 0 0 var(--mi-padding-md);
  }

  p,
  h3 {
    font-weight: normal;
    font-size: inherit;
  }
}
</style>
