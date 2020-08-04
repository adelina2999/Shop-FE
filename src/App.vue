<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <Home />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Header,
    Home
  }
}
</script>
