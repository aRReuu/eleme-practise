<template>
    <div>
        <head-top head-title="密码登录" go-back="true"></head-top>
        <form action="" method="post" class="margin_top">
            <section class="textfield_style">
                <input type="text" placeholder="账号" v-model.lazy="account">
            </section>
            <!-- //ps -->
            <section class="textfield_style"> 
                <input type="text" v-if="isShowPs"  placeholder="密码" v-model="password">
                <input type="password" v-else placeholder="密码" v-model="password">
                <div class="btn_switch" :class="{change_to_text:isShowPs}">
                    <div class="circle_btn" :class="{change_to_right:isShowPs}" @click="showPassword"></div>
                </div>
            </section>
            <section class="textfield_style">
                <input type="text" name="" id="" placeholder="验证码" v-model="authCode">
                <div class="captcha_code_container">
                    <img  v-show="captchaCodeImg" :src="captchaCodeImg">
                    <div class="change_img" @click="getCaptcha">
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
        <button @click="loginAction">登录</button>
        <p class="reset_password">重置密码?</p>
        <alert-tip v-if="isShowTips" @closeTip="closeTip1" :alert-text="alertText"></alert-tip>
    </div>
</template>


<script>
import headTop from "../../components/header/headtop";
import alertTip from "../../components/common/alertTip"
import { getCaptchaCode,accountLogin } from "../../servvice/getData.js";
import { mapMutations,mapState } from "vuex";

export default {
    data(){
        return{
            account:null,
            password:null,
            authCode:null, //验证码
            isShowPs:false,
            isShowTips:false,
            firTips:"温馨提示:未注册过的账号,登录时将自动注册",
            secTips:"注册过的用户可凭账号密码登录",
            captchaCodeImg:null,
            alertText:null,
            accountInfo:null
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
    computed:{
        //判断手机号码
        rightPhoneNumber: function (){
            // "以/xxx/的字面量形式创建正则对象,用于对指定文本进行模式匹配"
            return /^1\d{10}$/gi.test(this.phoneNumber);
        },
        rightCaptchaCode(){
            return /^\d{6}$/gi.test(this.authCode);
        }
    },
    methods:{
        // TODO状态机需要了解
        ...mapMutations([
                'RECORD_USERINFO',
            ]),
        getCaptcha(){
            getCaptchaCode().then((res)=>{
                this.captchaCodeImg = res.code;
            })
        },
        showPassword(){
            this.isShowPs = !this.isShowPs;
        },
        closeTip1(){
            this.isShowTips = false;
        },
        /**
         * 登录按钮
         * 目前只做账号密码登录
         */
        loginAction(){
            // if(!rightPhoneNumber(this.phoneNumber)){
            //     this.isShowTips = true;
            //     this.alertText = "手机号码不正确";
            //     return;
            // }
            // if(!rightCaptchaCode(this.authCode)){
            //     this.isShowTips = true;
            //     this.alertText = "图形验证码不正确";
            //     return;
            // }
            if (!this.account) {
                this.isShowTips = true;
                this.alertText = '请输入手机号/邮箱/用户名';
                return;
            }else if(!this.passWord){
                this.isShowTips = true;
                this.alertText = '请输入密码';
                return;
            }else if(!this.codeNumber){
                this.isShowTips = true;
                this.alertText = '请输入验证码';
                return;
            }
            accountLogin(this.account,this.password,this.authCode).then((res)=>{
                this.accountInfo = res;
            });
            //如果返回的值不正确，则弹出提示框，返回的值正确则返回上一页
                if (!this.userInfo.user_id) {
                    this.showAlert = true;
                    this.alertText = this.userInfo.message;
                    // if (!this.loginWay) this.getCaptchaCode();
                }else{
                    this.RECORD_USERINFO(this.userInfo);
                    this.$router.go(-1);
                }
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
        position: relative;
        border: 1px;
        border-radius: 0.5rem;
            .circle_btn{
                transition: all .3s;
                position: absolute;
                // 空间层级优先属性
                z-index: 1;
                left: -.3rem;
                // transform: translateX(-.3rem);
                @include wh(1.2rem,1.2rem);
                background-color: #f1f1f1;
                border-radius: 50%;
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

    //切换密码按钮
    .change_to_text{
        background-color: #4cd964;
    }
    .change_to_right{
        transform: translateX(1.3rem);
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
        margin-top: 0.9rem;
        background-color: #4cd964;
        color: #fff;
        @include wh(80%,3.5rem);
        margin-left: 50%;
        transform: translateX(-50%);
        border-radius: .5rem;
    }

    .reset_password{
        text-align: right;
        font-size: .9rem;
        color: rgb(0, 89, 255);
        margin-top: .7rem;
        margin-right: 20px;
    }

</style>
