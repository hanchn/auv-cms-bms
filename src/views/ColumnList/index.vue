<!--栏目列表-->
<template>
  <div>
    <Filter/>
    <Table/>
  </div>
</template>
<script setup>
import { reactive, provide } from 'vue'
import Filter from './components/Filter.vue'
import Table from './components/Table.vue'
const state = reactive({
  expand: false,
  formState: {},
  onFinish: () => { },
  expandSet: (expand = false) => { state.expand = expand },
})
provide('initSate', state)
</script>
<style scoped></style>