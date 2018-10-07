import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView,FlatList,Image,TouchableOpacity,TextInput

} from 'react-native';
import px2dp from '../../util';
import AwesomeAlert from 'react-native-awesome-alerts';
import AppJson from "../../../app.json"
import Toast from 'react-native-easy-toast';
import { NavigationActions } from 'react-navigation';
import FetchUtil from "../../util/FetchUtil";

var dimensions = require('Dimensions');
//获取屏幕的宽度
var {width,height} = dimensions.get('window');

export default class DianBiaoDetail extends Component {
    static navigationOptions = (props)=> {
        return {
            headerTitle: '抄电表',
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
                    <Image style={{width:25,height:25,marginLeft:10}} source={require('../../../image/back-icon.png')}/>
                </TouchableOpacity>
            </View>
        }

    }

    componentDidMount(){
        let that=this;
        FetchUtil.postForm(AppJson.url+"/app/meterRecord/v1/detail",{roomId:this.state.roomId,type:1},(responseJSON)=>{
            if(responseJSON.code==200){//成功
                that.setState({detail:responseJSON.data});
            }else if(responseJSON.code==204001||responseJSON.code==204002){
                let resetAction = NavigationActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({routeName:'LoginView'})//要跳转到的页面名字
                    ]
                });
                that.props.navigation.dispatch(resetAction);
            }else{
                that.refs.toast.show(responseJSON.message);
            }
        })
    }

    constructor(props) {
        super(props);
        this.state = {
            roomId:this.props.navigation.state.params.roomId,
            buildingId:this.props.navigation.state.params.buildingId,
            detail: {},
            num:0,
        }
    }

    render() {
        return (
            <View style={{flex:1}}>
                <ScrollView style={{flex:1}}>
                    <View style={{backgroundColor:'white',paddingRight:10,paddingLeft:10,marginBottom:10}}>
                        <View style={{height:40,justifyContent:'center'}}>
                            <Text style={{fontSize:16,fontWeight:'600'}}>{this.state.detail.roomName}</Text>
                        </View>
                        <View style={{height:40,justifyContent:'center',}}>
                            <Text style={{color:'#929292',fontSize:14}}>{this.state.detail.desc}</Text>
                        </View>
                        <View style={{height:40,justifyContent:'center',color:'#929292',fontSize:14}}>
                            <Text style={{color:'#929292',fontSize:14}}>上次读数：{this.state.detail.lastNum}</Text>
                        </View>
                        <View style={{height:40,justifyContent:'center',color:'#929292',fontSize:14}}>
                            <Text style={{color:'#929292',fontSize:14}}>本次读数：{this.state.detail.nowNum}</Text>
                        </View>
                    </View>
                    <View style={{backgroundColor:'white',paddingRight:10,paddingLeft:10,marginBottom:10}}>
                        <View style={{height:40,justifyContent:'center',color:'#929292',fontSize:14,flexDirection:'row',alignItems:'center'}}>
                            <Text style={{color:'#929292',fontSize:14}}>抄表读数：</Text>
                            <TextInput style={{alignSelf:'center',height:40,flex:1,fontSize:px2dp(12),fontColor:'#CECECE'}} placeholder={'请输入抄表读数'} underlineColorAndroid='transparent' onChangeText={(text)=>this.setState({num:text})}/>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.btnStyle} onPress={this.Submit.bind(this)}>
                        <Text style={styles.loginText}>提交</Text>
                    </TouchableOpacity>

                </ScrollView>
                <Toast ref="toast" opacity={0.8}
                       position='top'
                       positionValue={300}
                       fadeInDuration={750}
                       fadeOutDuration={2000}/>
            </View>
        )
    };
    Submit(){
        let that=this;

        if(!!!this.state.num){
            that.refs.toast.show("抄表读数不能为空");
            return;
        }else{
            if(+this.state.num<=0){
                that.refs.toast.show("抄表读数应大于0");
                return;
            }
        }

        FetchUtil.postJSON(AppJson.url+"/app/meterRecord/v1/save",{roomId:this.state.roomId,type:1,num:this.state.num},(responseJSON)=>{
            if(responseJSON.code==200){//成功
                that.refs.toast.show("提交成功");
                setTimeout(()=>{
                    that.props.navigation.goBack();
                },AppJson.jumpSec);
            }else if(responseJSON.code==204001||responseJSON.code==204002){
                let resetAction = NavigationActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({routeName:'LoginView'})//要跳转到的页面名字
                    ]
                });
                that.props.navigation.dispatch(resetAction);
            }else{
                that.refs.toast.show(responseJSON.message);
            }
        })
    }
}

const styles=StyleSheet.create({
    title:{
        fontSize:18,
        color:'black'
    },
    container:{
        margin:10,
        flexDirection:'row',
        flex:1,
        paddingLeft:10,
        paddingRight:10,
        marginBottom:0,
        backgroundColor:'white',
        borderBottomColor:'#c9c9c9',
        borderBottomWidth:1,
        borderStyle:'solid'
    },
    btnStyle: {
        height: 50,
        width: width - 40,
        borderRadius: 5,
        marginTop: 11,
        marginBottom: 11,
        backgroundColor: '#4077F8',
        justifyContent: 'center',
        alignSelf:'center'
    },
    loginText: {
        textAlign: 'center',
        color: 'white',
        textAlignVertical: 'center',
        fontSize:px2dp(16),
    },
})