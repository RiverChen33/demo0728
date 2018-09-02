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

export default class CheckDetail extends Component {
    static navigationOptions = {
        headerTitle: '扣分记录',
        gestureResponseDistance: {horizontal: 300},
        headerBackTitle: null,
        headerStyle: {backgroundColor: '#4083FF',height:60},//导航栏的样式
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
                        <Text style={{fontSize:16,fontWeight:'600'}}>{this.state.detail.class}</Text>
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
                </View>
            </ScrollView>
                <View style={{height:40,width:width,justifyContent:'center',backgroundColor:'#4083FF'}}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate("KaoPinKouFen")} style={{flexDirection:'row',justifyContent:'center'}}>
                    <Text style={{color:'white'}}>记录</Text>
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