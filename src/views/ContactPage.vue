<template>
  <Hero page="contact" />
  <Follow />
</template>

<script>
import Hero from '../components/Hero.vue'
import Follow from '../components/Follow.vue'
export default {
  name: 'ContactPage',
  components: { Hero, Follow }
}
</script>

<style lang="scss" scoped></style>
