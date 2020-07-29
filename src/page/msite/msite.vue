<template>
    <div>
        <head-top signin-up="msite">
            <router-link :to="'/search'" class="search_btn" slot="search">
                <svg class="search"><use xlink:href="#search"/></svg>
            </router-link>
            <router-link :to="'/home'" class="msite_tit" slot="msite_title">
                <span>{{msiteTitle}}</span>
            </router-link>
        </head-top>
        <!-- 头部视图 TODO 在这 nav标签是否一定要加 -->
        <div class="container_style swiper-container">
            <!-- <nav> -->
                <div class="swiper-wrapper">
                    <div class="head_scroll_view swiper-slide" v-if="foodTypes.length > 0" v-for="(food, index) in foodTypes" :key="index">
                    <router-link class="" :to="{path:'/food',query:{geohash,title:food.title,restaurant_category_id: getCategoryId(food.link)}}">
                        <figure>
                            <img :src="imgBaseUrl + food.image_url">
                            <figcaption>{{food.title}}</figcaption>
                        </figure>
                    </router-link>
                </div>        
                </div>
            <!-- </nav> -->
            <div class=""></div>
        </div>
        <!-- 首页商店 使用粘性顶部视图-->
        <div>

        </div>

        </div>
</template>


<script>
import headTop from "../../components/header/headtop"
import { getFoodtypes } from "../../servvice/getData.js";
import {Swiper,SwiperSlide,directive} from 'vue-awesome-swiper'
import "swiper/css/swiper.css"
import "swiper/swiper-bundle.css"

export default {
    data(){
        return{
            // foodTypes:null,
            foodTypes:[
                {image_url:"/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg",link:"eleme://restaurants?filter_key=%7B%22category_schema%22%3A%7B%22category_name%22%3A%22%5Cu751c%5Cu54c1%5Cu996e%5Cu54c1%22%2C%22complex_category_ids%22%3A%5B240%2C241%2C242%5D%2C%22is_show_all_category%22%3Atrue%7D%2C%22restaurant_category_id%22%3A%7B%22id%22%3A239%2C%22name%22%3A%22%5Cu751c%5Cu54c1%5Cu996e%5Cu54c1%22%2C%22sub_categories%22%3A%5B%5D%2C%22image_url%22%3A%22%22%7D%2C%22activities%22%3A%5B%5D%7D&target_name=%E7%94%9C%E5%93%81%E9%A5%AE%E5%93%81&animation_type=1&is_need_mark=0&banner_type=",title:"你老妹"},
                {image_url:"/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg",link:"eleme://restaurants?filter_key=%7B%22category_schema%22%3A%7B%22category_name%22%3A%22%5Cu751c%5Cu54c1%5Cu996e%5Cu54c1%22%2C%22complex_category_ids%22%3A%5B240%2C241%2C242%5D%2C%22is_show_all_category%22%3Atrue%7D%2C%22restaurant_category_id%22%3A%7B%22id%22%3A239%2C%22name%22%3A%22%5Cu751c%5Cu54c1%5Cu996e%5Cu54c1%22%2C%22sub_categories%22%3A%5B%5D%2C%22image_url%22%3A%22%22%7D%2C%22activities%22%3A%5B%5D%7D&target_name=%E7%94%9C%E5%93%81%E9%A5%AE%E5%93%81&animation_type=1&is_need_mark=0&banner_type=",title:"你老妹"},
                {image_url:"/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg",link:"eleme://restaurants?filter_key=%7B%22category_schema%22%3A%7B%22category_name%22%3A%22%5Cu751c%5Cu54c1%5Cu996e%5Cu54c1%22%2C%22complex_category_ids%22%3A%5B240%2C241%2C242%5D%2C%22is_show_all_category%22%3Atrue%7D%2C%22restaurant_category_id%22%3A%7B%22id%22%3A239%2C%22name%22%3A%22%5Cu751c%5Cu54c1%5Cu996e%5Cu54c1%22%2C%22sub_categories%22%3A%5B%5D%2C%22image_url%22%3A%22%22%7D%2C%22activities%22%3A%5B%5D%7D&target_name=%E7%94%9C%E5%93%81%E9%A5%AE%E5%93%81&animation_type=1&is_need_mark=0&banner_type=",title:"你老妹"},
                {image_url:"/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg",link:"eleme://restaurants?filter_key=%7B%22category_schema%22%3A%7B%22category_name%22%3A%22%5Cu751c%5Cu54c1%5Cu996e%5Cu54c1%22%2C%22complex_category_ids%22%3A%5B240%2C241%2C242%5D%2C%22is_show_all_category%22%3Atrue%7D%2C%22restaurant_category_id%22%3A%7B%22id%22%3A239%2C%22name%22%3A%22%5Cu751c%5Cu54c1%5Cu996e%5Cu54c1%22%2C%22sub_categories%22%3A%5B%5D%2C%22image_url%22%3A%22%22%7D%2C%22activities%22%3A%5B%5D%7D&target_name=%E7%94%9C%E5%93%81%E9%A5%AE%E5%93%81&animation_type=1&is_need_mark=0&banner_type=",title:"你老妹"},
                {image_url:"/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg",link:"eleme://restaurants?filter_key=%7B%22category_schema%22%3A%7B%22category_name%22%3A%22%5Cu751c%5Cu54c1%5Cu996e%5Cu54c1%22%2C%22complex_category_ids%22%3A%5B240%2C241%2C242%5D%2C%22is_show_all_category%22%3Atrue%7D%2C%22restaurant_category_id%22%3A%7B%22id%22%3A239%2C%22name%22%3A%22%5Cu751c%5Cu54c1%5Cu996e%5Cu54c1%22%2C%22sub_categories%22%3A%5B%5D%2C%22image_url%22%3A%22%22%7D%2C%22activities%22%3A%5B%5D%7D&target_name=%E7%94%9C%E5%93%81%E9%A5%AE%E5%93%81&animation_type=1&is_need_mark=0&banner_type=",title:"你老妹"},
                {image_url:"/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg",link:"eleme://restaurants?filter_key=%7B%22category_schema%22%3A%7B%22category_name%22%3A%22%5Cu751c%5Cu54c1%5Cu996e%5Cu54c1%22%2C%22complex_category_ids%22%3A%5B240%2C241%2C242%5D%2C%22is_show_all_category%22%3Atrue%7D%2C%22restaurant_category_id%22%3A%7B%22id%22%3A239%2C%22name%22%3A%22%5Cu751c%5Cu54c1%5Cu996e%5Cu54c1%22%2C%22sub_categories%22%3A%5B%5D%2C%22image_url%22%3A%22%22%7D%2C%22activities%22%3A%5B%5D%7D&target_name=%E7%94%9C%E5%93%81%E9%A5%AE%E5%93%81&animation_type=1&is_need_mark=0&banner_type=",title:"你老妹"},
                {image_url:"/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg",link:"eleme://restaurants?filter_key=%7B%22category_schema%22%3A%7B%22category_name%22%3A%22%5Cu751c%5Cu54c1%5Cu996e%5Cu54c1%22%2C%22complex_category_ids%22%3A%5B240%2C241%2C242%5D%2C%22is_show_all_category%22%3Atrue%7D%2C%22restaurant_category_id%22%3A%7B%22id%22%3A239%2C%22name%22%3A%22%5Cu751c%5Cu54c1%5Cu996e%5Cu54c1%22%2C%22sub_categories%22%3A%5B%5D%2C%22image_url%22%3A%22%22%7D%2C%22activities%22%3A%5B%5D%7D&target_name=%E7%94%9C%E5%93%81%E9%A5%AE%E5%93%81&animation_type=1&is_need_mark=0&banner_type=",title:"你老妹"},
                {image_url:"/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg",link:"eleme://restaurants?filter_key=%7B%22category_schema%22%3A%7B%22category_name%22%3A%22%5Cu751c%5Cu54c1%5Cu996e%5Cu54c1%22%2C%22complex_category_ids%22%3A%5B240%2C241%2C242%5D%2C%22is_show_all_category%22%3Atrue%7D%2C%22restaurant_category_id%22%3A%7B%22id%22%3A239%2C%22name%22%3A%22%5Cu751c%5Cu54c1%5Cu996e%5Cu54c1%22%2C%22sub_categories%22%3A%5B%5D%2C%22image_url%22%3A%22%22%7D%2C%22activities%22%3A%5B%5D%7D&target_name=%E7%94%9C%E5%93%81%E9%A5%AE%E5%93%81&animation_type=1&is_need_mark=0&banner_type=",title:"你老妹"},
                {image_url:"/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg",link:"eleme://restaurants?filter_key=%7B%22category_schema%22%3A%7B%22category_name%22%3A%22%5Cu751c%5Cu54c1%5Cu996e%5Cu54c1%22%2C%22complex_category_ids%22%3A%5B240%2C241%2C242%5D%2C%22is_show_all_category%22%3Atrue%7D%2C%22restaurant_category_id%22%3A%7B%22id%22%3A239%2C%22name%22%3A%22%5Cu751c%5Cu54c1%5Cu996e%5Cu54c1%22%2C%22sub_categories%22%3A%5B%5D%2C%22image_url%22%3A%22%22%7D%2C%22activities%22%3A%5B%5D%7D&target_name=%E7%94%9C%E5%93%81%E9%A5%AE%E5%93%81&animation_type=1&is_need_mark=0&banner_type=",title:"你老妹"},
                {image_url:"/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg",link:"eleme://restaurants?filter_key=%7B%22category_schema%22%3A%7B%22category_name%22%3A%22%5Cu751c%5Cu54c1%5Cu996e%5Cu54c1%22%2C%22complex_category_ids%22%3A%5B240%2C241%2C242%5D%2C%22is_show_all_category%22%3Atrue%7D%2C%22restaurant_category_id%22%3A%7B%22id%22%3A239%2C%22name%22%3A%22%5Cu751c%5Cu54c1%5Cu996e%5Cu54c1%22%2C%22sub_categories%22%3A%5B%5D%2C%22image_url%22%3A%22%22%7D%2C%22activities%22%3A%5B%5D%7D&target_name=%E7%94%9C%E5%93%81%E9%A5%AE%E5%93%81&animation_type=1&is_need_mark=0&banner_type=",title:"你老妹"},
                {image_url:"/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg",link:"eleme://restaurants?filter_key=%7B%22category_schema%22%3A%7B%22category_name%22%3A%22%5Cu751c%5Cu54c1%5Cu996e%5Cu54c1%22%2C%22complex_category_ids%22%3A%5B240%2C241%2C242%5D%2C%22is_show_all_category%22%3Atrue%7D%2C%22restaurant_category_id%22%3A%7B%22id%22%3A239%2C%22name%22%3A%22%5Cu751c%5Cu54c1%5Cu996e%5Cu54c1%22%2C%22sub_categories%22%3A%5B%5D%2C%22image_url%22%3A%22%22%7D%2C%22activities%22%3A%5B%5D%7D&target_name=%E7%94%9C%E5%93%81%E9%A5%AE%E5%93%81&animation_type=1&is_need_mark=0&banner_type=",title:"你老妹"},
            ],
            imgBaseUrl: 'https://fuss10.elemecdn.com',
            geohash:"23.114033,113.246777",//"23.114033,113.246777",//当前坐标
            msiteTitle:""
        }
    },
    mounted(){
        // getFoodtypes(this.geohash).then((res,rej) => {
        //     this.foodTypes = res;
        // }).then(()=>{
        //      new Swiper(".swiper-container",{
        //         loop:true,
        //         pagination:{
        //             el: '.swiper-pagination',
        //         }
        //     });
        // });

        new Swiper(".swiper-container",{
                loop:true,
                pagination:{
                    el: '.swiper-pagination',
                }
        });
    },

    components:{
        headTop,
    },

    methods:{
        /**
         * 获取头部每个分类的id
         */
        getCategoryId(foodLinkUrl){
            if (!foodLinkUrl) {
                return"";
            }
            // "eleme://restaurants?filter_key=%7B%22category_schema%22%3A%7B%22category_name%22%3A%22%5Cu751c%5Cu54c1%5Cu996e%5Cu54c1%22%2C%22complex_category_ids%22%3A%5B240%2C241%2C242%5D%2C%22is_show_all_category%22%3Atrue%7D%2C%22restaurant_category_id%22%3A%7B%22id%22%3A239%2C%22name%22%3A%22%5Cu751c%5Cu54c1%5Cu996e%5Cu54c1%22%2C%22sub_categories%22%3A%5B%5D%2C%22image_url%22%3A%22%22%7D%2C%22activities%22%3A%5B%5D%7D&target_name=%E7%94%9C%E5%93%81%E9%A5%AE%E5%93%81&animation_type=1&is_need_mark=0&banner_type="
            let newUrl = decodeURIComponent(foodLinkUrl.split("=")[1].replace("&target_name",""));
            if (/restaurant_category_id/gi.test(newUrl)) {
                return JSON.parse(newUrl).restaurant_category_id.id;
            }
            return "";
        }
    }
}
</script>


<style lang="scss" scoped>
@import "../../style/mixin.scss";

.container_style{
    @include wh(100%,100px);
    margin-top: 2.4rem;
    // text-align: center;
    // display: flex;
    // flex-direction: row;
    // justify-content: center;
    //TODO 没设置的时候,所有子控件默认不转行,集中在一行/列中
    // flex-wrap: wrap;

    .head_scroll_view{
        background-color: royalblue;
        @include wh(25%,50px);
        figure{
            background-color: aqua;
            @include wh(100%,100%);
            img{
                @include wh(50%,50%);
            }
        }
    }
}


.search_btn{
    @include vcenter;
    @include wh(30px,30px);
    left: 20px;
    background-color: brown;
    .search{
        @include wh(100%,100%);
        margin-top: 15%;
    }
}

</style>
