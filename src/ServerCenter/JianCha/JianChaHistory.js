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

export default class JianChaHistory extends Component {

    static navigationOptions = (props)=> {
        return {
            headerTitle: '品质检查记录',
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
            <ScrollView style={{flex:1}}>
                <View style={{backgroundColor:'white',paddingRight:10,paddingLeft:10,marginBottom:10}}>
                    <View style={{height:40,justifyContent:'center',fontSize:16}}>
                        <Text style={{fontSize:16,lineHeight:30,fontWeight:'600'}}>检查点：{this.state.detail.status}</Text>
                    </View>
                <FlatList
                    extraData={this.state}
                    data={this.state.detail.list}
                    renderItem={({item,index}) =>
                    <View style={styles.container}>
                        <View style={{flex:5,flexDirection:'row'}}>
                            <View style={{flexDirection:'row',height:30}}>
                                <Text style={{fontSize:14,lineHeight:30,width:60,color:'#929292'}}>{item.status}</Text>
                            </View>
                            <View style={{flexDirection:'row',height:30,alignContent:'center'}}>
                                <Text style={{textAlign:'center',color:'red',height:20,borderRadius:5,borderWidth:1,borderColor:'red',borderStyle:'solid'}}>{item.status}</Text>
                            </View>
                        </View>
                        <View style={{justifyContent:'center',paddingBottom:15}}>
                            <Text style={{textAlign:'left',color:'#929292',fontSize:14}}>检查人：{item.time}</Text>
                        </View>
                    </View>}
                />
                </View>
            </ScrollView>
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