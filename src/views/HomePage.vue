<script>
import Hero from '../components/Hero.vue'
import Introduction from '../components/Introduction.vue'
import About from '../components/About.vue'
import Follow from '../components/Follow.vue'
import ServicesCarousel from '../components/ServicesCarousel.vue'
export default {
  name: 'HomePage',
  components: { Hero, Introduction, About, Follow, ServicesCarousel }
}
</script>

<template>
  <div class="homepage">
    <Hero page="homepage" />
    <Introduction />
    <About />
    <section class="services-carousel-container brown-container">
      <h2>Services</h2>
      <ServicesCarousel />
    </section>
    <Follow />
  </div>
</template>
