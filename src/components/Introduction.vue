<template>
  <section class="introduction-container">
    <ArticleCard :info="introData" />
  </section>
</template>

<script>
import ArticleCard from './ArticleCard.vue'
import INTRO_DATA from '@/assets/data/introduction.json'
export default {
  name: 'IntroductionItem',
  components: { ArticleCard },
  data() {
    return {
      introData: INTRO_DATA
    }
  }
}
</script>

<style lang="scss" scoped></style>
