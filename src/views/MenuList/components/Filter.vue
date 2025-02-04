<template>
  <div>
    <a-form
      ref="formRef"
      name="advanced_search"
      class="ant-advanced-search-form mb20"
      :model="formState"
      @finish="onFinish"
    >
      <a-row :gutter="24">
        <template v-for="(item, key) in state.formFilds" :key="key">
          <a-col v-show="state.expand || key <= 6" :span="8">
            <a-form-item
              :name="item.name"
              :label="item.label"
            >
              <a-input v-model:value="state.formState[`${item.name}`]" :placeholder="item.placeholder"></a-input>
            </a-form-item>
          </a-col>
        </template>
      </a-row>
      <a-row>
        <a-col :span="24" style="text-align: right">
          <a-button type="primary" class="mr8">批量操作</a-button>
          <a-button type="primary" class="mr8">新建菜单</a-button>
          <a-button type="primary" class="mr8" html-type="submit">搜索</a-button>
          <a-button @click="() => state.formRef.resetFields()">清除</a-button>
          <a class="fs12" @click="() => state.expandSet()" v-if="state.formFilds.length > 7">
            <template v-if="expand">
              <UpOutlined />
            </template>
            <template v-else>
              <DownOutlined />
            </template>
            Collapse
          </a>
        </a-col>
      </a-row>
    </a-form>
  </div>
</template>
<script setup>
import { inject } from 'vue';
import { DownOutlined, UpOutlined } from '@ant-design/icons-vue';
const state = inject('initSate');
</script>
<style scoped>
#components-form-demo-advanced-search .ant-form {
  max-width: none;
}
#components-form-demo-advanced-search .search-result-list {
  margin-top: 16px;
  border: 1px dashed #e9e9e9;
  border-radius: 2px;
  background-color: #fafafa;
  min-height: 200px;
  text-align: center;
  padding-top: 80px;
}
[data-theme='dark'] .ant-advanced-search-form {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid #434343;
  padding: 24px;
  border-radius: 2px;
}
[data-theme='dark'] #components-form-demo-advanced-search .search-result-list {
  border: 1px dashed #434343;
  background: rgba(255, 255, 255, 0.04);
}
</style>
