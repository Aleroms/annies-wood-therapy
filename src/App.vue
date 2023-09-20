<script>
import Navbar from './components/Navbar.vue'
import FooterItem from './components/FooterItem.vue'
export default {
  name: 'App',
  components: { Navbar, FooterItem }
}
</script>

<template>
  <header id="header"><Navbar /></header>
  <main id="main">
    <RouterView />
  </main>
  <footer id="footer">
    <FooterItem />
  </footer>
</template>

<style lang="scss">

</style>
