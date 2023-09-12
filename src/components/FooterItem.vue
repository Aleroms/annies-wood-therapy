<template>
  <div class="footer-container">
    <Logo />
    <div class="links-container">
      <p>About</p>
      <p>Services</p>
      <p>Contact</p>
    </div>
  </div>
</template>

<script>
import Logo from './Logo.vue'
export default {
  name: 'FooterItem',
  components: { Logo }
}
</script>

<style lang="scss" scoped></style>
