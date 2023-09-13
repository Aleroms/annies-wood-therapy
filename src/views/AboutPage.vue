<template>
  <div class="about-container">
    <Hero page="about" />
    <About />
    <Qualifications />
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
export default {
  name: 'AboutPage',
  components: { Hero, About, Services, Follow, Qualifications }
}
</script>

<style lang="scss" scoped></style>
