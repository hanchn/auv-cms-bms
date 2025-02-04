<template>
  <a-table :columns="state.columns" :data-source="state.dataSource" :scroll="{ x: 1500, y: 300 }" :pagination="false">
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'operation'">
        <a-button type="link" @click="() => dealModal(true, true, {...record})">编辑</a-button>
        <a-button type="link">子菜单</a-button>
        <a-button type="link">删除</a-button>
      </template>
    </template>
  </a-table>
  <a-pagination
      class="pagination"
      v-model:current="state.pagination.current"
      v-model:page-size="state.pagination.pageSize"
      :total="state.pagination.total"
      :show-total="total => `总计 ${total} 条数据`"
    />
</template>
<script setup>
import { inject } from 'vue'
const state = inject('initSate')
</script>

