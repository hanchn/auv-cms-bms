<template>
  <a-table :columns="state.columns" :data-source="state.dataSource" :scroll="{ x: 1500, y: 300 }">
    <template #bodyCell="{ column }">
      <template v-if="column.key === 'operation'">
        <a-button type="link">编辑</a-button>
        <a-button type="link">子菜单</a-button>
        <a-button type="link">删除</a-button>
      </template>
    </template>
  </a-table>
</template>
<script setup>
import { inject } from 'vue'
const state = inject('initSate')
</script>

