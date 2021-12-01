<template>
  <div class="wrapper">
    <div class="item">
      <p class="header">Войти</p>
      <form>
        <input v-model.trim="email" placeholder="Email" type="email"/>
        <input v-model.trim="password" placeholder="Password" type="password"/>
        <div @click="toogleClass()" class="save_me">
          <img v-if="toggleSave === true" src="img/Checkbox.png"/>
          <p>Запомнить меня</p>
        </div>
        <button @click.stop="login">Купить</button>
      </form>
      <div class="link">
        <a href="#!">Забыли пароль?</a>
        <a href="#!">Зарегестрироваться</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      toggleSave: true,
      email: 'schmakov1@gmail.com',
      password: 'q20047878qQ',
    };
  },
  methods: {
    toogleClass() {
      this.toggleSave = !this.toggleSave;
    },
    async login() {
      event.preventDefault()
      if (this.email !== '' || !this.password !== '') {
        const token = await this.$axios.post('http://127.0.0.1:5000/auth/login', {
          email: this.email,
          password: this.password
        })
        if (token.data.message) {
          alert('Неверные данные')
        } else {
          localStorage.setItem('token', token.data.token)
          localStorage.setItem('refreshToken', token.data.refreshToken)
          await this.$router.push('/purse')
        }
      }
    }
  },
  mounted() {

  }
};
</script>
<style lang="scss" scoped>
.wrapper {
  position: absolute;
  width: 627px;
  height: 744px;
  right: calc(50% - 313.5px);
  top: calc(50% - 372px);
  background: #212123;
}

.item {
  position: absolute;
  width: 343px;
  height: 465px;
  right: calc(50% - 171.5px);
  top: calc(50% - 232.5px);
  display: flex;
  flex-direction: column;
  align-items: center;

  .header {
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 45px;
    color: #ffffff;
    mix-blend-mode: normal;
    opacity: 0.9;
  }

  form {
    display: flex;
    flex-direction: column;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;
    color: #979797;
    margin-top: 32px;

    input {
      background: #414144;
      border-radius: 4px;
      width: 307px;
      height: 28px;
      padding: 10px 16px;
      outline: none;
      color: #979797;
    }

    input + input {
      margin-top: 15px;
    }

    .save_me {
      margin-top: 32px;
      margin-bottom: 35px;
      cursor: pointer;
    }

    button {
      background: linear-gradient(124.34deg, #f4ce77 21.12%, #c2a153 98.3%);
      box-shadow: 0px 0px 30px rgba(192, 157, 77, 0.5);
      border-radius: 6px;
      padding: 13px 131px;
      font-family: Poppins;
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 30px;
      display: flex;
      align-items: center;
      text-align: center;
      color: #343437;
    }
  }

  .save_me {
    display: flex;
    align-items: center;

    p {
      padding-left: 13px;
    }
  }
}

.link {
  margin-top: 73px;
  display: flex;
  flex-direction: column;

  a {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #ffffff;
  }

  a + a {
    margin-top: 12px;
  }
}
</style>
