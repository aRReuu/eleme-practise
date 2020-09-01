<template>
    <div class="car-container">
        <section class="car-discount ellipsis">
            <span>满20减222，满22减222.。。。。。。</span>
        </section>
        
        <section class="car-list">
            //
        </section>
        <section class="car-bottom">
            <div class="shop-cart-btn">
                <div class="car-btn-cricle">
                    <img class="car-btn-icon" src="" alt="">
                </div>
            </div>
            <div class="car-price">
                <span>未选购商品</span>
                <span>另需配送费4元</span>
            </div>
            <button class="buy-btn">
                $15元配送
            </button>
        </section>

    </div>
</template>


<script>
export default {
    data(){
        return{

        }
    }
}
</script>



<style lang="scss" scoped>
@import "../../../style/mixin.scss";

.car-container{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    .car-discount{
        text-align: center;
        background-color: #fffad6;
        font-size: 8px;
    }
    .car-list{
        display: none;
        background-color: salmon;
        height: 50px;
    }

    .car-bottom{
        background-color: rgba($color: #000000, $alpha: .7);
        display: flex;
        align-items: center;
        justify-content: space-around;
        height: 40px;
        position: relative;

        .shop-cart-btn{
            flex: 1;
            position: relative;
            height: 100%;
            .car-btn-cricle{
                border-radius: calc(45px / 2);
                background-color: rgba($color: #000000, $alpha: .7);
                position: absolute;
                @include wh(45px,45px);
                top: 0;
                transform: translateY(-25%);
                right: 12px;
            }
        }

        .car-price{
            flex: 3;
            span{
                padding-left: 8px;
                color: #999;
                display: block;
            }
            span:last-child{
                margin-top: 1px;
                font-size: 9px;
            }            
        }
        .buy-btn{
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
