<template>
  <div class="container">
    <div class="possibl">
      <div class="header-text">
        <h1>Возможности <span>пассивного заработка</span></h1>
        <p>
          Realm of the galaxies across the centuries the carbon in our apple
          pies vanquish <br />
          the impossible another world venture. impossible another world
          venture.
        </p>
      </div>
      <div class="card-box">
        <div class="card">
          <div class="card-logo">
            <img class="money" src="img/money.png" alt="1" />
          </div>

          <h1>Staking</h1>
          <p>
            Благодаря инновационным алгоритмам PoS основанных на
            смар-ктонтрактах, которые внедрены в наш токен EMG, любой
            пользователь получает вознаграждение за простое хранение наших монет
            на своем кошельке. Чем больше монет хранится на вашем кошельке, тем
            больше прибыль от стекинга.
          </p>
        </div>
        <div class="card">
          <div class="card-logo">
            <img class="network" src="img/network.png" alt="" />
          </div>
          <h1>Invitation</h1>
          <p>
            Это дополнительный пассивный заработок, который растет благодаря
            собранной вами команде и обеспечивает перспективы зарабатывать
            хорошие дивиденды в виде EMG+. Прибыль зависит от количества монет,
            купленных вашими инфайтерами.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.possibl {
  padding-bottom: 128px;
}
.header-text {
  display: block;
  align-items: center;
  text-align: center;
  padding-bottom: 72px;
}
.header-text h1,
.header-text p {
  margin: 0;
}
.header-text span {
  color: #b79b5a;
}
.header-text h1 {
  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 50px;
  letter-spacing: -0.7px;
  color: #cccccc;
  margin-bottom: 9px;
}
.header-text p {
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  color: #979797;
}
.card-box {
  display: flex;
  justify-content: space-between;
}
.card {
  padding: 38px 45px 9px 125px;
  background: #38383a;
  border-radius: 10px;
  margin-left: 45px;
  position: relative;
}
.card:last-child {
  margin-right: 71px;
}
.card-logo {
  background-image: url(../static/img/Ellipse.png);
  position: absolute;
  top: -42px;
  left: -55px;
  z-index: 10;
  width: 139px;
  height: 139px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
}
.money,
.network {
  position: absolute;
  top: 26px;
  left: 28px;
}
.card p,
.card h1 {
  margin: 0;
}
.card h1 {
  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 30px;
  color: #ffffff;
  margin-bottom: 3px;
}
.card p {
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  color: #979797;
}
@media (max-width: 911px) {
  .card-box {
    flex-direction: column;
  }
  .card:first-child {
    margin-right: 71px;
    margin-bottom: 40px;
  }
  .card {
    margin-left: 100px;
  }
}
@media (max-width: 740px) {
  .header-text h1 {
    font-size: 30px;
    line-height: 40px;
  }
  .header-text p {
    font-size: 15px;
    line-height: 20px;
  }
}
@media (max-width: 550px) {
  .card {
    padding: 25px 15px 8px 68px;
  }
  .card h1 {
    font-size: 20px;
    line-height: 20px;
  }
  .card p {
    font-size: 15px;
    line-height: 20px;
  }
}
@media (max-width: 411px) {
  .card {
    padding: 89px 6px 7px 7px;
    margin-left: 50px !important;
    margin-right: 20px  !important;
  }
  .card h1 {
    font-size: 20px;
    line-height: 20px;
  }
  .card p {
    font-size: 15px;
    line-height: 20px;
  }
}

</style>