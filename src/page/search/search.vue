<template>
    <div>
        <head-top :title="headTitle" goBack="true"></head-top>
        <section>
            <form action="">
                <input type="text" :placeholder="placeHolderText" v-model="shopSearchText">
                <button type="submit">提交</button>
            </form>
        </section>
        <!-- 历史 -->
        <section v-if="searchHistoryArr.length > 0">
            <h5>搜索历史</h5>
            <ul class="" v-for="(historyValue,index) in searchHistoryArr" :key="index">
                <li class="">{{historyValue}}</li> 
            </ul>
            <li>清空搜索历史</li>
        </section>
    </div>
</template>


<script>
import HeadTop from "../../components/header/headtop";

export default {
    data(){
        return{
            headTitle:"搜索",
            placeHolderText:"请输入商家或美食名称",
            shopSearchText:null,
            searchHistoryArr:[]
        }
    },
    
    components:{
        HeadTop,
    },


}
</script>



<style lang="scss" scoped>
@import "../../style/mixin.scss";


</style>
