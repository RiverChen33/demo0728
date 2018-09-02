import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,ScrollView,FlatList,Image,StatusBar
} from 'react-native';

export default class allGD extends Component {
    render() {
        return (
            <ScrollView style={{backgroundColor:'#eaeaea',paddingBottom:20}}>
                <StatusBar
                    backgroundColor='#4083FF'
                    translucent={false}
                    hidden={false}
                    animated={true}
                />
                <FlatList
                    data={[{num: '201',class:'环境投诉',desc:'环境问题',location:'A幢-201',status:'已分派',time:'2018-12-12'},{num: '201',class:'环境投诉',desc:'环境问题',location:'A幢-201',status:'已分派',time:'2018-12-12'},{num: '201',class:'环境投诉',desc:'环境问题',location:'A幢-201',status:'已分派',time:'2018-12-12'},{num: '201',class:'环境投诉',desc:'环境问题',location:'A幢-201',status:'已分派',time:'2018-12-12'},{num: '201',class:'环境投诉',desc:'环境问题',location:'A幢-201',status:'已分派',time:'2018-12-12'},{num: '201',class:'环境投诉',desc:'环境问题',location:'A幢-201',status:'已分派',time:'2018-12-12'}]}
                    renderItem={({item}) =>
                        <View style={styles.container}>
                            <View style={{flex:5}}>
                                 <View style={{flexDirection:'row',height:30}}>
                                     <Text style={{fontSize:16,lineHeight:30,width:60,}}>{item.num}</Text>
                                     <Text style={{fontSize:14,lineHeight:30,width:80,}}>{item.class}</Text>
                                     <Text style={{fontSize:14,lineHeight:30,width:140,}}>描述：{item.desc}</Text>
                                 </View>
                                <View style={{flexDirection:'row',height:30}}>
                                    <Text style={{fontSize:14,lineHeight:30,width:180,}}>位置：{item.location}</Text>
                                </View>
                                <View style={{flexDirection:'row',height:30}}>
                                    <Text style={{fontSize:14,lineHeight:30,width:180,}}>{item.time}</Text>
                                </View>
                            </View>
                            <View style={{flex:1,justifyContent:'center',}}>
                                <Text style={{textAlign:'right'}}>已分配</Text>
                            </View>
                            <View style={{width:14,justifyContent:'center'}}>
                                <Image source={require('../../image/arrow.png')} style={{width:14,height:14}}></Image>
                            </View>
                        </View>}
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
        backgroundColor:'white'
    }
})

