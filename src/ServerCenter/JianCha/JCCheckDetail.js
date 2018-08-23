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

export default class JCCheckDetail extends Component {
    static navigationOptions = {
        headerTitle: '品质检查详情',
        gestureResponseDistance: {horizontal: 300},
        headerBackTitle: null,
        headerStyle: {backgroundColor: '#4083FF',height:50},//导航栏的样式
        headerTitleStyle: {
            color: 'white',
            //设置标题的大小
            fontSize: 16,
            //居中显示
            alignSelf: 'center',
            textAlign:'center',
        },
        headerRight:<View/>,
        // headerLeft:<View/>,
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
                <View style={{backgroundColor:'white',paddingRight:10,paddingLeft:10,marginBottom:10}}>
                    <View style={{height:40,justifyContent:'center'}}>
                        <Text style={{fontSize:16,fontWeight:'600'}}>检查点：{this.state.detail.class}</Text>
                    </View>
                    <View style={{height:40,justifyContent:'center',}}>
                        <Text style={{color:'#929292',fontSize:14}}>专业：{this.state.detail.desc}</Text>
                    </View>
                    <View style={{height:40,justifyContent:'center',color:'#929292',fontSize:14}}>
                        <Text style={{color:'#929292',fontSize:14}}>检查项：{this.state.detail.date}</Text>
                    </View>
                </View>
                <View style={{backgroundColor:'white',paddingRight:10,paddingLeft:10,marginBottom:10}}>
                    <View style={{height:40,justifyContent:'center',}}>
                        <Text style={{color:'#929292',fontSize:14}}>质量绩效指标：{this.state.detail.desc}</Text>
                    </View>
                    <View style={{height:40,justifyContent:'center',color:'#929292',fontSize:14}}>
                        <Text style={{color:'#929292',fontSize:14}}>检查方法：{this.state.detail.date}</Text>
                    </View>
                    <View style={{height:40,justifyContent:'center',color:'#929292',fontSize:14}}>
                        <Text style={{color:'#929292',fontSize:14}}>检查周期：{this.state.detail.date}</Text>
                    </View>
                </View>

                <TouchableOpacity onPress={()=>this.props.navigation.navigate("JianChaHistory")} style={{width:width,height:40,alignItems:'center',justifyContent:'center',flex:1,alignSelf:'center',backgroundColor:'white'}}>
                    <Text style={{color:'#4083FF',fontSize:14}}>查看历史记录</Text>
                </TouchableOpacity>
            </ScrollView>
                <View style={{height:40,width:width,justifyContent:'center',flexDirection:'row'}}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate("JianChaClose")} style={{height:40,justifyContent:'center',flex:1,alignItems:'center',borderRightWidth:1,borderColor:'#eee',borderStyle:'solid',backgroundColor:'white'}}>
                        <Text style={{color:'#4083FF',fontSize:10}}>无法检查</Text>
                        <Text style={{color:'#4083FF',fontSize:10}}>(关闭此任务)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate("JianChaZhengGai")} style={{height:40,alignItems:'center',justifyContent:'center',flex:1,alignSelf:'center',backgroundColor:'white'}}>
                        <Text style={{color:'#4083FF',fontSize:14}}>整改</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate("JianChaHeGe")} style={{height:40,alignItems:'center',justifyContent:'center',flex:1,alignSelf:'center',backgroundColor:'#4083FF'}}>
                        <Text style={{color:'white',fontSize:14}}>合格</Text>
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
        shadowOffset: {width: 0, height: 0},
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowRadius: 5,
        backgroundColor:'white',
        borderBottomColor:'#c9c9c9',
        borderBottomWidth:1,
        borderStyle:'solid'
    }
})