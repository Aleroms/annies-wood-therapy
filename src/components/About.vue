<template>
  <section class="about-container">
    <ArticleCard :info="about" flexDirection="column-reverse" textColor="white"/>
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

<style lang="scss" scoped>
.about-container{
  margin: 1rem;
}
</style>
