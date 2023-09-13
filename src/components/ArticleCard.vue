<template>
  <div class="card-body">
    <article class="card-content">
      <h3 class="title">{{ info.title }}</h3>
      <p class="content">
        {{ info.content }}
      </p>
      <p class="benefit" v-if="info.benefit">{{ info.benefit }}</p>
      <ButtonItem v-else-if="info.showButton" :message="info.message" :link="info.link" />
    </article>
    <div class="image-wrapper">
      <img :src="info.image" :alt="info.alt" />
    </div>
  </div>
</template>

<script>
import ButtonItem from './ButtonItem.vue'
export default {
  name: 'ArticleCard',
  props: {
    info: {
      type: Object,
      required: true
    }
  },
  components: { ButtonItem }
}
</script>

<style lang="scss" scoped></style>
