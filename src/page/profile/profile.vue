<template>
    <div>
        <head-top head-title="我的"></head-top>
        <section class="header-view-container bar-top">
            <!-- 个人信息头部视图 -->
            <section class="account-header">
                <div class="left-head-img">
                    <svg v-if="!headImgUrl" class="privateImage-svg">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#avatar-default"></use>
                    </svg>
                    <img v-else src="" alt="">
                </div>
                <div class="middle-account-info">
                    <span class="ellipsis">登录/注册</span>
                    <span class="ellipsis">
                        <svg class="icon-mobile" fill="#fff">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#mobile"></use>
                        </svg>
                        <p>暂无绑定手机号</p> 
                    </span>
                </div>
                <div class="right-icon">
                    <svg class="arrow-svg" fill="#fff">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                    </svg>
                </div>
            </section>
            <!-- 财产 -->
            <section class="account-property">
                <div>
                    <span><b>{{money}}</b>元</span>
                    <span>我的余额</span>
                </div>
                <div>
                    <span><b>{{coupon}}</b>个</span>
                    <span>我的优惠</span>
                </div>
                <div>
                    <span><b>{{intergrate}}</b>分</span>
                    <span>我的积分</span>
                </div>
            </section>
        </section>
        <!-- 下半部分列表 -->
        <section v-if="listData.length > 0" class="account-lists">
            <ul class="ul-list-style" v-for="(lists,index) in listData" :key="index">
                <li class="li-cell-style" v-for="(cell,cellIndex) in lists" :key="cellIndex">
                    <div class="left-icon">
                        <svg :fill="cell.color">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="cell.picId"></use>
                        </svg>
                    </div>
                    <div class="middle-description">
                        <span class="ellipsis">{{cell.text}}</span>
                        <svg class="arrow-right" fill="#bbb">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                        </svg>
                    </div>
                </li>
            </ul>
        </section>
        
        <foot-guide></foot-guide>
    </div>
</template>

<script>
import HeadTop from "../../components/header/headtop";
import FootGuide from "../../components/common/footGuide";

export default {
    data(){
        return{
            listData : [
                [
                    {color:"#4aa5f0",picId:"#order",text:"我的订单"},
                    {color:"#fc7b53",picId:"#point",text:"积分商城"},
                    {color:"#ffc636",picId:"#vip",text:"饿了么会员卡"}],
                [      
                    {color:"#4aa5f0",picId:"#service",text:"服务中心"},
                    {color:"#3cabff",picId:"#download",text:"下载饿了么APP"}]
            ],
            money:"0.00",
            coupon:"0",
            intergrate:"0",
            headImgUrl:null,
        }
    },

    components:{
        HeadTop,
        FootGuide
    },

    mounted(){
        //处理数据分列
    }
}
</script>

<style lang="scss" scoped>
@import "../../style/mixin.scss";

.header-view-container{
    width: 100%;
    //头像,个人手机信息
    .account-header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        @include wh(100%,4.2rem);
        background-color: $blue;

        .left-head-img{
            position: relative;
            @include wh(20%,100%);
            svg{
                left: .6rem;
                @include vcenter;
                @include wh(70%,70%);
            }
        }
        .middle-account-info{
            @include wh(70%,100%);
            display: flex;
            flex-direction: column;
            justify-content: center;
            span{
                font-size: .755rem;
                color: $fc;
                font-weight: 400;
                display: block;
                p{
                    color: $fc;
                    margin-left: .2rem;
                }
            }
            span:nth-of-type(2){
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;
                .icon-mobile{
                    @include wh(.8rem,.8rem);
                }
            }
        }
        .right-icon{
            position: relative;
            @include wh(8%,100%);
            svg{
                @include vcenter;
                @include wh(40%,50%);
            }
        }
    }
    //财产
    .account-property{
        display: flex;
        flex-direction: row;
        background-color: $fc;
        @include wh(100%,3.5rem);
        div{
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: relative;
            flex: 1;
            font-size: .88rem;
            span{
                font-weight: 320;
                text-align: center;
                display: block;
                b{
                    display: inline-block;
                }
            }
        }
        div:nth-of-type(1){
            border-right: .1rem solid $bc;
            b{color: #f90;}
        }
        div:nth-of-type(2){
            border-right: .1rem solid $bc;
            b{color: red;}
        }
        div:nth-of-type(3){
            b{color: green;}
        }
    }
}

 //tableview-cell
.account-lists{
    .ul-list-style{
        margin-top: 1rem;
        background-color: $fc;
        .li-cell-style{
            @include wh(100%,2.2rem);
            display: flex;
            flex-direction: row;
            .left-icon{
                @include wh(1.66rem,100%); 
                position: relative;
                svg{
                    position: absolute;
                    right: 0rem;
                    @include wh(70%,100%);
                }
            }
            .middle-description{
                flex: 1;
                display: flex;
                flex-direction: row;
                position: relative;
                justify-content: space-between;
                align-items: center;
                border-bottom: .012rem solid $bc;
                span{
                    font-weight: 300;
                    display: inline-block;
                    flex: 1;
                    text-align: left;
                    text-indent: .2rem;
                    font-size: .9rem;
                }
                .arrow-right{
                    @include wh(.7rem,50%);
                    position: absolute;
                    @include vcenter;
                    right: .6rem;
                }
            }
        }
    }
}
</style>
