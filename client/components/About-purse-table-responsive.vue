<template>
  <div class="strings">
    <div class="strings-table__name">
      <p>Transaction history</p>
    </div>
    <table class="table">
      <tbody>
        <tr class="table-tr">
          <td class="table-td">
            <img src="img/lg.png" alt="1" />
          </td>
          <td class="table-td">
            <p class="type">Type</p>
            <p class="rep">
              Replenishment <span class="status status-bad">&nbsp;</span>
            </p>
          </td>
          <td class="table-td">
            <p class="cash">3 600 USD</p>
            <p class="date">01:07 23.07.21</p>
          </td>
        </tr>
        <tr class="table-tr">
          <td class="table-td">
            <img src="img/lw.png" alt="1" />
          </td>
          <td class="table-td">
            <p class="type">Type</p>
            <p class="rep">
              Transfer <span class="status status-bad">&nbsp;</span>
            </p>
          </td>
          <td class="table-td">
            <p class="cash">2 400 USD</p>
            <p class="date">20:34 23.07.21</p>
          </td>
        </tr>
        <tr class="table-tr">
          <td class="table-td">
            <img src="img/lw.png" alt="1" />
          </td>
          <td class="table-td">
            <p class="type">Type</p>
            <p class="rep">
              Transfer <span class="status status-bad">&nbsp;</span>
            </p>
          </td>
          <td class="table-td">
            <p class="cash">354 USD</p>
            <p class="date">21:40 21.07.21</p>
          </td>
        </tr>
        <tr class="table-tr">
          <td class="table-td">
            <img src="img/lg.png" alt="1" />
          </td>
          <td class="table-td">
            <p class="type">Type</p>
            <p class="rep">
              Replenishment <span class="status status-bad">&nbsp;</span>
            </p>
          </td>
          <td class="table-td">
            <p class="cash">3 600 USD</p>
            <p class="date">01:07 23.07.21</p>
          </td>
        </tr>
        <tr class="table-tr">
          <td class="table-td">
            <img src="img/lg.png" alt="1" />
          </td>
          <td class="table-td">
            <p class="type">Type</p>
            <p class="rep">
              Replenishment <span class="status status-good">&nbsp;</span>
            </p>
          </td>
          <td class="table-td">
            <p class="cash">600 USD</p>
            <p class="date">01:07 23.07.21</p>
          </td>
        </tr>
        <tr class="table-tr">
          <td class="table-td">
            <img src="img/lg.png" alt="1" />
          </td>
          <td class="table-td">
            <p class="type">Type</p>
            <p class="rep">
              Replenishment <span class="status status-good">&nbsp;</span>
            </p>
          </td>
          <td class="table-td">
            <p class="cash">300 USD</p>
            <p class="date">01:07 23.07.21</p>
          </td>
        </tr>
        <tr class="table-tr">
          <td class="table-td">
            <img src="img/lg.png" alt="1" />
          </td>
          <td class="table-td">
            <p class="type">Type</p>
            <p class="rep">
              Replenishment <span class="status status-good">&nbsp;</span>
            </p>
          </td>
          <td class="table-td">
            <p class="cash">60 USD</p>
            <p class="date">01:07 23.07.21</p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style lang="scss" scoped>
.strings {
  background: #2d2d2f;
  border-radius: 25px;
  max-height: 100%;
  .table {
    width: 100%;
  }
  &-table__name {
    margin-bottom: 25px;
    padding: 17px 17px 0 17px;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    mix-blend-mode: normal;
    opacity: 0.9;
  }
  .table-tr {
    border-bottom: 1px solid #38383a;
  }
  .table-td {
    vertical-align: middle;
  }
  .table-td {
    line-height: 15px;
    padding: 15px 0 12px 16px;
    .type,
    .cash {
      font-weight: 600;
      font-size: 15px;
      margin-bottom: 3px;
      align-items: center;
      color: #ffffff;
    }
    .rep,
    .date {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      align-items: center;
      color: #cccccc;
      opacity: 0.6;
    }
    .rep {
      position: relative;
      .status {
        width: 5px;
        height: 5px;
        margin-left: 9px;
        position: relative;
      }
      .status-bad::after {
        content: "";
        top: 40%;
        right: 0;
        position: absolute;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: linear-gradient(124.34deg, #f38080 21.12%, #961d1d 93.48%);
      }
      .status-good::before {
        content: "";
        top: 40%;
        right: 0;
        position: absolute;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: linear-gradient(124.34deg, #9ed27e 21.12%, #639d41 93.48%);
      }
    }
  }
}
@media (max-width: 600px) {
  .about-purse__table-res {
    min-width: 581px;
  }
}
@media (max-width: 575px) {
  .about-purse__table-res {
    min-width: none;
  }
}
@media (max-width: 380px) {
  .about-purse__table-res {
    .rep {
      font-size: 10px !important;
    }
  }
}
</style>