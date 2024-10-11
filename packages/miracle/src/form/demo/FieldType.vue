<script setup lang="ts">
import { ref } from 'vue';
import { cdnURL, useTranslate } from '../../../docs/site';
import MiForm from '..';
import MiRate from '../../rate';
import MiRadio from '../../radio';
import MiField from '../../field';
import MiButton from '../../button';
import MiSlider from '../../slider';
import MiSwitch from '../../switch';
import MiStepper from '../../stepper';
import MiCheckbox from '../../checkbox';
import MiUploader from '../../uploader';
import MiCellGroup from '../../cell-group';
import MiRadioGroup from '../../radio-group';
import MiCheckboxGroup from '../../checkbox-group';
import FieldTypeArea from './FieldTypeArea.vue';
import FieldTypePicker from './FieldTypePicker.vue';
import FieldTypeCalendar from './FieldTypeCalendar.vue';
import FieldTypeDatePicker from './FieldTypeDatePicker.vue';

const t = useTranslate({
  'zh-CN': {
    rate: '评分',
    radio: '单选框',
    submit: '提交',
    switch: '开关',
    slider: '滑块',
    picker: '选择器',
    stepper: '步进器',
    checkbox: '复选框',
    uploader: '文件上传',
    fieldType: '表单项类型',
    checkboxGroup: '复选框组',
    requireCheckbox: '请勾选复选框',
  },
  'en-US': {
    rate: 'Rate',
    radio: 'Radio',
    submit: 'Submit',
    switch: 'Switch',
    slider: 'Slider',
    picker: 'Picker',
    stepper: 'Stepper',
    checkbox: 'Checkbox',
    uploader: 'Uploader',
    fieldType: 'Field Type',
    checkboxGroup: 'Checkbox Group',
    requireCheckbox: 'Checkbox is required',
  },
});

const rate = ref(3);
const radio = ref('1');
const slider = ref(50);
const stepper = ref(1);
const uploader = ref([{ url: cdnURL('avatar.jpg') }]);
const checkbox = ref(false);
const checkboxGroup = ref([]);
const switchChecked = ref(false);

const onSubmit = (values: Record<string, string>) => {
  console.log(values);
};
</script>

<template>
  <demo-block :title="t('fieldType')">
    <mi-form @submit="onSubmit">
      <mi-cell-group inset>
        <mi-field name="switch" :label="t('switch')">
          <template #input>
            <mi-switch v-model="switchChecked" />
          </template>
        </mi-field>

        <mi-field name="checkbox" :label="t('checkbox')">
          <template #input>
            <mi-checkbox v-model="checkbox" shape="square" />
          </template>
        </mi-field>

        <mi-field name="checkboxGroup" :label="t('checkboxGroup')">
          <template #input>
            <mi-checkbox-group v-model="checkboxGroup" direction="horizontal">
              <mi-checkbox name="1" shape="square">
                {{ t('checkbox') }} 1
              </mi-checkbox>
              <mi-checkbox name="2" shape="square">
                {{ t('checkbox') }} 2
              </mi-checkbox>
            </mi-checkbox-group>
          </template>
        </mi-field>

        <mi-field name="radio" :label="t('radio')">
          <template #input>
            <mi-radio-group v-model="radio" direction="horizontal">
              <mi-radio name="1">{{ t('radio') }} 1</mi-radio>
              <mi-radio name="2">{{ t('radio') }} 2</mi-radio>
            </mi-radio-group>
          </template>
        </mi-field>

        <mi-field name="stepper" :label="t('stepper')">
          <template #input>
            <mi-stepper v-model="stepper" />
          </template>
        </mi-field>

        <mi-field name="rate" :label="t('rate')">
          <template #input>
            <mi-rate v-model="rate" />
          </template>
        </mi-field>

        <mi-field name="slider" :label="t('slider')">
          <template #input>
            <mi-slider v-model="slider" />
          </template>
        </mi-field>

        <mi-field name="uploader" :label="t('uploader')">
          <template #input>
            <mi-uploader v-model="uploader" max-count="2" />
          </template>
        </mi-field>

        <field-type-picker />
        <field-type-date-picker />
        <field-type-area />
        <field-type-calendar />
      </mi-cell-group>

      <div style="margin: 16px 16px 0">
        <mi-button round block type="primary" native-type="submit">
          {{ t('submit') }}
        </mi-button>
      </div>
    </mi-form>
  </demo-block>
</template>
