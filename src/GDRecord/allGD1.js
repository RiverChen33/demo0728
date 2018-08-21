import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,ScrollView,FlatList
} from 'react-native';

export default class allGD1 extends Component {
    render() {
        return (
            <ScrollView style={{backgroundColor:'white'}}>
                <FlatList
                    data={[{num: '201',class:'环境投诉',desc:'环境问题',location:'A幢-201',status:'已分派',time:'2018-12-12'}]}
                    renderItem={({item}) =>
                        <View style={{margin:10,borderWidth:1,borderColor:'#c3c3c3',borderRadius:5,flexDirection:'row',flex:4}}>
                            <View>
                                 <View style={{flexDirection:'row'}}>
                                     <Text style={{fontSize:16}}>{item.num}</Text>
                                 </View>
                            </View>
                            <View style={{flex:1,justifyContent:'center'}}>
                                <Text>已分配</Text>
                            </View>
                        </View>}
                />

            </ScrollView>
        )
    };
}