<template>
  <div class="wrap">
    <Home/>
  </div>
</template>

<script>
import Home from '@/views/Home'

export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style lang="scss">
  @import "~bootstrap/scss/bootstrap";
  @import "assets/style";
  @import "static/icon/iconfont.css";
</style>
