<template lang="html">
  <div id="index">
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
  name: 'home',
  data(){
    return {
      routes,
    }
  },
  methods: {
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
</style>
