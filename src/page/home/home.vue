<template>
    <div>
        <head-top signin-up="home">
            <span slot="logo" class="head_logo" @click="reloadPage">ele.me</span>
        </head-top>
        <nav class="city_nav">
            <div class="city_tip">
                <span>当前定位城市:</span>
                <span>定位不准是,请在城市列表中选择</span>
            </div>
            <router-link :to="'/city/'+guessCityId" class="guess_city">
                <span>{{guessCity}}</span>
                <svg class="arrow_right">
                    <use xlink:href="#arrow-right"/>
                </svg>
            </router-link>
        </nav>

        <section id="hot_city_container">
            <h4 class="city_title">热门城市</h4>
            <!-- <h4>float浮动布局里面,clear的作用  重新看一篇</h4> -->
            <ul class="citylistul clear">
                <router-link tag="li" v-for="item in hotCity" :to="'/city/'+item.id" :key="item.id">
                    {{item.name}}
                </router-link>
            </ul>
        </section>

       <section class="group_city_container">
            <ul class="letter_classify">
                <li v-for="(value, key, index) in sortGroupCity" :key="key"  class="letter_classify_li">
                    <h4 class="city_title">{{key}}
                        <span v-if="index == 0">（按字母排序）</span>
                    </h4>
                    <ul class="groupcity_name_container citylistul clear">
                        <router-link  tag="li" v-for="item in value" :to="'/city/' + item.id" :key="item.id" class="ellipsis">
                            {{item.name}}
                        </router-link>
                    </ul>
                </li>
            </ul>
        </section>
    </div>
</template>


<script>
import { cityGuess,hotCity,groupCity } from "../../servvice/getData.js";
import headTop from "../../components/header/headtop";

export default {
    data(){
        return{
            //当前城市
            guessCity:"",
            guessCityId:"",
            hotCity:[],
            //所有城市列表
            groupcity:{}
        }
    },
    mounted(){
        //TODO  断点查看reject属性
        cityGuess().then((res,reject)=>{
            this.guessCity = res.name;
            this.guessCityId = res.id;
        });
        hotCity().then(res=>{
            this.hotCity = res;
        });
        groupCity().then(res=>{
            this.groupcity = res;
        });
    },
    components:{
        headTop
    },
    
    computed:{
        //数组转化为对象
        sortGroupCity(){
            let sort = {};
            for (let index = 65; index <= 90; index++) {
                const sortKey = String.fromCharCode(index)
                if (this.groupcity[sortKey]) {
                    sort[sortKey] = this.groupcity[sortKey];
                }
            }
            return sort;
        }
    },
    //MapObject
    methods:{
        reloadPage() {
            window.location.reload(true);
        }
    }
}
</script>



<style lang="scss" scoped>
    @import "../../style/mixin.scss";

    .head_logo{
        //按根元素字体比例
        left: 0.4rem;
        font-weight: 400;
        @include fontsc(0.7rem,#ffffff);
        @include wh(2.3rem,0.7rem);
        @include vcenter;
    }

    .city_nav{
        padding-top: 2.35rem;
        border-top: 1px solid $bc;
        background-color: $fc;
        margin-bottom: 0.4rem;
        .city_tip{
            @include flex-justify;
            line-height: 1.45rem;
            padding: 0 0.45rem;
            span:nth-of-type(1){
                @include fontsc(0.55rem,#666);
            }
            span:nth-of-type(2){
                @include fontsc(0.55rem,#666);
            }
        }
         .guess_city{
            @include flex-justify;
            align-items: center;
            height: 1.8rem;
            padding: 0 0.45rem;
            border-top: 1px solid $bc;
            border-bottom: 2px solid $bc;
            @include font(0.75rem, 1.8rem);
            span:nth-of-type(1){
                color: $blue;
            }
            .arrow_right{
                @include wh(.6rem, .6rem);
                fill: #999;
            }
        }
    }

    #hot_city_container{
        background-color: #fff;
        margin-bottom: 0.4rem;
    }

    .citylistul{
        li{
            float: left;
            text-align: center;
            color: $blue;
            border-bottom: 0.025rem solid $bc;
            border-right: 0.025rem solid $bc;
            @include wh(25%,1.75rem);
            @include font(0.6rem,1.75);
        }
        li:nth-of-type(4n){
            border-right:none;
        }
    }

    .city_title{
        color: #666;
        font-weight: 400;
        text-indent: 0.45rem;
        border-top: 2px solid $bc;
        border-bottom: 1px solid $bc;
        @include font(0.55rem,1.45rem,"Helvetica Neue");
        span{
            @include fontsc(0.475rem,#999);
        }
    } 

    .letter_classify_li{
        margin-bottom: 0.4rem;
        background-color: #fff;
        border-bottom: 1px solid $bc;
        .groupcity_name_container{
            li{
                color: #666;
            }
        }
    }

</style>


