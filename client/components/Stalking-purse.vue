<template >
  <div class="wrapper-stalkig">
    <div id="width-row" class="row">
      <div class="about-header">
        <div class="about-name">
          <p>Ставка</p>
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
        <p>Система ставок</p>
      </div>
    </div>
    <div class="stalkig-info">
      <Stalking-info />
    </div>
    <div class="stalking-table">
      <Stalking-table />
    </div>
    <div class="footer"></div>
  </div>
</template>
<style lang="scss" scoped>
.wrapper-stalkig {
  margin: 23px 42px 32px 60px;
  height: 100%;
    padding-bottom: 150px;
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
.stalking-table {
  width: 100%;
}
.stalkig-info {
  margin-bottom: 32px;
}
.footer{
  margin-top: 75px;
  width: 100px;
  height: 2px;
}
@media (max-width: 838px) {
  .wrapper-stalkig {
    margin-top: 100px;
    height: 100vh;
  }
  .about-user {
    display: none;
  }
}
@media (max-width: 683px) {
  .stalking-table {
    overflow-x: auto;
  }
}
</style>
