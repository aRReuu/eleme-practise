<template>
    <div>
        <head-top signin-up="msite">
            <router-link :to="'/search'" class="" slot="search">
                <svg><use xlink:href="#search"/></svg>
            </router-link>
            <router-link :to="'/home'" class="msite_tit" slot="msite_title">
                <span>{{msiteTitle}}</span>
            </router-link>
        </head-top>
        <!-- 头部视图 TODO 在这 nav标签是否一定要加 -->
        <div class="swiper-container">
            <nav>
                <div class="head_scroll_view swiper-wrappe " v-if="foodTypes.length > 0" v-for="(index, food) in foodTypes" :key="index">
                    <router-link class="swiper-slide" :to="{path:'/food',query:{coordinate,title:food.title,restaurant_category_id: getCategoryId(food.link)}}">
                        <figure>
                            <img src="imgBaseUrl + food.image_url" alt="food.title">
                            <figcaption>{{food.title}}</figcaption>
                        </figure>
                    </router-link>
                </div>        
            </nav>
            <div class="swiper-pagination"></div>
        </div>

        
        <!-- 首页商店 使用粘性顶部视图-->

    </div>
</template>


<script>
import headTop from "../../components/header/headtop"
import { getFoodtypes } from "../../servvice/getData.js";
import Swiper from "swiper"
export default {
    data(){
        return{
            foodTypes:[],
            imgBaseUrl: 'https://fuss10.elemecdn.com',
            coordinate,//当前坐标
            geohash:null,

        }
    },
    mounted(){
        //
        getFoodtypes(this.geohash).then((res) => {
            this.foodTypes = res;
        }).then(()=>{
            //init swiper
            new Swiper(".swiper-container",{
                loop:true,
                pagination:{
                    el: '.swiper-pagination',
                }
            });
        )},
    },
    components:{
        headTop,
    },

    methods:{
        /**
         * 获取头部每个分类的id
         */
        getCategoryId(foodLinkUrl){
            let newUrl = decodeURIComponent(foodLinkUrl.split("=")[1].replace("&target_name",""));
            if (/restaurant_category_id/,gi.test(newUrl)) {
                return JSON.parse(newUrl).restaurant_category_id.id;
            }
            return "";
        }
    }


    

}
</script>




<style lang="scss" scoped>
@import "../../style/mixin.scss";

.head_scroll_view{
    margin-top: .3.5rem;

}

</style>
