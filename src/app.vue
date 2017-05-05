<template lang="html">
  <div class="app-root">
    ludic-demos
    <div class="demo" v-for="demo in demos">
      <router-link :to="{name:demo.name}">{{demo.meta.title}}</router-link>
    </div>
    <!-- demo games
    <div class="demo game" v-for="game in games">
      <router-link :to="{name:game.name}">{{game.meta.title}}</router-link>
    </div> -->
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
    },
    // games(){
    //   return this.routes.find(route => route.name === 'games').children
    // },
  }
}
</script>

<style lang="css">
body {
  margin: 0;
}
</style>
