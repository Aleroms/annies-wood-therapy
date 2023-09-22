<template>
  <section class="qualification-container">
    <div class="description">you can be sure in my abilities as i am qualified</div>
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
.qualification-container {
  margin: 1rem;
  padding: 1rem;
}
.description {
  margin-bottom: 1rem;
  color: ivory;
}
.qualification-list {
  background-color: lightgray;
  border: 1px solid grey;
  border-radius: 5px;
}
.list-header {
  padding: 5px;
}
.list-content {
  padding: 0.625rem;
}
</style>
