<template>
  <div class="container">
    <div class="about-box">
      <div class="about-left">
        <h3>Short headline</h3>
        <h1>О программе <span>Energy Mining Gold</span></h1>
        <p>
          EMG — это новый токен вобравший в себя все приемущества золота
          и блокчейн технологий. Наша Компания предлагает выгодный процент под
          вклады в свой токен EMG, подкрепляя стоимость своей монеты курсом
          золота на мировом рынке.
          <br />
          <br />
          EMG, является персональным ключом инвестирования в оцифрованное
          золото. С инновационными алгоритмами основанных на смарт-контрактах
          для вашего Staking и индивидуальной партнерской программой.
        </p>
      </div>
      <div class="about-right">
        <div class="video-about">
          <img class="video-img" src="img/Background.png" alt="1" />
          <a class="button-popup" href="#!">
            <img src="img/play_button.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.about-box {
  width: 1241.56px;
  height: 415px;
  display: flex;
  justify-content: space-between;
  align-items: unset;
  padding-top: 223px;
  padding-bottom: 144px;
}
.about-left h3,
.about-left h1,
.about-left p {
  margin: 0;
}
.about-left span {
  color: #b79b5a;
}
.about-left h1 {
  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 50px;
  letter-spacing: -0.7px;
  color: #cccccc;
  margin: 6px 0 9px;
}
.about-left h3 {
  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 30px;
  display: flex;
  align-items: center;
  color: #979797;
}
.about-left p {
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  display: flex;
  align-items: center;
  color: #979797;
}
.about-right {
  margin-left: 58px;
  position: relative;
}
.video-img {
  max-width: 674px;
  max-height: 415px;
}
.button-popup {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

@media (max-width: 1200px) {
  .about-box{
    flex-direction: column;
    align-items: center;
    padding-bottom: 320px;
    margin: 0 auto;
    width:auto;
  }
  .about-left{
    max-width: 651px;
  }
  .about-right{
    margin-left: 0;
  }
}
@media (max-width: 700px) {
    .video-img{
    max-width: 100%;
    max-height: 100%;
  }
  .about-right{
    margin-left: 0;
  }
  .about-box{
    padding-bottom: 385px;
  }
}
</style>