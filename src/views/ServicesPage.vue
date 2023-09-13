<template>
  <Hero page="services" />
  <Services />
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
