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
                <View style={{paddingTop:30,backgroundColor:'white',textAlign:'center'}}>
                    <View style={{width:60,height:60,borderRadius:60,alignSelf:'center'}}>
                        <Image source={require('../image/logo.png')} style={styles.imgicon}/>
                    </View>
                        <Text style={{color:'#565656',paddingTop:10,paddingBottom:20,textAlign:'center',fontSize:18}}>Mr.River</Text>
                </View>
                <View style={{flexDirection:"row",paddingTop:10,paddingBottom:20,marginBottom:10,backgroundColor:'white'}}>
                    <View style={styles.item}>
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate("GDTab")}}>
                            <Image source={require('../image/ic_home.png')} style={styles.imgicon3}/>
                            <Text>工单记录</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.item}>
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Atention")}}>
                            <Image source={require('../image/ic_home.png')} style={styles.imgicon3}/>
                            <Text>评价</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.item}>
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Tab2")}}>
                            <Image source={require('../image/ic_home.png')} style={styles.imgicon3}/>
                            <Text>安全中心</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.item}>
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Atention")}}>
                            <Image source={require('../image/ic_home.png')} style={styles.imgicon3}/>
                            <Text>钥匙</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <FlatList
                    data={[{key: '帮助与支持',page:''},{key: '常见问题'},{key: '新手指引'}]}
                    renderItem={({item}) =>
                        <View style={{flexDirection:'row',backgroundColor:'white'}}>
                            <Image source={require('../image/ic_home.png')} style={styles.imgicon2}/>
                            <View style={{lineHeight:40,flex:1,borderBottomStyle:'solid',borderBottomWidth:1,borderBottomColor:'#eee',justifyContent:'center',color:'black',position:'relative'}}>
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
        borderColor:'#4077F8',
        alignSelf:'center'
    },
    loginText: {
        textAlign: 'center',
        color: '#4077F8',
        textAlignVertical: 'center',
        fontSize:14
    },
    imgicon:{
        width:60,height:60,
        alignSelf:'center',
        textAlign:'center',
        justifyContent:'center',
    },
    imgicon3:{
        width:30,height:30,
        alignSelf:'center',
        textAlign:'center',
        justifyContent:'center',
    },
    imgicon2:{
        width:30,height:30,
        alignSelf:'center',
        textAlign:'center',
        justifyContent:'center',
        margin:10,
        marginTop:5,marginBottom:5,
    },
    container: {
        backgroundColor:'#eaeaea'
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
        color: '#4083FF'
    },
    unselected: {
        marginLeft: 10,
        fontSize: 40,
        color: 'white'
    },
    item:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        position:'relative',
    },
});

module.exports = Mine;