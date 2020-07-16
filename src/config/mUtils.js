/**
 * 本地数据持久化
 * local storage
 */

 export const setStore = (name,content)=>{
     if(!name) return;
     if('string' !== typeof(content)){
         content = JSON.stringify(content);
     }
     window.localStorage.setItem(name,content);
 }

/**
 * 获取本地仓库local storage
 */
export const getStore = name => {
    if (!name) return;
    return window.localStorage.getItem(name);
}

/**
 * 删除数据
 */
export const deleStore = name =>{
    if (!name) return;
    window.localStorage.removeItem(name);
}

/**
 * 获取style样式
 */
// export const getStyle = (element,attr,numberMode = "int")=>{
//     let target;
//     //
//     if (condition) {
        
//     }
// }

/**
 * 页面到达底部,加载更多
 */
export const loadMore = (Element,callback) =>{
    let winHeight = window.screen.height;
    let height;
    let setTop;
    let paddingBottom;
    let marginBottom;
    let requestFram;
    let oldScrollTop;
}

/**
 * 
 */
