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

<style lang="scss" scoped>
.button {
  color: ivory;
  background-color: var(--brown);
  border-radius: 5px;
  padding: 2px 9px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.358);
  transition: 0.3s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
}
@media (min-width: 1024px) {
  .button {
    font-size: 22px;
  }
}
</style>
