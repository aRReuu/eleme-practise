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
                <li>
                    <span>{{historyValue}}</span>
                    <svg t="1597110922363" class="icon delete-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2875" width="200" height="200"><path d="M590.514383 488.040949 952.888054 851.125263C981.253371 879.546168 981.11016 925.804176 952.546629 954.423734 923.783934 983.242895 877.825294 983.196523 849.450322 954.76589L487.076651 591.681576 124.70298 954.76589C96.337663 983.186795 50.170204 983.043365 21.606672 954.423734-7.156023 925.604646-7.109798 879.555896 21.265175 851.125263L383.638845 488.040949 21.265175 124.956635C-7.100143 96.53573-6.956932 50.277722 21.606672 21.658164 50.369368-7.160997 96.328008-7.114625 124.70298 21.316008L487.076651 384.400322 849.450322 21.316008C877.815566-7.104897 923.983025-6.961467 952.546629 21.658164 981.309325 50.477252 981.263026 96.526002 952.888054 124.956635L590.514383 488.040949 590.514383 488.040949Z" p-id="2876" fill="#8a8a8a"></path></svg>
                </li> 
            </ul>
            <span class="clear-history">清空搜索历史</span>
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

    methods:{
        clearAllHsitory(){
            
        }
    }

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
            position: relative;
            line-height: 2.3rem;
            border-bottom: .025rem solid $bc;
            .delete-icon{
                @include wh(.6rem,.6rem);
                @include vcenter;
                right: .6rem;
            }
        }
    }
    .clear-history{
        color: $blue;
        background-color: $fc;
        display: block;
        text-align: center;
        font-weight: 700;
        line-height: 2.5rem;
    }

}

</style>
