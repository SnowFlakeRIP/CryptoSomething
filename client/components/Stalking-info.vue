<template>
  <div class="wrapper">
    <div class="rectangle">
      <div class="rows">
        <div class="row1">Информация</div>
        <div class="row2">
          <p>EMG Награда: 1% / День</p>
          <p>Всего получено: 0 EMG+</p>
        </div>
        <div class="row3">
          Исходя из вашего баланса EMG, вам насчитывается ежедневная ставка в
          размере 1%, 30% в месяц и 365% в год. Обновление и выплаты по
          стейкингу происходят в 00:00 по МСК на ваш Бонусный счет EMG+. Все
          расчеты по Staking отображаются у вас в разделе кошелёк – транзакции
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.wrapper {
  max-width: 1106px;
}
.rectangle {
  padding: 26px 200px 33px 25px;
  background: #2d2d2f;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
}
.row1 {
  margin-bottom: 15px;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0.4px;
  color: #ffffff;
}
.row2 {
  margin-bottom: 24px;
  font-size: 16px;
  line-height: 24px;
  color: #cccccc;
  display: flex;
  p + p {
    margin-left: 66px;
  }
}
.row3 {
  font-size: 16px;
  line-height: 24px;
  color: #979797;
}
@media (max-width: 585px) {
  .rectangle {
    padding-right: 25px;
  }
}
@media (max-width: 370px) {
  .row2 {
    p + p {
      margin-left: 5px;
    }
  }
}
</style>