<template>
  <nav class="navbar">
    <a href="/" class="navbar-brand">
      <img v-if="width > 450" src="~/assets/logo.svg" alt="">
      <img v-else src="~/assets/logo-mobile.svg" alt="">
    </a>
    <div class="navbar__items" :class="{'active': isOpen}">
      <ul class="navbar-nav">
        <li class="nav-item" v-for="link in links" :key="link.id">
          <nuxt-link class="nav-link" :to="link.link">{{ link.title }}</nuxt-link>
        </li>
      </ul>

      <button class="navbar-btn"><img class="navbar-btn__icon" src="~/assets/login.svg" alt="">Войти
      </button>
    </div>

    <div class="navbar-menu icon" v-if="width < 715" :class="{'active': isOpen}" @click="toggle">
      <div class="hamburger"></div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      width: null,
      isOpen: false,
      links: [
        {id: 1, title: 'White Paper', link: '/'},
        {id: 2, title: 'О нас', link: '/'}
      ],
    }
  },
  methods: {
    updatedWidth() {
      this.width = window.innerWidth
    },
    toggle() {
      this.isOpen = !this.isOpen
      this.$emit('toggle')
    },
  },
  mounted() {
    window.addEventListener('resize', this.updatedWidth)
    this.updatedWidth()
  },
}

</script>

<style lang="scss" scoped>
.container {
  overflow-x: hidden;
}

.navbar {
  display: flex;
  align-items: center;
  padding-top: 26px;
  gap: 87px;

  &__items {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
  }

  &-brand img {
    display: block;
  }

  &-nav {
    display: flex;
    gap: 36px;
    padding: 0;
  }

  &-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 11px 26px;
    color: #fff;
    font-size: 16px;
    background: #2D2D2F;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.07);
    border: none;
    border-radius: 11.477px;
    cursor: pointer;

    &__icon {
      margin-right: 12px;
    }

    &-menu {
      cursor: pointer;
    }
  }
}

.nav-link {
  color: #fff;

  &:hover {
    color: #CDA349;
  }
}

.icon {
  height: 25px;
  cursor: pointer;
}

.hamburger {
  width: 35px;
  height: 4px;
  transform: translate(-50%, -50%);
  background: #fff;
  transition: 0.5s;
  display: inline-block;
}

.hamburger:before,
.hamburger:after {
  content: '';
  width: 35px;
  height: 4px;
  position: absolute;
  background: #fff;
  transition: 0.5s;
}

.hamburger:before {
  top: -10px;
}

.hamburger:after {
  top: 10px;
}

.icon.active .hamburger {
  background: none;
}

.icon.active .hamburger:before {
  top: 0;
  transform: rotate(45deg);
}

.icon.active .hamburger:after {
  top: 0;
  transform: rotate(135deg);
}


@media (max-width: 715px) {
  .navbar {
    justify-content: space-between;

    &__items {
      position: fixed;
      width: 200px;
      justify-content: flex-start;
      align-items: end;
      flex-direction: column;
      left: auto;
      right: 0;
      top: 0;
      z-index: 1;
      height: 100vh;
      background-color: #2D2D2F;
      transition: 0.5s;
      transform: translateX(100%);
      gap: 28px;
    }

    &__items.active {
      padding-top: 120px;
      padding-right: 50px;
      transform: translateX(0%);
    }

    &-nav {
      font-size: 20px;
      flex-direction: column;
    }

    &-btn {
      padding-right: 36px;
      box-shadow: none;
    }

    &-menu {
      position: absolute;
      right: 2%;
      z-index: 2;
    }
  }
}
</style>
