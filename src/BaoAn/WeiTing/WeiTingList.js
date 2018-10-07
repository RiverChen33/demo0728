import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,ScrollView,FlatList,Image,StatusBar,TouchableOpacity
} from 'react-native';
import FetchUtil from "../../util/FetchUtil";
import AppJson from "../../../app.json"
import Toast from 'react-native-easy-toast';
import { NavigationActions } from 'react-navigation';

var dimensions = require('Dimensions');
//获取屏幕的宽度
var {width} = dimensions.get('window');
export default class WeiTingList extends Component {

    static navigationOptions = (props)=> {
        return {
            headerTitle: '车辆违停',
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



    componentWillMount() {                    //通过setParams将increase方法绑定到_increase
        let that=this;
        FetchUtil.postJSON(AppJson.url+"/app/illegallyPark/v1/list",{},(responseJSON)=>{
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
            list: [],//{id: '201', name: '楼内楼梯扶手、栏杆、窗台'}
            key:'',
            isRefresh:false,
            pageNo:1,
            isLoadMore:false
        }
    }

    render() {
        return (
            <View style={{flex:1}}>
                <FlatList
                    style={{flex:1,backgroundColor:'#eaeaea',paddingBottom:20}}
                    onRefresh={() => this._onRefresh()}
                    refreshing={this.state.isRefresh}
                    data={this.state.list}
                    extraData={this.state}
                    renderItem={({item}) =>
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate("WeiTingDeal",{id:item.id})}}>
                            <View style={styles.container}>
                                <View style={{flex:4}}>
                                    <View style={{flexDirection:'row',height:30,justifyContent:'space-between'}}>
                                        <Text style={{fontSize:16,lineHeight:30,fontWeight:'600',color:'#4083FF'}}>违停车辆</Text>
                                        <Text style={{fontSize:14,lineHeight:30}}>{FetchUtil.toDateString(item.createTime)}</Text>
                                    </View>
                                    <View style={{flexDirection:'row',height:30}}>
                                        <Text style={{fontSize:14,lineHeight:30}}>车牌号：{item.carNo}</Text>
                                    </View>
                                    <View style={{flexDirection:'row',height:30}}>
                                        <Text style={{fontSize:14,lineHeight:30}}>车主：{item.carOwner}</Text>
                                    </View>
                                    <View style={{flexDirection:'row',height:30}}>
                                        <Text style={{fontSize:14,lineHeight:30,color:'#929292'}}>电话：{item.carPhone}</Text>
                                    </View>
                                </View>
                                {/*<View style={{width:65,justifyContent:'center'}}>*/}
                                    {/*<Image style={{width:16,height:16,alignSelf:'flex-end'}} source={require('../../../image/arrow.png')}/>*/}
                                {/*</View>*/}
                            </View>
                        </TouchableOpacity>
                            }
                />
                <View style={{height:40,width:width,justifyContent:'center',flexDirection:"row"}}>
                    <TouchableOpacity onPress={this.add.bind(this)} style={{flexDirection:'row',justifyContent:'center',flex:1}}>
                        <View style={{height:40,justifyContent:'center',backgroundColor:'#4083FF',flex:1,flexDirection:'row'}}>
                            <Text style={{color:'white',alignSelf:'center'}}>添加违停</Text>
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
    };
    returnData(id) {
        this._onRefresh1();
    }

    add=()=>{
        this.props.navigation.navigate("WeiTingAdd",{returnData: this.returnData.bind(this)})
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

        FetchUtil.postJSON(AppJson.url+"/app/illegallyPark/v1/list",{},(responseJSON)=>{
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

