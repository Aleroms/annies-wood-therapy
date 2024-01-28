<script>
import Navbar from './components/Navbar.vue'
import FooterItem from './components/FooterItem.vue'
export default {
  name: 'App',
  components: { Navbar, FooterItem }
}
</script>

<template>
  <Navbar />
  <main id="main">
    <RouterView />
  </main>
  <footer id="footer">
    <FooterItem />
  </footer>
</template>

<style lang="scss">
main {
  background: rgb(64, 6, 1);
  background: linear-gradient(
    0deg,
    rgba(64, 6, 1, 1) 0%,
    rgba(115, 32, 2, 1) 35%,
    rgba(217, 141, 98, 1) 100%
  );
}
</style>
