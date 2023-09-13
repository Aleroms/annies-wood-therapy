<template>
  <nav class="navbar">
    <Logo />
    <div class="ddm">drop-down-menu</div>
    <NavigationLinks />
  </nav>
</template>

<script>
import Logo from './Logo.vue'
import NavigationLinks from './NavigationLinks.vue'
export default {
  name: 'NavbarItem',
  components: { Logo, NavigationLinks }
}
</script>

<style lang="scss" scoped></style>
