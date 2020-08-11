<template>
    <div>
        <head-top :head-title="headTitle" goBack="true"></head-top>
        <section class="search-container bar-top">
            <form action="">
                <input type="text" :placeholder="placeHolderText" v-model="shopSearchText">
                <button type="submit">提交</button>
            </form>
        </section>
        <!-- 历史 -->
        <section v-if="searchHistoryArr.length > 0" class="history-container">
            <h5>搜索历史</h5>
            <ul class="" v-for="(historyValue,index) in searchHistoryArr" :key="index">
                <li class="">
                    <span>{{historyValue}}</span>
                </li> 
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
            searchHistoryArr:[1,2,3]
        }
    },
    
    components:{
        HeadTop,
    },


}
</script>



<style lang="scss" scoped>
@import "../../style/mixin.scss";

.search-container{
    background-color: #fff;
    @include wh(100%,4rem);
    position: relative;
    form{
        display: flex;
        flex-direction: row;
        height: 50%;
        @include vcenter;
        left: .6rem;
        right: .6rem;
        input{
            background-color: $ic;
            border: .025rem solid $bc;
            height: 100%;
            flex: 1;
        }
        button{
            border-radius: .2rem;
            color: #fff;
            background-color: $blue;
            @include wh(20%,100%);
            margin-left: .3rem;
        }
    }
}

.history-container{
    width: 100%;
    text-indent: .6rem;
    h5{    
        font-size: .6rem;
        line-height: 2rem;
        font-weight: 500;
        color: #666666;
    }
    ul{
        background-color: $fc;
        font-weight: 300;
        li{
            line-height: 2.3rem;
            border-bottom: .025rem solid $bc;
        }
    }

}

</style>
