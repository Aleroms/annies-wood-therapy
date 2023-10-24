<template>
  <div class="about-container page-layout">
    <Hero page="about" />
    <About />
    <Qualifications />
    <Location />
    <Services />
    <Follow />
  </div>
</template>

<script>
import Hero from '../components/Hero.vue'
import About from '../components/About.vue'
import Services from '../components/Services.vue'
import Follow from '../components/Follow.vue'
import Qualifications from '../components/Qualifications.vue'
import Location from '../components/LocationItem.vue'
export default {
  name: 'AboutPage',
  components: { Hero, About, Services, Follow, Qualifications, Location }
}
</script>

<style lang="scss" scoped></style>
