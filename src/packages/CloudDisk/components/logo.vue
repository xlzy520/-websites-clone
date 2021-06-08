<template>
  <img :src="logo" alt="logo" draggable="false">
</template>

<script setup>
import { useImportPath } from '@/utils'

const logo = useImportPath('img/CloudDisk/logo.png')
</script>

<style scoped>

</style>
