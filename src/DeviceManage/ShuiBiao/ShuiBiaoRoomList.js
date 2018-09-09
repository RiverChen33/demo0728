import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView,FlatList,Image,TouchableOpacity,TextInput
} from 'react-native';
import px2dp from '../../util';
import { NavigationActions } from 'react-navigation';
import FetchUtil from "../../util/FetchUtil";
import AppJson from "../../../app.json"
import Toast from 'react-native-easy-toast';


var dimensions = require('Dimensions');
//获取屏幕的宽度
var {width} = dimensions.get('window');

export default class ShuiBiaoRoomList extends Component {
    static navigationOptions = (props)=> {
        return {
            headerTitle: '抄水表',
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
            id:this.props.navigation.state.params.id,
            list: [],
            key:'',
            isRefresh:false,
            pageNo:1,
            isLoadMore:false
        }
    }

    componentDidMount(){
        let that=this;
        FetchUtil.postForm(AppJson.url+"/app/room/room/v1/list",{buildingId:this.state.id},(responseJSON)=>{
            if(responseJSON.code==200){//成功
                that.setState({list:responseJSON.data.records});
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

    render() {
        return (
            <View style={{flex:1}}>
                <View style={{height:50,backgroundColor:'white',paddingLeft:10,paddingRight:10,justifyContent:'center',width:width}}>
                    <View style={{height:35,backgroundColor:'white',borderColor:'#eee',borderWidth:1,borderStyle:'solid',borderRadius:5,flexDirection:'row',justifyContent:'center'}}>
                        <TextInput style={{alignSelf:'center',height:40,flex:1,fontSize:px2dp(12),fontColor:'#CECECE'}} placeholder={'请输入房间号'} underlineColorAndroid='transparent' onChangeText={(text)=>this.setState({key:text})}/>
                        <TouchableOpacity onPress={()=>this.search()} style={{width:40,justifyContent:'center',paddingLeft:5,marginBottom:8,marginTop:8,borderColor:'#eee',borderLeftWidth:1,borderStyle:'solid',}}>
                            <Text style={{alignSelf:'center',fontSize:12,color:'#4083FF'}}>搜索</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex:1,position:'relative',marginTop:10}}>
                    <FlatList
                        style={{flex:1,position:'relative'}}
                        // 空布局
                        ListEmptyComponent={this._createEmptyView}
                        //添加头尾布局
                        // ListHeaderComponent={this._createListHeader}
                        // ListFooterComponent={this._createListFooter}
                        //加载更多
                        onEndReached={() => this._onLoadMore()}
                        onEndReachedThreshold={0.1}
                        extraData={this.state}
                        data={this.state.list}
                        onRefresh={() => this._onRefresh()}
                        refreshing={this.state.isRefresh}
                        renderItem={({item,index}) =>
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate("ShuiBiaoDetail",{buildingId:this.state.id,roomId:item.id});}}>
                            <View style={styles.container}>
                                <View style={{flex:5}}>
                                    <View style={{flexDirection:'row',height:40}}>
                                        <Text style={{fontSize:16,lineHeight:40,color:'#383838'}}>{item.roomNo}</Text>
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
                <Toast ref="toast" opacity={0.8}
                       position='top'
                       positionValue={300}
                       fadeInDuration={750}
                       fadeOutDuration={2000}/>
            </View>
        );
    };
    /**
     * 创建头部布局
     */
    _createListHeader(){
        return (
            <View >
                <Text style={{color:'white'}}>
                    头部布局
                </Text>
            </View>
        )
    }

    /**
     * 创建头部布局
     */
    _createListFooter(){
        return (
            <View style={{width:width,textAlign:'center',height:30}}>
                <Text style={{color:'#565656',alignSelf:'center',lineHeight:30}}>
                    数据加载中...
                </Text>
            </View>
        )
    }

    /**
     * 空布局
     */
    _createEmptyView(){
        return (
            <View style={{height:'100%', alignItems:'center', justifyContent:'center'}}>
                <Text style={{fontSize:16}}>
                    暂无列表数据，下拉刷新
                </Text>
            </View>
        );
    }

    search=()=>{
        let key=this.state.key;
        let list=this.state.list;
        let that=this;
        FetchUtil.postForm(AppJson.url+"/app/room/room/v1/list",{code:key,buildingId:this.state.id},(responseJSON)=>{
            if(responseJSON.code==200){//成功
                that.setState({
                    list:responseJSON.data.records
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

        FetchUtil.postForm(AppJson.url+"/app/room/room/v1/list",{buildingId:this.state.id},(responseJSON)=>{
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

    _onLoadMore() {
        if (!this.state.isLoadMore && this.state.list.length > 0){
            let key=this.state.key;
            let that=this;
            FetchUtil.postForm(AppJson.url+"/app/room/room/v1/list",{buildingId:this.state.id,code:key,pageNo:++this.state.pageNo},(responseJSON)=>{
                    if(responseJSON.code==200){//成功
                    that.setState({
                        list:this.state.list.concat(responseJSON.data.records),
                        isLoadMore:false
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
    }
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