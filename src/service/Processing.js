import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,TouchableOpacity
} from 'react-native';


export default class Processing extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity onPress={()=>this.get()}>
                    <Text >去Demo2</Text>
                </TouchableOpacity>
            </View>
        )
    }
    get(){
        fetch('http://ip.taobao.com/service/getIpInfo.php?ip=59.108.51.32', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) =>
            response.json()
        ).then((jsondata)=>{
            alert(jsondata.data.country)
        })
            .catch((err) => {//2
                alert(err);
            });
    }

}