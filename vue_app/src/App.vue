<template>
  <Header />
  <Game />
  <Footer />
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Game from './pages/Game.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Game
  }
}
</script>

<style>

</style>
