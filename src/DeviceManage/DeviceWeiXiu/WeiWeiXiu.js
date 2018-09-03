import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,ScrollView,FlatList,Image,StatusBar,TouchableOpacity
} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
var dimensions = require('Dimensions');
//获取屏幕的宽度
var {width,height} = dimensions.get('window');
export default class WeiWeiXiu extends Component {

    static navigationOptions = (props)=> {
        return {
            headerTitle: '设备维修',
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
            headerLeft: (<View>
                <TouchableOpacity onPress={() => {
                    props.navigation.navigate("Home")
                }}>
                    <Image style={{width:25,height:25,marginLeft:10}} source={require('../../../image/back-icon.png')}/>
                </TouchableOpacity>
            </View>),
            tabBarLabel: '待处理'
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
                {id: '204', class: '环境投诉', desc: '环境问题', date: '2018-01-05', status: '整改中'}],
            alertInfo:{
                showAlert:false,
                title:'温馨提示',
                message:'提交成功'
            }
        }
    }

    render() {
        return (
            <View style={{flex:1}}>
            <ScrollView style={{backgroundColor:'#eaeaea',paddingBottom:20}}>
                <FlatList
                    data={this.state.list}
                    extraData={this.state}
                    renderItem={({item}) =>
                    <View>
                        <View>
                            <View style={styles.container}>
                                <View style={{flex:4}}>
                                    <View style={{flexDirection:'row',height:30}}>
                                        <Text style={{fontSize:16,lineHeight:30,fontWeight:'600',}}>{item.class}</Text>
                                    </View>
                                    <View style={{flexDirection:'row',height:30,alignItems:'center'}}>
                                        <Text style={{textAlign:'center',color:'red',height:20,width:60,borderRadius:5,borderWidth:1,borderColor:'red',borderStyle:'solid'}}>{item.status}</Text>
                                        <Text style={{fontSize:14,lineHeight:30,color:'red',paddingLeft:5}}>{item.class}</Text>
                                    </View>
                                    <View style={{flexDirection:'row',height:30}}>
                                        <Text style={{fontSize:14,lineHeight:30}}>{item.date}</Text>
                                    </View>
                                    <View style={{flexDirection:'row',height:30}}>
                                        <Text style={{fontSize:14,lineHeight:30}}>{item.date}</Text>
                                    </View>
                                </View>
                                <View style={{flex:2,justifyContent:'center',alignItems:'flex-end'}}>
                                    <TouchableOpacity onPress={()=>this.props.navigation.navigate("JianChaZhengGai")} style={{height:40,alignItems:'center',justifyContent:'center',flex:1,alignItems:'center',backgroundColor:'white'}}>
                                        <Text style={{textAlign:'center',color:'red',height:30,lineHeight:30,width:60,borderRadius:5,borderWidth:1,borderColor:'red',borderStyle:'solid',justifyContent:'center',alignSelf:'center'}}>{item.status}</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.container,{flexDirection:'column',marginTop:0,borderStyle:'solid',borderColor:'#eee',borderTopWidth:1}]}>
                            <View style={{flexDirection:'row',height:30}}>
                                <Text style={{fontSize:12,lineHeight:30}}>{item.class}</Text>
                            </View>
                            <View style={{flexDirection:'row',height:50,flex:1}}>
                                <View style={{flex:1,justifyContent:'center'}}>
                                    <Text style={{fontSize:12,lineHeight:30}}>联系人：{item.class}</Text>
                                </View>
                                <View style={{width:40,height:40}}>
                                    <TouchableOpacity onPress={()=>alert(123)}>
                                        <Image style={{width:40,height:40,alignSelf:'center',justifyContent:'center'}} source={require('../../../image/tel.png')}/>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                            }
                />
            </ScrollView>
                <View style={{height:40,width:width,justifyContent:'center',flexDirection:'row'}}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate("WeiXiuDengJi")} style={{height:40,alignItems:'center',justifyContent:'center',flex:1,alignSelf:'center',backgroundColor:'#4083FF'}}>
                        <Text style={{color:'white',fontSize:14}}>登记</Text>
                    </TouchableOpacity>
                </View>
                <AwesomeAlert
                    show={this.state.alertInfo.showAlert}
                    showProgress={false}
                    title={this.state.alertInfo.title}
                    message={this.state.alertInfo.message}
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}
                    showCancelButton={false}
                    showConfirmButton={true}
                    cancelText="取消"
                    confirmText="确定"
                    confirmButtonColor="#4083FF"
                    onCancelPressed={() => {
                        this.hideAlert();
                    }}
                    onConfirmPressed={() => {
                        this.hideAlert();
                    }}
                />
            </View>
        )
    };
    showAlert = () => {
        this.setState({
            alertInfo:{
                showAlert:true
            }
        });
    };

    hideAlert = () => {
        this.setState({
            alertInfo:{
                showAlert:false
            }
        });
    };
    clickConfirm=()=>{

    }
}

const styles=StyleSheet.create({
    title:{
        fontSize:18,
        color:'black'
    },
    container:{
        marginTop:10,
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

