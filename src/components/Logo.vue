<template>
  <div class="logo">
    <RouterLink to="/" class="nav-link">
      <h2>Annie's</h2>
      <h3>Wood Therapy</h3>
    </RouterLink>
  </div>
</template>

<script>
export default {
  name: 'LogoItem'
}
</script>

<style lang="scss" scoped>
.logo{
  display: flex;
  h3{
    padding-bottom: 5px;
  }
}
</style>
