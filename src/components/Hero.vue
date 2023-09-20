<template>
  <section class="hero-container">
    <h1>{{ heroItem.title }}</h1>
    <h2>ANNIE'S WOOD THERAPY</h2>
    <ButtonItem
      :link="heroItem.link"
      :message="heroItem.message"
      v-if="heroItem.showButton"
      class="link"
    />
  </section>
  <horizontalRule />
</template>

<script>
import ButtonItem from './ButtonItem.vue'
import horizontalRule from './horizontalRule.vue'
import HERO_DATA from '@/assets/data/hero.json'
export default {
  name: 'HeroItem',
  props: {
    page: {
      type: String,
      required: true
    }
  },
  components: { ButtonItem, horizontalRule },
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

<style lang="scss" scoped>
.hero-container {
  margin-top: 88px;
  padding: 3rem 1rem;
  h1 {
    font-size: 65px;
  }
  h2 {
    font-size: 22px;
    margin-bottom: 1rem;
  }

  background-image: url('/images/hero-background.jpg');
  background-position: center;
  background-size: cover;
  text-align: center;
  text-shadow: 1px 1px 5px black;
}
</style>
