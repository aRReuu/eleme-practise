<template>
    <div class="car-container">
        <section class="car-discount ellipsis">
            <span>---------</span>
        </section>
        
        <section class="car-list">
            <li class="car-select-des">
                <span>已选商品</span>
                <span class="car-clear-foods">
                    <i><svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" id="cart-remove"><g fill="none" fill-rule="evenodd" transform="translate(1)"><path fill="#979797" d="M7.05 15h-5.5c-.303 0-.55-.26-.55-.583V5.091c0-.322.246-.583.55-.583.304 0 .55.26.55.583v8.743h4.95c1.032 0 2-.426 2.728-1.2A4.18 4.18 0 0 0 10.9 9.735l-.03-7.15c0-.323.245-.585.548-.586h.003c.302 0 .548.26.55.58L12 9.732a5.374 5.374 0 0 1-1.442 3.724C9.622 14.451 8.376 15 7.05 15z"></path><path fill="#979797" d="M12.458 3H.542C.242 3 0 2.776 0 2.5S.243 2 .542 2h11.916c.3 0 .542.224.542.5s-.243.5-.542.5"></path><path fill="#979797" d="M5 2h3V1H5v1zm3.464 1H4.536C4.24 3 4 2.776 4 2.5v-2c0-.276.24-.5.536-.5h3.928C8.76 0 9 .224 9 .5v2c0 .276-.24.5-.536.5z" mask="url(#cart-remove_b)"></path></g></svg></i>清空
                </span>
            </li>
            <ul>
                <li class="car-food">
                    <span>--</span>
                    <span>$00.00</span>
                    <span>
                        <add-food></add-food>
                    </span>
                </li>
            </ul>
        </section>
        <section class="car-bottom">
            <div class="shop-cart-btn">
                <div class="car-btn-cricle">
                    <img class="car-btn-icon" src="" alt="">
                </div>
            </div>
            <div class="car-price">
                <span>----</span>
                <span>------</span>
            </div>
            <button class="buy-btn">
                -----
            </button>
        </section>

    </div>
</template>


<script>
import AddFood from "../../../components/common/shopCarAddFoods";

export default {
  data() {
    return {};
  },
  components: {
    AddFood
  }
};
</script>



<style lang="scss" scoped>
@import "../../../style/mixin.scss";

.car-container {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  .car-discount {
    text-align: center;
    background-color: #fffad6;
    font-size: 8px;
  }
  .car-list {
    display: none;
    .car-select-des {
      padding: 10px 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #666;
      background-color: #eceff1;
      border-bottom: 1px solid $bc;
      span:first-child {
        font-size: 14px;
      }
      .car-clear-foods {
        font-size: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        i {
          @include wh(13px, 13px);
          padding-right: 2px;
        }
      }
    }
    ul {
      background-color: $fc;
      .car-food {
        padding:10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        border-bottom: 1px solid $bc;
        span:nth-of-type(1) {
          flex: 3;
        }
        span:nth-of-type(2) {
          color: red;
          flex: 1;
          text-align: center;
        }
        span:nth-of-type(3) {
          flex: .9;
        }
      }
    }
  }

  .car-bottom {
    background-color: rgba($color: #000000, $alpha: 0.7);
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 40px;
    position: relative;

    .shop-cart-btn {
      flex: 1;
      position: relative;
      height: 100%;
      .car-btn-cricle {
        border-radius: calc(45px / 2);
        background-color: rgba($color: #000000, $alpha: 0.7);
        position: absolute;
        @include wh(45px, 45px);
        top: 0;
        transform: translateY(-25%);
        right: 12px;
      }
    }

    .car-price {
      flex: 3;
      span {
        padding-left: 8px;
        color: #999;
        display: block;
      }
      span:last-child {
        margin-top: 1px;
        font-size: 9px;
      }
    }
    .buy-btn {
      flex: 1;
      height: 100%;
      background-color: transparent;
      color: $fc;
      font-size: 15px;
      padding-right: 10px;
    }
  }
}
</style>
