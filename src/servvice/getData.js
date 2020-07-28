import fetch from "../config/fetch";
import { getStore } from "../config/mUtils";

const cityUrl = "/v1/cities/";//城市系列地址
const searchPlaceUrl = "/v1/pois";//搜索地址
const mSiteUrl = "/v2/pois/";//msite地址
const mSiteFoodUrl = "/v2/index_entry";
const mSiteShop = "/shopping/restaurants";//msite商铺列表
const searchRestaurantUrl = "/v4/restaurants";
/**
 * 获取首页默认地址
 */
export const cityGuess = ()=>{
    return fetch(cityUrl,{
        type:"guess"
    })
};

/**
 * 获取首页热门城市
 */
export const hotCity = ()=>{
    return fetch(cityUrl,{
        type:'hot'
    })
};

/**
 * 获取首页所有城市
 */
export const groupCity = ()=>{
    return fetch(cityUrl,{
        type:'group'
    })
};

/**
 * 获取当前城市
 */
export const currentCity = number =>{
   return fetch(cityUrl + number);
};

/**
 * 获取搜索地址
 */
export const searchPlace = (cityId,value)=>{
     return fetch(searchPlaceUrl,{
        "type":"search",
        "city_id":cityId,
        "keyword":value
    })
};

/**
 * 获取msite页面地址信息
 */
export const msiteAdress = geohash =>{
    fetch(mSiteUrl + geohash);
};

/**
 * msite食品分类列表
 */
export const mSiteFoodTypes = geohash =>{
    fetch(mSiteFoodTypes,{
        geohash,
        group_type:"1",
        "flags[]":"F"
    })
};

/**
 * mSite商铺列表
 * TODO 为何带返回
 */
export const shopList = (
        latitude,
        longitude,
        offset,
        restaurant_category_id = "",
        order_by = "",
        delivery_mode = "",
        support_ids = []
    )=>{
        let supportStr = "";
        support_ids.forEach(item=>{
            if (item.status) {
                supportStr += "$support_ids[]=" + item.id;
            }
        });
        let data = {
            latitude,
            longitude,
            offset,
            limit:"20",
            "extras[]":"activities",
            keyword:"",
            restaurant_category_id,
            'restaurant_category_ids[]': restaurant_category_ids,
		    order_by,
		    'delivery_mode[]': delivery_mode + supportStr
        };
        return fetch(mSiteShop,data);
    };

/**
 * 获取search页面搜搜结果
 */
export const searchRestaurant = (geohash,keyword)=>{
    fetch(searchRestaurantUrl,{
        'extras[]': 'restaurant_activity',
	    geohash,
	    keyword,
	    type: 'search'
    });
};

// ===================================== 登录页面 =========================================

/**
 * 获取图片验证码
 */
export const getCaptchaCode = () => {
    return fetch('/v1/captchas', {},'POST');
}
/**
 * 账号密码登录
 */
export const accountLogin = (username, password, captcha_code) => {
    return fetch('/v2/login', {
        username,
        password, 
        captcha_code
    }, 'POST');
}

export const getFoodtypes = (geohash) => { 
    return fetch('/v2/index_entry',{
        geohash,
        group_type: '1',
	    'flags[]': 'F'
    });
}