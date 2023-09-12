<template>
  <nav class="navbar">
    <Logo />
    <div class="ddm">drop-down-menu</div>
  </nav>
</template>

<script>
import Logo from './Logo.vue'
export default {
  name: 'NavbarItem',
  components: { Logo }
}
</script>

<style lang="scss" scoped></style>
