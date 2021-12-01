<template>
  <div class="wrapper-set">
    <div id="width-row" class="row">
      <div class="about-header">
        <div class="about-name">
          <p>Настройки</p>
        </div>
        <div class="about-user">
          <div class="about-user__photo">
            <img src="img/Face.png" alt="1"/>
          </div>
          <div class="about-user__name">
            <p>Adam Morrow</p>
          </div>
        </div>
      </div>
      <div class="description">
        <p>Вы можете изменить свои основные данные</p>
      </div>
    </div>
    <div v-if="isActive === true" class="warning">
      <p><img src="img/war.png"/> Подтвердите свою почту!</p>
      <button @click="toggleClick()">X</button>
    </div>
    <div class="form">
      <form>
        <div class="group_btn">
          <div class="active">Основное</div>
          <div class="">Партнерская программа</div>
        </div>
        <div class="input-box">
          <div class="fio">
            <div class="item">
              <p>Имя</p>
              <input v-model="user_name" placeholder="Иван" type="text"/>
            </div>
            <div class="item">
              <p>Фамилия</p>
              <input v-model="user_secondName" placeholder="Иванов" type="text"/>
            </div>
            <div class="item">
              <p>Отчество</p>
              <input v-model="user_patronomyc" placeholder="Иванович" type="text"/>
            </div>
          </div>
          <div class="contact">
            <div class="item">
              <p>Email</p>
              <input v-model="email" placeholder="Иван" type="email"/>
            </div>
            <div class="item">
              <p>Номер телефона</p>
              <input v-model="user_number" placeholder="+7 999 654 56 56" type="tel"/>
            </div>
          </div>
        </div>
        <div class="btn-footer">
          <button class="change-pas">
            Изменить пароль <img src="img/partnersDown.png"/>
          </button>
          <button class="save" @click="changeBio">Сохранить</button>
        </div>
      </form>
    </div>
    <div class="footer"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isActive: true,
      user_name: '',
      user_secondName: '',
      user_patronomyc: '',
      email: '',
      user_number: '',
    };
  },
  methods: {
    toggleClick() {
      this.isActive = !this.isActive;
    },
    toggleBar() {

    },
    async changeBio() {
      event.preventDefault()
      const bio = await this.$axios.post('http://127.0.0.1:5000/bios/create_bio', {
        user_name: this.user_name,
        user_second_name: this.user_secondName,
        user_patronomyc: this.user_patronomyc,
        user_number: this.user_number,
        email: this.email
      }, {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}})
    },
    async getEmail(){
      const link = await this.$axios.get('http://127.0.0.1:5000/users/get_link',{headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}})
      if(link.data.active === true){
        this.isActive = false
      }
    }

  },
};
</script>
<style lang="scss" scoped>
.wrapper-set {
  margin: 23px 42px 32px 60px;
  height: 100%;
  max-width: 1100px;
  padding-bottom: 50px;

  .warning {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 26px;
    background: linear-gradient(124.34deg, #f4ce77 21.12%, #c2a153 98.3%);
    border-radius: 10px;
    margin-bottom: 26px;

    p {
      display: flex;
      align-items: center;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 28px;
      color: #212123;

      img {
        margin-right: 16px;
        margin-bottom: 4px;
      }
    }
  }

  .form {
    background: #2d2d2f;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.07);
    border-radius: 10px;
    padding: 40px 255px 34px 25px;
    position: relative;

    .group_btn {
      margin-bottom: 32px;
      display: flex;

      div {
        font-size: 16px;
        line-height: 24px;
        color: #979797;
        cursor: pointer;
        position: relative;
        transition: all 0.9s ease-in-out;
        &.active {
          color: #cda349;
          transition: all 0.9s ease-in-out;
        }

        &.active::after {
          content: "";
          position: absolute;
          background: #cda349;
          height: 2px;
          width: 100%;
          top: 35px;
          left: 0;
          z-index: 1;
          transition: all 0.9s ease-in-out;
        }
      }

      div + div {
        margin-left: 36px;
      }
    }

    .input-box {
      .fio {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
      }

      .contact {
        input {
          margin-bottom: 20px;
        }
      }

      input::placeholder {
        font-size: 16px;
        line-height: 28px;
      }

      p {
        padding-left: 12px;
        margin-bottom: 6px;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        display: flex;
        align-items: center;
        color: #cccccc;
      }

      input {
        background: #414144;
        border-radius: 4px;
        outline: none;
        padding: 10px 12px;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 28px;
        color: #ffffff;
      }
    }

    .change-pas {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      display: flex;
      align-items: center;
      color: #cccccc;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 12px;
      margin-bottom: 65px;

      img {
        margin-left: 15px;
      }
    }

    .save {
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 30px;
      display: flex;
      align-items: center;
      text-align: center;
      color: #343437;
      background: linear-gradient(124.34deg, #f4ce77 21.12%, #c2a153 98.3%);
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.07);
      border-radius: 10px;
      padding: 13px 44px;
    }
  }

  .form::after {
    content: "";
    position: absolute;
    background: #4d4c4c;
    height: 2px;
    width: 100%;
    top: 75px;
    left: 0;
  }
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
  .footer{
    margin-top: 75px;
    width: 100px;
    height: 2px;
  }
@media (max-width: 1350px) {
  .wrapper-set {
    .form {
      padding-right: 25px;
    }

    .input-box {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .fio {
      flex-direction: column;

      .item {
        margin-bottom: 20px;
      }
    }
  }
}

@media (max-width: 920px) {
  .wrapper-set {
    .input-box {
      flex-direction: column;
    }
  }
}

@media (max-width: 838px) {
  .about-user {
    display: none;
  }
}

@media (max-width: 700px) {
  .wrapper-set {
    margin: 100px 10px;
    padding-bottom: 200px;

    .btn-footer {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      align-items: center;
    }

    .change-pas,
    .save {
      max-width: 200px;
    }

    .form {
      .group_btn {
        div {
          font-size: 13px;
        }
      }
    }
  }
}
</style>
