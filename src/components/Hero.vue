<template>
  <section class="hero-container">
    <!-- <h1>{{ heroItem.title }}</h1> -->
    <h1>{{ $t(`hero[${this.currentPage}].title`) }}</h1>
    <h2>Annie's Massage Therapy and Body Sculpting</h2>
    <ButtonItem
      :link="heroItem.link"
      :message="$t(`hero[${this.currentPage}].message`)"
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
      heroItem: {}, // initialized empty obj to hold current item data,
      currentPage: 0
    }
  },
  mounted() {
    this.currentPage = this.hero.findIndex((item) => item.id === this.page)
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
    text-wrap: wrap;
    width: 400px;
  }

  background-image: url('/images/hero-background.jpg');
  background-position: center;
  background-size: cover;
  text-align: center;
  text-shadow: 1px 1px 5px black;
}

@media (min-width: 1024px) {
  .hero-container {
    min-height: 240px;
    // background-position: bottom -370px right 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 90px;
    }
  }
}
</style>
