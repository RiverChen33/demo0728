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
import { NavigationActions } from 'react-navigation'

//屏幕信息
var dimensions = require('Dimensions');
//获取屏幕的宽度
var {width} = dimensions.get('window');

export default class LoginView extends Component {

        render() {
            var param=NavigationActions.setParams({
                params: {},
                key:'Home'
            });

        return (
            <View style={styles.container}>
                {/*头像*/}
                <Image style={styles.circleImage} source={require('../image/logo.png')}/>
                {/*账户*/}
                <View style={{borderRadius:100}}>
                    <View style={styles.textContainer}>
                        <Image style={styles.textImage} source={require('../image/logo.png')}/>
                        <TextInput
                            style={styles.textInput}
                            placeholder={'请输入用户名'}
                            //输入框下划线
                            underlineColorAndroid={'transparent'}/>
                    </View>
                    <View style={styles.textContainer}>
                        <Image style={styles.textImage} source={require('../image/logo.png')}/>
                        {/*密码*/}
                        <TextInput
                            style={styles.textInput}
                            placeholder={'请输入密码'}
                            secureTextEntry={true}
                            underlineColorAndroid={'transparent'}/>
                    </View>
                </View>
                {/*登录*/}
                <TouchableOpacity style={styles.btnStyle} onPress={()=>{this.props.navigation.navigate("Tab")}}>
                    <Text style={styles.loginText}>登录</Text>
                </TouchableOpacity>
                {/*无法登录  新用户*/}
                <View style={styles.canNot}>
                    <Text style={{color: '#4398ff'}}>无法登录</Text>
                    <Text style={{color: '#4398ff'}}>新用户</Text>
                </View>
                {/*其它登录方式*/}
                {/*<View style={styles.loginTheWay}>*/}
                    {/*<Text>其它登录方式：</Text>*/}
                    {/*<Image style={styles.image} source={require('../image/alipay.png')}/>*/}
                    {/*<Image style={styles.image} source={require('../image/wechat.png')}/>*/}
                {/*</View>*/}
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#dddddd',
        //设置次轴的对齐方式
        alignItems: 'center',
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
        width: width - 32,
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        //设置主轴为两端对齐
        justifyContent: 'space-between',
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
        height: 40,
        width: width - 32,
        borderRadius: 5,
        marginTop: 20,
        backgroundColor: '#4398ff',
        justifyContent: 'center',
    },
    loginText: {
        textAlign: 'center',
        color: 'white',
        textAlignVertical: 'center',
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