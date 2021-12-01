<template>
  <div class="wallets">
    <div class="logo-wallet">
      <img src="img/logo.png" />
    </div>
    <div class="text-box">
      <p class="walletСheck">
        На <span class="bold">{{ numberWallet }}</span>
      </p>
      <p class="ballance">{{ emg }} <span>EMG</span></p>
    </div>
    <div @click="$emit('where')" class="other-wallet">
      <img src="img/group-btn.png" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numberWallet: "EMG Счет #567624170124",
      emg: "20",
    };
  },
};
</script>
<style  lang="scss" scoped>
.wallets {
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
  .other-wallet {
    cursor: pointer;
        margin-left: 39px;
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