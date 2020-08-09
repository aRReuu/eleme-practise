<template>
    <div class="loading-container">
        <div class="load-img" :style="{backgroundPositionY: -(positionY % 7)*2.5 + 'rem'}"></div>
        <svg class="load-ellipse">
            <ellipse cx="26" cy="10" rx="26" ry="10" class="ell-style">
            </ellipse>
        </svg>
    </div>
</template>


<script>
export default {
    data(){
        return{
            positionY:0,
            timer:null,
        }
    },
    mounted(){
        this.timer = setInterval(()=>{
            this.positionY ++;
        },600)
    },
    beforeDestroy(){
        clearInterval(this.timer);
    }

}
</script>



<style lang="scss" scoped>
@import "../../style/mixin.scss";

.ell-style{
    fill: #dddddd;
    stroke: none;
}

.loading-container{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    @include wh(2.5rem,2.5rem);
}

.load-img{
    position: relative;
    @include wh(100%,100%);
    background: url("../../images/icon_loading.png") no-repeat;
    background-size: 100% auto;
    transform: translateY(0px);
    animation: load .6s infinite ease-in-out;
    z-index: 11;
}

.load-ellipse{
    position: absolute;
    @include wh(3.6rem,2rem);
    top: 2.3rem;
    left: -.4rem;
    z-index: 10;
    animation: ellipse .6s infinite ease-in-out;
}

@keyframes load {
    0% {transform: translateY(0px);}
    50% {transform: translateY(-50px);}
    100% {transform: translateY(0px);}
}
@keyframes ellipse {
    0% {transform: scale(1);}
    50% {transform: scale(.3);}
    100% {transform: scale(1);}
}

</style>
