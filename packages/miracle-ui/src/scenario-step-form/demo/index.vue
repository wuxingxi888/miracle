<script setup lang="ts">
import MiNavBar from '../../nav-bar';
import MiSteps from '../../steps';
import MiStep from '../../step';
import MiForm from '../../form';
import MiField from '../../field';
import MiCellGroup from '../../cell-group';
import MiButton from '../../button';
import MiTag from '../../tag';
import { ref } from 'vue';
import { showToast } from '../../toast';

const name = ref('李明');
const mobile = ref('138 0000 0000');
const date = ref('2026-05-08');
const store = ref('杭州西湖店');

const onSubmit = () => {
    showToast('已进入资料确认');
};
</script>

<template>
    <div class="demo-scenario-step-form">
        <mi-nav-bar title="预约报名" left-arrow left-text="返回" />

        <mi-steps :active="1">
            <mi-step>填写信息</mi-step>
            <mi-step>确认资料</mi-step>
            <mi-step>提交完成</mi-step>
        </mi-steps>

        <div class="demo-scenario-step-form__status">
            <span>当前资料</span>
            <mi-tag plain type="primary">待确认</mi-tag>
        </div>

        <mi-form @submit="onSubmit">
            <mi-cell-group inset title="基础信息">
                <mi-field
                    v-model="name"
                    name="name"
                    label="联系人"
                    placeholder="请输入姓名"
                    :rules="[{ required: true, message: '请输入联系人' }]"
                />
                <mi-field
                    v-model="mobile"
                    name="mobile"
                    label="手机号"
                    placeholder="请输入手机号"
                    :rules="[{ required: true, message: '请输入手机号' }]"
                />
            </mi-cell-group>

            <mi-cell-group inset title="预约信息">
                <mi-field
                    v-model="date"
                    readonly
                    is-link
                    name="date"
                    label="到店日期"
                    placeholder="请选择日期"
                />
                <mi-field
                    v-model="store"
                    readonly
                    is-link
                    name="store"
                    label="预约门店"
                    placeholder="请选择门店"
                />
            </mi-cell-group>

            <div class="demo-scenario-step-form__action">
                <mi-button round block type="primary" native-type="submit">
                    下一步
                </mi-button>
            </div>
        </mi-form>
    </div>
</template>

<style lang="less">
.demo-scenario-step-form {
    min-height: 100vh;
    background: var(--mi-background);

    .mi-steps {
        padding: 20px 16px;
        background: var(--mi-background-2);
    }

    &__status {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 12px 16px;
        color: var(--mi-text-color-2);
        font-size: 14px;
    }

    &__action {
        margin: 20px 16px 0;
    }
}
</style>
