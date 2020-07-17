import { baseUrl } from "./env";

//TODO 方法API
export default async(url='',data={},type='GET',method='fetch') =>{
    type = type.toUpperCase();
    url = baseUrl + url;

    if ('GET' == type) {
        let dataStr = '';
        //遍历对象的所有
        Object.keys(data).forEach(key =>{
            dataStr += key + '=' + data[key] + '&';
        });
        //TODO 有什么操作在里面?
        if ('' !== dataStr) {
            dataStr = dataStr.substr(0,dataStr.lastIndexOf('&'));
            url = url + '?' + dataStr;
        }
    }

    //TODO 参数特征?
    if (window.fetch && "fetch" == method) {
        let requetsConfig = {
            method:type,
            credentials:"include",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json",
            },
            mode:"cors",
            cache:"force-cache"
        }

        //拼接字符串
        if ("POST" == type) {
            Object.defineProperty(requetsConfig,'body',{
                value:JSON.stringify(data)
            })
        }

        try {
            const response = await fetch(url,requetsConfig);
            const responseJson = await response.json();
            return responseJson;
        } catch (error) {
            throw error;
        }
    //非fetch请求
    }else{
        //异步操作的最终返回对象
        return new Promise((resolve,reject) => {
            let requestObj;
            if (window.XMLHttpRequets) {
                requestObj = new XMLHttpRequest();
            }else{
                //IE浏览器
                requestObj = new ActiveXObject;
            }
            let sendData = '';
            //转换
            if ('POST' == type) {
                sendData = JSON.stringify(data);
            }
            requestObj.open(type,url,true);
            requestObj.setRequestHeader(
                "Content-type",
                "application/x-www-form-urlencoded",
                //TODO暂时开启跨域请求
                "Access-Control-Allow-Origin", "*",
                "Access-Control-Allow-Credentials", true
            );
            requestObj.send(data);
            requestObj.onreadystatechange = ()=>{
                //readonly readyState: number;
                if (4 == requestObj.readyState) {
                    if (200 == requestObj.status) {
                        let obj = requestObj.response;
                        if ('object' !== typeof(obj)) {
                            obj = JSON.parse(obj);
                        }
                        resolve(obj);
                    //处理失败
                    }else{
                        reject(requestObj);
                    }
                }
            };
        });
    }
}