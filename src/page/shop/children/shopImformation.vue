<template>
    <div class="shop-information-container">
        <section class="shop-brand padding-style">
            <img src="../../../images/shop_chi.png" alt="儿时">
            <div class="shop-brand-des">
                <h2>儿时的味道</h2>
                <p>传统手艺,从小吃到大,健康营养</p>
            </div>
            <div class="shop-brand-detail">查看品牌故事</div>
        </section>

        <section class="shop-distribution padding-style">
            <h2>配送信息</h2>
            <div>
                <p>由xxxxx提供配送,约xx分钟送达,距离xxxm</p>
                <p>配送费$xxx</p>
            </div>
        </section>

        <section class="shop-serve padding-style">
            <h2>商家服务</h2>
            <div class="shop-serve-tag">
                <span>配</span>
                <span>该商户已购买食品安全责任险，食品安全有保障</span>
            </div>
            <div class="shop-serve-tag">
                <span>退</span>
                <span>支持订单极速退款</span>
            </div>
        </section>

        <section class="shop-live-container padding-style">
            <h2>商家实景</h2>
            <div class="shop-live-pics clearfix">
                <router-link to="javascript:" class="shop-pic-link">
                    <img class="shop-pic" src="../../../images/zhifubao.png" alt="">
                    <span>大厅(1张)</span>
                </router-link>
                <router-link to="javascript:" class="shop-pic-link">
                    <img class="shop-pic" src="../../../images/zhifubao.png" alt="">
                    <span>大厅(1张)</span>
                </router-link>
            </div>
        </section>

        <section class="padding-style shop-information">
            <h2>商家信息</h2>
            <ul class="shop-info-ul">
                <li class="shop-info-li">
                    <span class="shop-info-type">没有啥商品简短介绍</span>
                    <span class="shop-info-des">豆浆油条,烤肉拌饭</span>
                </li>
                <li class="shop-info-li">
                    <span class="shop-info-type">品类</span>
                    <span class="shop-info-des">豆浆油条,烤肉拌饭</span>
                </li>
                <li class="shop-info-li">
                    <span class="shop-info-type">地址</span>
                    <span class="shop-info-des">广州市xxxx大院1号首层AsasasasasasaBC李静姐嘻嘻嘻</span>
                </li>
            </ul>
        </section>

        <section class="shop-certification padding-style">
            <h2>营业资质</h2>
        </section>
    </div>
</template>


<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "../../../style/mixin.scss";

.shop-information-container {
  -webkit-overflow-scrolling: touch;
  margin: 0;

  .padding-style {
    padding: 4.2vw 4vw 4vw;
    background-color: $fc;
    margin-top: 1rem;
  }

  .shop-brand {
    img {
      @include wh(92vw, 52vw);
      margin-bottom: 1rem;
    }
    .shop-brand-des {
      p {
        color: #666;
        font-size: 0.8rem;
      }
      margin-bottom: 1.1rem;
    }
    .shop-brand-detail {
      color: #666;
      font-size: 1.2rem;
      text-align: center;
    }
  }

  .shop-distribution {
    div {
      color: #666;
      margin-top: 0.5rem;
      font-size: 1.1rem;
    }
  }
  //商家服务
  .shop-serve {
    .shop-serve-tag {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      margin-top: 0.5rem;
      font-size: 0.1rem;
      span {
        display: inline-block;
        color: #666;
      }
      span:nth-of-type(1) {
        border: 1px solid #666;
        padding: 0 0.1rem;
      }
      span:nth-of-type(2) {
        padding: 0.1rem;
        margin-left: 0.2rem;
        margin-right: 0rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }

  .shop-live-container {
    .shop-live-pics {
      margin-top: 1rem;
      .shop-pic-link {
        margin-right: 0.4rem;
        position: relative;
        @include wh(20.8vw, 20.8vw);
        float: left;
        //
        .shop-pic {
          display: block;
          @include wh(100%, 100%);
        }
        span {
          display: block;
          position: absolute;
          bottom: 0;
          width: 100%;
          background-color: rgba(0, 0, 0, 0.6);
          text-align: center;
          font-size: 1.1rem;
          overflow: hidden;
          color: $fc;
        }
      }
    }
  }

  .clearfix {
    zoom: 1;
  }
  //TODO 清除浮动并且包容子浮动标签的高度
  .clearfix::after {
    content: "";
    display: block;
    clear: both;
  }

  //商家信息
  .shop-information {
    padding: 4.2vw 0 1vw 4vw;
    .shop-info-ul {
      margin-top: 1rem;
      .shop-info-li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        border-bottom: 1px solid $bc;
        span {
          padding-top: 4vw;
          padding-bottom: 4vw;
        }
        .shop-info-type {
          display: block;
          font-weight: 500;
          color: #333;
          font-size: 1.2rem;
        }
        .shop-info-des {
          padding-right: 4vw;
          display: block;
          font-weight: 300;
          color: #666;
          font-size: 1rem;
          text-align: right;
          max-width: 60vw;
        }
      }

      .shop-info-li:nth-of-type(1) {
        .shop-info-type {
          font-weight: 300;
          color: #666666;
          font-size: 1.2rem;
        }
        .shop-info-des {
          display: none;
        }
      }
    }
  }
}
</style>
