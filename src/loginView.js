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
    View,
    AsyncStorage
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

export default class LoginView extends Component {
        constructor(props){
            super(props);
            this.state={phone:"",password:""}
        }


        render() {
            var param=NavigationActions.setParams({
                params: {},
                key:'Home'
            });

        return (
            <View style={styles.container}>
                {/*头像*/}
                <Image style={styles.circleImage} source={require('../image/logo.png')}/>
                <Text style={{fontSize:px2dp(18),marginBottom:49,fontColor:'#4E4E4E'}}>用心服务，美好生活</Text>
                {/*账户*/}
                <View style={{borderRadius:5,borderWidth:1,borderColor:'#E6E6E6',borderStyle:'solid',width:width-40,height:100,}}>
                    <View style={{flexDirection:'row',alignContent:'center',paddingLeft:10,height:50,position:'relative',borderBottomWidth:1,borderBottomColor:'#E6E6E6',borderBottomStyle:'solid'}}>
                        <TextInput style={{width:width-100,fontSize:px2dp(14),fontColor:'#CECECE',paddingVertical: 0}} placeholder={'请输入用户名'} underlineColorAndroid='transparent' onChangeText={(text)=>this.setState({phone:text})}/>
                        <Image source={require('../image/username.png')} style={{width:20,height:20,alignSelf:'center',position:'absolute',right:10}}/>
                    </View>
                    <View style={{flexDirection:'row',alignContent:'center',paddingLeft:10,height:50,position:'relative'}}>
                        <TextInput style={{width:width-100,fontSize:px2dp(14),fontColor:'#CECECE'}} placeholder={'请输入密码'} underlineColorAndroid='transparent'  secureTextEntry={true} onChangeText={(text)=>this.setState({password:text})}/>
                        <Image source={require('../image/password.png')} style={{width:20,height:20,alignSelf:'center',position:'absolute',right:10}} />
                    </View>
                </View>
                {/*登录*/}
                <TouchableOpacity style={styles.btnStyle} onPress={()=>this.Login()}>
                    <Text style={styles.loginText}>登录</Text>
                </TouchableOpacity>
                {/*无法登录  新用户*/}
                <TouchableOpacity style={styles.canNot} onPress={()=>{this.props.navigation.navigate("ForgetPwd")}}>
                    <Text style={{color: '#4083FF',fontSize:px2dp(12)}}>忘记密码？别担心</Text>
                </TouchableOpacity>
                <Toast ref="toast"/>
            </View>
        );
    }

    Login=()=>{
            var that=this;
        FetchUtil.get("http://school.quspacedragon.cn/user/login",that.state,function(res){
            //alert(response.data);
            //that.refs.toast.show('hello world!');
            if(res.success){
                Storage.save('apptoken',res.data.token);
               let resetAction = NavigationActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({routeName:'Tab'})//要跳转到的页面名字
                    ]
                });
                that.props.navigation.dispatch(resetAction);

            }else{
                that.refs.toast.show(res.message);
            }
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        //设置次轴的对齐方式
        alignItems: 'center',
        backgroundColor:'white'
    },
    circleImage: {
        width: 68,
        height: 68,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: 'white',
        marginTop: 82,
        marginBottom: 19,
    },
    canNot: {
        width: width - 40,
        marginTop: 0,
        flexDirection: 'row',
        alignItems: 'center',
        //设置主轴为两端对齐
        justifyContent: 'center',
    },
    loginTheWay: {
        flexDirection: 'row',
        //设置次轴的对齐方式
        alignItems: 'center',
        justifyContent: 'flex-start',
        //绝对定位
        position: 'absolute',
        //距离底部还有30 距离左边还有10 这样的一个位置
        bottom: 30,
        left: 10,
    },
    image: {
        width: 50,
        height: 50,
        marginLeft: 5,
        borderRadius: 25,
    },
    btnStyle: {
        height: 50,
        width: width - 40,
        borderRadius: 5,
        marginTop: 11,
        marginBottom: 11,
        backgroundColor: '#4077F8',
        justifyContent: 'center',
    },
    loginText: {
        textAlign: 'center',
        color: 'white',
        textAlignVertical: 'center',
        fontSize:px2dp(16),
    },
    textContainer:{
        paddingLeft:10,
        paddingRight:10,
        width:width,
        height:40,
        justifyContent:'center',
        position:'relative',
        marginBottom: 5,
    },
    textInput: {
        height: 40,
        lineHeight:40,
        marginBottom: 5,
        backgroundColor: 'white',
        textAlign: 'left',
        paddingLeft:40,
    },
    textImage: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: 'white',
        position:'absolute',
        top:2,
        left:15,
        zIndex:2
    }
});

//输出本类  记住一定是exports  不是  export
// module.exports = LoginView;