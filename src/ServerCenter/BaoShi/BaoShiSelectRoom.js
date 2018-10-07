import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView,FlatList,Image,TouchableOpacity,TextInput
} from 'react-native';
var dimensions = require('Dimensions');
//获取屏幕的宽度
var {width} = dimensions.get('window');
import px2dp from '../../util';
import FetchUtil from "../../util/FetchUtil";
import AppJson from "../../../app.json"
import Toast from 'react-native-easy-toast';
import { NavigationActions } from 'react-navigation';

export default class BaoShiSelectRoom extends Component {

    static navigationOptions = (props)=> {
        return {
            headerTitle: '选择房间',
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

    constructor(props) {
        super(props);
        this.state = {
            list: [{id: '201', class: '楼内楼梯扶手、栏杆、窗台', date: '2018-01-05', status: '整改中'},
                {id: '202', class: '楼内楼梯扶手、栏杆、窗台', desc: '环境问题', date: '2018-01-05', status: '整改中'},
                {id: '203', class: '环境投诉', desc: '环境问题', date: '2018-01-05', status: '验收通过'},
                {id: '203', class: '环境投诉', desc: '环境问题', date: '2018-01-05', status: '验收通过'},
                {id: '203', class: '环境投诉', desc: '环境问题', date: '2018-01-05', status: '验收通过'},
                {id: '203', class: '环境投诉', desc: '环境问题', date: '2018-01-05', status: '验收通过'},
                {id: '203', class: '环境投诉', desc: '环境问题', date: '2018-01-05', status: '验收通过'},
                {id: '203', class: '环境投诉', desc: '环境问题', date: '2018-01-05', status: '验收通过'},
                {id: '203', class: '环境投诉', desc: '环境问题', date: '2018-01-05', status: '验收通过'},
                {id: '204', class: '环境投诉', desc: '环境问题', date: '2018-01-05', status: '整改中'}],
            key:""
        }
    }

    render() {
        return (
            <View style={{flex:1,position:'relative'}}>
                <View style={{height:50,backgroundColor:'white',paddingLeft:10,paddingRight:10,justifyContent:'center',width:width}}>
                    <View style={{height:35,backgroundColor:'white',borderColor:'#eee',borderWidth:1,borderStyle:'solid',borderRadius:5,flexDirection:'row',justifyContent:'center'}}>
                        <TextInput style={{alignSelf:'center',height:40,flex:1,fontSize:px2dp(12),fontColor:'#CECECE'}} placeholder={'请输入房间关键字'} underlineColorAndroid='transparent' onChangeText={(text)=>this.setState({key:text})}/>
                        <TouchableOpacity onPress={()=>this.search()} style={{width:40,justifyContent:'center',paddingLeft:5,marginBottom:8,marginTop:8,borderColor:'#eee',borderLeftWidth:1,borderStyle:'solid',}}>
                            <Text style={{alignSelf:'center',fontSize:12,color:'#4083FF'}}>搜索</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <FlatList
                    extraData={this.state}
                    data={this.state.list}
                    renderItem={({item,index}) =>
                    <TouchableOpacity onPress={()=>{this.props.navigation.state.params.returnData('123', item.class);this.props.navigation.goBack();}}>
                        <View style={styles.container}>
                            <View style={{flex:5}}>
                                <View style={{flexDirection:'row',height:40}}>
                                    <Text style={{fontSize:16,lineHeight:40,color:'#383838'}}>{item.class}</Text>
                                </View>
                            </View>
                            <View style={{width:65,justifyContent:'center'}}>
                                <Image style={{width:16,height:16,alignSelf:'flex-end'}} source={require('../../../image/arrow.png')}/>
                            </View>
                        </View>
                    </TouchableOpacity>
                        }
                />
            </View>
        );
    };

    search=()=>{
        let key=this.state.key;
        let that=this;
        FetchUtil.postForm(AppJson.url+"/app/room/building/v1/list",{code:key},(responseJSON)=>{
            if(responseJSON.code==200){//成功
                that.setState({
                    list:responseJSON.data.records,
                    key:""
                });
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

    };


}


const styles=StyleSheet.create({
    title:{
        fontSize:18,
        color:'black'
    },
    container:{
        borderBottomWidth:1,
        borderColor:'#eee',
        flexDirection:'row',
        flex:4,
        paddingLeft:10,
        paddingRight:10,




        backgroundColor:'white'
    }
})