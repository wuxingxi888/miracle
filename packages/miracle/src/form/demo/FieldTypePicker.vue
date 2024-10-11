<script setup lang="ts">
import MiField from '../../field';
import MiPopup from '../../popup';
import MiPicker, { PickerConfirmEventParams } from '../../picker';
import { ref } from 'vue';
import { useTranslate } from '../../../docs/site';
import { basicColumns } from '../../picker/demo/data';
import type { Numeric } from '../../utils';

const t = useTranslate({
  'zh-CN': {
    picker: '选择器',
    placeholder: '点击选择城市',
    textColumns: basicColumns['zh-CN'],
  },
  'en-US': {
    picker: 'Picker',
    placeholder: 'Select city',
    textColumns: basicColumns['en-US'],
  },
});

const result = ref<Numeric>('');
const showPicker = ref(false);

const onConfirm = ({ selectedOptions }: PickerConfirmEventParams) => {
  result.value = selectedOptions[0]?.text || '';
  showPicker.value = false;
};

const onCancel = () => {
  showPicker.value = false;
};
</script>

<template>
  <mi-field
    v-model="result"
    is-link
    readonly
    name="picker"
    :label="t('picker')"
    :placeholder="t('placeholder')"
    @click="showPicker = true"
  />
  <mi-popup v-model:show="showPicker" round position="bottom" teleport="body">
    <mi-picker
      :columns="t('textColumns')"
      @confirm="onConfirm"
      @cancel="onCancel"
    />
  </mi-popup>
</template>
