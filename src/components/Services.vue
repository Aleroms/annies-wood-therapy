<template>
  <section class="services-container">
    <h2 class="title">{{ $t('nav.services') }}</h2>
    <p class="subtitle">
      {{ $t('service_subtitle.content') }}
    </p>
    <div class="services-list">
      <ArticleCard
        v-for="(service, index) in localeObject"
        :key="index"
        :info="service"
        :flexDirection="direction"
        textColor="white"
        backgroundColor="brown"
      />
    </div>
  </section>
</template>

<script>
import ArticleCard from './ArticleCard.vue'
import SERVICES_DATA from '@/assets/data/services.json'
import SERVICE_SUBTITLE from '@/assets/data/service_subtitle.json'
export default {
  name: 'ServiceItem',
  components: { ArticleCard },
  data() {
    return {
      services: SERVICES_DATA,
      subtitle: SERVICE_SUBTITLE,
      windowWidth: window.innerWidth
    }
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth
    }
  },
  computed: {
    direction() {
      let dir = 'column-reverse'
      if (this.windowWidth >= 768) {
        dir = 'row-reverse'
      }
      return dir
    },
    localeObject() {
      let retArr = []
      for (let i = 0; i < this.services.length; i++) {
        let tmp = {
          title: this.$t(`services[${i}].title`),
          content: this.$t(`services[${i}].content`),
          benefit: this.$t(`services[${i}].benefit`),
          image: this.services[i].image,
          alt: this.services[i].alt,
          price: this.services[i].price,
          session: this.$t(`services[${i}].session`)
        }
        retArr.push(tmp)
      }

      return retArr
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
.services-container {
  background-color: var(--light-brown);
  padding: 2rem 1rem;
  text-align: center;
}
.title {
  margin-bottom: 1rem;
}
.subtitle {
  color: ivory;
  max-width: 1000px;
}
@media (min-width: 1024px) {
  .services-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .subtitle {
    line-height: 1.8rem;
  }
}
</style>
