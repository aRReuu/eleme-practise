<template>
    <div>
        <head-top v-bind:head-title="cityName" go-back="true">
            <!-- TODO 只能通过插槽显示? -->
            <router-link to="/home" slot="changecity" class="change_city">切换城市</router-link>
        </head-top>
        <form action="" class="city_form" v-on:submit.prevent >
            <!-- <h5>TODO! .preven事件拦截符,对应默认的passive</h5> -->
            <div>
                <input type="search" name="city" placeholder=" 输入学校,商务楼,地址" class="city_input input_style" required v-model="inputAdress">
            </div>
            <div>
                <button type="submit" class="submit_btn">提交</button>
            </div>
        </form>
        
        <!-- 搜索历史 -->
        <div>
            <h5 class="history">搜索历史</h5>
            <ul class="ul_style" v-for="(item,index) in placeList" v-bind:key="index">
                <li>        
                    <span>{{item.name}}</span>  
                    <span class="ellipsis">{{item.adress}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>


<script>
import headTop from "../../components/header/headtop";
import { currentCity } from "../../servvice/getData.js";
import { getStore,setStore,deleStore } from "../../config/mUtils.js";
import { thistle } from 'color-name';
export default {
    data(){
        return{
            cityName:"",
            cityId:"",
            placeList:[],//搜索城市列表
            inputAdress:"",//输入的搜索地址
        }
    },
    components:{
        headTop,
    },

    mounted(){
        // path: '/city/:cityId',  router定义的参数名称
        this.cityId = this.$route.params.cityId;
        currentCity(this.cityId).then(res=>{
            this.cityName = res.name;
        });
        this.initData();
    },


    methods:{
        initData(){
            const history = "placeHistory"; 
            let str = getStore(history);
            if (str) {
                this.placeList = JSON.parse(str);
            }else{
                this.placeList = [{'name':'a','adress':'asasasasassasasasasasasasasasasasasasasasasasasasasassasasasasasasasasasasasasasasasas'},
                    {'name':'b','adress':'唧唧歪'},
                    {'name':'c','adress':'洒水'},
                    {'name':'d','adress':'那个你那个'}];
            }
        }
    }
}
</script>


<style lang="scss" scoped>
    @import "../../style/mixin.scss";
    //fixed布局
    .change_city{
        margin-right: 0.4rem;
        right: 0.4rem;
        @include fontsc(0.6rem,#fff);
        @include vcenter;
    }
    .city_form{
        background-color: #fff;
        border-top: 1px solid $bc;
        border-bottom: 2px solid $bc;
        margin-top: 2.7rem;
        @include wh(100%,10rem);
        div{
            width: 90%;
            margin: 0 auto;
            text-align: left;
            position: relative;
            .city_input{
                margin-top: 1rem;
                @include wh(100%,2.7rem);
                border: 1px solid $bc;
            }
            .submit_btn{
                @include wh(100%,2.7rem);
                background-color: $blue;
                margin-top: 1rem;
            }
        }
    }
    .history{
        @include wh(100%,1.3rem);
        border-bottom: 1px solid $bc;
        padding-left: 20px;
    }
    .ul_style{
        background-color: #fff;
        li{
            // text-align: center;
            padding-left: 20px;
            @include flex-justify(center);
            flex-direction: column;
            border-bottom: 1px solid $bc;
            height: 4rem;
        }
    }

</style>
