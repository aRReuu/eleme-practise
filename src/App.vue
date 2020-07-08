<template>
  <div id="app">
    <!-- $route  路由的信息
    $router 你创建的全局路由对象
    name自动生成css过渡类名   Vue系列
    <transition name="router-fade" mode="out-in">
      Vue系列
      <keep-alive>
        VueRouter    渲染路径匹配到的视图组件
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition name="router-fade" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition> -->
  
    <keep-alive>
        <router-view></router-view>
    </keep-alive>

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
    //过渡(特征) 
    transition: opacity .5s;
  }
  .router-fade-enter, .router-fade-leave-active{
    opacity: 0;
  }
</style>
