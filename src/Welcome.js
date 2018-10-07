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
        constructor(props){
            super(props);
            this.state={
                phone:"",
                password:"",
                token:'',
                isLogin:false,
                seconds:3
            }
        }
    componentDidMount() {
            this.Timer();
           this.checkLogin();
    }

    componentWillUnmount(){
        clearInterval(timer);
    }

    Timer=()=>{
        var that=this;
        timer=setInterval(()=>{
            let s=that.state.seconds;
            if(s>0){
                s=s-1;
                that.setState({
                    seconds:s
                });
            }else{
                if(that.state.isLogin){
                    let resetAction = NavigationActions.reset({
                        index: 0,
                        actions: [
                            NavigationActions.navigate({routeName:'Tab'})//要跳转到的页面名字
                        ]
                    });
                    that.props.navigation.dispatch(resetAction);

                }else{
                    let resetAction = NavigationActions.reset({
                        index: 0,
                        actions: [
                            NavigationActions.navigate({routeName:'LoginView'})//要跳转到的页面名字
                        ]
                    });
                    that.props.navigation.dispatch(resetAction);
                }
            }
        },1000)
    }

    checkLogin=()=>{
        var that=this;
        Storage.get('apptoken').then(token=>{
            token=JSON.parse(token);
            // alert(token);
console.log(token);
            let isLogin=false;

            this.setState({
                token:token,
                isLogin:isLogin
            });
        });



        // FetchUtil.get("http://school.quspacedragon.cn/user/login",that.state,function(res){
        //     //alert(response.data);
        //     //that.refs.toast.show('hello world!');
        //     if(res.success){
        //         Storage.save('apptoken',res.data.token);
        //         //that.props.navigation.navigate("Tab");
        //
        //         let resetAction = NavigationActions.reset({
        //             index: 0,
        //             actions: [
        //                 NavigationActions.navigate({routeName:'Tab'})//要跳转到的页面名字
        //             ]
        //         });
        //         that.props.navigation.dispatch(resetAction);
        //
        //     }else{
        //         that.refs.toast.show(res.message);
        //     }
        // })
    }

        render() {
            var param=NavigationActions.setParams({
                params: {},
                key:'Home'
            });

        return (
            <View style={styles.container}>
                <Image style={styles.circleImage} source={require('../image/logo.png')}/>
                <Text style={{fontSize:px2dp(18),marginBottom:49,fontColor:'#4E4E4E'}}>用心服务，美好生活</Text>
                <View style={{position:'absolute',top:50,right:20,width:60,height:30,backgroundColor:'#eaeaea',justifyContent:'center',textAlign: 'center'}}>
                    <Text style={{textAlign:'center'}}>{this.state.seconds}秒</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        //设置次轴的对齐方式
        alignItems: 'center',
        backgroundColor:'white',
        justifyContent:'center',
        position:'relative'
    },
    circleImage: {
        width: 68,
        height: 68,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: 'white',
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