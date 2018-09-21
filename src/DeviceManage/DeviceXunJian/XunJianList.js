import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,ScrollView,FlatList,Image,StatusBar,TouchableOpacity
} from 'react-native';
var dimensions = require('Dimensions');
//获取屏幕的宽度
var {width} = dimensions.get('window');
export default class XunJianList extends Component {

    static navigationOptions = (props)=> {
        return {
            headerTitle: '设备巡检',
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

    componentWillMount() {                    //通过setParams将increase方法绑定到_increase
    }

    constructor(props) {
        super(props);
        this.state = {
            list: [{id: '201', class: '楼内楼梯扶手、栏杆、窗台', date: '2018-01-05', status: '考评中'},
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
            <View style={{flex:1}}>
            <View style={{flex:1,backgroundColor:'#eaeaea',paddingBottom:20}}>
                <FlatList
                    data={this.state.list}
                    extraData={this.state}
                    renderItem={({item}) =>
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate("XuanJianDetail",{id:item.id})}}>
                            <View style={styles.container}>
                                <View style={{flex:4}}>
                                    <View style={{flexDirection:'row',height:30}}>
                                        <Text style={{fontSize:16,lineHeight:30,fontWeight:'600',}}>{item.class}</Text>
                                    </View>
                                    <View style={{flexDirection:'row',height:30}}>
                                        <Text style={{fontSize:14,lineHeight:30}}>{item.class}</Text>
                                    </View>
                                    <View style={{flexDirection:'row',height:30}}>
                                        <Text style={{fontSize:14,lineHeight:30,color:'#929292'}}>位置：{item.date}</Text>
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
            <View style={{height:40,width:width,justifyContent:'center',flexDirection:"row"}}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("XuanJianDetail")} style={{flexDirection:'row',justifyContent:'center',flex:1}}>
                    <View style={{height:40,justifyContent:'center',backgroundColor:'#4083FF',flex:1,flexDirection:'row'}}>
                        <Image style={{width:30,height:30,alignSelf:'center',marginRight:10}} source={require('../../../image/qrcode.png')}/>
                        <Text style={{color:'white',alignSelf:'center'}}>扫码</Text>
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

