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

export default class PaiGongSelectPeople extends Component {

    static navigationOptions = (props)=> {
        return {
            headerTitle: '选择处理人',
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
            <View style={{flex:1,position:'relative'}}>
                <FlatList
                    extraData={this.state}
                    data={this.state.list}
                    renderItem={({item,index}) =>
                    <TouchableOpacity onPress={()=>{this.props.navigation.state.params.returnData('123', item.class);this.props.navigation.goBack();}}>
                        <View style={styles.container}>
                            <View style={{flex:5}}>
                                <View style={{flexDirection:'row',height:40}}>
                                    <Text style={{fontSize:16,lineHeight:40,color:'#383838'}}>{item.class}</Text>
                                </View>
                            </View>
                            <View style={{width:65,justifyContent:'center'}}>
                                <Image style={{width:16,height:16,alignSelf:'flex-end'}} source={require('../../../image/arrow.png')}/>
                            </View>
                        </View>
                    </TouchableOpacity>
                        }
                />
            </View>
        );
    };
}


const styles=StyleSheet.create({
    title:{
        fontSize:18,
        color:'black'
    },
    container:{
        borderBottomWidth:1,
        borderColor:'#eee',
        flexDirection:'row',
        flex:4,
        paddingLeft:10,
        paddingRight:10,




        backgroundColor:'white'
    }
})