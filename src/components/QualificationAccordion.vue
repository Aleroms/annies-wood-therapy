<template>
  <div class="qualification-list">
    <!-- Loop through your qualification items -->
    <div v-for="(qualification, index) in qualifications" :key="index" class="qualification-item">
      <div
        class="qualification-header"
        @click="toggleAccordion(index)"
        :class="{ open: isOpen(index) }"
      >
        <h3>{{ qualification.title }}</h3>
        <font-awesome-icon icon="fa-solid fa-chevron-up" color="grey" v-if="isOpen(index)" />
        <font-awesome-icon icon="fa-solid fa-chevron-down" color="grey" v-else />
      </div>
      <!-- Display the content when the accordion is open -->
      <div v-if="isOpen(index)" class="qualification-content">
        <p class="qualification-content-text">{{ qualification.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import QUALIFICATION_DATA from '@/assets/data/qualification.json'
export default {
  name: 'QualificationAccordion',
  data() {
    return {
      openAccordionIndex: null, // Store the index of the open accordion
      qualifications: QUALIFICATION_DATA
    }
  },
  methods: {
    toggleAccordion(index) {
      // Toggle the accordion at the specified index
      if (this.isOpen(index)) {
        this.openAccordionIndex = null
      } else {
        this.openAccordionIndex = index
      }
    },
    isOpen(index) {
      // Check if the accordion at the specified index is open
      return this.openAccordionIndex === index
    }
  }
}
</script>
<style lang="scss" scoped>
.qualification-content-text {
  font-size: 14px;
}
.qualification-list {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add a light shadow */
}
.qualification-item {
  border-bottom: 1px solid gray; /* Add a border to all items */
}

.qualification-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.625rem 2rem;
  cursor: pointer; /* Add cursor pointer to indicate clickability */
  transition: border-bottom 0.3s ease; /* Add a transition for a smooth effect */
}

/* Apply additional styles when the accordion is open */
.qualification-header.open {
  border-bottom: none; /* Remove the bottom border when open */
}

.qualification-content {
  padding: 0.625rem 2rem;
  display: none; /* Hide content by default */
  border-bottom: 1px solid gray; /* Add a border at the bottom of content */
}

/* Show content when the accordion is open */
.qualification-header.open + .qualification-content {
  display: block;
}

/* Remove the border at the bottom of the last item */
.qualification-item:last-child .qualification-content {
  border-bottom: none;
}
</style>
