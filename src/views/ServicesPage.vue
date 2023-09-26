<template>
  <div class="page-layout">
    <Hero page="services" />
    <Services />
  </div>
</template>

<script>
import Hero from '../components/Hero.vue'
import Services from '../components/Services.vue'
export default {
  name: 'ServicesPage',
  components: { Hero, Services }
}
</script>

<style lang="scss" scoped></style>
