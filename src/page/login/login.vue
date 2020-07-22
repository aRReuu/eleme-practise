<template>
    <div>
        <head-top head-title="密码登录" go-back="true"></head-top>
        <form action="" method="post" class="margin_top">
            <section class="textfield_style">
                <input type="text" placeholder="账号" v-model.lazy="account">
            </section>
            <section class="textfield_style"> 
                <input type="password" v-if="isShowPs"  placeholder="密码" v-model="password">
                <input type="text" v-else placeholder="密码" v-model="password">
                <div class="btn_switch">
                    <div class="circle_btn"></div>
                </div>
            </section>
            <section class="textfield_style">
                <input type="text" name="" id="" placeholder="验证码" v-model="authCode">
                <div class="captcha_code_container">
                    <img  v-show="captchaCodeImg" :src="captchaCodeImg">
                    <div class="change_img" @click="changeImg">
                        <p>看不清</p>
                        <p>换一张</p>
                    </div>
                    
                </div>
                
            </section>
        </form>
        <div class="bottom_tips">
            <p>{{firTips}}</p>
            <p>{{secTips}}</p>
        </div>

    </div>
</template>


<script>
import headTop from "../../components/header/headtop";
export default {
    data(){
        return{
            account:null,
            password:null,
            authCode:null,
            isShowPs:false,
            firTips:"温馨提示:未注册过的账号,登录时将自动注册",
            secTips:"注册过的用户可凭账号密码登录",
            captchaCodeImg:null,
        }
    },
    components:{
        headTop
    },

    mounted(){

    },
    computed:{

    },
    methods:{
        changeImg(){

        }
    }

}
</script>


<style lang="scss" scoped>
@import "../../style/mixin.scss";
    .margin_top{
        margin-top: 50px;
    }

    .textfield_style{
        position: relative;
        @include flex-justify;
        align-items: center;
        background-color: $fc;
        border-bottom: 1px solid $bc;
        @include wh(100%,2rem);
        input{
            width: 60%;
            font-size: 1rem;
            padding-left: 20px;
        }
    }

    .bottom_tips{
        // @include wh(100%,5rem);
        display: flex;
        justify-content: center;
        flex-direction: column;
        font-size: 0.6rem;
        text-align: left;
        p{
            color: red;
            padding:.4rem 20px 0;      
        }
    }

    .btn_switch{
        //TODO auto实现垂直居中对齐 
        margin: auto 20px;   
        background-color: #ccc;
        @include wh(2.1rem,1.2rem);
        border: 1px;
        border-radius: 0.5rem;
            .circle_btn{
                transition: all .3s;
                position: absolute;
                // 空间层级优先属性
                z-index: 1;
                transform: translateX(-.3rem);
                @include wh(1.2rem,1.2rem);
                
                background-color: #f1f1f1;
                border-radius: 50%;
            }
            .trans_to_right{
                transform: translateX(1.3rem);
            }
            span{
                @include fontsc(.45rem,#fff);
                transform: translateY(.05rem);
                line-height: .6rem;
            }
            span::nth-of-type(2){
                transform: translateY(-.08rem);
            }
     }

    .change_to_text{
        background-color: #4cd964;
    }

    .captcha_code_container{
        img{
            @include wh(3.5rem,1.5rem);
            margin-right: .2rem;
        }
        .change_img{
            margin-right: 0px;
            display: flex;
            text-align: center;
            flex-direction: column;  
            font-size: .6rem;
            @include wh(5.5rem,100%);
            p:nth-of-type(2){
                color: rgb(0, 132, 255);
            }
        }
    }

</style>
