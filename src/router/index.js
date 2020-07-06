import Vue from 'vue'
import VueRouter from 'vue-router'
import { routerMode } from "../config/env";
import App from "../App";

Vue.use(VueRouter)

const home = import('../page/home/home.vue','home');
const city = import('../page/city/city.vue','city');
const login = import('../page/login/login.vue','login');
const forget = import('../page/forget/forget.vue','forget');
const questionDetail = import('../page/service/children/questionDetail.vue','questionDetail');
const service = import('../page/service/service.vue','service');

const routes = [
  {
    //Array<RouteConfig>   routes
    path: '/',
    //顶层路由器,对应index.html
    component: App,
    // name: 'Home',

    children:[
      //空地址跳转home页
      {
        path:'',
        redirect:'/home'
      },
      //首页城市列表
      {
        path:'/home',
        component:home
      },
      //选择城市页面
      {
        path:'/citt/:cityid',
        component:city
      },
      //登录注册页
      {
        path:'/login',
        component:login
      },
      //修改密码页面
      {
        path:'/forget',
        component:forget
      },
      //服务中心
      {
        path:'/service',
        component:service,
        children:[{
          //订单详情页面
          path:'questionDetail',
          component:questionDetail
        }]
      }
    ]
  },
]

const router = new VueRouter({
  mode: routerMode,
  // base: process.env.BASE_URL,
  routes,
  //
  strict: process.env.NODE_ENV !== 'production',
  scrollBehavior(to,from,savedPosition){
    if (savedPosition) {
      return savedPosition
    }else{
      if(from.meta.keepAlive){
        from.meta.savedPosition = document.body.scrollTop;
      }
      return {x:0,y: to.meta.savedPosition || 0 };
    }
  }
})

export default router
