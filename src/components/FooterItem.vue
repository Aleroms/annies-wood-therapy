<template>
  <div class="footer-container">
    <Logo />
    <div class="links-container">
      <NavigationLinks />
    </div>
  </div>
</template>

<script>
import Logo from './Logo.vue'
import NavigationLinks from './NavigationLinks.vue'
export default {
  name: 'FooterItem',
  components: { Logo, NavigationLinks }
}
</script>

<style lang="scss" scoped></style>
