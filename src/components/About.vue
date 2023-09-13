<template>
  <section class="about-container">
    <ArticleCard :info="about" />
  </section>
</template>

<script>
import ArticleCard from './ArticleCard.vue'
import ABOUT_DATA from '@/assets/data/about.json'
export default {
  name: 'AboutItem',
  components: { ArticleCard },
  data() {
    return {
      about: ABOUT_DATA
    }
  }
}
</script>

<style lang="scss" scoped></style>
