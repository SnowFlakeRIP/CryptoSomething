<template>
  <div class="wrapper-aside">
    <div class="wrapper-aside__inner">
      <div class="wrapper-aside__inner-logo">
        <div class="row">
          <a href="#!" class="wrapper-aside__inner-link">
            <img class="logo" src="img/EMG-logo.png" alt="1"/>
            <img class="slogan" src="img/EMG.svg" alt="1"/>
          </a>
        </div>
      </div>
      <div class="row">
        <div class="wrapper-aside__currency-items" v-for="(item, index) in purse" v-bind:key="purse.id">
          <div class="wrapper-aside__currency-item">
            <div class="wrapper-aside__currency-icon">
              <img src="img/icon-1.png" alt="1"/>
            </div>
            <div class="wrapper-aside__currency-price">
              <p> {{ item.currencies_id === index + 1 ? item.purse_summary +' '+ item.currencies.type : 0  }} </p>
            </div>
            <div class="wrapper-aside__currency-tag" v-if="item.currencies_id === 1">
              <p class="wrapper-aside__currency-buy">Buy</p>
            </div>
            <div class="wrapper-aside__currency-tag" v-else-if="item.currencies_id === 2">
              <p class="wrapper-aside__currency-buy">Withdraw</p>
            </div>
            <div class="wrapper-aside__currency-tag" v-else>
              <p class="wrapper-aside__currency-buy">Top up</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="items" class="wrapper-aside__menu-items">
      <div
        ref="one_item"
        @click="toogleClass('one_item'),$store.commit('changeTypeToWallet')"
        class="wrapper-aside__menu-item"
        data-target="#one-item"
      >
        <div
          class="wrapper-aside__menu-icon"
        >
          <img src="img/Wallet.svg" alt="1"/>
        </div>
        <div class="wrapper-aside__menu-name">
          <p
            class="
              wrapper-aside__menu-description
              wrapper-aside__menu-description--new
            "
          >
            Wallet
          </p>
        </div>
      </div>
      <div
        ref="two_item"
        @click="toogleClass('two_item'),$store.commit('changeTypeToStalking')"
        class="wrapper-aside__menu-item"
        data-target="#two-item"
      >
        <div
          class="wrapper-aside__menu-icon"
        >
          <img src="img/percont.svg" alt="1"/>
        </div>
        <div class="wrapper-aside__menu-name">
          <p
            class="
              wrapper-aside__menu-description
              wrapper-aside__menu-description--new
            "
          >
            Stalking
          </p>
        </div>
      </div>
      <div
        ref="three_item"
        @click="toogleClass('three_item'),$store.commit('changeTypeToPartners')"
        id="partners"
        class="wrapper-aside__menu-item"
        data-target="#three-item"
      >
        <div
          class="wrapper-aside__menu-icon"
        >
          <img src="img/Partners.svg" alt="1"/>
        </div>
        <div class="wrapper-aside__menu-name">
          <p class="wrapper-aside__menu-description">Partners</p>
        </div>
      </div>
      <div
        ref="four_item"
        @click="toogleClass('four_item'),$store.commit('changeTypeToSettings')"
        class="wrapper-aside__menu-item"
        data-target="#four-item"
      >
        <div
          class="wrapper-aside__menu-icon"
        >
          <img src="img/Setting.svg" alt="1"/>
        </div>
        <div class="wrapper-aside__menu-name">
          <p class="wrapper-aside__menu-description">Settings</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      toogle: false,
      activeToggle: null,
      purse: [],
    };
  },
  methods: {
    toogleClass(ref) {
      this.activeToggle && this.$refs[this.activeToggle].classList.remove('wrapper-aside__menu-item--active');
      this.activeToggle = ref;
      this.$refs[this.activeToggle].classList.add('wrapper-aside__menu-item--active');
    },
    async getPurse() {
      const purse = await this.$axios.get('http://127.0.0.1:5000/purses/get_purses_with_currencies', {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}})
      this.purse = purse.data
      console.log(this.purse[0].currencies.type)
    }
  },
  mounted() {
    this.getPurse()
    this.toogleClass('one_item')
  }
}
</script>

<style lang="scss" scoped>
.wrapper-aside {
  min-width: 320px;
  min-height: 100vh;
  background: linear-gradient(0deg, #2d2d2f, #2d2d2f),
  linear-gradient(
      180deg,
      #323232 0%,
      rgba(50, 50, 50, 0.44) 57.44%,
      rgba(50, 50, 50, 0) 100%
  );
  height: 100vh;

  &__inner {
    max-width: 320px;
  }

  /*Header */
  &__inner-link {
    display: flex;
    align-items: center;
    max-width: 220px;
    margin: 59px 61px 38px 39px;

    .logo {
      max-width: 42px;
      max-height: 42px;
    }

    .slogan {
      max-height: 17px;
      height: 100%;
      max-width: 154px;
    }

    img + img {
      margin-left: 24px;
    }
  }

  /*Menu */
  &__currency-items {
    max-width: 232px;
    width: 100%;
    max-height: 111px;
    height: 100%;
    align-items: center;
    margin: 0 49px 54px 39px;
    position: relative;

    img {
      max-width: 17px;
      margin-right: 25px;
      position: relative;
    }
  }

  #icon-3 {
    border-radius: 50%;
    width: 17px;
    height: 17px;
  }

  &__currency-item {
    display: flex;
    align-items: center;
    margin-bottom: 23px;
  }

  &__currency-item:last-child {
    margin-bottom: 0;
  }

  &__currency-price {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    text-transform: uppercase;
  }

  &__currency-tag {
    position: absolute;
    left: 130px;
  }

  &__currency-buy {
    padding: 4px 16px;
    border: 1px solid #cccccc;
    box-sizing: border-box;
    border-radius: 7px;
  }

  &__currency-buy:hover {
    color: #ffffff;
    border: 1px solid #ffffff;
    cursor: pointer;
  }

  &__menu-items {
    align-items: center;
    text-align: center;
  }

  &__menu-item {
    display: flex;
    width: 100%;
    height: 56px;
    align-items: center;
    color: #979797;
    position: relative;
    cursor: pointer;
    fill: #979797;
  }

  &__menu-item--active {
    background: rgba($color: #979797, $alpha: 0.08);
    color: #cda349;

    .wrapper-aside__menu-icon {
      filter: invert(68%) sepia(62%) saturate(384%) hue-rotate(3deg) brightness(86%) contrast(91%);
    }
  }

  &__menu-item--active::before {
    content: "";
    position: absolute;
    width: 3px;
    height: 100%;
    top: 0;
    left: 0;
    background: #cda349;
  }

  &__menu-icon {
    margin-right: 22px;
    margin-left: 35px;
    width: 20px;
    height: 20px;
  }

  &__menu-description {
    position: relative;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #979797;
  }

  &__menu-description--new::before {
    content: "";
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    top: 40%;
    right: -19px;
    background: #cda349;
  }
}
</style>
