<template lang="html">
  <div class="app-root">
    ludic-demos
    <div class="demo" v-for="demo in demos">
      <router-link :to="{name:demo.name}">{{demo.meta.title}}</router-link>
    </div>
  </div>
</template>

<script>
import routes from './routes'
export default {
  data(){
    return {
      routes,
    }
  },
  computed: {
    demos(){
      return this.routes.find(route => route.name === 'demos').children
    }
  }
}
</script>

<style lang="css">
</style>
