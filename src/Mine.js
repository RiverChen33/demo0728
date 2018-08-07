/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 *
 * 使用ScrollView 打造一个Banner
 *
 * 1.安装第三放类库 npm react-time-mixin --save
 */

import React, {Component} from 'react';
import {
    View,
    ScrollView,
    StyleSheet,
    Image,
    Text,
    FlatList,TouchableOpacity
} from 'react-native';
import px2dp from './util';
import Icon from 'react-native-vector-icons/Ionicons'

//屏幕信息
var dimensions = require('Dimensions');
//获取屏幕的宽度和高度
var {width,height} = dimensions.get('window');

class Mine extends Component {
    //绘制完成，开启定时器
    componentDidMount() {

    }
    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={{paddingTop:30,backgroundColor:'green',textAlign:'center'}}>
                    <Image source={require('../image/logo.png')} style={styles.imgicon}/>
                    <Text style={{color:'white',paddingTop:10,paddingBottom:20,textAlign:'center',fontSize:18}}>Mr.River</Text>
                </View>
                <FlatList
                    data={[{key: '培训',num:20,time:'2018-07-18'},{key: '培训',num:20,time:'2018-07-18'},{key: '培训',num:20,time:'2018-07-18'}]}
                    renderItem={({item}) =>
                        <View style={{flexDirection:'row'}}>
                            <Image source={require('../image/ic_home.png')} style={styles.imgicon2}/>
                            <View style={{lineHeight:30,flex:1,borderBottomStyle:'solid',borderBottomWidth:1,borderBottomColor:'#c3c3c3',justifyContent:'center',color:'black',position:'relative'}}>
                                <Text>{item.key}</Text>
                                <Image source={require('../image/arrow.png')} style={{position:'absolute',right:10,width:18,height:18}}/>
                            </View>
                        </View>}
                />
                <TouchableOpacity style={styles.btnStyle} onPress={()=>{this.props.navigation.navigate("Tab")}}>
                    <Text style={styles.loginText}>退出登录</Text>
                </TouchableOpacity>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    btnStyle: {
        height: 40,
        width: width - 32,
        borderRadius: 5,
        marginTop: 20,
        backgroundColor: 'white',
        justifyContent: 'center',
        borderWidth:1,
        borderStyle:'solid',
        borderColor:'green',
        borderRadius:5,
        alignSelf:'center'
    },
    loginText: {
        textAlign: 'center',
        color: 'green',
        textAlignVertical: 'center',
    },
    imgicon:{
        width:60,height:60,
        alignSelf:'center',
        textAlign:'center',
        justifyContent:'center',
        borderRadius:60
    },
    imgicon2:{
        width:30,height:30,
        alignSelf:'center',
        textAlign:'center',
        justifyContent:'center',
        borderRadius:30,
        margin:10,
        marginTop:5,marginBottom:5
    },
    container: {
        backgroundColor:'white'
    },
    //底部指示器的样式
    indicator: {
        width: width,
        height: 40,
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: width,
        height: 240,
    },
    selected: {
        marginLeft: 10,
        fontSize: 40,
        color: '#5CB85C'
    },
    unselected: {
        marginLeft: 10,
        fontSize: 40,
        color: 'white'
    }
});

module.exports = Mine;