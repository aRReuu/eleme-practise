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

    <section class="shop-scroll-view">
      <div class="left-menu-wrap" ref="menuScroll">
        <ul>
          <li>ssss</li>
          <li>ssss</li>
          <li>ssss</li>
          <li>ssss</li>
          <li>ssss</li>
          <li>ssss</li>
          <li>ssss</li>
          <li>ssss</li>
          <li>ssss</li>
        </ul>
      </div>
      <div class="right-foods-wrap" ref="foodsScroll">
        <dl class="section-foods">
          <dt>ssss</dt>
          <dd></dd>
          <dd></dd>
          <dd></dd>
          <dd></dd>
        </dl>
      </div>
    </section>
  </div>
</template>


<script>
import BScroll from "vue2-better-scroll";

export default {
  data(){
    return{
      menuScroll:{},
      foodsScroll:{},
      scrollY:0,
    };
  },

  mounted(){
    initScroll();
  },

  components:{
    BScroll,
  },
  

  methods:{
    initScroll(){
      this.menuScroll = new BScroll(this.$refs.menuScroll,{
        click:true
      });
      this.foodsScroll = new BScroll(this.$refs.foodsScroll,{
        click:true,
        probeType:3
      });
      this.foodsScroll.on("scroll",pos => {
        // this.scrollY = Math
      })
    },
  }

};
</script>


<style lang="scss" scoped>
@import "../../../style/mixin.scss";

.order {
  background-color: $fc;
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

.shop-scroll-view{
  height: calc(100vh - 44px);
  position: sticky;
  display: flex;
  background-color: $fc;
  .left-menu-wrap{
    flex: .2;
    background-color: $ic;
  }
  .right-foods-wrap{
    flex: .8;

    .section-foods {
      
    }
  }
}
</style>