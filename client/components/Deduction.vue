<template>
  <div class="wrap-transaction">
    <div class="wrap-pur">
      <div class="pur-box">
        <p class="title">Пополнение</p>
        <div class="where">
          <WhereWallet @where="hideWhereOtherWalett()" />
          <div v-if="where" class="other-wallets">
            <OtherWhereWallet />
          </div>
        </div>
        <div class="input">
          <input placeholder="От 1 EMG" type="number" />
        </div>
        <div class="where">
          <Wallets @hideOrvis="hideOtherWalett()" />
          <div v-if="hidewallets" class="other-wallets">
            <OtherWallets />
          </div>
        </div>
        <div class="input">
          <div class="who">
            <label
              >Переведите на Bitcoin address (здесь окно с калькулятором с той
              суммой, которой он захочет в USD и сразу перерасчет в БТК, просто
              для сравнен</label
            >
          </div>
          <input placeholder="Логин получателя" type="text" />
        </div>
        <button class="btn-bye">Перевести</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hidewallets: false,
      where: false,
    };
  },
  methods: {
    hideOtherWalett() {
      this.hidewallets = !this.hidewallets;
    },
    hideWhereOtherWalett() {
      this.where = !this.where;
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap-pur {
  background: #2d2d2f;
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
      flex-wrap: wrap;
      width: 100%;
      input {
        margin-bottom: 15px;
        width: 100%;
        padding: 10px 16px;
        background: #414144;
        border-radius: 4px;
        border: none;
        outline: none;
        font-size: 16px;
        line-height: 28px;
        color: #979797;
        label {
          text-align-last: left;
          font-size: 16px;
          line-height: 28px;
          color: #979797;
        }
      }
      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }
      .who {
        display: flex;
        justify-content: center;
        text-align: left;
        width: 100%;
        label {
          margin-bottom: 15px;
          margin-left: 5px;
          font-style: normal;
          font-weight: normal;
          font-size: 13px;
          line-height: 19px;
          color: #cccccc;
        }
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
      padding: 13px 110px;
      font-weight: 600;
      font-size: 20px;
      line-height: 30px;
      display: flex;
      align-items: center;
      text-align: center;
      color: #343437;
    }
  }
  .where {
    margin-bottom: 20px;
  }
}
</style>
