<!--栏目列表-->
<template>
  <div>
    <Filter/>
    <Table/>
  </div>
</template>
<script setup>
import { initData } from './const.js'
console.log('static ', staticData)
import { reactive, provide } from 'vue'
import Filter from './components/Filter.vue'
import Table from './components/Table.vue'
const state = reactive({
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