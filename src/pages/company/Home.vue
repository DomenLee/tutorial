<template>
  <div>
    <background>
      <div class="info-content">
        
      </div>
    </background>
  </div>
</template>

<script>

  import Background from '@/components/VaryingBackground'

  export default {
    name: 'home',
    data () {
      return {}
    },
    components: {
      Background
    },
    methods: {

    },
    mounted () {
      this.$store.dispatch('changeTitle', '主页')
    }
  }

</script>

<style scoped>
  .info-content {
    padding: .24rem 0;
  }
</style>
