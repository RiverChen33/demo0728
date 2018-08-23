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

export default class KaoPin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [{id: '201', class: '楼内楼梯扶手、栏杆、窗台', date: '2018-01-05', status: '整改中'},
                {id: '202', class: '楼内楼梯扶手、栏杆、窗台', desc: '环境问题', date: '2018-01-05', status: '整改中'},
                {id: '203', class: '环境投诉', desc: '环境问题', date: '2018-01-05', status: '验收通过'},
                {id: '203', class: '环境投诉', desc: '环境问题', date: '2018-01-05', status: '验收通过'},
                {id: '203', class: '环境投诉', desc: '环境问题', date: '2018-01-05', status: '验收通过'},
                {id: '203', class: '环境投诉', desc: '环境问题', date: '2018-01-05', status: '验收通过'},
                {id: '203', class: '环境投诉', desc: '环境问题', date: '2018-01-05', status: '验收通过'},
                {id: '203', class: '环境投诉', desc: '环境问题', date: '2018-01-05', status: '验收通过'},
                {id: '203', class: '环境投诉', desc: '环境问题', date: '2018-01-05', status: '验收通过'},
                {id: '204', class: '环境投诉', desc: '环境问题', date: '2018-01-05', status: '整改中'}]
        }
    }

    render() {
        return (
            <ScrollView style={{flex:1,position:'relative'}}>
                <FlatList
                    extraData={this.state}
                    data={this.state.list}
                    renderItem={({item,index}) =>
                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate("ZhengGaiDetail",{id:item.id})}}>
                        <View style={styles.container}>
                            <View style={{flex:5}}>
                                <View style={{flexDirection:'row',height:30}}>
                                    <Text style={{fontSize:16,lineHeight:30,width:60,fontWeight:'600'}}>{item.class}</Text>
                                </View>
                                <View style={{flexDirection:'row',height:30,alignContent:'center'}}>
                                    <Text style={{fontSize:14,lineHeight:30,width:180,}}>整改期限：{item.location}</Text>
                                </View>
                            </View>
                            <View style={{width:65,justifyContent:'center'}}>
                                <Text style={{textAlign:'center',color:'red',height:20,borderRadius:5,borderWidth:1,borderColor:'red',borderStyle:'solid'}}>{item.status}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                        }
                />
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
        borderWidth:1,
        borderColor:'#eee',
        borderRadius:5,
        flexDirection:'row',
        flex:4,
        paddingLeft:10,
        paddingRight:10,
        marginBottom:0,
        shadowOffset: {width: 0, height: 0},
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowRadius: 5,
        backgroundColor:'white'
    }
})