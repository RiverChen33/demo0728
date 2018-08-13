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
import Storage from './util/DeviceStorage'

//屏幕信息
var dimensions = require('Dimensions');
//获取屏幕的宽度
var {width} = dimensions.get('window');

export default class LoginView extends Component {
        constructor(props){
            super(props);
            this.state={username:"",password:""}
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
                <Text style={{fontSize:24,marginBottom:10}}>用心服务，美好生活</Text>
                {/*账户*/}
                <View style={{borderRadius:10,borderWidth:1,borderColor:'#c3c3c3',borderStyle:'solid',width:width-40,height:100,}}>
                    <View style={{flexDirection:'row',alignContent:'center',paddingLeft:10,height:50,position:'relative',borderBottomWidth:1,borderBottomColor:'#c3c3c3',borderBottomStyle:'solid'}}>
                        <TextInput style={{width:width-100,fontSize:16}} placeholder={'请输入用户名'} onChangeText={(text)=>this.setState({username:text})}/>
                        <Image source={require('../image/username.png')} style={{width:20,height:20,alignSelf:'center',position:'absolute',right:10}}/>
                    </View>
                    <View style={{flexDirection:'row',alignContent:'center',paddingLeft:10,height:50,position:'relative'}}>
                        <TextInput style={{width:width-100,fontSize:16}} placeholder={'请输入密码'} secureTextEntry={true} onChangeText={(text)=>this.setState({password:text})}/>
                        <Image source={require('../image/password.png')} style={{width:20,height:20,alignSelf:'center',position:'absolute',right:10}} />
                    </View>
                </View>
                {/*登录*/}
                <TouchableOpacity style={styles.btnStyle} onPress={this.Login.bind(this)}>
                    <Text style={styles.loginText}>登录</Text>
                </TouchableOpacity>
                {/*无法登录  新用户*/}
                <TouchableOpacity style={styles.canNot} onPress={()=>{this.props.navigation.navigate("ForgetPwd")}}>
                    <Text style={{color: '#4398ff'}}>忘记密码？别担心</Text>
                </TouchableOpacity>
            </View>
        );
    }

    Login(){
            alert(this.state.username);
        //this.props.navigation.navigate("Tab");
        Storage.get('appHotSearchTagList').then((tags) => {
            alert(tags);
        });
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#dddddd',
        //设置次轴的对齐方式
        alignItems: 'center',
        backgroundColor:'white'
    },
    circleImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: 'white',
        marginTop: 100,
        marginBottom: 25,
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
        backgroundColor: '#4398ff',
        justifyContent: 'center',
    },
    loginText: {
        textAlign: 'center',
        color: 'white',
        textAlignVertical: 'center',
        fontSize:18,
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