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
import FetchUtil from './util/FetchUtil'
//屏幕信息
var dimensions = require('Dimensions');
//获取屏幕的宽度
var {width} = dimensions.get('window');

export default class ForgetPwd extends Component {

    constructor(props){
        super(props);
        this.state={
            seconds:10,
            sendText:"发送验证码",
            sendClass:true,
            submitInfo:{
                phone:"",
                code:"",
                password:"",
                confirmPassword:''
            }
        }
    }

        render() {
            var param=NavigationActions.setParams({
                params: {},
                key:'Home'
            });

        return (
            <View style={styles.container}>
                <TouchableOpacity style={{position:'absolute',top:30,left:10}} onPress={()=>{this.props.navigation.navigate("LoginView")}}>
                    <Image style={{width:20,height:20}} source={require('../image/arrow-left.png')}/>
                </TouchableOpacity>
                <View style={{position:'absolute',top:33,textAlign:'center'}}>
                    <Text style={{color:'#333333',fontSize:16,}}>找回密码</Text>
                </View>
                {/*头像*/}
                <Image style={styles.circleImage} source={require('../image/logo.png')}/>
                <Text style={{fontSize:18,marginBottom:49,fontColor:'#4E4E4E'}}>用心服务，美好生活</Text>
                {/*账户*/}
                <View style={{borderRadius:5,borderWidth:1,borderColor:'#E6E6E6',borderStyle:'solid',width:width-40,height:200,}}>
                    <View style={{flexDirection:'row',alignContent:'center',paddingLeft:10,height:50,position:'relative',borderBottomWidth:1,borderBottomColor:'#E6E6E6',borderBottomStyle:'solid'}}>
                        <TextInput style={{width:width-100,fontSize:14}} placeholder={'请输入手机号'} underlineColorAndroid='transparent' onChangeText={(phone)=>{this.setState({submitInfo:{phone:phone}})}}/>
                    </View>
                    <View style={{flexDirection:'row',alignContent:'center',paddingLeft:10,height:50,position:'relative',borderBottomWidth:1,borderBottomColor:'#E6E6E6',borderBottomStyle:'solid'}}>
                        <TextInput style={{flex:1,fontSize:14}} placeholder={'验证码'} underlineColorAndroid='transparent' onChangeText={(code)=>{this.setState({submitInfo:{code:code}})}}/>
                        <TouchableOpacity style={this.state.sendClass?styles.btnStyle1:styles.btnStyle2} onPress={this.send.bind(this)}>
                            <Text style={styles.loginText}>{this.state.sendText}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row',alignContent:'center',paddingLeft:10,height:50,position:'relative',borderBottomWidth:1,borderBottomColor:'#E6E6E6',borderBottomStyle:'solid'}}>
                        <TextInput style={{width:width-100,fontSize:14}} placeholder={'请输入重置密码'} secureTextEntry={true} underlineColorAndroid='transparent' onChangeText={(password)=>{this.setState({submitInfo:{password:password}})}}/>
                    </View>
                    <View style={{flexDirection:'row',alignContent:'center',paddingLeft:10,height:50,position:'relative',}}>
                        <TextInput style={{width:width-100,fontSize:14}} placeholder={'请再次输入重置密码'} secureTextEntry={true} underlineColorAndroid='transparent' onChangeText={(confirmPassword)=>{this.setState({submitInfo:{confirmPassword:confirmPassword}})}}/>
                    </View>
                </View>
                {/*登录*/}
                <TouchableOpacity style={styles.btnStyle} onPress={()=>{this.submit()}}>
                    <Text style={styles.loginText}>提交</Text>
                </TouchableOpacity>
            </View>
        );
    }
    submit=()=>{
        FetchUtil.get("http://school.quspacedragon.cn/user/findPwd",this.state.submitInfo,(res)=>{

        })
    }


    send(){
        if(this.state.sendClass) {
            var that = this;
            var t = setInterval(function () {
                let s = that.state.seconds - 1;
                if (s == 0) {
                    clearTimeout(t);
                    that.setState({
                        seconds: 60,
                        sendText: "重发验证码",
                        sendClass: true
                    });
                } else {
                    that.setState({
                        seconds: s,
                        sendText: s + "秒后重发",
                        sendClass: false
                    });
                }
            }, 1000);
        }
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#dddddd',
        //设置次轴的对齐方式
        alignItems: 'center',
        backgroundColor:'white',
        position:'relative'

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
        marginTop: 15,
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
        marginTop: 20,
        backgroundColor: '#4077F8',
        justifyContent: 'center',
    },
    btnStyle1: {
        height: 50,
        width: 150,
        backgroundColor: '#4077F8',
        justifyContent: 'center',
    },
    btnStyle2: {
        height: 50,
        width: 150,
        backgroundColor: '#c9c9c9',
        justifyContent: 'center',
    },
    loginText: {
        textAlign: 'center',
        color: 'white',
        textAlignVertical: 'center',
        fontSize:16,
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