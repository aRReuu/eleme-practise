<template>
    <header id="head_top">
        <slot name="logo"></slot>
        <slot name="search"></slot>
        <section class="head_goback" v-if="goBack">
            <svg width="100%" height="100%">
               <polyline points="12,18 4,9 12,0" style="fill:none;stroke:rgb(255,255,255);stroke-width:2"/>
            </svg>
        </section>
        <!-- 个人信息简介 -->
        <router-link v-bind:to="userInfo? '/profile':'login'" v-if="signinUp" class="head_login">
            <svg class="user_avatar" v-if="userInfo">
                <use xlink:href="#user"/>                
            </svg>
            <span class="login_span" v-else>登录|注册</span>
        </router-link> 
        <section class="title_head" v-if="headTitle">
            <span class="title_text">{{headTitle}}</span>
        </section>
        <!-- 占位符 -->
        <slot name="edit"></slot>
        <slot name="msite_title"></slot>
        <!-- 先初始化占位符 再通过其他控件用特征调用对应的名字 -->
        <slot name="change_city"></slot>
        <slot name="change_login"></slot>
    </header>
</template>

<script>
import { mapState,mapActions } from "vuex";

export default {
    props:[
        'signinUp',
        'headTitle',
        'goBack'
    ],
    data(){
        return{
        }
    },
    mounted(){
        //获取用户信息
        // this.getUserInfo();
    },
    computed:{
        //拆分为多个计算属性
        ...mapState([
            'userInfo'
        ])
    },
    methods:{
        ...mapActions([
            // 'getUserInfo'
        ])
    }
}
</script>


<style lang="scss" scoped>
    @import '../../style/mixin';
    #head_top{
        background-color: $blue;
        position: fixed;
        z-index: 100;
        left: 0;
        top: 0;
        @include wh(100%,2.1rem);
        .head_goback{
            position: absolute;
            @include wh(0.6rem,1rem);
            margin-left: .5rem;
            transform: translateY(-50%);
            top: 50%;
        }
    }
    
    .head_login{
        right:0.55rem;
        @include fontsc(0.65rem, #fff);
        @include vcenter;
        .login_span{
            margin-right: 0.55rem;
            color: #fff;
        }
        .user_avatar{
            fill: #fff;
            @include wh(.8rem,.8rem);
        }
    }
    .title_head{
        @include center;
        width: 50%;
        color: #fff;
        text-align: center;
        .title_text{
            @include fontsc(0.8rem,#fff);
            text-align: center;
            font-weight: bold;
        }
    }
</style>
