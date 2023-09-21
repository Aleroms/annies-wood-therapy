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
      <SwiperSlide>slide 1</SwiperSlide>
      <SwiperSlide>slide 2</SwiperSlide>
      <SwiperSlide>slide 3</SwiperSlide>
      <SwiperSlide>slide 4</SwiperSlide>
      <SwiperSlide>slide 5</SwiperSlide>
      <SwiperSlide>slide 6</SwiperSlide>
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
      windowWidth: window.innerWidth
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
      return 3
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
.carousel-container {
  margin: 1rem;
  padding: 0 1rem;
}
.swiper {
  height: 350px;
}
.swiper-slide {
  background-color: var(--dark-brown);
}
</style>
