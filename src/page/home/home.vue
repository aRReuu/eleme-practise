<template>
    <div>
        <headTop>
            
        </headTop>

    </div>
</template>


<script>
// import { mapState,mapActions } from "vuex";
import { cityGuess,hotCity,groupCity } from "../../servvice/getData.js";
import headTop from "../../components/header/headtop";

export default {
    data(){
        return{
            //当前城市
            guessCity:"",
            guessCityId:"",
            hotCity:[],
            //所有城市列表
            groupcity:{}
        }
    },
    methods(){
        //TODO  断点查看reject属性
        cityGuess().then((res,reject)=>{
            this.guessCity = res.name;
            this.guessCityId = res.id;
        });
        hotCity().then(res=>{
            this.hotCity = res;
        });
        groupCity().then(res=>{
            this.groupcity = res;
        });
    },
    components:{
        headTop,
    },
    
    computed:{

    }
}
</script>



<style lang="scss" scoped>
@import '../../style/mixin.scss'

</style>


