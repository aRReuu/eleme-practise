<template>
    <footer>
        <div class="tabbar-items">
            <router-link to="">
                <svg class="">

                </svg>
                <p>外卖</p>
            </router-link>
            <router-link to=""></router-link>
            <router-link to=""></router-link>
            <router-link to=""></router-link>
        </div>
    </footer>
</template>


<script>
export default {
    
}
</script>


<style lang="scss" scoped>
@import "../../style/mixin.scss";

footer{
    @include wh(100%,2.7rem);
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 100;
    .tabbar-items{
        background-color: aqua;
        @include wh(70%,100%);
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        // .link-item{
        //     // @include wh(25%,100%);
        //     display: flex;
        //     flex-direction: column;

        // }
    }

}




</style>
