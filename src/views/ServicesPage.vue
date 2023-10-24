<template>
  <div class="page-layout">
    <Hero page="services" />
    <Location />
    <Services />
  </div>
</template>

<script>
import Hero from '../components/Hero.vue'
import Services from '../components/Services.vue'
import Location from '../components/LocationItem.vue'
export default {
  name: 'ServicesPage',
  components: { Hero, Services, Location }
}
</script>

<style lang="scss" scoped></style>
