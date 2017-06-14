<template>
  <header>
    <background>
      <div class="header">
        <slot name="left">
          <i class="fa fa-chevron-left" aria-hidden="true"></i>
        </slot>
        <span>{{ header.title }}</span>
        <slot name="right"></slot>
      </div>
    </background>
  </header>
</template>
<script>
import Background from '@/components/VaryingBackground'
import { mapGetters } from 'vuex'

export default {
  components: {
    Background
  },
  computed: {
    ...mapGetters({
      header: 'header'
    })
  }
}
</script>
<style scope>
header {
  width: 100%;
  font-size: .22rem;
  height: .42rem;
  overflow: hidden;
  position: fixed;
  left: 0;
  top: 0;
  color: #fff;
}

.header {
  padding: .1rem .1rem;
}
</style>
