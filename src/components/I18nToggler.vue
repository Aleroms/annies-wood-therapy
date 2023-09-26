<template>
  <div class="flag usa-flag" v-if="!isEnglish" @click.prevent="toggleLanguage"></div>
  <div class="flag mexico-flag" v-else @click.prevent="toggleLanguage"></div>
</template>

<script>
export default {
  name: 'I18nToggler',
  data() {
    return {
      isEnglish: false
    }
  },
  methods: {
    toggleLanguage() {
      this.isEnglish = !this.isEnglish
      this.$i18n.locale = this.isEnglish ? 'es' : 'en'
    }
  }
}
</script>

<style lang="scss" scoped>
.flag {
  background-size: contain;
  width: 32px;
  height: 32px;
  cursor: pointer;
}
.usa-flag {
  background-image: url('/images/united-states.png');
}
.mexico-flag {
  background-image: url('/images/mexico.png');
}
</style>
