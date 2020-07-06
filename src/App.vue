<template>
  <div id="app">
    <transition name="router-fade" mode="out-in">

    </transition>
    

    <svg-icon></svg-icon>
  </div>
</template>

<script>
import { svgIcon } from "./components/common/svg";

export default {
  components:{
    svgIcon
  }
}
</script>


<style lang="scss">
  //css规则,导入样式(相对路径)
  @import "./style/common.scss";
  .router-fade-enter-active, .router-fade-leave-active{
    transition: opacity .5s;
  }
  .router-fade-enter, .router-fade-leave-active{
    opacity: 0;
  }
</style>
