import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,ScrollView,FlatList,Image,StatusBar,TouchableOpacity
} from 'react-native';
import Toast from 'react-native-easy-toast';
import { NavigationActions } from 'react-navigation';
import FetchUtil from "../../util/FetchUtil";
import AppJson from "../../../app.json"

var dimensions = require('Dimensions');
//获取屏幕的宽度
var {width} = dimensions.get('window');
export default class XunJianList extends Component {

    static navigationOptions = (props)=> {
        return {
            headerTitle: '设备巡检',
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
        FetchUtil.postJSON(AppJson.url+"/app/equip/v1/list",{},(responseJSON)=>{
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
    }

    constructor(props) {
        super(props);
        this.state = {
            list: [{id: '201', class: '楼内楼梯扶手、栏杆、窗台', date: '2018-01-05', status: '考评中'},
                {id: '202', class: '楼内楼梯扶手、栏杆、窗台', desc: '环境问题', date: '2018-01-05', status: '整改中'},
                {id: '203', class: '环境投诉', desc: '环境问题', date: '2018-01-05', status: '验收通过'},
                {id: '203', class: '环境投诉', desc: '环境问题', date: '2018-01-05', status: '验收通过'},
                {id: '203', class: '环境投诉', desc: '环境问题', date: '2018-01-05', status: '验收通过'},
                {id: '203', class: '环境投诉', desc: '环境问题', date: '2018-01-05', status: '验收通过'},
                {id: '203', class: '环境投诉', desc: '环境问题', date: '2018-01-05', status: '验收通过'},
                {id: '203', class: '环境投诉', desc: '环境问题', date: '2018-01-05', status: '验收通过'},
                {id: '203', class: '环境投诉', desc: '环境问题', date: '2018-01-05', status: '验收通过'},
                {id: '204', class: '环境投诉', desc: '环境问题', date: '2018-01-05', status: '整改中'}],
            isRefresh:false,
            pageNo:1,
            isLoadMore:false
        }
    }

    render() {
        return (
            <View style={{flex:1}}>
            <View style={{flex:1,backgroundColor:'#eaeaea',paddingBottom:20}}>
                <FlatList
                    data={this.state.list}
                    extraData={this.state}
                    onEndReachedThreshold={0.1}
                    onRefresh={() => this._onRefresh()}
                    refreshing={this.state.isRefresh}
                    renderItem={({item}) =>
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate("XuanJianDetail",{id:item.id})}}>
                            <View style={styles.container}>
                                <View style={{flex:4}}>
                                    <View style={{flexDirection:'row',height:30}}>
                                        <Text style={{fontSize:16,lineHeight:30,fontWeight:'600',}}>{item.class}</Text>
                                    </View>
                                    <View style={{flexDirection:'row',height:30}}>
                                        <Text style={{fontSize:14,lineHeight:30}}>{item.class}</Text>
                                    </View>
                                    <View style={{flexDirection:'row',height:30}}>
                                        <Text style={{fontSize:14,lineHeight:30,color:'#929292'}}>位置：{item.date}</Text>
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
            <View style={{height:40,width:width,justifyContent:'center',flexDirection:"row"}}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("XuanJianDetail")} style={{flexDirection:'row',justifyContent:'center',flex:1}}>
                    <View style={{height:40,justifyContent:'center',backgroundColor:'#4083FF',flex:1,flexDirection:'row'}}>
                        <Image style={{width:30,height:30,alignSelf:'center',marginRight:10}} source={require('../../../image/qrcode.png')}/>
                        <Text style={{color:'white',alignSelf:'center'}}>扫码</Text>
                    </View>
                    </TouchableOpacity>
            </View>
                <Toast ref="toast" opacity={0.8}
                       position='top'
                       positionValue={300}
                       fadeInDuration={750}
                       fadeOutDuration={2000}/>
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

        FetchUtil.postJSON(AppJson.url+"/app/equip/v1/list",{},(responseJSON)=>{
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
        let key=this.state.key;
        let that=this;

        if (!this.state.isLoadMore && this.state.list.length > 0) {
            FetchUtil.postForm(AppJson.url + "/app/room/building/v1/list", {
                code: key,
                pageNo: ++this.state.pageNo
            }, (responseJSON) => {
                if (responseJSON.code == 200) {//成功
                    that.setState({
                        list: this.state.list.concat(responseJSON.data.records),
                    });
                } else if (responseJSON.code == 204001 || responseJSON.code == 204002) {
                    let resetAction = NavigationActions.reset({
                        index: 0,
                        actions: [
                            NavigationActions.navigate({routeName: 'LoginView'})//要跳转到的页面名字
                        ]
                    });
                    that.props.navigation.dispatch(resetAction);
                } else {
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

