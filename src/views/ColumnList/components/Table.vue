<template>
  <a-table :columns="state.columns" :data-source="state.dataSource" :scroll="{ x: 1500, y: 300 }">
    <template #bodyCell="{ column }">
      <template v-if="column.key === 'operation'">
        <a>action</a>
      </template>
    </template>
  </a-table>
</template>
<script setup>
import { inject } from 'vue'
const state = inject('initSate')
</script>

