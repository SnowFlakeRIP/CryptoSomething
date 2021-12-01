<template>
  <div class="wrapper-table">
    <div class="wrapper-table__transaction">
      <div class="wrapper-table__transaction-name">
        <p>Transaction history</p>
      </div>
      <div class="wrapper-table__transaction-toogle">
        <p>Pages 10</p>
        <div class="wrapper-table__transaction-arrows">
          <div class="wrapper-table__transaction-left">
            <img src="img/left.png" alt="1"/>
          </div>
          <div class="wrapper-table__transaction-right">
            <img src="img/right.png" alt="1"/>
          </div>
        </div>
      </div>
    </div>
    <div class="strings">
      <table class="table">
        <tbody>
        <tr class="table-tr">
          <td class="table-td"></td>
          <td class="table-td">Type</td>
          <td class="table-td">Действие</td>
          <td class="table-td">Date</td>
          <td class="table-td">Balance</td>
          <td class="table-td">Count</td>
        </tr>
        <tr class="table-tr" v-for="transaction in transactions" :key="transaction.id">
          <td class="table-td">
            <img src="img/lg.png" alt=""/>
          </td>
          <td class="table-td">
            <p class="type">
              {{ transaction.transaction_type }} <span class="status status-good">&nbsp;</span>
            </p>
          </td>
          <td class="table-td">{{ transaction.transaction_action }}</td>
          <td class="table-td">{{
              new Date(transaction.createdAt).getHours() + ':' + new Date(transaction.createdAt).getMinutes() + '   ' + new Date(transaction.createdAt).getFullYear().toString().slice(2) + '.' + new Date(transaction.createdAt).getMonth() + '.' + new Date(transaction.createdAt).getDay()
            }}
          </td>
          <td class="table-td">{{ transaction.transaction_balance }}</td>
          <td class="table-td">{{ transaction.transaction_count }}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="pagination-down">
      <div class="pagination-down__left">
        <p>1-8 of1240</p>
      </div>
      <div class="pagination-down__right">
        <div class="pagination-down__right-pages">
          <p>Page 8</p>
        </div>
        <div class="pagination-down__right-perpages">
          <p>Pages 10</p>
        </div>
        <div class="wrapper-table__transaction-arrows">
          <div class="wrapper-table__transaction-left">
            <img src="img/left.png" alt="1"/>
          </div>
          <div class="wrapper-table__transaction-right">
            <img src="img/right.png" alt="1"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      transactions: [],
    }
  },
  methods: {
    async getTransactions() {
      const transactions = await this.$axios.get('http://127.0.0.1:5000/transaction/get_transactions', {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}})
      this.transactions = transactions.data
    }
  },
  mounted() {
    this.getTransactions()
  }
}
</script>
<style lang="scss" scoped>
.wrapper-table {
  height: 100%;
  background: #2d2d2f;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.07);
  border-radius: 10px;

  &__transaction {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 33px 27px 27px 24px;
  }

  &__transaction-name {
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: #ffffff;
  }

  &__transaction-toogle {
    display: flex;
    justify-content: space-between;
    width: 170px;
    position: relative;

    p {
      font-size: 14px;
      line-height: 20px;
      text-align: right;
      letter-spacing: 0.3px;
      color: #ffffff;
    }
  }

  &__transaction-toogle::after {
    content: "";
    position: absolute;
    left: 70px;
    top: 45%;
    background-image: url(../static/img/table-arrow-down.png);
    background-repeat: no-repeat;
    width: 7px;
    height: 4px;
  }

  &__transaction-arrows {
    display: flex;
    align-items: center;
  }

  &__transaction-left {
    margin-right: 30px;
  }

  .strings {
    .table {
      width: 100%;
    }
  }

  .table-tr {
    border-bottom: 1px solid #38383a;

    .table-td:nth-child(1) {
      padding-left: 25px;
      max-width: 86px;
    }

    .table-td {
      padding: 15px 0 12px;
    }
  }

  .table-tr:nth-child(1) {
    line-height: 23px;
    color: #979797;

    .table-td {
      padding: 0 0 11px;
    }
  }

  .table-tr :not(:first-child) {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    align-items: center;
    color: #cccccc;
  }

  .type {
    position: relative;
  }

  .status {
    width: 5px;
    height: 5px;
    margin-left: 9px;
    position: relative;
  }

  .status-bad::after {
    content: "";
    top: 40%;
    right: 0;
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: linear-gradient(124.34deg, #f38080 21.12%, #961d1d 93.48%);
  }

  .status-good::before {
    content: "";
    top: 40%;
    right: 0;
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: linear-gradient(124.34deg, #9ed27e 21.12%, #639d41 93.48%);
  }

  .pagination-down {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 35px 27px 36px 32px;

    &__left {
      font-family: Mulish;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      text-align: right;
      letter-spacing: 0.3px;
    }

    &__right {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 341px;
      color: #ffffff;

      &-pages,
      &-perpages {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        text-align: right;
        letter-spacing: 0.3px;
        position: relative;
      }

      &-pages {
        font-family: Mulish;
      }

      &-pages::before,
      &-perpages::before {
        content: "";
        position: absolute;
        top: 45%;
        background-image: url(../static/img/table-arrow-down.png);
        background-repeat: no-repeat;
        width: 7px;
        height: 4px;
      }

      &-perpages::before {
        left: 65px;
      }

      &-pages::before {
        left: 50px;
      }
    }
  }

  &__transaction-left,
  &__transaction-right,
  &__transaction-toogle,
  .pagination-down__right-pages,
  .pagination-down__right-perpages {
    cursor: pointer;
  }
}
</style>
