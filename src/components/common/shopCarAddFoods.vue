<template>
    <div class="add-food-container">
        <span class="sub-num" @click="subtractFood">
            <svg style="fill: rgb(35, 149, 255);" viewBox="0 0 44 44" id="cart-add"><path fill-rule="evenodd" d="M22 0C9.8 0 0 9.8 0 22s9.8 22 22 22 22-9.8 22-22S34.2 0 22 0zm0 42C11 42 2 33 2 22S11 2 22 2s20 9 20 20-9 20-20 20z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M32 20c1.1 0 2 .9 2 2s-.9 2-2 2H12c-1.1 0-2-.9-2-2s.9-2 2-2h20z" clip-rule="evenodd"></path></svg>
        </span>
        <span class="food-count">{{count}}</span>
        <span class="add-num" @click="addFood">
            <svg style="fill: rgb(35, 149, 255);" viewBox="0 0 44 44" id="cart-minus"><path fill="none" d="M0 0h44v44H0z"></path><path fill-rule="evenodd" d="M22 0C9.8 0 0 9.8 0 22s9.8 22 22 22 22-9.8 22-22S34.2 0 22 0zm10 24h-8v8c0 1.1-.9 2-2 2s-2-.9-2-2v-8h-8c-1.1 0-2-.9-2-2s.9-2 2-2h8v-8c0-1.1.9-2 2-2s2 .9 2 2v8h8c1.1 0 2 .9 2 2s-.9 2-2 2z" clip-rule="evenodd"></path></svg>
        </span>
    </div>
</template>

<script>
export default {
    data(){
        return{
            count:0,
        }
    },
    methods:{
        /** 减少已选商品数量 */
        subtractFood(){
            if (this.count < 1) {
                return;
            }
            this.count--;
        },
        /** 新增 */
        addFood(){
            // TODO 上限数量
            this.count++;
        },
    },
}
</script>


<style lang="scss" scoped>
@import "../../style/mixin.scss";

.add-food-container{
    display:flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    .sub-num , .add-num{
        @include wh(19px,19px);
    }
    .food-count{
        font-size: 11px;
        padding: 0 1px;
    }
}

</style>
