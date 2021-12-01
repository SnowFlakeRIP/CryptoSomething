<template>
  <div class="card">
    <div class="card-txt" v-for="item in purse" v-bind:key="purse.id">
      <div class="card-txt__balance">
        <p class="txt__balance">EMG + score #{{ item.purse_number}}</p>
        <img src="img/Dolar.png" alt="1" />
      </div>
      <button class="res-group">
        <img  src="img/group-btn.png" alt="1" />
      </button>
      <div class="card-txt__count">
        <p class="txt__count">{{ item.purse_summary }}</p>
        <p class="txt__count">USD</p>
      </div>
    </div>
    <div class="card-btn__group">
      <div class="card-btn__item">
        <button style="cursor: pointer;">
          <img class="card-btn__item-buy" src="img/Wallet-white.svg" alt="1" />
          Top up
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      purse: []
    }
  },
  methods: {
    async getPurse() {
      const purse = await this.$axios.get('http://127.0.0.1:5000/purses/get_purses', {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}})
      for (let i = 0; i < purse.data.length; i++) {
        if (purse.data[i].currencies_id === 3) {
          this.purse.push(purse.data[i])
        }
      }
    }
  },
  mounted() {
    this.getPurse()
  }
}
</script>
<style lang="scss" scoped>
.card {
  width: 350px;
  height: 207px;
  background: linear-gradient(124.34deg, #9ed27e 21.12%, #639d41 93.48%);
  box-shadow: 0px 0px 30px rgba(105, 166, 69, 0.5);
  position: relative;
}
.res-group {
  display: none;
}
.card::after{
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url(../static/img/fontcard.png);
}

.card-btn {
  &__group {
    padding: 27px 32px 23px 0;
    display: flex;
    width: 292px;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    left: 25px;
    button {
      border: none;
      background-color: transparent;
      background: #2d2d2f;
      border-radius: 11.477px;
      padding: 11px 26px 11px 26px;
      color: white;
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 14.9201px;
      line-height: 17px;
      align-items: center;
      position: relative;
      display: flex;
    }
    #two {
      font-family: Poppins;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      color: #212123;
      background-color: transparent !important;
      border: 1px solid #212123;
      border-radius: 11.477px;
      max-width: 135px;
      max-height: 40px;
    }
  }
  &__item-buy {
    width: 19px;
    height: 17px;
    margin-right: 9px;
    align-items: center;
  }
}
.card-txt {
  &__balance {
    img {
      position: absolute;
      top: 17px;
      right: 22px;
    }
  }
}
@media (max-width: 1120px) {
  .card {
    width: 364px;
    height: 80px;
    display: block;
  }
  .card-btn__group {
    display: none;
  }
  .card-txt {
    padding: 9px 124px 9px 86px;
  }
  .res-group {
    display: block;
    right: 26px ;
    bottom: 36px ;
    position: absolute;

  }
  .txt__balance {
    font-size: 10px;
    line-height: 15px;
    color: #343437;
    opacity: 0.6;
  }
  .card-txt__count {
    font-weight: 600;
    font-size: 22px;
    line-height: 33px;
  }
  .card-txt__balance img {
    top: 13px;
    left: 13px;
  }
  .card::after {
    content: none;
  }
}
@media (max-width: 400px) {
  .card{
    width: 255px;
  }
  .card-txt{
    padding-right: 0;
  }
}
</style>
