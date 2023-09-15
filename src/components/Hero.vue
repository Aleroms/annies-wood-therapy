<template>
  <section class="hero-container">
    <h1>{{ heroItem.title }}</h1>
    <h2>ANNIE'S WOOD THERAPY</h2>
    <ButtonItem
      :link="heroItem.link"
      :message="heroItem.message"
      v-if="heroItem.showButton" class="link"
    />
  </section>
</template>

<script>
import ButtonItem from './ButtonItem.vue'
import HERO_DATA from '@/assets/data/hero.json'
export default {
  name: 'HeroItem',
  props: {
    page: {
      type: String,
      required: true
    }
  },
  components: { ButtonItem },
  data() {
    return {
      hero: HERO_DATA,
      heroItem: {} // initialized empty obj to hold current item data
    }
  },
  mounted() {
    this.heroItem = this.hero.find((item) => item.id === this.page)
  }
}
</script>

<style lang="scss" scoped></style>
