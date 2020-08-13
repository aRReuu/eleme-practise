<template>
    <div>
        <!-- 顶部视图 -->
        <section class="shop-head-container">
            <div class="shop-main">
                <h2 class="shop-main-title">
                    <span class="">沙县小吃</span> 
                    <i class=""></i>
                </h2>
                <div class="shop-main-des">
                    <span>评价4.1</span>
                    <span>月消22222单</span>
                    <span>的好时机好的技术觉31分钟</span>
                </div>
            </div>
            <!-- 优惠券 -->
            <div class="shop-coupon">
                <div class="left-coupon">
                    <p class="coupon-money">
                        <span>
                            <small>$</small>7
                        </span>
                        <span>无门槛</span>
                    </p>
                    <p>领取</p>
                </div>
                <div></div>
            </div>
            <!-- 优惠券详情 -->
            <div></div>
        </section>
        <!-- 切换商品模块栏 -->
        <section></section>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import "../../style/mixin.scss";

.shop-head-container{
    // 头部主要描述信息
    .shop-main{
        background-color: $fc;
        .shop-main-title{
            height: 2rem;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            position: relative;
            i{
                @include wh(4vw,100%); 
                position: relative;
            }
            i::after{
                content: "";
                position: absolute;
                left: 2.2vw;
                @include vcenter;
                border-width: 2.4vw 0 2.4vw 2.73vw;
                border-style: solid;
                border-color: transparent transparent transparent rgba(0, 0, 0, .67);
            }
        }
        
        .shop-main-des{
            margin-top: .5rem;
            display: flex;
            flex-direction: row;
            font-size: .2rem;
            text-align: center;
            justify-content: center;
            span{
                margin-left: .3rem;
                color: #666;
                display: inline-block;
            }
        }
    }
    //中间优惠券
    .shop-coupon{
            background-color: red;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            .left-coupon{
                @include wh(38.4vw,6.4vw);
                display: flex;
                flex-direction: row;
                margin-left: 1rem;
                .coupon-money{
                    display: flex;
                    flex-direction:row;
                }
            }
        }
}

</style>
