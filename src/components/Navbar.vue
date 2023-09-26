<template>
  <nav class="navbar">
    <!-- mobile -->
    <div v-if="isMobile" class="mobile">
      <Logo @click="closeMenu('/home')" />
      <font-awesome-icon
        icon="fa-solid fa-bars"
        size="2x"
        color="seashell"
        v-if="!toggleHamburger"
        @click="hamburger"
        class="hamburger"
      />
      <font-awesome-icon
        icon="fa-solid fa-x"
        size="2x"
        color="seashell"
        v-else
        @click="hamburger"
        class="hamburger"
      />
      <div class="sidebar" :class="{ open: toggleHamburger }">
        <div class="sidebar-container">
          <a class="nav-link" @click="closeMenu('home')">Home</a>
          <a class="nav-link" @click="closeMenu('about')">About</a>
          <a class="nav-link" @click="closeMenu('services')">Services</a>
          <a class="nav-link" @click="closeMenu('contact')">Contact</a>
        </div>
      </div>
    </div>
    <!-- THIS IS FOR DESKTOP IDIOT STOP CREATING BUGS!!!!!!!  -->
    <div v-else class="desktop">
      <Logo />
      <RouterLink to="/about" class="nav-link">About</RouterLink>
      <RouterLink to="/services" class="nav-link">Services</RouterLink>
      <RouterLink to="/contact" class="nav-link">Contact</RouterLink>
    </div>
  </nav>
</template>

<script>
import Logo from './Logo.vue'
export default {
  name: 'NavbarItem',
  components: { Logo },
  data() {
    return {
      windowWidth: window.innerWidth,
      toggleHamburger: false
    }
  },
  computed: {
    isMobile() {
      return this.windowWidth <= 768
    }
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth
    },
    hamburger() {
      this.toggleHamburger = !this.toggleHamburger
      console.log('toggling hamburger')
    },
    closeMenu(link) {
      this.toggleHamburger = false
      this.$router.push(link)
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
  },
  unmounted() {
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  padding: 1rem;
  padding-right: 2.625rem;
  background-color: var(--brown);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 90%;
}
.mobile {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.desktop {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  :last-child {
    padding-right: 1rem;
  }
}

//sidebar code
.sidebar {
  position: fixed;
  top: 88px;
  left: -170px; /* Initially hidden */
  width: 170px;
  height: 100vh;
  background-color: var(--dark-brown);
  color: white;
  transition: left 0.3s ease-in-out;
}
.sidebar-container {
  margin: 1rem;
  display: flex;
  flex-direction: column;

  a {
    margin-bottom: 15px;
  }
}

.open {
  left: 0;
}

.hamburger {
  cursor: pointer;
}

@media (min-width: 680px) {
  .navbar {
    width: 96%;

    
  }
  .nav-link{
    font-size: 22px;
    font-weight: 800;
  }
}
</style>
