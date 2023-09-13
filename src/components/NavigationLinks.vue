<template>
  <div class="links-container">
    <RouterLink class="link" to="/about">About</RouterLink>
    <RouterLink class="link" to="/services">Services</RouterLink>
    <RouterLink class="link" to="/contact">Contact</RouterLink>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'NavigationLinks',
  components: { RouterLink }
}
</script>

<style lang="scss" scoped></style>
