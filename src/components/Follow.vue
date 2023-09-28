<template>
  <section class="follow-container">
    <div class="content">
      <h2>{{ $t('follow.title') }}</h2>
      <p class="text-brown center">{{ $t('follow.content') }}</p>
      <p class="text-brown center">{{ $t('follow.instagram') }}</p>
      <p class="text-brown center">{{ $t('follow.call_or_text') }}</p>
      <p class="text-brown center">{{ follow.phone_number }}</p>
    </div>
  </section>
</template>

<script>
import FOLLOW_DATA from '@/assets/data/follow.json'
export default {
  name: 'FollowItem',
  data() {
    return {
      follow: FOLLOW_DATA
    }
  }
}
</script>

<style lang="scss" scoped>
.follow-container {
  padding: 2rem;
  text-align: center;
  background-color: var(--neutral-brown);

  h2 {
    margin-bottom: 1rem;
  }
  p {
    margin: 0.625rem;
  }
}
@media (min-width: 1024px) {
  .follow-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .content {
    max-width: 850px;
    p {
      padding: 0 3rem;
    }
  }
}
</style>
