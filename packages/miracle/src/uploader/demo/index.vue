<script setup lang="ts">
import MiUploader from '..';
import MiButton from '../../button';
import { ref } from 'vue';
import { cdnURL, useTranslate } from '../../../docs/site';
import { UploaderFileListItem } from '../types';
import { showToast } from '../../toast';

const t = useTranslate({
  'zh-CN': {
    status: '上传状态',
    failed: '上传失败',
    upload: '上传文件',
    preview: '文件预览',
    maxSize: '限制上传大小',
    disabled: '禁用文件上传',
    maxCount: '限制上传数量',
    uploading: '上传中...',
    imageName: '图片名称',
    beforeRead: '上传前置处理',
    overSizeTip: '文件大小不能超过 500kb',
    invalidType: '请上传 jpg 格式图片',
    customUpload: '自定义上传样式',
    previewSize: '自定义预览大小',
    previewCover: '自定义预览样式',
    deleteMessage: '删除前置处理',
    customPreviewImage: '自定义单个图片预览',
    reupload: '开启覆盖上传',
  },
  'en-US': {
    status: 'Upload Status',
    failed: 'Failed',
    upload: 'Upload File',
    preview: 'Preview File',
    maxSize: 'Max Size',
    disabled: 'Disable Uploader',
    maxCount: 'Max Count',
    uploading: 'Uploading...',
    imageName: 'Image Name',
    beforeRead: 'Before Read',
    overSizeTip: 'File size cannot exceed 500kb',
    invalidType: 'Please upload an image in jpg format',
    customUpload: 'Custom Upload Area',
    previewSize: 'Preview Size',
    previewCover: 'Preview Cover',
    deleteMessage: 'Before Delete',
    customPreviewImage: 'Custom single preview image',
    reupload: 'Enable Reupload',
  },
});

const fileList = ref([
  { url: cdnURL('avatar.jpg') },
  { url: cdnURL('avatar.jpg') },
]);

const fileList2 = ref([{ url: cdnURL('avatar.jpg') }]);

const fileList3 = ref([]);

const fileList4 = ref([{ url: cdnURL('avatar.jpg') }]);

const fileList5 = ref<UploaderFileListItem[]>([
  {
    url: cdnURL('avatar.jpg'),
    deletable: true,
    beforeDelete: () => {
      showToast(t('deleteMessage'));
    },
  },
  {
    url: cdnURL('avatar.jpg'),
    imageFit: 'contain',
  },
]);

const statusFileList = ref<UploaderFileListItem[]>([
  {
    url: cdnURL('avatar.jpg'),
    status: 'uploading',
    message: t('uploading'),
  },
  {
    url: cdnURL('avatar.jpg'),
    status: 'failed',
    message: t('failed'),
  },
]);

const previewCoverFiles = ref<UploaderFileListItem[]>([
  {
    url: cdnURL('avatar.jpg'),
    file: {
      name: t('imageName'),
    } as File,
  },
]);

const previewSizeFiles = ref<UploaderFileListItem[]>([
  {
    url: cdnURL('avatar.jpg'),
  },
]);

const beforeRead = (file: File | File[]) => {
  if (Array.isArray(file)) {
    return true;
  }
  if (file.type !== 'image/jpeg') {
    showToast(t('invalidType'));
    return false;
  }
  return true;
};

const afterRead = (
  file: UploaderFileListItem | UploaderFileListItem[],
  detail: unknown,
) => {
  console.log(file, detail);
};

const setItemLoading = (item: UploaderFileListItem) => {
  item.status = 'uploading';
  item.message = t('uploading');

  setTimeout(() => {
    item.status = 'failed';
    item.message = t('failed');
  }, 1000);
};

const afterReadFailed = (
  item: UploaderFileListItem | UploaderFileListItem[],
) => {
  if (Array.isArray(item)) {
    item.forEach(setItemLoading);
  } else {
    setItemLoading(item);
  }
};

const onOversize = (file: UploaderFileListItem, detail: unknown) => {
  console.log(file, detail);
  showToast(t('overSizeTip'));
};

const fileList6 = ref([{ url: cdnURL('avatar.jpg') }]);
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <mi-uploader :after-read="afterRead" />
  </demo-block>

  <demo-block :title="t('preview')">
    <mi-uploader v-model="fileList" multiple accept="*" />
  </demo-block>

  <demo-block :title="t('status')">
    <mi-uploader v-model="statusFileList" :after-read="afterReadFailed" />
  </demo-block>

  <demo-block :title="t('maxCount')">
    <mi-uploader v-model="fileList2" multiple :max-count="2" />
  </demo-block>

  <demo-block :title="t('maxSize')">
    <mi-uploader
      v-model="fileList4"
      multiple
      :max-size="500 * 1024"
      @oversize="onOversize"
    />
  </demo-block>

  <demo-block :title="t('customUpload')">
    <mi-uploader>
      <mi-button type="primary" icon="plus">
        {{ t('upload') }}
      </mi-button>
    </mi-uploader>
  </demo-block>

  <demo-block :title="t('previewCover')">
    <mi-uploader v-model="previewCoverFiles">
      <template #preview-cover="{ file }">
        <div class="preview-cover mi-ellipsis">{{ file.name }}</div>
      </template>
    </mi-uploader>
  </demo-block>

  <demo-block :title="t('previewSize')">
    <mi-uploader v-model="previewSizeFiles" preview-size="60" />
  </demo-block>

  <demo-block :title="t('beforeRead')">
    <mi-uploader v-model="fileList3" :before-read="beforeRead" />
  </demo-block>

  <demo-block :title="t('disabled')">
    <mi-uploader :after-read="afterRead" disabled />
  </demo-block>

  <demo-block :title="t('customPreviewImage')">
    <mi-uploader v-model="fileList5" multiple accept="*" :deletable="false" />
  </demo-block>

  <demo-block :title="t('reupload')">
    <mi-uploader v-model="fileList6" reupload max-count="2" />
  </demo-block>
</template>

<style lang="less">
.demo-uploader {
  background-color: var(--mi-background-2);

  .mi-uploader {
    margin-left: var(--mi-padding-md);
  }

  .preview-cover {
    position: absolute;
    bottom: 0;
    box-sizing: border-box;
    width: 100%;
    padding: 4px;
    color: #fff;
    font-size: 12px;
    text-align: center;
    background: rgba(0, 0, 0, 0.3);
  }
}
</style>
