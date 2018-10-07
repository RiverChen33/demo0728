import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView,FlatList,Image,TouchableOpacity
} from 'react-native';
import FetchUtil from "../util/FetchUtil";
import AppJson from "../../app";
import {NavigationActions} from "react-navigation";
import Toast from 'react-native-easy-toast';

var dimensions = require('Dimensions');
//获取屏幕的宽度
var {width} = dimensions.get('window');

export default class QianFei extends Component {
    static navigationOptions = (props)=> {
        return {
            headerTitle: '欠费管理',
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
                    <Image style={{width:25,height:25,marginLeft:10}} source={require('../../image/back-icon.png')}/>
                </TouchableOpacity>
            </View>
        }

    }

    constructor(props) {
        super(props);
        this.state = {
            list: [],
            selectAll:false,
            isRefresh:false,
            pageNo:1,
            isLoadMore:false
        }
    }


    render() {
        var list=this.state.list;

        return (
            <View style={{flex:1}}>
                    <FlatList
                        onRefresh={() => this._onRefresh()}
                        refreshing={this.state.isRefresh}
                        extraData={this.state}
                        data={list}
                        renderItem={({item,index}) =>
                            <View style={styles.container}>
                                <View style={{flex:5}}>
                                    <View style={{flexDirection:'row',height:30}}>
                                        <Text style={{fontSize:16,lineHeight:30,width:60,}}>{item.num}</Text>
                                        <Text style={{fontSize:14,lineHeight:30,width:80,}}>{item.class}</Text>
                                    </View>
                                    <View style={{flexDirection:'row',height:30,alignContent:'center'}}>
                                        <Image source={require('../../image/moneybag.png')} style={{width:20,height:20,alignSelf:'center'}}></Image>
                                        <Text style={{fontSize:14,lineHeight:30,width:180,}}>欠款金额：{item.location}</Text>
                                    </View>
                                </View>
                                <View style={{width:25,justifyContent:'center'}}>
                                    <TouchableOpacity onPress={()=>this.changeCheckStatus(index)}>
                                        <Image style={{width:20,height:20}} source={list[index].checkstatus?require('../../image/checked.png'):require('../../image/notchecked.png')}/>
                                    </TouchableOpacity>
                                </View>
                            </View>}
                    />
                <View style={{height:80,}}>
                    <View style={{width:width,justifyContent:'center',padding:10,alignItems:'flex-end'}}>
                        <TouchableOpacity onPress={()=>this.changeAllCheckStatus()}>
                            <Image style={{width:20,height:20}} source={this.state.selectAll?require('../../image/checked.png'):require('../../image/notchecked.png')}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1,width:width,justifyContent:'center',backgroundColor:'#4083FF'}}>
                        <TouchableOpacity onPress={()=>this.changeAllCheckStatus()} style={{flexDirection:'row',justifyContent:'center'}}>
                            <Image style={{width:20,height:20,alignSelf:'center'}} source={require('../../image/alarm.png')}/>
                            <Text style={{color:'white'}}>一键催缴</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Toast ref="toast" opacity={0.8}
                       position='top'
                       positionValue={300}
                       fadeInDuration={750}
                       fadeOutDuration={2000}/>
            </View>
        )
    };

    _onRefresh=()=>{
        // 不处于 下拉刷新
        if(!this.state.isRefresh){
            this.setState({
                isLoadMore:false,
                pageNo:1
            })
            this._onRefresh1()
        }
    };

    _onRefresh1() {
        let that=this;

        FetchUtil.postJSON(AppJson.url+"/app/service/v1/list",{},(responseJSON)=>{
            if(responseJSON.code==200){//成功
                that.setState({
                    list:responseJSON.data.records,
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
    }

       changeCheckStatus=(index)=>{
           let list=this.state.list;
           list[index].checkstatus=!list[index].checkstatus;
           this.setState({list:list});
       }
    changeAllCheckStatus=()=>{
        let status=this.state.selectAll;
        let list=this.state.list;
        status=!status;
        if(status){
            list.forEach((e)=>e.checkstatus=true);
        }else{
            list.forEach((e)=>e.checkstatus=false);
        }
        this.setState({
            list:list,
            selectAll:status
        });

    }
}


const styles=StyleSheet.create({
    title:{
        fontSize:18,
        color:'black'
    },
    container:{
        margin:10,
        borderWidth:1,
        borderColor:'#eee',
        borderRadius:5,
        flexDirection:'row',
        flex:4,
        paddingLeft:10,
        paddingRight:10,
        marginBottom:0,




        backgroundColor:'white'
    }
})