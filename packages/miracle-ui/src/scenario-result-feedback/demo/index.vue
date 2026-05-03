<script setup lang="ts">
import MiNavBar from '../../nav-bar';
import MiEmpty from '../../empty';
import MiNoticeBar from '../../notice-bar';
import MiCellGroup from '../../cell-group';
import MiCell from '../../cell';
import MiButton from '../../button';
import MiActionBar from '../../action-bar';
import MiActionBarIcon from '../../action-bar-icon';
import MiActionBarButton from '../../action-bar-button';
import { showToast } from '../../toast';

const onPrimary = () => {
    showToast('继续提交');
};
</script>

<template>
    <div class="demo-scenario-result-feedback">
        <mi-nav-bar title="提交结果" left-arrow left-text="返回" />

        <mi-empty
            image="success"
            description="资料已提交，审核结果会通过短信通知"
        >
            <mi-button
                round
                type="primary"
                class="demo-scenario-result-feedback__button"
            >
                返回列表
            </mi-button>
        </mi-empty>

        <mi-notice-bar
            left-icon="info-o"
            text="预计 1 个工作日内完成审核，请保持手机号可接收短信"
        />

        <mi-cell-group inset title="提交信息">
            <mi-cell title="业务编号" value="APPLY-2026050301" />
            <mi-cell title="提交时间" value="2026-05-03 09:30" />
            <mi-cell title="当前状态" value="审核中" />
        </mi-cell-group>

        <mi-action-bar>
            <mi-action-bar-icon icon="records-o" text="记录" />
            <mi-action-bar-icon icon="service-o" text="客服" />
            <mi-action-bar-button
                type="primary"
                text="继续提交"
                @click="onPrimary"
            />
        </mi-action-bar>
    </div>
</template>

<style lang="less">
.demo-scenario-result-feedback {
    min-height: 100vh;
    padding-bottom: 64px;
    background: var(--mi-background);

    .mi-empty {
        padding: 42px 0 24px;
        background: var(--mi-background-2);
    }

    .mi-notice-bar {
        margin: 12px 0;
    }

    .mi-action-bar {
        position: fixed;
    }

    &__button {
        width: 148px;
        height: 40px;
    }
}
</style>
