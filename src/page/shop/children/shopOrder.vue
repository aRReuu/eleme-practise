<template>
  <div class="order">
    <section class="shop-recommend">
      <div class="recomend-advertising">
        <img src="../../../images/shop_chi.png" alt />
      </div>
      <h2>商家推荐</h2>
      <div class="recomend-foods">
        <div class="food">
          <img src="../../../images/shop_chi.png" alt />
          <div class="food-des">
            <p>浓情一刻套操套餐</p>
            <small>月售7 好评100%</small>
            <big>$49.9</big>
          </div>
          <span></span>
        </div>
        <div class="food">
          <img src="../../../images/shop_chi.png" alt />
          <div class="food-des">
            <p>浓情一刻套操套餐</p>
            <small>月售7 好评100%</small>
            <big>$49.9</big>
          </div>
          <span></span>
        </div>
        <div class="food">
          <img src="../../../images/shop_chi.png" alt />
          <div class="food-des">
            <p>浓情一刻套操套餐</p>
            <small>月售7 好评100%</small>
            <big>$49.9</big>
          </div>
          <span></span>
        </div>
        <div class="food">
          <img src="../../../images/shop_chi.png" alt />
          <div class="food-des">
            <p>浓情一刻套操套餐</p>
            <small>月售7 好评100%</small>
            <big>$49.9</big>
          </div>
          <span></span>
        </div>
      </div>
    </section>
    <!-- TODO 滚动➡️窗口直接让当前菜单定位到粘性属性 -->
    <section class="shop-scroll-view">
      <div class="left-menu-wrap" ref="menuScroll">
        <ul>
          <li v-for="count in 20" :key="count">ssss</li>
        </ul>
      </div>
      <div class="right-foods-wrap" ref="foodsScroll">
        <div>
          <dl class="section-foods" v-for="count in 3" :key="count">
            <dt class="section-title">
              <strong>热销</strong>
              <small class="ellipsis">ii萨基时间啊时间啊时间</small>
            </dt>
            <dd class="seciton-food-row" v-for="co in 3" :key="co">
              <span class="food-pic">
                <img src="../../../images/shop_chi.png" alt />
              </span>
              <section class="food-des">
                <h2 class="ellipsis">三文鱼一斤</h2>
                <p class="ellipsis">还有一份洒洒水上的</p>
                <p class="ellipsis">月瘦2222 好评率20%</p>
                <div class="discount">
                  <span>6.9折</span>
                </div>
                <span class="price"
                  >$23.7
                  <del>$28</del>
                </span>
                <div class="add-cart"></div>
              </section>
            </dd>
          </dl>
        </div>
      </div>
    </section>
    <shop-car></shop-car>
  </div>
</template>

<script>
import { shopOrderTest } from "../../../servvice/getData.js";
import BScroll from "better-scroll";
import ShopCar from "./shopCar";

export default {
  data() {
    return {
      menuScroll: null,
      foodsScroll: null,
      scrollY: 0,
      scrollData: null,
      foodsHeights: [],
      foodsScrollY:0
    };
  },

  mounted() {
    this.initScroll();
  },

  components: {
    BScroll,
    ShopCar,
  },

  methods: {
    /** 1.初始化滚动视图  2.获取视图数据*/
    initScroll() {
      this.menuScroll = new BScroll(this.$refs.menuScroll, {
        click: true,
      });
      this.foodsScroll = new BScroll(this.$refs.foodsScroll, {
        click: true,
        probeType: 3,
      });

      /**监听当前滚动位置 */
      this.foodsScroll.on("scroll", (pos) => {
        this.foodsScrollY = Math.abs(Math.round(pos.y));
      });

      /** TODO 初步请求本地数据 */
      shopOrderTest().then((res) => {
        this.scrollData = res.data;
      });
    },

    /**计算菜单高度集合 */
    calculateFoodsHeight(){
      this.foodsHeights = [];
      this.foodsScroll.getElementsByClassName("section-foods");
      //add height
      for (let i = 0; i < menus.length; i++) {
        
      }
      this.foodsHeights.push();
    },

    /** 菜单/食物联动切换 */
    selectMenu(index) {
      this.foodsScroll.scrollTo(0, foodsHeights[index]);
    },
  },
};
</script>


<style lang="scss" scoped>
@import "../../../style/mixin.scss";

.order {
  background-color: $fc;
  position: relative;
}

.shop-recommend {
  width: 100%;
  padding: 0 10px;
  .recomend-advertising {
    @include wh(100%, 88px);
    img {
      @include wh(100%, 100%);
    }
  }
  h2 {
    margin-top: 10px;
    color: #333;
    text-align: left;
    font-weight: 600;
  }
  .recomend-foods {
    margin-top: 20px;
    margin-right: -10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    overflow-x: scroll;
    //空白位置处理
    white-space: nowrap;
    //文字
    // overflow-wrap:normal;
    .food {
      margin-right: 8px;
      position: relative;
      img {
        border-radius: 6px;
        @include wh(33.33vw, 33.33vw);
      }
      .food-des {
        display: flex;
        flex-direction: column;
        p small big {
          display: block;
        }
      }
      span {
        right: 0;
        bottom: 0;
        display: block;
        background-color: red;
        position: absolute;
        @include wh(20%, 12.5%);
      }
    }
  }
}

.shop-scroll-view {
  position: sticky;
  top: 40px;
  height: calc(100vh - 40px);
  display: flex;
  background-color: $fc;
  text-align: center;
  .left-menu-wrap {
    flex: 0.2;
    height: calc(100% - 55px);
    background-color: $ic;
    li {
      padding: 2.6vw 2vw;
      text-align: left;
    }
  }
  .right-foods-wrap {
    overflow-y: hidden;
    flex: 0.8;
    height: calc(100% - 55px);
  }
  .section-foods {
    .section-title {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 10px;
      strong small {
        overflow: hidden;
        text-overflow: ellipsis;
      }
      small {
        margin-left: 5px;
        color: #999;
      }
    }
    .seciton-food-row {
      display: flex;
      align-items: flex-start;
      height: 27.3333vw;
      margin: 0 10px 6px 5px;
      .food-pic {
        img {
          border-radius: 3px;
          @include wh(25.3333vw, 25.3333vw);
        }
      }
      .food-des {
        height: 100%;
        padding-left: 8px;
        text-align: left;
        position: relative;
        flex: 1;
        display: flex;
        flex-direction: column;
        p {
          margin-top: 3px;
          display: block;
          color: #999;
          font-size: 9px;
        }
        .discount {
          margin-top: 3px;
          span {
            font-size: 8px;
            border: 1px solid #eb6551;
            color: #eb6551;
            padding: 0 2px;
          }
        }
        .price {
          position: absolute;
          bottom: 2px;
          display: block;
          color: rgb(255, 83, 57);
          font-size: 18px;
          del {
            color: #999;
            margin-left: 6px;
            font-size: 12px;
          }
        }
        .add-cart {
          position: absolute;
          right: 2px;
          bottom: 2px;
          @include wh(20px, 20px);
          background-color: red;
        }
      }
    }
  }
}
</style>