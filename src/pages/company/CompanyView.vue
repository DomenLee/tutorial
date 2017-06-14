<template>
  <div>
    <g-header></g-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  components: {
    'g-header': Header
  }
}
</script>

<style>

</style>
