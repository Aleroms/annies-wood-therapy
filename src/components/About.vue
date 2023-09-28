<template>
  <section class="about-container">
    <ArticleCard
      :info="localeObject"
      :flexDirection="direction"
      textColor="brown"
      backgroundColor="light-brown"
    />
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
      about: ABOUT_DATA,
      windowWidth: window.innerWidth
    }
  },
  computed: {
    direction() {
      let dir = 'column-reverse'
      if (this.windowWidth >= 1024) {
        dir = 'row'
      }
      return dir
    },
    localeObject() {
      return {
        title: this.$t('about.title'),
        content: this.$t('about.content'),
        image: this.$t('about.image'),
        alt: this.$t('about.alt'),
        showButton: true,
        link: 'contact',
        message: this.$t('about.message'),
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

<style lang="scss" scoped>
.about-container {
  padding: 1rem;
  background-color: var(--neutral-brown);
}
</style>
