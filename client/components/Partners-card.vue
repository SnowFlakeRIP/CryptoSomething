<template>
  <div class="card">
    <div v-for="card in cards" :key="card" class="wrapper-card">
      <div class="level">
        <p>{{ card.level }} Уровень</p>
        <p>{{ card.percont }} %</p>
      </div>
      <div class="stat-items">
        <div class="item1">
          <div class="num">
            <img src="img/green.png" />
            <p>{{ card.ref }}</p>
          </div>
          <p>Всего рефералов</p>
        </div>
        <div class="item2">
          <div class="num">
            <img src="img/white-incom.svg" />
            <p>{{ card.income }}</p>
          </div>
          <p class="margin">Всего заработано</p>
        </div>
      </div>
      <div class="history">
        <p>История</p>
        <img src="img/partnersDown.png" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cards: [
        { level: 1, percont: 5, ref: 10, income: 54000 },
        { level: 2, percont: 3, ref: 15, income: 54000 },
        { level: 3, percont: 1.5, ref: 12, income: 54000 },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.card {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 18px;
  margin-right: 20px;
}
.wrapper-card {
  width: 100%;
  max-width: 487px;
  height: 170px;
  background: #2d2d2f;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
  position: relative;
  padding: 22px 33px 27px 25px;
  .level {
    display: flex;
    justify-content: space-between;
    p:first-child {
      font-weight: bold;
      font-size: 20px;
      line-height: 30px;
      letter-spacing: 0.4px;
      color: #ffffff;
    }
    p + p {
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;
      display: flex;
      align-items: center;
      text-align: right;
      letter-spacing: 0.4px;
      background: linear-gradient(124.34deg, #f4ce77 21.12%, #c2a153 98.3%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
}
.wrapper-card::after,
.wrapper-card::before {
  content: "";
  position: absolute;
  background-repeat: no-repeat;
}
.wrapper-card::after {
  bottom: 0;
  left: 0;
  background-image: url(../static/img/ElLef.png);
  width: 280px;
  height: 146px;
}
.wrapper-card::before {
  top: 0;
  right: 0;
  background-image: url(../static/img/ElRi.png);
  width: 280px;
  height: 146px;
}
.stat-items {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 22px;
  margin-bottom: 36px;
  width: 320px;
  position: relative;
}
.stat-items::after {
  content: "";
  position: absolute;
  bottom: -22px;
  left: -25px;
  width: 543px;
  border: 1px solid #38383a;
}
.num {
  display: flex;
  align-items: center;
  img {
    margin-right: 13px;
  }
  p {
    font-weight: 500;
    font-size: 28px;
    line-height: 42px;
    letter-spacing: 0.4px;
  }
}
.item1 {
  p {
    background: linear-gradient(124.34deg, #9ed27e 21.12%, #639d41 93.48%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
.item2 {
  p {
    color: #ffffff;
  }
  .margin {
    margin-left: 20px;
  }
}
.history {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
@media (max-width: 510px) {
  .wrapper-card {
    width: 82% !important;
  }
  .stat-items::after {
    width: 114%;
  }
}
@media (max-width: 380px) {
  .wrapper-card {
    width: 63% !important;
  }
  .stat-items::after {
    width: 91%;
  }
  .stat-items {
    justify-content: flex-start;
    font-size: 14px;
    line-height: 10px;
  }
}
</style>