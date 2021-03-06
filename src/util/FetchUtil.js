import React, {Component} from 'react';
import Storage from './DeviceStorage';

export default class FetchUtil extends Component {
    /*
     *  post请求
     *  url:请求地址
     *  params:参数,这里的参数格式是：{param1: 'value1',param2: 'value2'}
     *  callback:回调函数
     * */
    static postJSON(url,params,callback){
        let token=Storage.get("apptoken").then((token)=>{

            fetch(url+"?token="+JSON.parse(token),{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                 body:JSON.stringify(params)
            })
                .then((response) => response.json())
                .then((responseJSON) => {
                    callback(responseJSON)
                })
                .catch((error) => {
                    console.log("error = " + error)
                });
        });
    }

    /*
     *  post请求
     *  url:请求地址
     *  params:参数,这里的参数要用这种格式：'key1=value1&key2=value2'
     *  callback:回调函数
     * */
    static postForm(url,params,callback){
        let fd = new FormData();
        for(let i in params){
          fd.append(""+i,""+params[i]);
        }

        let token=Storage.get("apptoken").then((token)=> {
            //fetch请求
            fetch(url+"?token="+JSON.parse(token), {
                method: 'POST',
                headers: {
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: fd
            })
                .then((response) => response.json())
                .then((responseJSON) => {
                    callback(responseJSON)
                })
                .catch((error) => {
                    console.log("error = " + error)
                });
        })
    }
    /*
     *  post请求
     *  url:请求地址
     *  params:参数,这里的参数要用这种格式：'key1=value1&key2=value2'
     *  callback:回调函数
     * */
    static postForm1(url,name,params,callback){
        let fd = new FormData();
        for(let i in params){
            fd.append(""+i,""+params[i]);
        }

        let token=Storage.get("apptoken").then((token)=> {
            if (url.search(/\?/) === -1) {
                url += '?token=' + JSON.parse(token);
            } else {
                url += '&token=' + JSON.parse(token);
            }
            //fetch请求
            fetch(url, {
                method: 'POST',
                headers: {
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: fd
            })
                .then((response) => response.json())
                .then((responseJSON) => {
                    callback(responseJSON)
                })
                .catch((error) => {
                    console.log("error = " + error)
                });
        })
    }

    /*
     *  get请求
     *  url:请求地址
     *  params:参数
     *  callback:回调函数
     * */
    static get(url,params,callback){
        if (params) {
            let paramsArray = [];
            //拼接参数
            Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
            if (url.search(/\?/) === -1) {
                url += '?' + paramsArray.join('&')
            } else {
                url += '&' + paramsArray.join('&')
            }
        }

        let token=Storage.get("apptoken").then((token)=> {
            if (url.search(/\?/) === -1) {
                url += '?token=' + JSON.parse(token);
            } else {
                url += '&token=' + JSON.parse(token);
            }

            //fetch请求
            fetch(url,{
                method: 'GET',
            })
                .then((response) => response.json())
                .then((json) => {
                    // alert("戴假发"+JSON.stringify(json));
                    callback(json);
                })
                .catch((error) => {
                    alert(error)
                })
        })


    }

    static toDateString(ticks){
        let d=new Date(ticks);

        return d.getFullYear()+"-"+(d.getMonth()+1)+"-"+(d.getDay()+1)+" "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
    }
}