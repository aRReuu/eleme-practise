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
  </div>
</template>


<script>
export default {};
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
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .food {
      margin-right: 5px;
      position: relative;
      width: 32vw;
      img {
        border-radius: 3px;
        @include wh(100%, 32vw);
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
</style>