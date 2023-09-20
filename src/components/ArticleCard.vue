<template>
  <div class="card-body" :class="flexDirection">
    <article class="card-content">
      <h3 class="title text-shadow">{{ info.title }}</h3>
      <div>
        <p class="content" :class="textColor">
          {{ info.content }}
        </p>
        <p class="benefit" v-if="info.benefit" :class="textColor">{{ info.benefit }}</p>
      </div>

      <ButtonItem
        v-if="info.showButton"
        :message="info.message"
        :link="info.link"
        class="link"
      />
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
    },
    flexDirection: {
      type: String,
      required: true
    },
    textColor: {
      type: String,
      required: true
    }
  },
  components: { ButtonItem }
}
</script>

<style lang="scss" scoped>
.title {
  margin-top: 1.625rem;
}
.card-body {
  display: flex;
  flex-direction: column;
  padding: 1rem;
}
.card-content {
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

.content {
  margin: 1rem 0;
}
.column {
  flex-direction: column;
}
.column-reverse {
  flex-direction: column-reverse;
}
.white {
  color: ivory;
}

.image-wrapper {
  margin-top: 1.625rem;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 90%;
    max-width: 600px;
    max-width: 500px;
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  }
}
</style>
