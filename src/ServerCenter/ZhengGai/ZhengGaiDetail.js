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

export default class ZhengGaiDetail extends Component {
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
                    <View style={{height:40,justifyContent:'center',borderStyle:'solid',borderBottomWidth:1,borderBottomColor:"#c9c9c9"}}>
                        <Text style={{fontSize:16,fontWeight:'600'}}>{this.state.detail.class}</Text>
                    </View>
                    <View style={{height:40,justifyContent:'center',}}>
                        <Text style={{color:'#929292',fontSize:14}}>整改说明：{this.state.detail.desc}</Text>
                    </View>
                    { this.state.detail.images.length ==0 ? null :
                        <View style={{height:70,justifyContent:'center',}}>
                            <FlatList
                                horizontal={true}
                                data={this.state.detail.images}
                                extraData={this.state}
                                renderItem={({item}) =>
                                    <View style={{width:70,height:70,marginLeft:10,position:'relative',flexDirection:'row'}}>
                                        <Image style={{width:70,height:70}} source={item} />
                                    </View>
                                }
                            />
                    </View>
                    }

                    <View style={{height:40,justifyContent:'center',color:'#929292',fontSize:14}}>
                        <Text style={{color:'#929292',fontSize:14}}>整改期限：{this.state.detail.date}</Text>
                    </View>
                </View>
                <View style={{backgroundColor:'white',paddingRight:10,paddingLeft:10,marginBottom:10}}>
                    <View style={{height:40,justifyContent:'center',fontSize:16}}>
                        <Text style={{fontSize:16,lineHeight:30,color:'green',}}>当前状态：{this.state.detail.status}</Text>
                    </View>
                <FlatList
                    extraData={this.state}
                    data={this.state.detail.list}
                    renderItem={({item,index}) =>
                    <View style={styles.container}>
                        <View style={{flex:5}}>
                            <View style={{flexDirection:'row',height:30}}>
                                <Text style={{fontSize:14,lineHeight:30,width:60,color:'#929292'}}>{item.status}</Text>
                            </View>
                            <View style={{flexDirection:'row',height:30,alignContent:'center'}}>
                                <Text style={{fontSize:14,lineHeight:30,width:180,color:'#565656'}}>{item.desc}</Text>
                            </View>
                        </View>
                        <View style={{width:85,justifyContent:'center'}}>
                            <Text style={{textAlign:'center',color:'#929292',fontSize:14}}>{item.time}</Text>
                        </View>
                    </View>}
                />
                </View>
            </ScrollView>
                <View style={{height:40,width:width,justifyContent:'center',backgroundColor:'#4083FF'}}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate("ZhengGaiYanShou")} style={{flexDirection:'row',justifyContent:'center'}}>
                    <Text style={{color:'white'}}>通知验收</Text>
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