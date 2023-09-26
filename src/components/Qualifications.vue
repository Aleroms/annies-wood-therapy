<template>
  <section class="qualification-container">
    <div class="description">
      <h2 class="heading">At Annie's Wood Therapy, your well-being is our top priority.</h2>
      <p class="text-brown">
        With a commitment to ongoing learning and a passion for holistic healing, you can trust that
        your journey to wellness is in capable hands.
      </p>
      <p class="text-brown">
        Below, you'll find a list of my qualifications and certifications that ensure you receive
        safe, effective, and rejuvenating wood therapy and massage sessions.
      </p>
    </div>
    <QualificationAccordion />
  </section>
</template>

<script>
import QualificationAccordion from '@/components/QualificationAccordion.vue'
export default {
  name: 'QualificationItem',
  components: { QualificationAccordion }
}
</script>

<style lang="scss" scoped>
.heading{
  margin-bottom: 15px;
}
p{
  margin-bottom: 15px;
}
.qualification-container {
  padding: 2rem;
  background-color: var(--neutral-brown);
}
.description {
  margin-bottom: 1rem;
  color: ivory;
}
.qualification-list {
  background-color: lightgray;
  border: 1px solid grey;
  border-radius: 5px;
  margin: auto;
}
.list-header {
  padding: 5px;
}
.list-content {
  padding: 0.625rem;
}
@media(min-width:1024px){
  .qualification-container{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 4rem 2rem;
  }
  .description{
    max-width: 700px;
  }
}
</style>
