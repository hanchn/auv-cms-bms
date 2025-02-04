<!--栏目列表-->
<template>
  <div>
    <Filter/>
    <Table/>
  </div>
</template>
<script setup>
import { reactive } from 'vue'
import Filter from './components/Filter.vue'
import Table from './components/Table.vue'
const state = reactive({})
</script>
<style scoped></style>