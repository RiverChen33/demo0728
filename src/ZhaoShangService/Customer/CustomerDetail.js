import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView,FlatList,Image,TouchableOpacity
} from 'react-native';
var dimensions = require('Dimensions');
//获取屏幕的宽度
var {width} = dimensions.get('window');

export default class CustomerDetail extends Component {
    static navigationOptions = (props)=> {
        return {
            headerTitle: '客户详情',
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
            detail: {id: '201', class: '楼内楼梯扶手、栏杆、窗台',desc:'问题', date: '2018-01-05', status: '整改中',
                list:[{status:'提出更改',desc:'问题',time:'2018-05-02'},
                    {status:'通知验收',desc:'问题',time:'2018-05-03'}],
            images:[]
            }
        }
    }

    render() {
        // alert(this.props.navigation.state.params.id);
        return (
            <View style={{flex:1}}>
            <ScrollView style={{flex:1}}>
                <View style={{backgroundColor:'white',paddingRight:10,paddingLeft:10,margin:10,height:100,justifyContent:'center',borderRadius:5}}>
                    <View style={{flexDirection:'row',alignItems:'center',paddingBottom:15}}>
                        <Text style={{fontSize:16,fontWeight:'600',paddingRight:15}}>老王</Text>
                        <Text style={{fontSize:12,color:'#929292',alignSelf:'center'}}>普通违约1次|普通违约1次|普通违约1次</Text>
                    </View>
                    <Text style={{fontSize:14,textAlign:'left',color:'white',height:20,backgroundColor:'#4083FF',alignSelf:'flex-start',marginLeft:5}}>个人</Text>
                </View>
                <View style={{backgroundColor:'white',paddingRight:10,paddingLeft:10,marginBottom:10}}>
                    <View style={{height:40,justifyContent:'center'}}>
                        <Text style={{fontSize:16,fontWeight:'600'}}>基础资料</Text>
                    </View>
                    <View style={{height:40,justifyContent:'center',}}>
                        <Text style={{color:'#929292',fontSize:14}}>手机：{this.state.detail.desc}</Text>
                    </View>
                    <View style={{height:40,justifyContent:'center',color:'#929292',fontSize:14}}>
                        <Text style={{color:'#929292',fontSize:14}}>邮箱：{this.state.detail.date}</Text>
                    </View>
                    <View style={{height:40,justifyContent:'center',}}>
                        <Text style={{color:'#929292',fontSize:14}}>地址：{this.state.detail.desc}</Text>
                    </View>
                    <View style={{height:40,justifyContent:'center',color:'#929292',fontSize:14}}>
                        <Text style={{color:'#929292',fontSize:14}}>详情：{this.state.detail.date}</Text>
                    </View>
                </View>
                <View style={{backgroundColor:'white',margin:5,height:40,justifyContent:'center',borderRadius:5,flexDirection:'row'}}>
                    <Text style={{color:'#565656',fontSize:14,flex:1,alignSelf:'center'}}>合同信息（1）</Text>
                    <Text style={{color:'#565656',fontSize:14,flex:1,alignSelf:'center'}}>合同信息（1）</Text>
                    <Text style={{color:'#565656',fontSize:14,flex:1,alignSelf:'center'}}>合同信息（1）</Text>
                    <Text style={{color:'#565656',fontSize:14,flex:1,alignSelf:'center'}}>合同信息（1）</Text>
                </View>
            </ScrollView>
                <View style={{height:40,width:width,justifyContent:'center',backgroundColor:'#4083FF'}}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate("CustomerAdd")} style={{flexDirection:'row',justifyContent:'center'}}>
                    <Text style={{color:'white'}}>修改信息</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    };
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
    }
})