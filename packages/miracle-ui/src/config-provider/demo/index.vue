<script setup lang="ts">
import { ref } from 'vue';
import MiCell from '../../cell';
import MiForm from '../../form';
import MiField from '../../field';
import MiRate from '../../rate';
import MiSlider from '../../slider';
import MiButton from '../../button';
import MiConfigProvider from '..';
import { useTranslate } from '../../../docs/site';

const t = useTranslate({
    'zh-CN': {
        rate: '评分',
        slider: '滑块',
        switch: '开关',
        submit: '提交',
        customTheme: '定制主题',
        defaultTheme: '默认主题',
        darkMode: '深色模式',
        switchDarkMode: '请点击文档右上角的按钮，切换深浅模式。',
    },
    'en-US': {
        rate: 'Rate',
        slider: 'Slider',
        switch: 'Switch',
        submit: 'Submit',
        customTheme: 'Custom Theme',
        defaultTheme: 'DefaultTheme',
        darkMode: 'Dark Mode',
        switchDarkMode:
            'Please click the button in the upper right corner to switch between dark and light modes.',
    },
});

const rate = ref(4);
const slider = ref(50);
const themeVars = {
    rateIconFullColor: '#07c160',
    sliderBarHeight: '4px',
    sliderButtonWidth: '20px',
    sliderButtonHeight: '20px',
    sliderActiveBackground: '#07c160',
    buttonPrimaryBackground: '#07c160',
    buttonPrimaryBorderColor: '#07c160',
};
</script>

<template>
    <div :style="{ minHeight: '100vh' }">
        <demo-block :title="t('darkMode')">
            <mi-cell :title="t('switchDarkMode')" />
        </demo-block>

        <demo-block :title="t('defaultTheme')">
            <mi-form>
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

                <div style="margin: 16px">
                    <mi-button round block type="primary" native-type="submit">
                        {{ t('submit') }}
                    </mi-button>
                </div>
            </mi-form>
        </demo-block>

        <demo-block :title="t('customTheme')">
            <mi-config-provider :theme-vars="themeVars">
                <mi-form>
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

                    <div style="margin: 16px">
                        <mi-button
                            round
                            block
                            type="primary"
                            native-type="submit"
                        >
                            {{ t('submit') }}
                        </mi-button>
                    </div>
                </mi-form>
            </mi-config-provider>
        </demo-block>
    </div>
</template>

<style lang="less">
.demo-collapse {
    .mi-icon-question-o {
        margin-left: 5px;
        color: var(--mi-blue);
        font-size: 15px;
        vertical-align: -3px;
    }
}
</style>
