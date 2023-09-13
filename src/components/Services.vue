<template>
  <section class="services-container">
    <h2>services</h2>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis accusantium incidunt est
      necessitatibus repellendus cupiditate!
    </p>
    <div class="services-list">
      <ArticleCard v-for="(service, index) in services" :key="index" :info="service" />
    </div>
  </section>
</template>

<script>
import ArticleCard from './ArticleCard.vue'
import SERVICES_DATA from '@/assets/data/services.json'
export default {
  name: 'ServiceItem',
  components: { ArticleCard },
  data() {
    return {
      services: SERVICES_DATA
    }
  }
}
</script>

<style lang="scss" scoped></style>
