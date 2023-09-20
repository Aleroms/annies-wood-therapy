<template>
  <hr class="hr" />
</template>

<script>
export default {
  name: 'horizonalRule'
}
</script>

<style lang="scss" scoped>
.hr {
  position: relative;
  z-index: 999;
  border: none;
  height: 50px;
  margin-top: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.17);
  box-shadow: 0 20px 20px -20px #333;
  margin: -50px auto 0;
}
</style>
