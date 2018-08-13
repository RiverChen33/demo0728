/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
    Image
} from 'react-native';

import {
    TabNavigator,
    StackNavigator,
} from 'react-navigation';
import Demo1 from "./src/Demo1";
import Demo2 from "./src/Demo2";
import LoginView from "./src/loginView";
import ForgetPwd from "./src/forgetPwd";
import Mine from "./src/Mine";
import Home from "./src/Home";
import Processing from "./src/service/Processing";
import BeEvaluted from "./src/service/BeEvaluted";
import Finish from "./src/service/Finish";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const Tab = TabNavigator({
    //每一个页面的配置
    Home: {
        screen: Home,
        navigationOptions: {
            //stackNavigator的属性
            headerTitle: '金磐网络科技园',
            gestureResponseDistance: {horizontal: 300},
            headerBackTitle: null,
            headerStyle: {backgroundColor: '#c3c3c3',height:50},//导航栏的样式
            headerTitleStyle: {
                color: 'white',
                //设置标题的大小
                fontSize: 16,
                //居中显示
                alignSelf: 'center',
                textAlign:'center',
            },
            headerRight:<View/>,
            headerLeft:<View/>,
            //tab 的属性
            tabBarLabel: '首页',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('./image/ic_home.png')}
                    style={[{height: 24, width: 24}, {tintColor: tintColor}]}/>
            ),

        },
    },
    Demo2: {
        screen: Demo2,
        navigationOptions: {
            //stackNavigator的属性
            headerTitle: '分类',
            gestureResponseDistance: {horizontal: 300},
            headerBackTitle: null,
            headerStyle: {backgroundColor: '#EB3695'},//导航栏的样式
            headerTitleStyle: {
                color: 'white',
                //设置标题的大小
                fontSize: 18,
                //居中显示
                alignSelf: 'center',
                textAlign:'center',
            },
            headerRight:<View/>,
            headerLeft:<View/>,
            //tab 的属性
            tabBarLabel: '分类',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('./image/ic_type.png')}
                    style={[{height: 24, width: 24}, {tintColor: tintColor}]}
                />
            ),
        }
    },
    Mine: {
        screen: Mine,
        navigationOptions: {
            //stackNavigator的属性
            headerTitle: '我的',
            gestureResponseDistance: {horizontal: 300},
            headerBackTitle: null,
            headerStyle: {backgroundColor: 'green'},//导航栏的样式
            headerTitleStyle: {
                color: 'white',
                //设置标题的大小
                fontSize: 18,
                //居中显示
                alignSelf: 'center',
                textAlign:'center',
            },
            headerRight:<View/>,
            headerLeft:<View/>,
            //tab 的属性
            tabBarLabel: '我的',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('./image/ic_me.png')}
                    style={[{height: 24, width: 24}, {tintColor: tintColor}]}
                />
            ),
        }
    },

}, {
    //设置TabNavigator的位置
    tabBarPosition: 'bottom',
    //是否在更改标签时显示动画
    animationEnabled: true,
    //是否允许在标签之间进行滑动
    swipeEnabled: true,
    //按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    backBehavior: "none",
    //设置Tab标签的属性

    tabBarOptions: {
        //Android属性
        upperCaseLabel: false,//是否使标签大写，默认为true
        //共有属性
        showIcon: true,//是否显示图标，默认关闭
        showLabel: true,//是否显示label，默认开启
        activeTintColor: '#EB3695',//label和icon的前景色 活跃状态下（选中）
        inactiveTintColor: 'gray',//label和icon的前景色 活跃状态下（未选中）
        style: { //TabNavigator 的背景颜色
            backgroundColor: 'white',
            height: 55,
        },
        indicatorStyle: {//标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题
            height: 0,
        },
        labelStyle: {//文字的样式
            fontSize: 13,
            marginTop: -5,
            marginBottom: 5,
        },
        iconStyle: {//图标的样式
            marginBottom: 5,
        }
    },
});

const Tab2 = TabNavigator({
    Processing:{
        screen: Processing,
        navigationOptions: {
            //stackNavigator的属性
            headerTitle: '处理中',
            gestureResponseDistance: {horizontal: 300},
            headerBackTitle: null,
            headerStyle: {backgroundColor: 'green'},//导航栏的样式
            headerTitleStyle: {
                color: 'white',
                //设置标题的大小
                fontSize: 18,
                //居中显示
                alignSelf: 'center',
                textAlign:'center',
            },
            headerRight:<View/>,
            // headerLeft:<View/>,
            //tab 的属性
            tabBarLabel: '处理中'
        }
    },
    BeEvaluted:{
        screen: BeEvaluted,
        navigationOptions: {
            //stackNavigator的属性
            headerTitle: '待评价',
            gestureResponseDistance: {horizontal: 300},
            headerBackTitle: null,
            headerStyle: {backgroundColor: 'green'},//导航栏的样式
            headerTitleStyle: {
                color: 'white',
                //设置标题的大小
                fontSize: 18,
                //居中显示
                alignSelf: 'center',
                textAlign:'center',
            },
            headerRight:<View/>,
            // headerLeft:<View/>,
            //tab 的属性
            tabBarLabel: '待评价'
        }
    },
    Finish:{
        screen: Finish,
        navigationOptions: {
            //stackNavigator的属性
            headerTitle: '处理完成',
            gestureResponseDistance: {horizontal: 300},
            headerBackTitle: null,
            headerStyle: {backgroundColor: 'green'},//导航栏的样式
            headerTitleStyle: {
                color: 'white',
                //设置标题的大小
                fontSize: 18,
                //居中显示
                alignSelf: 'center',
                textAlign:'center',
            },
            headerRight:<View/>,
            // headerLeft:<View/>,
            //tab 的属性
            tabBarLabel: '处理完成'
        }
    },
},{
    //设置TabNavigator的位置
    tabBarPosition: 'top',
        //是否在更改标签时显示动画
        animationEnabled: true,
        //是否允许在标签之间进行滑动
        swipeEnabled: true,
        //按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
        backBehavior: "none",
        //设置Tab标签的属性

        tabBarOptions: {
        //Android属性
        upperCaseLabel: false,//是否使标签大写，默认为true
            //共有属性
            showIcon: true,//是否显示图标，默认关闭
            showLabel: true,//是否显示label，默认开启
            activeTintColor: '#EB3695',//label和icon的前景色 活跃状态下（选中）
            inactiveTintColor: 'gray',//label和icon的前景色 活跃状态下（未选中）
            style: { //TabNavigator 的背景颜色
            backgroundColor: 'white',
                height: 55,
        },
        indicatorStyle: {//标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题
            height: 0,
        },
        labelStyle: {//文字的样式
            fontSize: 13,
                marginTop: -5,
                marginBottom: 5,
        },
    }});


export default Navi = StackNavigator({
    LoginView: {
        screen: LoginView,
        navigationOptions:{
            header:null
        }
    },
    ForgetPwd: {
        screen: ForgetPwd,
        navigationOptions:{
            header:null
        }
    },
    Demo1: {
        screen: Demo1,
    },
    // Home:{
    //     screen:Home,
    //     navigationOptions:{
    //         headerTitle:"科技园",
    //         headerRight:<View></View>,
    //         headerTitleStyle:{
    //             flex:1,fontSize:18,color:"red",textAlign:'center'
    //         }
    //     }
    // },
    Tab:{
        screen:Tab
    },
    Tab2:{
        screen:Tab2
    }
},{
    initialRouteName:'LoginView',
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
    title:{
      flex:1,fontSize:16,color:"red",textAlign:'center'
    }
});
