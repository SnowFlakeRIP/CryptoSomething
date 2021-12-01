<template>
  <div class="wrap-pur">
    <div class="pur-box">
      <p class="title">покупка</p>
      <div class="wallet">
        <Wallets @hideOrvis="hideOtherWalett()" />
        <div v-if="hidewallets" class="other-wallets">
          <OtherWallets />
        </div>
      </div>
      <div class="input">
        <input placeholder="От 1 EMG" type="number" />
      </div>
      <button class="btn-bye">Купить</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hidewallets: false,
    };
  },
  methods: {
    hideOtherWalett() {
      this.hidewallets = !this.hidewallets;
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap-pur {
  background: #2D2D2F;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  padding-bottom: 20px;
  .pur-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 340px;
    padding: 0 15px;
    p {
      padding: 32px 15px;
    }
    .input {
      display: flex;
      justify-content: center;
      width: 100%;
      padding: 15px 15px 32px;
      input {
        width: 100%;
        padding: 10px 16px;
        background: #414144;
        border-radius: 4px;
        border: none;
        outline: none;
        font-size: 16px;
        line-height: 28px;
        color: #979797;
      }
      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }
    }
    .wallet {
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
    .title {
      width: 100%;
      font-weight: bold;
      font-size: 30px;
      line-height: 45px;
      color: #ffffff;
      mix-blend-mode: normal;
      opacity: 0.9;
      text-align: left;
    }
    .btn-bye {
      width: 100%;
      background: linear-gradient(124.34deg, #f4ce77 21.12%, #c2a153 98.3%);
      box-shadow: 0px 0px 30px rgba(192, 157, 77, 0.5);
      border-radius: 6px;
      padding: 13px 130px;
      font-weight: 600;
      font-size: 20px;
      line-height: 30px;
      display: flex;
      align-items: center;
      text-align: center;
      color: #343437;
    }
  }
}
</style>
