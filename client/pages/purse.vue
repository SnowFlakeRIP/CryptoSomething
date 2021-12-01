<template>
  <div class="container">
    <div
      @scroll="letsScroll = true"
      :class="letsScroll && 'sticky'"
      class="aside"
    >
      <Aside-purse/>
    </div>
    <div class="aside-header__res">
      <div class="aside-header__logo">
        <a href="#!" class="logo-link">
          <img src="img/EMG-logo.png" alt=""/>
          <img src="img/em.png" alt="1"/>
        </a>
      </div>
      <div class="aside-header__user">
        <button>
          <img src="img/Face.png" alt=""/>
        </button>
      </div>
    </div>
    <div class="nav-menu__items">
      <div v-if="$store.state.type === 'wallet'" class="item">
        <Wallet-purse/>
      </div>
      <div v-if="$store.state.type === 'stalking'" class="item">
        <Stalking-purse/>
      </div>
      <div v-if="$store.state.type === 'partners'" class="item">
        <Partners-purse/>
      </div>
      <div v-if="$store.state.type === 'settings'" class="item">
        <Settings-purse/>
      </div>
    </div>
    <div class="aside-footer__res">
      <div class="aside-footer__items">
        <div
          class="aside-footer__item"
          ref="one_item"
          @click="toogleClass('one_item'), $store.commit('changeTypeToWallet')"
        >
          <img src="img/Wallet.svg" alt="1"/>
          <p>Wallet</p>
        </div>
        <div
          class="aside-footer__item"
          ref="two_item"
          @click="
            toogleClass('two_item'), $store.commit('changeTypeToStalking')
          "
        >
          <img src="img/percont.svg" alt="1"/>
          <p>Staking</p>
        </div>
        <div
          class="aside-footer__item"
          ref="three_item"
          @click="
            toogleClass('three_item'), $store.commit('changeTypeToPartners')
          "
        >
          <img src="img/Partners.svg" alt="1"/>
          <p>Partners</p>
        </div>
        <div
          class="aside-footer__item"
          ref="four_item"
          @click="
            toogleClass('four_item'), $store.commit('changeTypeToSettings')
          "
        >
          <img src="img/Setting.svg" alt="1"/>
          <p>Settings</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeToggle: null,
      letsScroll: false,
    };
  },
  methods: {
    toogleClass(ref) {
      this.activeToggle &&
      this.$refs[this.activeToggle].classList.remove(
        "aside-footer__item--active"
      );
      this.activeToggle = ref;
      this.$refs[this.activeToggle].classList.add("aside-footer__item--active");
    },
    async get() {
      const get = await this.$axios.get(`http://127.0.0.1:5000/transaction/get_transactions`,{headers:{'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJzY2htYWtvYjhAZ21haWwuY29tIiwiaWF0IjoxNjM1ODMwOTc3LCJleHAiOjE2MzU5MTczNzd9.zXyyOPQDjTgbyTlYdwVt1GHGjEl2BpNXl9iL7U8TP-s`}})
    },
    async check2(){
      const tokenInfo =  await this.$axios.post('http://127.0.0.1:5000/auth/check', {
        token:localStorage.getItem('token')
      })
      if(tokenInfo.data.message){
        const tokens = await this.$axios.post('http://127.0.0.1:5000/auth/refresh',{
          frontToken:localStorage.getItem('refreshToken')
        }).catch(() => {
            this.$router.push('/auth')
        })
        if(tokens.data.message){
          await this.$router.push('/auth')
        }
        localStorage.setItem('token',tokens.data.token)
        localStorage.setItem('refreshToken',tokens.data.refreshToken)

        // window.location.reload()
      }
    },
  },
  mounted() {
    this.check2()
    this.toogleClass("one_item");
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Mulish&family=Poppins:wght@400;500;700&display=swap");

.container {
  max-width: 1920px;
  margin: 0;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: normal;
  display: flex;
  overflow-x: hidden;
  background: #212123;

  .aside {
    background: linear-gradient(0deg, #2d2d2f, #2d2d2f),
    linear-gradient(
        180deg,
        #323232 0%,
        rgba(50, 50, 50, 0.44) 57.44%,
        rgba(50, 50, 50, 0) 100%
    );
    height: 1300px;
  }
  overflow: hidden;
}

.nav-menu__items {
  background: #212123;
  width: 100%;
  height: 100vh;

  .item {
    height: 100vh;
  }
}

.aside-header {
  &__res {
    display: none;
    position: fixed;
    left: 25%;
    top: 0;
    width: 398px;
    height: 31px;
    background: #2d2d2f;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.07);
    border-radius: 25px;
    padding: 17px 17px 15px 17px;
  }

  &__logo {
    display: flex;
    width: 127px;
    height: 100%;
    max-height: 30px;
    align-items: center;
    vertical-align: middle;

    .logo-link {
      display: flex;
      align-items: center;
      height: 30px;

      img {
        max-width: 32px;
      }

      img + img {
        max-width: 108px;
        max-height: 12px;
        margin-left: 18px;
      }
    }
  }
}

.aside-footer {
  &__res {
    display: none;
    background: #38383a;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.07);
    border-radius: 25px;
    width: 398px;
    height: 43px;
    padding: 17px 19px 13px 17px;
    position: fixed;
    left: 25%;
    bottom: 0;
  }

  &__items {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 398px;
    width: 100%;
  }

  &__item {
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;

    img {
      margin: auto;
      margin-bottom: 7px;
    }
  }

  &__item--active {
    filter: invert(68%) sepia(62%) saturate(384%) hue-rotate(3deg) brightness(86%) contrast(91%);
  }
}

.sticky {
  transform: translateX(-100%);
}

@media (max-width: 838px) {
  .aside {
    display: none;
  }
  .aside-header {
    &__res {
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 10;
    }
  }
  .aside-footer {
    &__res {
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 10;
    }
  }
  .container {
    overflow: auto;
  }
}

@media (max-width: 784px) {
  .aside-footer,
  .aside-header {
    &__res {
      left: 20%;
    }
  }
}

@media (max-width: 640px) {
  .aside-footer,
  .aside-header {
    &__res {
      left: 15%;
    }
  }
}

@media (max-width: 575px) {
  .aside-footer,
  .aside-header {
    &__res {
      left: 10%;
    }
  }
}

@media (max-width: 500px) {
  .aside-footer,
  .aside-header {
    &__res {
      left: 5%;
    }
  }
}

@media (max-width: 460px) {
  .aside-footer,
  .aside-header {
    &__res {
      left: 15px;
    }
  }
  .aside-footer,
  .aside-header {
    &__res {
      width: 362px;
    }
  }
}

@media (max-width: 430px) {
  .aside-footer,
  .aside-header {
    &__res {
      left: 0;
    }
  }
  .aside-footer,
  .aside-header {
    &__res {
      width: 285px;
    }
  }
}
</style>
