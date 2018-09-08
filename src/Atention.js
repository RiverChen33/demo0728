/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 *
 *
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import Storage from './util/DeviceStorage';
import FetchUtil from './util/FetchUtil';
import Toast, {DURATION} from 'react-native-easy-toast'
import px2dp from './util';
//屏幕信息
var dimensions = require('Dimensions');
//获取屏幕的宽度
var {width} = dimensions.get('window');

var timer;

export default class Welcome extends Component {
    static navigationOptions = (props)=> {
        return {
            headerTitle: '温馨提醒',
            gestureResponseDistance: {horizontal: 300},
            headerBackTitle: null,
            headerStyle: {backgroundColor: '#4083FF', height: 60},//导航栏的样式
            headerTitleStyle: {
                color: 'white',
                //设置标题的大小
                fontSize: 16,
                //居中显示
                alignSelf: 'center',
                textAlign: 'center',
            },
            headerRight: <View/>,
            headerLeft: <View>
                <TouchableOpacity onPress={() => {
                    props.navigation.goBack()
                }}>
                    <Image style={{width:25,height:25,marginLeft:10}} source={require('../image/back-icon.png')}/>
                </TouchableOpacity>
            </View>
        }

    }

        render() {


        return (
            <View style={{flex:1,backgroundColor: 'white',justifyContent: 'center',width:width}}>
                <Text style={{fontSize:px2dp(18),marginBottom:49,fontColor:'#4E4E4E',textAlign:'center'}}>暂未对接,如有需要请联系物业</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

});
