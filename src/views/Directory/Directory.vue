<template>
  <div class="directory">
    <div class="directory-routes">
      <div class="directory-title">Util Demo</div>
      <router-link to="/typeWriter">typeWriter</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
console.log('router', router)
</script>

<style lang="scss" scoped>
.directory {
  margin-top: 150px;
  &-title {
    font-size: 22px;
    margin-bottom: 20px;
  }
  &-routes {
    width: 200px;
    display: flex;
    flex-direction: column;
  }
}
</style>
