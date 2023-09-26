<template>
  <section class="brown-container">
    <ArticleCard
      :info="introData"
      :flexDirection="direction"
      textColor="white"
      backgroundColor="lightBrown"
    />
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
      introData: INTRO_DATA,
      windowWidth: window.innerWidth
    }
  },
  computed: {
    direction() {
      let dir = 'column'
      if (this.windowWidth >= 1024) {
        dir = 'row-reverse'
      }
      return dir
    }
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
  },
  unmounted() {
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>

<style lang="scss" scoped></style>
