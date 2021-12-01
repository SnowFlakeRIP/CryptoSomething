<template>
  <div class="wrap-other-wallets">
    <div
      v-for="otherWallet in otherWallets"
      :key="otherWallet.id"
      class="wallets"
    >
      <div class="logo-wallet">
        <img src="img/logo.png" />
      </div>
      <div class="text-box">
        <p class="walletСheck">
          Со счета <span>{{ otherWallet.numberWallet }}</span>
        </p>
        <p class="ballance">{{ otherWallet.emg }} <span>EMG</span></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      otherWallets: [
        { numberWallet: "EMG Счет #567624170124", emg: "30" },
        { numberWallet: "EMG Счет #567624170124", emg: "40" },
      ],
    };
  },
};
</script>

<style  lang="scss" scoped>
.wallets {
  margin-top: 10px;
  padding: 14px 20px 6px 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(111.04deg, #ffffff 3.1%, #e5e4e2 89.3%);
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
  .logo-wallet {
    width: 48px;
    height: 48px;
    margin-right: 10px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .walletСheck {
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 19px;
    color: #343437;
    span {
      font-weight: bold;
    }
  }
  .ballance {
    font-weight: 700;
    font-size: 30px;
    line-height: 45px;
    color: #2d2d2f;
    span {
      margin-left: 13px;
    }
  }
}
</style>
