<template>
  <RouterLink :to="this.link" class="button">{{ message }}</RouterLink>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'ButtonItem',
  props: ['message', 'link'],
  components: { RouterLink }
}
</script>

<style lang="scss" scoped></style>
