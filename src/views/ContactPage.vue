<template>
  <div class="page-layout">
    <Hero page="contact" />
    <Location />
    <Follow />
  </div>
</template>

<script>
import Hero from '../components/Hero.vue'
import Follow from '../components/Follow.vue'
import Location from '../components/LocationItem.vue'
export default {
  name: 'ContactPage',
  components: { Hero, Follow, Location }
}
</script>

<style lang="scss" scoped></style>
