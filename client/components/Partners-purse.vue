<template>
  <div class="wrapper-partners">
    <div id="width-row" class="row">
      <div class="about-header">
        <div class="about-name">
          <p>Партнеры</p>
        </div>
        <div class="about-user">
          <div class="about-user__photo">
            <img src="img/Face.png" alt="1" />
          </div>
          <div class="about-user__name">
            <p>Adam Morrow</p>
          </div>
        </div>
      </div>
      <div class="description">
        <p>Здесь представлена статистика по реферальной системе</p>
      </div>
      <div class="statistica">
        <div class="our-stat">
          <p>Общая статистика</p>
          <p>Статистика по всем уровням</p>
          <div class="stat-items">
            <div class="item1">
              <div class="num">
                <img src="img/green.png" />
                <p>30</p>
              </div>
              <p>Всего рефералов</p>
            </div>
            <div class="item2">
              <div class="num">
                <img src="img/white-incom.svg" />
                <p>134 00</p>
              </div>
              <p class="margin">Всего заработано</p>
            </div>
            <div class="item3">
              <a href="#!"
                ><img src="img/copyLink.png" /><span
                  >https//energymg.money?ghgfgjkhgkj
                </span></a
              >
              <p>Ваша ссылка</p>
            </div>
          </div>
        </div>
        <div class="qr">
          <img src="img/qr.png" />
        </div>
      </div>
      <div class="cards">
        <Partners-card />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.wrapper-partners {
  background: none;
  margin: 23px 42px 32px 60px;
    padding-bottom: 50px;
}
#width-row {
  max-width: 1600px;
  width: 100%;
  flex-direction: column;
}
.about-header {
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.about-name {
  padding-top: 23px;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 45px;
  color: #ffffff;
}
.description {
  margin-top: 10px;
  font-size: 16px;
  line-height: 24px;
  color: #979797;
  padding-bottom: 32px;
}
.about-user {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 34px;
  padding-right: 40px;
  cursor: pointer;
  &__name {
    font-weight: 500;
    font-size: 13px;
    line-height: 19px;
    text-align: right;
    color: #ffffff;
    margin-left: 16px;
    position: relative;
  }
  &__name::before {
    content: "";
    position: absolute;
    background-image: url(../static/img/down-arrow.png);
    background-repeat: no-repeat;
    right: -20px;
    top: 7px;
    width: 10px;
    height: 10px;
  }
}
.statistica {
  width: 100%;
  max-width: 1045px;
  height: 161px;
  background: #2d2d2f;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 26px 36px 32px 25px;
  .our-stat {
    max-width: 741px;
    width: 100%;
    max-height: 218px;
    p:first-child {
      font-weight: bold;
      font-size: 20px;
      line-height: 30px;
      letter-spacing: 0.4px;
      color: #ffffff;
    }
    p + p {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      color: #979797;
      margin-top: 5px;
    }
  }
  .stat-items {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 33px;
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
  .item3 {
    a {
      display: flex;
      align-items: center;
      padding: 8px 19px;
      background: #343437;
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.07);
      border-radius: 10px;
      font-style: normal;
      font-weight: normal;
      font-size: 13px;
      line-height: 19px;
      color: #ffffff;
      margin-bottom: 14px;
    }
    img {
      margin-right: 12px;
    }
    p {
      font-size: 16px;
      line-height: 24px;
      color: #ffffff;
    }
  }
}
.cards {
  margin-top: 32px;
  margin-bottom: 200px;
}
@media (max-width: 1500px) {
  .statistica {
    max-width: 1050px;
    width: 65%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 26px 25px 206px;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
  }
  .qr {
    max-width: 100%;
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
  .card {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 18px;
  }
}
@media (max-width: 1300px) {
  .stat-items {
    display: flex;
    justify-content: space-between;
    align-items: flex-start !important;
    margin-top: 33px;
    flex-direction: column;
    margin-top: 10px !important;
  }
  .qr {
    position: absolute;
    right: 30px;
    top: 90px;
  }
  .item2,
  .item3 {
    margin-top: 20px;
  }
  .item3 {
    p {
      text-align: right;
    }
  }
}
@media (max-width: 940px) {
  .qr {
    img {
      max-width: 100px;
      min-height: 100px;
    }
  }
}
@media (max-width: 838px) {
  .about-user {
    display: none;
  }
}
@media (max-width: 510px) {
  .statistica {
    width: 85%;
  }
    .wrapper-partners {
    margin-left: 10px !important;
    margin-top: 40px;
  }
}
@media (max-width: 380px) {
  .qr {
    img {
      max-width: 60px;
      min-height: 60px;
    }
  }
}
</style>
