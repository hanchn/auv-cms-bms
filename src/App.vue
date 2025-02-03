<template>
  <Layout>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </Layout>
</template>
<script setup>
import Layout from '@/layout/index.vue';
import { reactive } from 'vue'
const state = reactive({})
</script>
<style scoped></style>