<template>
  <a-modal v-model:open="state.editModalOpen" :title="state.editModalTitle" @ok="state.editModalHandle">
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-modal>
</template>
<script setup>
</script>
<style scoped></style>