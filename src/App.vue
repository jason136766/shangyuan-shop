<template>
  <div id="app">
    <router-view/>
    <Footer v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
  import Footer from '@/components/layouts/Footer'
  export default {
    name: 'App',
    components: {
      Footer
    }
  }
</script>

<style lang="scss">
  @import "~bootstrap/scss/bootstrap";
  @import "assets/style";
  @import "static/icon/iconfont.css";
</style>
