<!--栏目列表-->
<template>
  <div>
    <Filter/>
    <Table/>
  </div>
</template>
<script setup>
import { reactive, provide, onMounted } from 'vue'
import Filter from './components/Filter.vue'
import Table from './components/Table.vue'
const state = reactive({
  formFilds: [{
    name: 'title',
    label: '标题',
    placeholder: '请输入...',
    options: [],
    fildType: 'input',
  },{
    name: 'author',
    label: '作者',
    placeholder: '请输入...',
    options: [],
    fildType: 'input',
  },{
    name: 'date',
    label: '日期',
    placeholder: '请输入...',
    options: [],
    fildType: 'input',
  }],
  formRef: {},
  expand: false,
  formState: {},
  onFinish: () => { },
  expandSet: (expand = false) => { state.expand = expand },
  columns: [
  //{ title: 'ID', width: 100, dataIndex: 'id', key: 'id', fixed: 'left' },
  { title: '标题', width: 100, dataIndex: 'title', key: 'title', fixed: 'left', align: 'center' },
  { title: '描述', dataIndex: 'desc', key: '1', width: 150 },
  { title: '启用状态', dataIndex: 'status', key: '2', width: 150 },
  { title: '创建日期', dataIndex: 'date', key: '3', width: 150 },
  {
    title: '操作',
    key: 'operation',
    fixed: 'right',
    width: 100,
    align: 'center'
  },],
  dataSource: []
})
onMounted(() => {
  let data = []
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      name: `Edrward ${i}`,
      age: 32,
      address: `London Park no. ${i}`,
    });
  }
  state.dataSource = data
  console.log(state.dataSource) 
})
provide('initSate', state)
</script>
<style scoped></style>