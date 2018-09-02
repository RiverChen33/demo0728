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

export default class JianChaDian extends Component {
    static navigationOptions = {
        headerTitle: '检查点',
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
            detail: {id: '201', class: '楼内楼梯扶手、栏杆、窗台楼内楼梯扶手、栏杆、窗台楼内楼梯扶手、梯扶手、栏杆、窗台楼内楼梯扶手、梯扶手、栏杆、窗台楼内楼梯扶手、栏杆、窗台',desc:'问题', date: '2018-01-05', status: '整改中',
                list:[{status:'提出更改',desc:'问题',time:'2018-05-02'},
                    {status:'通知验收',desc:'问题',time:'2018-05-03'}],
            grade:-2,
                times:1
            }
        }
    }

    render() {
        // alert(this.props.navigation.state.params.id);
        return (
            <View style={{flex:1}}>
                <ScrollView style={{flex:1}}>
                    <View style={{backgroundColor:'white',paddingRight:10,paddingLeft:10,marginBottom:10,flexDirection:'row'}}>
                        <View style={{flex:1,paddingTop:10,paddingRight:10}}>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate("CheckDetail")}>
                                <View style={{flex:1,justifyContent:'center',}}>
                                    <Text style={{color:'#929292',fontSize:16}}>{this.state.detail.class}</Text>
                                </View>
                                <View style={{height:40,justifyContent:'flex-start',color:'#929292',fontSize:14,flexDirection:"row"}}>
                                    <Text style={{color:'#929292',fontSize:14,alignSelf:'center',paddingRight:5}}>{this.state.detail.grade}分</Text>
                                    <Text style={{color:'#929292',fontSize:14,borderStyle:'solid',borderWidth:1,borderColor:'#929292',width:20,height:20,borderRadius:20,alignSelf:'center',paddingLeft:3}}>
                                        x{this.state.detail.times}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{width:35,justifyContent:'center'}}>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate("KaoPinKouFen")}>
                                <Image style={{width:30,height:30}} source={require('../../../image/record.png')}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
                <View style={{height:40,width:width,justifyContent:'center',flexDirection:"row"}}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate("ZhengGaiYanShou")} style={{flexDirection:'row',justifyContent:'center',flex:1}}>
                        <View style={{height:40,justifyContent:'center',backgroundColor:'white',flex:1}}>
                            <Text style={{color:'#4083FF',alignSelf:'center'}}>考评</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate("ZhengGaiYanShou")} style={{flexDirection:'row',justifyContent:'center',flex:1}}>
                        <View style={{height:40,justifyContent:'center',backgroundColor:'#4083FF',flex:1}}>
                            <Text style={{color:'white',alignSelf:'center'}}>提出整改</Text>
                        </View>
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