import fetch from "../config/fetch";
import { getStore } from "../config/mUtils";

const cityUrl = "/v1/cities";//城市系列地址
const searchPlaceUrl = "/v1/pois";//搜索地址
const mSiteUrl = "/v2/pois/";//msite地址
const mSiteFoodUrl = "/v2/index_entry";
/**
 * 获取首页默认地址
 */
export const cityGuess = ()=>{
    fetch(cityUrl,{
        type:"guess"
    })
};

/**
 * 获取首页热门城市
 */
export const hotCity = ()=>{
    fetch(cityUrl,{
        type:'hot'
    })
};

/**
 * 获取首页所有城市
 */
export const groupCity = ()=>{
    fetch(cityUrl,{
        type:'group'
    })
};

/**
 * 获取当前城市
 */
export const currentCity = number =>{
    fetch(cityUrl + number);
};

/**
 * 获取搜索地址
 */
export const searchPlace = (cityId,value)=>{
    fetch(searchPlaceUrl,{
        type:"search",
        city_id:cityId,
        ketword:value
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
 */
export const shopList = (
        latitude,
        longitude,
        offset,
        restaurant_category_id = "",
        order_by = "",
        delivery_mode = "",
        support_ids = []
    ) =>{
    }

