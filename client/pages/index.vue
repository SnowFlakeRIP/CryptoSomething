<template>
  <div id="app">
    <header class="header">
      <div class="container">
        <Navbar @toggle="toggle"/>
        <div class="header__items">
          <div class="header__greeting">
            <div class="header__greeting-title">
              <h1>Приветствуем вас на платформе <br> <span>Energy Mining Gold</span></h1>
            </div>
            <div class="header__greeting-description">
              <p>Realm of the galaxies across the centuries the carbon in our apple pies
                vanquish the impossible another world venture.</p>
            </div>
            <div class="header__greeting-btn">
              <button>Открыть кошелек</button>
            </div>
          </div>

          <div class="header__contacts">
            <a v-for="contact in contacts" :key="contact.id" :href="contact.link">
              <img :src="require(`@/assets/contacts/${contact.img}`)" alt="">
            </a>
          </div>
        </div>

        <div class="header__cards">
          <div class="header__card" v-for="card in cards" :key="card.id">
            <div class="header__card-title">
              <img :src="require(`@/assets/${card.img}`)" alt="">
              <h3>{{ card.title }}</h3>
            </div>
            <div class="header__card-description">
              <p>{{ card.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
      <!-- TODO: Проверить -->
      <div class="wrapper">
          <div class="container">
              <About />
              <Possibilities />
          </div>
      </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  components: {
    Navbar
  },
  data() {
    return {
      isMenuOpen: false,
      contacts: [
        {id: 1, title: 'Facebook', img: 'facebook.svg', link: 'https://facebook.com'},
        {id: 2, title: 'Youtube', img: 'youtube.svg', link: 'https://youtube.com'},
        {id: 3, title: 'Vk', img: 'vk.svg', link: 'https://vk.com'},
        {id: 4, title: 'Instagram', img: 'instagram.svg', link: 'https://instagram.com'},
        {id: 5, title: 'Telegram', img: 'telegram.svg', link: 'https://telegram.org'},
      ],
      cards: [
        {
          id: 1,
          title: 'Объединение золота и криптовалюты',
          img: 'gold.png',
          description: 'Приемущество надежности драгоценного металла и актуальность цифровой валюты'
        },
        {
          id: 2,
          title: 'Децентрализованная система',
          img: 'earth.png',
          description: 'Отсутствие точки управления, контроля и отслеживания передвижения средств'
        },
        {
          id: 3,
          title: 'Минимальные риски на падение курса',
          img: 'graphic.png',
          description: 'Увеличение притока инвестиций и подкрепленность курсом золота'
        },
      ],
    }
  },
  methods: {
    toggle() {
      document.body.classList.toggle('lock')
    }
  }
}
</script>

<style lang="scss">
.lock {
  overflow-y: hidden;
}

.header {
  background: url("~/assets/banner.png") no-repeat;
  background-size: cover;

  &__items {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-bottom: 266px;
  }

  &__greeting {
    &-title {
      h1 {
        max-width: 897px;
        font-family: 'RaleWay', sans-serif;
        font-size: 50px;
        font-weight: 900;
        line-height: 130.5%;
        letter-spacing: 0.5px;
        color: #ffffff;
        padding-top: 196px;
        margin-bottom: 17px;
      }

      span {
        color: #E6C26D;
      }
    }

    &-description {
      p {
        max-width: 600px;
        font-size: 20px;
        line-height: 27px;
        color: #CCCCCC;
        margin-bottom: 28px;
      }
    }

    &-btn {
      button {
        background: linear-gradient(124.34deg, #E3C070 21.12%, #B0924C 98.3%);
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.07);
        border-radius: 10px;
        border: none;
        font-family: 'RaleWay', sans-serif;
        font-weight: bold;
        font-size: 16px;
        color: #343437;
        padding: 16px 30px;
        line-height: 24px;
        cursor: pointer;
      }
    }
  }

  &__contacts {
    display: flex;
    flex-direction: column;
    padding-top: 132px;
    gap: 27px;
    flex-wrap: wrap;

    a {
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #343437;
      border-radius: 50%;
    }
  }

  &__cards {
    flex-wrap: wrap;
    position: absolute;
    top: 86%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  &__card {
    max-width: 349px;
    background-color: #2D2D2F;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.07);
    border-radius: 12px;
    padding: 27px 26px 28px 25px;

    &-title {
      display: flex;
      align-items: center;
      margin-bottom: 13px;
      gap: 18px;

      img {
        width: 61px;
        height: 61px;
        transform: scale(2);
      }

      h3 {
        font-family: 'RaleWay', sans-serif;
        font-size: 25px;
        font-weight: bold;
        color: #CCCCCC;
      }
    }
  }
}

@media (max-width: 920px) {
  .header {
    &__contacts {
      flex-direction: row;
      margin: 0 auto;
      padding-top: 66px;
    }

    &__cards {
      top: 78%;
      padding-right: 10px;
    }
  }
}

@media (max-width: 425px) {
  .header {
    &__greeting {
      &-title {
        h1 {
          font-size: 34px;
        }
      }

      &-description {
        p {
          font-size: 18px;
        }
      }
    }

    &__card {
      max-width: 200px;

      &-title {
        flex-direction: column;

        h3 {
          font-size: 22px;
        }
      }
    }
  }
}

</style>
