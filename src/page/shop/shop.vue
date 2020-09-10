<template>
    <div class="shop-page">
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
                    <p class="get-coupon">领取</p>
                </div>
                <div class="right-coupon">
                    <p class="coupon-money">
                        <span>
                            <small>$</small>10
                        </span>
                        <span>满99可用</span>
                    </p>
                    <p class="get-coupon">领取</p>
                </div>
            </div>
            <!-- 优惠券详情 -->
            <div class="shop-discount-detail">
                <div class="discount-tag">
                    <div class="tag"><span>满20件撒飒飒</span></div>
                    <div class="tag"><span>满20件sss</span></div>
                    <div class="tag"><span>满20件sss</span></div>
                    <div class="tag"><span>配送优惠</span></div>
                </div>
                <span class="discount-show-tag">
                    n个优惠 <i></i>
                </span>
            </div>
            <div class="shop-notice">
                <span>嘻嘻嘻嘻嘻嘻</span>
            </div>
        </section>

        <!-- 切换商品模块栏 -->
        <section class="shop-switch-control">
            <div class="switch-btn">
                <span>点餐</span>
            </div>
            <div class="switch-btn">
                <span>评价</span>
            </div>
            <div class="switch-btn">
                <span>商家</span>
            </div>
        </section>

        <!-- 底部三视图 -->
        <section class="shop-switch-container"> 
            <shop-order > </shop-order>
            <shop-evaluation  style="display:none;"></shop-evaluation>
            <!-- 商家页 -->
            <shop-imformation style="display:none;"></shop-imformation>
        </section>
    </div>
</template>

<script>
import shopImformation from "./children/shopImformation"
import shopEvaluation from "./children/shopEvaluation"
import shopOrder from "./children/shopOrder"

export default {
    data(){
        return{

        }
    },
    components:{
        shopImformation,
        shopEvaluation,
        shopOrder
    }
}
</script>

<style lang="scss" scoped>
@import "../../style/mixin.scss";

.shop-head-container{
    // 头部主要描述信息
    background-color: $fc;
    position: relative;
    .shop-main{
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
            display: flex;
            margin-top: .4rem;
            flex-direction: row;
            justify-content: center;
            font-size: .4rem;
            .left-coupon{
                background-color: #ffe578;
                @include wh(38.4vw,6.4vw);
                display: flex;
                flex-direction: row;
                align-items: center;
                .coupon-money{
                    align-items: center;
                    display: flex;
                    flex-direction:row;
                    span:nth-of-type(2){
                        margin-left: .4rem;
                    }
                }
                //领取
                .get-coupon{
                    margin-left: .4rem;
                }
            }

            .right-coupon{
                margin-left: .6rem;
                background-color: #fff4f4;
                @include wh(38.4vw,6.4vw);
                display: flex;
                flex-direction: row;
                align-items: center;
                .coupon-money{
                    align-items: center;
                    display: flex;
                    flex-direction:row;
                    span:nth-of-type(2){
                        margin-left: .4rem;
                    }
                }
                //领取
                .get-coupon{
                    margin-left: .4rem;
                }
            }    
        
    }

    .shop-discount-detail{
        margin: .3rem auto 0;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        position: relative;
        @include wh(80vw,2.5rem);
        // 优惠标签
        .discount-tag{
            display: flex;
            overflow: hidden;            
            .tag{
                display: inline-block;
                // transform-origin: top left;
                // -webkit-transform: scale(0.8);
                font-size: .5rem;
                margin-left: .3rem;
                color: red;
                border: .1rem solid red;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                span{
                    padding: 0 .1rem;
                }
            }
            .tag:nth-of-type(1){
                margin-left: 0;
            }
        }
        //查看优惠详情
        .discount-show-tag{
            margin-left: 1rem;
            color: #999;
            font-size: .5rem;
            // overflow: hidden;
            i{
                position: relative;
            }
            i::after{
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                margin-left: .3rem;
                content: "";
                border-style: solid;
                border-width: .4rem .4rem 0 .4rem;
                border-color: rgba(0, 0, 0, .3) transparent transparent transparent;
            }
        }
        
    }
    //公告
    .shop-notice{
        width: 80vw;
        margin: .3rem auto 0rem;
        span{
            display: block;
            margin: 0;
            text-align: left;
            color: #999;
        }
    }
}

//切换按钮控件
.shop-switch-control{
    background-color: $fc;
    position: sticky;
    height: $scrollTop;
    // TODO 必须指定顶部top属性，否则粘性定位不生效
    top: 0;
    left: 0;
    right: 0;
    margin-top: 1rem;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    border-bottom: 1px solid $bc;
    .switch-btn{
        line-height: 10vw;
        flex: 1;
        text-align: center;
        span{
            display: inline-block;
            font-size: 1.5rem;
            margin: 0 auto -1px;
            text-align: center;
            border-bottom: 2px solid $blue;
        }
    }
}

.shop-switch-container{

}


</style>
