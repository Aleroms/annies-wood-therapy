<template>
  <div class="card-body" :class="[flexDirection, backgroundColor]">
    <article class="card-content">
      <h2 class="title text-shadow">{{ info.title }}</h2>
      <div>
        <p class="content" :class="textColor">
          {{ info.content }}
        </p>
        <p class="benefit" v-if="info.benefit" :class="textColor">{{ info.benefit }}</p>
      </div>

      <ButtonItem v-if="info.showButton" :message="info.message" :link="info.link" class="link" />
      <h3 v-if="info.price" class="price white">
        ${{ info.price }} {{ $t('service_subtitle.hour') }}
      </h3>

      <h3 v-else-if="info.session" class="price">{{ info.session }}</h3>
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
    },
    backgroundColor: {
      type: String,
      required: true
    }
  },
  components: { ButtonItem }
}
</script>

<style lang="scss" scoped>
.price {
  margin-top: 10px;
}
.light-brown {
  background-color: var(--neutral-brown);
}
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
.brown {
  color: var(--very-dark-brown);
}

.image-wrapper {
  margin-top: 1.625rem;
  margin-right: 1.625rem;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    min-width: 275px;
    width: 90%;
    max-height: 500px;
    max-width: 500px;
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  }
}
.row {
  flex-direction: row;
}
.row-reverse {
  flex-direction: row-reverse;
}
@media (min-width: 1024px) {
  .card-body {
    align-items: center;
    justify-content: space-between;
    text-align: start;

    .content {
      line-height: 1.8rem;
    }
  }
  .card-content {
    max-width: 700px;
    margin: 0 1rem;
  }
  .image-wrapper img {
    min-width: 275px;
  }
}
</style>
