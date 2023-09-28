<template>
  <section class="brown-container">
    <ArticleCard
      :info="localeObject"
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
    },
    localeObject() {
      return {
        title: this.$t('intro.title'),
        content: this.$t('intro.content'),
        image: this.$t('intro.image'),
        alt: this.$t('intro.alt'),
        showButton: false,
        link: '',
        message: '',
        benefit: ''
      }
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
