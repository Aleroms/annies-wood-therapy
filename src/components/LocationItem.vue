<template>
  <section class="location brown-container" id="location">
    <img src="/images/rancho.png" alt="rancho santa margarita" aria-hidden="true" />
    <div class="location-container">
      <h2 class="title">{{ $t('service_area.title') }}</h2>
      <p class="content">{{ $t('service_area.content') }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LocationItem'
}
</script>

<style lang="scss" scoped>
.location {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  padding: 1rem;
  line-height: 1.8rem;

  // margin-bottom: 2rem;
  img {
    width: 300px;
    height: 300px;
    border-radius: 15px;
    margin-bottom: 1rem;
  }
}
.location-container {
  max-width: 600px;
  color: ivory;
}
@media (min-width: 768px) {
  .location {
    flex-direction: row;
  }
}
</style>
