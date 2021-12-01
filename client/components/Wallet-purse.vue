<template>
  <div class="wrapper-about">
    <div id="width-row" class="row">
      <div class="about-header">
        <div class="about-name">
          <p>Wallet</p>
        </div>
        <div class="about-user">
          <div class="about-user__photo">
            <img src="img/Face.png" alt="1"/>
          </div>
          <div class="about-user__name">
            <p>{{ name }}</p>
          </div>
          <div style="margin-left:20px ">
            <button @click="exit">
              Logout
            </button>
          </div>
        </div>
      </div>
      <div class="description">
        <p>Your accounts and transaction histories are presented here</p>
      </div>
    </div>
    <div class="about-purse__inner">
      <div class="about-purse__card-box">
        <div class="about-purse__box-item">
          <Card-purse-one/>
        </div>
        <div class="about-purse__box-item">
          <Card-purse-two/>
        </div>
        <div class="about-purse__box-item">
          <Card-purse-three/>
        </div>
      </div>
    </div>
    <div class="about-purse__table">
      <About-purse-table/>
    </div>
    <div class="about-purse__table-res">
      <About-purse-table-responsive/>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: ''
    }
  },
  methods: {
    async getUser() {
      const user = await this.$axios.get('http://127.0.0.1:5000/bios/get_bio', {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}})
      this.name = user.data.user_name +' '+ user.data.user_second_name
    },
    exit(){
      localStorage.clear()
      window.location.reload()
    }
  },
  mounted() {
    this.getUser()
  }


}
</script>
<style lang="scss" scoped>
.wrapper-about {
  background: #212123;
  width: 100%;
  min-height: 100vh;
  padding-left: 60px;
  padding-bottom: 50px;
}

#width-row {
  max-width: 1200px;
  width: 75%;
}

.about-header {
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

.about-purse {
  &__inner {
    max-width: 1110px;
    width: 100%;
    height: 207px;
    padding-right: 434px;
    padding-bottom: 50px;
  }

  &__card-box {
    display: flex;
    align-items: center;
  }

  &__box-item {
    margin-right: 28px;
  }

  &__box-item:last-child {
    margin-right: 0;
  }

  &__table {
    max-width: 1106px;
    height: 583px;

    &-res {
      display: none;
      margin-bottom: 100px;
    }
  }
}

.aside-header {
  &__res {
    display: none;
    position: fixed;
    left: 25%;
    top: 0;
    width: 398px;
    height: 31px;
    background: #2d2d2f;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.07);
    border-radius: 25px;
    padding: 17px 17px 15px 17px;
  }

  &__logo {
    display: flex;
    width: 127px;
    height: 100%;
    max-height: 30px;
    align-items: center;
    vertical-align: middle;

    .logo-link {
      display: flex;
      align-items: center;
      height: 30px;

      img {
        max-width: 32px;
      }

      img + img {
        max-width: 108px;
        max-height: 12px;
        margin-left: 18px;
      }
    }
  }
}

.aside-footer {
  &__res {
    display: none;
    background: #38383a;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.07);
    border-radius: 25px;
    width: 398px;
    height: 43px;
    padding: 17px 19px 13px 17px;
    position: fixed;
    left: 25%;
    bottom: 0;
  }

  &__items {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 398px;
    width: 100%;
  }

  &__item {
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;

    img {
      margin: auto;
      margin-bottom: 7px;
    }
  }

  &__item--active {
    filter: invert(68%) sepia(62%) saturate(384%) hue-rotate(3deg) brightness(86%) contrast(91%);
  }
}

@media (max-width: 1500px) {
  .about-purse__table {
    max-width: 1000px;
    padding-right: 10px;
  }
  .about-purse__card-box {
    flex-wrap: wrap;
    max-width: 1500px;
  }
  .about-purse__box-item:last-child {
    margin-top: 10px;
  }
  .about-purse__inner {
    padding-bottom: 250px;
  }
  #width-row {
    width: 100%;
  }
}

@media (max-width: 1400px) {
  .about-purse__table {
    max-width: 950px;
    margin-right: 100px;
  }
}

@media (max-width: 1200px) {
  .about-purse__table {
    display: none;

    &-res {
      display: block;
      max-width: 725px;
      height: 500px;
      padding-right: 17px;
      background: #2d2d2f;
      border-radius: 25px;
    }
  }
  #width-row {
    max-width: 750px;
  }
  .about-user {
    padding-top: 25px;
  }
}

@media (max-width: 1120px) {
  .about-purse__box-item {
    margin-right: 0;
  }

  .about-purse__box-item:not(:first-child) {
    margin-top: 10px;
  }
  .about-purse__inner {
    height: 25%;
    padding-bottom: 40px;
    max-width: 45%;
  }

  .about-purse__card-box {
    flex-direction: column;
    align-items: center;
    max-width: 1000px;
  }
  #width-row {
    max-width: 670px;
  }
}

@media (max-width: 1100px) {
  .about-purse__table-res {
    min-width: 550px;
  }
}

@media (max-width: 1030px) {
  #width-row {
    max-width: 470px;
  }
}

@media (max-width: 838px) {
  #width-row {
    max-width: 370px;
    padding-top: 63px;
  }
  .wrapper-about {
    padding-left: 20px;
  }
  .about-purse__table-res {
    height: auto;
    margin-right: 40px;
  }
  .about-user {
    display: none;
  }
  .aside-header {
    &__res {
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 10;
    }
  }
  .aside-footer {
    &__res {
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 10;
    }
  }
}

@media (max-width: 784px) {
  .aside-footer,
  .aside-header {
    &__res {
      left: 20%;
    }
  }
}

@media (max-width: 640px) {
  .aside-footer,
  .aside-header {
    &__res {
      left: 15%;
    }
  }
}

@media (max-width: 575px) {
  .aside-footer,
  .aside-header {
    &__res {
      left: 10%;
    }
  }
  .about-purse__table-res {
    min-width: auto;
  }
}

@media (max-width: 500px) {
  .aside-footer,
  .aside-header {
    &__res {
      left: 5%;
    }
  }
  .about-purse__card-box {
    flex-direction: row;
  }
  #width-row {
    .description {
      max-width: 320px;
    }
  }
}

@media (max-width: 460px) {
  .aside-footer,
  .aside-header {
    &__res {
      left: 15px;
    }
  }
  .aside-footer,
  .aside-header {
    &__res {
      width: 362px;
    }
  }
}

@media (max-width: 430px) {
  .aside-footer,
  .aside-header {
    &__res {
      left: 0;
    }
  }
  .aside-footer,
  .aside-header {
    &__res {
      width: 285px;
    }
  }
}

@media (max-width: 380px) {
  .about-purse__table-res {
    margin-bottom: 200px;
  }
}
</style>
