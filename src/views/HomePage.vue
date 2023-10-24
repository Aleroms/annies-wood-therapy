<script>
import Hero from '../components/Hero.vue'
import Introduction from '../components/Introduction.vue'
import About from '../components/About.vue'
import Follow from '../components/Follow.vue'
import ServicesCarousel from '../components/ServicesCarousel.vue'
import LocationItem from '../components/LocationItem.vue'
export default {
  name: 'HomePage',
  components: { Hero, Introduction, About, Follow, ServicesCarousel, LocationItem }
}
</script>

<template>
  <div class="homepage page-layout">
    <Hero page="homepage" />
    <Introduction />
    <About />
    <section class="services-carousel-container brown-container">
      <h2>{{ $t('nav.services') }}</h2>
      <ServicesCarousel />
    </section>
    <LocationItem />
    <Follow />
  </div>
</template>

<style lang="scss" scoped></style>
