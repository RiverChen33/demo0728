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
import LoginView from "./src/loginView";
import ForgetPwd from "./src/forgetPwd";
import Mine from "./src/Mine";
import Home from "./src/Home";
import Missions from "./src/Missions";
import Processing from "./src/service/Processing";
import BeEvaluted from "./src/service/BeEvaluted";
import Finish from "./src/service/Finish";
import allGD from "./src/GDRecord/allGD";
import BaoShi from "./src/ServerCenter/BaoShi";
import QianFei from "./src/ServerCenter/QianFei";
import ZhengGai from "./src/ServerCenter/ZhengGai/ZhengGai";
import ZhengGaiDetail from "./src/ServerCenter/ZhengGai/ZhengGaiDetail";
import ZhuHu from "./src/ServerCenter/ZhuHu/ZhuHu";
import ZhengGaiYanShou from "./src/ServerCenter/ZhengGai/ZhengGaiYanShou";
import KaoPinKouFen from "./src/ServerCenter/KaoPin/KaoPinKouFen";
import JianChaDian from "./src/ServerCenter/KaoPin/JianChaDian";
import CheckList from "./src/ServerCenter/KaoPin/CheckList";
import KaoPinList from "./src/ServerCenter/KaoPin/KaoPinList";
import CheckDetail from "./src/ServerCenter/KaoPin/CheckDetail";
import JianChaList from "./src/ServerCenter/JianCha/JianChaList";
import JCCheckDetail from "./src/ServerCenter/JianCha/JCCheckDetail";
import JianChaHistory from "./src/ServerCenter/JianCha/JianChaHistory";
import JianChaZhengGai from "./src/ServerCenter/JianCha/JianChaZhengGai";
import JianChaHeGe from "./src/ServerCenter/JianCha/JianChaHeGe";
import JianChaClose from "./src/ServerCenter/JianCha/JianChaClose";
import SelectPeople from "./src/ServerCenter/JianCha/SelectPeople";
import ZhuHuList from "./src/ServerCenter/ZhuHu/ZhuHuList";
import AllPaiGong from "./src/DeviceManage/DevicePaiGong/AllPaiGong";
import WeiPaiGong from "./src/DeviceManage/DevicePaiGong/WeiPaiGong";
import YiPaiGong from "./src/DeviceManage/DevicePaiGong/YiPaiGong";
import PaiGongDetail from "./src/DeviceManage/DevicePaiGong/PaiGongDetail";
import PaiGongZhuanPai from "./src/DeviceManage/DevicePaiGong/PaiGongZhuanPai";
import PaiGongSelectPeople from "./src/DeviceManage/DevicePaiGong/PaiGongSelectPeople";
import WeiWeiXiu from "./src/DeviceManage/DeviceWeiXiu/WeiWeiXiu";
import WeiXiuZhong from "./src/DeviceManage/DeviceWeiXiu/WeiXiuZhong";
import WeiXiuDengJi from "./src/DeviceManage/DeviceWeiXiu/WeiXiuDengJi";
import ShuiBiaoList from "./src/DeviceManage/ShuiBiao/ShuiBiaoList";
import ShuiBiaoDetail from "./src/DeviceManage/ShuiBiao/ShuiBiaoDetail";
import DianBiaoList from "./src/DeviceManage/DianBiao/DianBiaoList";
import DianBiaoDetail from "./src/DeviceManage/DianBiao/DianBiaoDetail";
import CustomerList from "./src/ZhaoShangService/Customer/CustomerList";
import CustomerAdd from "./src/ZhaoShangService/Customer/CustomerAdd";
import CustomerDetail from "./src/ZhaoShangService/Customer/CustomerDetail";
import ResourceDetail from "./src/ZhaoShangService/Resource/ResourceDetail";
import ResourceList from "./src/ZhaoShangService/Resource/ResourceList";
import XunJianList from "./src/DeviceManage/DeviceXunJian/XunJianList";
import XuanJianDetail from "./src/DeviceManage/DeviceXunJian/XuanJianDetail";
import DefaultScreen from "./src/DefaultScreen";
import Welcome from "./src/Welcome";
import ChaYan from "./src/BaoAn/ChaYan/ChaYan";
import WeiTingList from "./src/BaoAn/WeiTing/WeiTingList";
import WeiTingAdd from "./src/BaoAn/WeiTing/WeiTingAdd";
import ShiJianAdd from "./src/BaoAn/ShiJian/ShiJianAdd";
import ShiJianList from "./src/BaoAn/ShiJian/ShiJianList";
import DengJiGD from "./src/GDRecord/DengJiGD";
import ShouLiGD from "./src/GDRecord/ShouLiGD";
import WanGongGD from "./src/GDRecord/WanGongGD";


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
            //tab 的属性
            tabBarLabel: '首页',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('./image/ic_home.png')}
                    style={[{height: 24, width: 24}, {tintColor: tintColor}]}/>
            ),

        },
    },
    Missions: {
        screen: Missions,
        navigationOptions: {
            //stackNavigator的属性
            headerTitle: '我的任务',
            gestureResponseDistance: {horizontal: 300},
            headerBackTitle: null,
            headerStyle: {backgroundColor: '#4083FF',height:60},//导航栏的样式
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
            tabBarLabel: '任务',
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
            headerStyle: {backgroundColor: '#4083FF',height:60},//导航栏的样式
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
        activeTintColor: '#4083FF',//label和icon的前景色 活跃状态下（选中）
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
            headerStyle: {backgroundColor: '#4083FF',height:60},//导航栏的样式
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
            headerStyle: {backgroundColor: '#4083FF',height:60},//导航栏的样式
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
            headerStyle: {backgroundColor: '#4083FF',height:60},//导航栏的样式
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
            activeTintColor: '#4083FF',//label和icon的前景色 活跃状态下（选中）
            inactiveTintColor: 'gray',//label和icon的前景色 活跃状态下（未选中）
            style: { //TabNavigator 的背景颜色
            backgroundColor: 'white',
                height: 40,
        },
        indicatorStyle: {//标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题
            height: 0,
        },
        labelStyle: {//文字的样式
            fontSize: 15,
            marginTop: -20,
        },
    }});

const Tab4 = TabNavigator({
    AllPaiGong:{
        screen: AllPaiGong,
    },
    WeiPaiGong:{
        screen: WeiPaiGong,
    },
    YiPaiGong:{
        screen: YiPaiGong
    }
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
        activeTintColor: '#4083FF',//label和icon的前景色 活跃状态下（选中）
        inactiveTintColor: 'gray',//label和icon的前景色 活跃状态下（未选中）
        style: { //TabNavigator 的背景颜色
            backgroundColor: 'white',
            height: 40,
        },
        indicatorStyle: {//标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题
            height: 0,
        },
        labelStyle: {//文字的样式
            fontSize: 15,
            marginTop: -20,
        },
    }});
const WeiXiuTab = TabNavigator({
    WeiWeiXiu:{
        screen: WeiWeiXiu,
    },
    WeiXiuZhong:{
        screen: WeiXiuZhong,
    }
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
        activeTintColor: '#4083FF',//label和icon的前景色 活跃状态下（选中）
        inactiveTintColor: 'gray',//label和icon的前景色 活跃状态下（未选中）
        style: { //TabNavigator 的背景颜色
            backgroundColor: 'white',
            height: 40,
        },
        indicatorStyle: {//标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题
            height: 0,
        },
        labelStyle: {//文字的样式
            fontSize: 15,
            marginTop: -20,
        },
    }});

const GDTab = TabNavigator({
    allGD:{
        screen: allGD,
    },
    DengJiGD:{
        screen: DengJiGD,
    },
    ShouLiGD:{
        screen: ShouLiGD,
    },
    WanGongGD:{
        screen: WanGongGD,
    }
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
        activeTintColor: '#4083FF',//label和icon的前景色 活跃状态下（选中）
        inactiveTintColor: 'gray',//label和icon的前景色 活跃状态下（未选中）
        style: { //TabNavigator 的背景颜色
            backgroundColor: 'white',
            height: 40,
        },
        indicatorStyle: {//标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题
            height: 0,
        },
        labelStyle: {//文字的样式
            fontSize: 15,
            marginTop: -20,
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
    Welcome: {
        screen: Welcome,
        navigationOptions:{
            header:null
        }
    },
    BaoShi: {
        screen: BaoShi,
    },
    QianFei: {
        screen: QianFei,
    },
    ZhengGai: {
        screen: ZhengGai,
    },
    ZhengGaiDetail: {
        screen: ZhengGaiDetail,
    },
    ZhengGaiYanShou: {
        screen: ZhengGaiYanShou,
    },
    KaoPinKouFen: {
        screen: KaoPinKouFen,
    },
    KaoPinList: {
        screen: KaoPinList,
    },
    CheckDetail: {
        screen: CheckDetail,
    },
    JianChaList: {
        screen: JianChaList,
    },
    JCCheckDetail: {
        screen: JCCheckDetail,
    },
    JianChaHistory: {
        screen: JianChaHistory,
    },
    JianChaZhengGai: {
        screen: JianChaZhengGai,
    },
    JianChaHeGe: {
        screen: JianChaHeGe,
    },
    JianChaClose: {
    screen: JianChaClose,
    },
    SelectPeople: {
        screen: SelectPeople,
    },
    ZhuHuList: {
        screen: ZhuHuList,
    },
    PaiGongZhuanPai: {
        screen: PaiGongZhuanPai,
    },
    PaiGongSelectPeople: {
        screen: PaiGongSelectPeople,
    },
    PaiGongDetail: {
        screen: PaiGongDetail,
    },
    JianChaDian: {
        screen: JianChaDian,
    },
    WeiXiuDengJi: {
        screen: WeiXiuDengJi,
    },
    ShuiBiaoList: {
        screen: ShuiBiaoList,
    },
    ShuiBiaoDetail: {
        screen: ShuiBiaoDetail,
    },
    DianBiaoList: {
        screen: DianBiaoList,
    },
    DianBiaoDetail: {
        screen: DianBiaoDetail,
    },
    CustomerList: {
        screen: CustomerList,
    },
    CustomerAdd: {
        screen: CustomerAdd,
    },
    CustomerDetail: {
        screen: CustomerDetail,
    },
    ResourceDetail: {
        screen: ResourceDetail,
    },
    ResourceList: {
        screen: ResourceList,
    },
    XuanJianDetail: {
        screen: XuanJianDetail,
    },
    XunJianList: {
        screen: XunJianList,
    },
    CheckList: {
        screen: CheckList,
    },
    ChaYan: {
        screen: ChaYan,
    },
    WeiTingList: {
        screen: WeiTingList,
    },
    WeiTingAdd: {
        screen: WeiTingAdd,
    },
    ShiJianAdd: {
        screen: ShiJianAdd,
    },
    ShiJianList: {
        screen: ShiJianList,
    },
    ZhuHu: {
        screen: ZhuHu,
        navigationOptions: {
            //stackNavigator的属性
            headerTitle: '住户管理',
            gestureResponseDistance: {horizontal: 300},
            headerBackTitle: null,
            headerStyle: {backgroundColor: '#4083FF',height:60},//导航栏的样式
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
        }
    },
    DefaultScreen: {
        screen: DefaultScreen,
    },
    Tab:{
        screen:Tab
    },
    Tab2:{
        screen:Tab2
    },
    Tab4:{
        screen:Tab4
    },
    WeiXiuTab:{
        screen:WeiXiuTab
    },
    GDTab:{
        screen:GDTab
    }
},{
    initialRouteName:'Tab',
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
