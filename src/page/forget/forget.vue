<template>
    <div>
        <head-top head-title="重置密码" go-back="true"></head-top>
        <form method="post" class="margin_top">
            <section class="textfield_style">
                <input type="text" placeholder="账号" v-model.lazy="account">
            </section>
            <section class="textfield_style">
                <input type="password" placeholder="旧密码" v-model.lazy="account">
            </section>
            <section class="textfield_style">
                <input type="password" placeholder="请输入新密码" v-model.lazy="account">
            </section>
            <section class="textfield_style">
                <input type="password" placeholder="请确认密码" v-model.lazy="account">
            </section>
            <section class="textfield_style">
                <input type="number" placeholder="验证码" v-model.lazy="account">
                <div class="captcha_code_container">
                    <img  v-show="captchaCodeImg" :src="captchaCodeImg">
                    <div class="change_img" @click="getCaptcha">
                        <p>看不清</p>
                        <p>换一张</p>
                    </div>
                </div>
            </section>
            <button @click="loginAction">确认修改</button>
        <alert-tip v-if="isShowTips" @closeTip="closeTip1" :alert-text="alertText"></alert-tip>
        </form>
    </div>
</template>

<script>
import headTop from "../../components/header/headtop";
import alertTip from "../../components/common/alertTip"
import { getCaptchaCode } from "../../servvice/getData.js";

export default {
    data(){
        return{
            captchaCodeImg:null,
        }
    },
    components:{
        headTop,
        alertTip
    },
    mounted(){
        //返回图形码
        this.getCaptcha();
    },
    methods:{
        getCaptcha(){
            getCaptchaCode().then((res)=>{
                this.captchaCodeImg = res.code;
            })
        },
        closeTip1(){
            this.isShowTips = false;
        },

        loginAction(){

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
        @include wh(100%,3rem);
        input{
            width: 60%;
            font-size: 1rem;
            padding-left: 20px;
        }
    }

    .captcha_code_container{
        @include flex-justify(center);
        align-items: center;
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

    button{
        font-size: 1rem;
        margin-top: 1.5rem;
        background-color: #4cd964;
        color: #fff;
        @include wh(80%,3.5rem);
        margin-left: 50%;
        transform: translateX(-50%);
        border-radius: .5rem;
    }

</style>
