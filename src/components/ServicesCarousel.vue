<template>
  <div class="carousel-container">
    <swiper
      :slidesPerView="slidesPerView"
      :spaceBetween="30"
      :loop="true"
      :pagination="{ clickable: true }"
      :navigation="true"
      :modules="modules"
    >
      <SwiperSlide
        v-for="(service, index) in services"
        :key="index"
        :style="`background-image: url(${service.image})`"
      >
        <h2 class="slide-title">{{ $t(`services[${index}].title`) }}</h2>
        <div class="slide-container">
          <!-- <p class="slide-content">{{ $t(`services[${index}].content`) }}</p> -->
          <p class="slide-content">{{ truncateContent(index) }}</p>
        </div>
      </SwiperSlide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import SERVICES_DATA from '@/assets/data/services.json'

export default {
  name: 'ServicesCarousel',
  components: { Swiper, SwiperSlide },
  data() {
    return {
      services: SERVICES_DATA,
      modules: [Pagination, Navigation],
      windowWidth: window.innerWidth,
      charLimit: 140
    }
  },
  computed: {
    slidesPerView() {
      console.log(this.windowWidth)
      if (this.windowWidth <= 768) {
        return 1
      } else if (this.windowWidth <= 1024) {
        return 2
      }
      return 4
    }
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth
    },
    truncateContent(index) {
      const fullContent = this.$t(`services[${index}].content`)

      if (fullContent.length > this.charLimit) {
        return fullContent.substring(0, this.charLimit) + '...'
      }

      return fullContent
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
    console.log(this.$t('services[0].title'))
  },
  unmounted() {
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>

<style lang="scss" scoped>
.slide-title {
  margin: 1rem;
  font-size: 21px;
  z-index: 2;
}
.slide-container {
  padding: 1rem 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.carousel-container {
  margin: 1rem;
  padding: 0 1rem;
}
.swiper {
  height: 290px;
}
.swiper-slide {
  background-color: var(--dark-brown);
  background-position: center;
  background-size: cover;
  border-radius: 15px;
}
.slide-content {
  text-shadow: 1px 1px 5px black;
  color: ivory;
}
</style>
