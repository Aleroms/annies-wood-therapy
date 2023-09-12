<script>
import Hero from '../components/Hero.vue'
import Introduction from '../components/Introduction.vue'
import About from '../components/About.vue'
import Services from '../components/Services.vue'
import Follow from '../components/Follow.vue'
export default {
  name: 'HomePage',
  components: { Hero, Introduction, About, Services, Follow }
}
</script>

<template>
  <div class="homepage">
    <Hero page="homepage" />
    <Introduction />
    <About />
    <Services />
    <Follow />
  </div>
</template>
