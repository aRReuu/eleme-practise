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
                    <!-- 左 -->
                    <div class="shop-icon">
                        <img src="/2/35/123.jpeg" alt="">
                    </div> 
                    <!-- 右 使用flex column-->
                    <div class="shop-description">
                        <section class="shop-title">
                            <h3>测试咖啡店xxxxxx</h3>
                            <span class="span-block">...</span>
                        </section>
                        <section class="score">
                            <div class="score-data">
                                <img src="" alt="">
                                <span>4.8分</span>
                                <span>月售44444444份</span>
                            </div>
                            <div>
                                <span>蜂鸟专送</span>
                            </div>
                        </section>
                        <section></section>
                    </div>   
                </div>
                <!-- TODO -->
                <div class="item-bottom-part"></div>
            </section>
        </div>
    </div>    
</template>


<script>
export default {
    data(){
        return{
            filterElement:["综合排序","距离最近","销量最高","筛选"],

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
        width: 100vw;
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
                    flex-grow: 0.9;
                    .shop-title{
                        display: flex;
                        align-items: center;
                        flex-direction: row;
                        justify-content: space-between;
                    }
                    .score{
                        background-color: powderblue;
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        .score-data{
                            font-size: .8rem;
                            display: flex;
                            flex-direction: row;
                            justify-content: center;
                            img{

                            }
                        }
                    }
                    .sub-score{
                        justify-content: space-between;
                    }
                }
            }
        }
    }
}


</style>
