/**
 * 编译/上线环境切换
 */

//域名地址
let baseUrl = '';
//路由模式
let routerMode = 'hash';
//图片所在域名地址
let imgBaseUrl = '';

//TODO 环境切换
if (process.env.NODE_ENV == 'development') {
    imgBaseUrl = '/img/';
} else if(process.env.NODE_ENV == 'production'){
    // baseUrl = '//elm.cangdu.org';
} else{
}

export {
    baseUrl,
    routerMode,
    imgBaseUrl
}