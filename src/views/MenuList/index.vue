<!--栏目列表-->
<template>
  <div>
    <Filter/>
    <Table/>
    <EditModal/>
  </div>
</template>
<script setup>
import { initData } from './const.js'
import { reactive, provide } from 'vue'
import Filter from './components/Filter.vue'
import Table from './components/Table.vue'
import EditModal from './components/EditModal.vue'
const state = reactive({
  editModalTitle: '编辑',
  editModalOpen: false,
  editModalState: {},
  editModalHandle: () => { },
  dealModal: (open = false, isEdit = false, record = {}) => {
    state.editModalTitle = isEdit ? '编辑' : '新增'
    state.editModalOpen = open
    state.editModalState = {...record}
   },
  formFilds: [],
  formRef: {},
  expand: false,
  formState: {},
  onFinish: () => { },
  expandSet: (expand = false) => { state.expand = expand },
  columns: [],
  dataSource: [],
  ...initData
})

provide('initSate', state)
</script>
<style scoped></style>