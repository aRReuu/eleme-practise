<template>
    <div class="shoplist-container">
        <aside class="shoplist-filter">
            <div class="filter-item"
                 v-for="(element,index) in filterElement" :key="index">
                <span>{{element}}</span> 
            </div>
        </aside>
        <div class="shoplists">
            <section class="shoplist-item">
                <div class="item-top-part">
                    <div class="shop-icon">
                        <img src="/2/35/123.jpeg" alt="">
                    </div> 
                    <div class="shop-description">
                        <section class="shop-title">
                            <h3>测试咖啡店xxxxxx</h3>
                            <span class="span-block">...</span>
                        </section>
                        <section class="score">
                            <div class="score-data">
                                <img src="1/2/3.jpg" alt="">
                                <span>4.8分</span>
                                <span>月售44444444份</span>
                            </div>
                            <div class="tag-style">
                                <span class="white-style">蜂鸟专送</span>
                            </div>
                        </section>
                        <section class="sub-score">
                            <div>
                                <span>
                                    $其中 / 配送$3.3
                                </span>
                            </div>
                            <div>
                                <span>
                                    400m / 23min
                                </span>
                            </div>
                        </section>
                        <div class="part-line line"></div>
                    </div>   
                </div>
                
                <div class="item-bottom-part">
                    <section class="discount-des">
                        <div v-for="(discount,index) in discounts" :key="index" v-if="index < discountShowNums">
                            <span>{{discount.key}}</span>
                            <span>{{discount.value}}</span>
                        </div>
                    </section>
                    <section class="discount-show" @click="showDiscountList">
                        <div>
                            <span>7个活动</span>
                            <span class="traingle-icon" :class="{btn_animation:isShow}"></span>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    </div>    
</template>


<script>
// import Loading from "../common/loading";

export default {
    data(){
        return{
            filterElement:["综合排序","距离最近","销量最高","筛选"],
            discounts:[
                {key:"减",value:"满50元减5元，满80元减8元，满100元减10元，满150元减15元，满200元减20元"},
                {key:"配",value:"配送费立减5元"},
                {key:"保",value:"该商户食品安全已由国泰产险承担，食品安全有保障"},
                {key:"首",value: "首次光顾本店立减1元"},
                {key:"赠",value: "满1元赠送祝福语：幸福安康1份"},
                {key:"退",value: "退款在订单配送前可免费享受"},
                {key:"特",value:"特价商品4.88元起"}
            ],
            discountShowNums:2,
            isShow:false,
            isLoading:false
        }
    },

    components:{
        // Loading,
    },

    methods:{
        //伸缩展现列表 传count
        showDiscountList(){
            this.isShow = !this.isShow;
            this.discountShowNums = this.isShow ? this.discounts.length : 2;
        }
    }

}
</script>


<style lang="scss" scoped>
@import "../../style/mixin.scss";

.shoplist-container{
    background-color: #ffffff;
    margin: .8rem .2rem;
    text-align: center;
    .shoplist-filter{
        height: 2.7rem;
        margin: 0;
        @include flex-justify(center);
        // TODO滑动出瀑布流后没有实现悬浮边界效果 
        position: sticky;
        .filter-item{
            border-right: .1rem solid #666666; 
            @include wh(25%,100%);
            position: relative;
            span{
                line-height: 2.7rem;
                @include fontsc(.3rem,#666666);
            }
        }
        .filter-item:nth-of-type(4){
            border-right-color:transparent;
        }
    }
    .span-block{
        display: block;
    }

    //商店列表
    .shoplists{
        margin: .2rem .6rem 1rem .2rem;
        margin-top: .2rem;
        .shoplist-item{
            display: flex;
            flex-direction: column;
            .item-top-part{    
                display: flex;
                flex-direction: row;
                position: relative;
                justify-content: flex-start;
                .shop-icon{
                    padding: auto .7rem;
                    position: relative;
                    @include wh(16vw,16vw);
                    img{
                        @include wh(80%,80%);
                        margin-top: 50%;
                        transform: translateY(-50%);
                    }
                }
                .shop-description{
                    flex-grow: 1;
                    .shop-title{
                        display: flex;
                        align-items: center;
                        flex-direction: row;
                        justify-content: space-between;
                    }
                    .score{
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        align-items: center;
                        font-size: .8rem;
                        overflow: hidden;
                        margin-top: .2rem;
                        .score-data{
                            display: flex;
                            flex-direction: row;
                            justify-content: center;
                            img{
                                min-width: 6em;
                                max-width: 8em;
                            }
                            span{
                                margin-left: 0.3rem;
                            }
                        }
                
                        // 蜂鸟标签样式
                        .tag-style{
                            font-size: .2rem;
                            .white-style{
                                background-color: #ffffff;
                                color: blue;
                                border: 1px solid blue;
                                border-radius: .1rem;
                            }
                            .bule-style{
                                border-radius: .1rem;
                                background-color: blue;
                                color: white;
                            }
                        }
                    }
                    .sub-score{
                        margin-top: .3rem;
                        display: flex;
                        justify-content: space-between;
                        flex-direction: row;
                        span{
                            font-size: .8rem;
                            color: #999;
                        }
                    }
                    .part-line{
                        margin-top: .8rem;
                        @include wh(100%,1px);
                        background-color: #999999;
                        border-color: none;
                    }
                }
            }

            .item-bottom-part{
                margin: .2rem 0 .3rem 16vw;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                font-size: .3rem;
                margin-top: .5rem;

                //展示优惠按钮
                .discount-show{            
                    flex: 1;
                    // margin-top: 0rem;
                    // TODO三角形实现
                    div{
                        text-align: center;
                        .traingle-icon{
                            transform: translateY(-10%);
                            margin-left: .7em;
                            display: inline-block;
                            width: 0;
                            border-top: 1.2em solid #999999;
                            border-left: 1.2em solid transparent;
                            border-right: 1.2em solid transparent;
                        }
                    }
                }
                //优惠列表
                .discount-des{
                    text-align: left;
                    display: flex;
                    flex-direction: column;
                    vertical-align: middle;
                    div{
                        display: flex;
                        flex-direction: row;
                        justify-content: flex-start;
                        margin-top: .5rem;
                        font-size: .1rem;
                        // TODO强化记忆
                        &:first-child{
                            margin-top: 0rem;
                        }
                        span{
                            display: inline-block;
                        }
                        span:nth-of-type(1){
                            background-color: #ffffff;
                            border: 1px solid red;
                            color: red;
                            padding: 0 .1rem;
                        }
                        span:nth-of-type(2){
                            padding: .1rem;
                            max-width: 55vw;
                            margin-left: .2rem;
                            margin-right: 0rem;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            overflow: hidden;
                        }
                    }

                    .active_discount{
                        display: block;
                    }
                }
                
            }
        }
    }

    //切换按钮
    @keyframes rotate-traingle {
        0% { transform: rotate(0deg);}
        50%{ transform: rotate(90deg);}
        100%{ transform: rotate(180deg);}
    }

    .btn_animation{
        animation: rotate-traingle .15s;
        animation-fill-mode:forwards;
    }

    //加载过渡动画
    .loadinng-enter .loadinng-leave-to{
        opacity: 0;
    }
    .loadinng-enter-active .loading-leave-active{
        transform: opacity .1s;
    }
    
}
</style>
