<script setup lang="ts">
import MiNavBar from '../../nav-bar';
import MiNoticeBar from '../../notice-bar';
import MiCellGroup from '../../cell-group';
import MiCell from '../../cell';
import MiUploader from '../../uploader';
import MiTag from '../../tag';
import MiButton from '../../button';
import MiEmpty from '../../empty';
import { ref } from 'vue';
import { cdnURL } from '../../../docs/site';
import { showToast } from '../../toast';

const fileList = ref([
    { url: cdnURL('avatar.jpg') },
    { url: cdnURL('avatar.jpg') },
]);

const onSubmit = () => {
    showToast('资料已提交');
};
</script>

<template>
    <div class="demo-scenario-upload-submit">
        <mi-nav-bar title="资料上传" left-arrow left-text="返回" />

        <mi-notice-bar
            left-icon="info-o"
            text="请上传清晰、完整的证件照片，单次最多 3 张"
        />

        <mi-cell-group inset title="审核资料">
            <mi-cell title="资料状态">
                <template #value>
                    <mi-tag type="warning">待补充</mi-tag>
                </template>
            </mi-cell>
            <mi-cell title="上传凭证" label="支持身份证、营业执照、现场照片">
                <template #value>
                    <span>2/3</span>
                </template>
            </mi-cell>
            <div class="demo-scenario-upload-submit__uploader">
                <mi-uploader v-model="fileList" multiple :max-count="3" />
            </div>
        </mi-cell-group>

        <div class="demo-scenario-upload-submit__action">
            <mi-button round block type="primary" @click="onSubmit">
                提交审核
            </mi-button>
        </div>

        <mi-empty
            class="demo-scenario-upload-submit__result"
            description="提交后会通过短信通知审核结果"
        />
    </div>
</template>

<style lang="less">
.demo-scenario-upload-submit {
    min-height: 100vh;
    background: var(--mi-background);

    .mi-notice-bar {
        margin-bottom: 12px;
    }

    &__uploader {
        padding: 12px 16px 16px;
    }

    &__action {
        margin: 20px 16px 0;
    }

    &__result {
        margin-top: 12px;
        padding-top: 16px;
    }
}
</style>
