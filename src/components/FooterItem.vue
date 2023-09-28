<template>
  <div class="footer-container">
    <Logo />
    <div class="links-container">
      <RouterLink class="link" to="/about">{{ $t('nav.about') }}</RouterLink>
      <RouterLink class="link" to="/services">{{ $t('nav.services') }}</RouterLink>
      <RouterLink class="link" to="/contact">{{ $t('nav.contact') }}</RouterLink>
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

<style lang="scss" scoped>
.footer-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: var(--very-dark-brown);

  .links-container {
    display: flex;
    flex-direction: column;
    margin-right: 1rem;
  }
  a {
    color: ivory;
    margin-bottom: 5px;
    transition: 0.3 ease-in-out;

    &:hover {
      transform: scale(1.2);
      margin: 0 5px;
    }
  }
}
@media (min-width: 768px) {
  .footer-container {
    justify-content: space-evenly;
    .links-container {
      flex-direction: row;

      a {
        margin-right: 15px;
        font-size: 22px;
        font-weight: 800;
      }
    }
  }
}
</style>
