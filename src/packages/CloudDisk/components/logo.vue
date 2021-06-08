<template>
  <img :src="logo" alt="logo" draggable="false">
</template>

<script setup>
import { ref } from 'vue'
import logoImg from '../assets/logo.png'

const logo = logoImg
// export default defineComponent({
//   name: 'logo',
//   computed: {
//     logo() {
//       return require('../assets/img/' + this.$route.name + '/logo.png')
//     },
//   },
// })
</script>

<style scoped>

</style>
