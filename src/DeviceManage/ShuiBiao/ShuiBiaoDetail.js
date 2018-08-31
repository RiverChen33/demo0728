import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView,FlatList,Image,TouchableOpacity,TextInput

} from 'react-native';
import px2dp from '../../util';
import AwesomeAlert from 'react-native-awesome-alerts';

var dimensions = require('Dimensions');
//获取屏幕的宽度
var {width,height} = dimensions.get('window');

export default class ShuiBiaoDetail extends Component {
    static navigationOptions = {
        headerTitle: '抄水表',
        gestureResponseDistance: {horizontal: 300},
        headerBackTitle: null,
        headerStyle: {backgroundColor: '#4083FF',height:50},//导航栏的样式
        headerTitleStyle: {
            color: 'white',
            //设置标题的大小
            fontSize: 16,
            //居中显示
            alignSelf: 'center',
            textAlign:'center',
        },
        headerRight:<View/>,
        // headerLeft:<View/>,
    }

    constructor(props) {
        super(props);
        this.state = {
            detail: {id: '201', class: '楼内楼梯扶手、栏杆、窗台',desc:'问题', date: '2018-01-05', status: '整改中',
                list:[{status:'提出更改',desc:'问题',time:'2018-05-02'},
                    {status:'通知验收',desc:'问题',time:'2018-05-03'}],
            images:[]
            },
            alertInfo:{
                showAlert:false,
                title:'温馨提示',
                message:'提交成功'
            }
        }
    }

    render() {
        // alert(this.props.navigation.state.params.id);
        return (
            <View style={{flex:1}}>
            <ScrollView style={{flex:1}}>
                <View style={{backgroundColor:'white',paddingRight:10,paddingLeft:10,marginBottom:10}}>
                    <View style={{height:40,justifyContent:'center'}}>
                        <Text style={{fontSize:16,fontWeight:'600'}}>检查点：{this.state.detail.class}</Text>
                    </View>
                    <View style={{height:40,justifyContent:'center',}}>
                        <Text style={{color:'#929292',fontSize:14}}>专业：{this.state.detail.desc}</Text>
                    </View>
                    <View style={{height:40,justifyContent:'center',color:'#929292',fontSize:14}}>
                        <Text style={{color:'#929292',fontSize:14}}>上次读数：{this.state.detail.date}</Text>
                    </View>

                </View>
                <View style={{backgroundColor:'white',paddingRight:10,paddingLeft:10,marginBottom:10}}>
                    <View style={{height:40,justifyContent:'center',color:'#929292',fontSize:14,flexDirection:'row',alignItems:'center'}}>
                        <Text style={{color:'#929292',fontSize:14}}>本次读数：</Text>
                        <TextInput style={{alignSelf:'center',height:40,flex:1,fontSize:px2dp(12),fontColor:'#CECECE'}} placeholder={'请输入本次读数'} underlineColorAndroid='transparent' onChangeText={(text)=>this.setState({phone:text})}/>
                    </View>
                </View>
                <TouchableOpacity style={styles.btnStyle} onPress={this.Submit.bind(this)}>
                    <Text style={styles.loginText}>提交</Text>
                </TouchableOpacity>

            </ScrollView>
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
    Submit(){
        var that=this;
        this.setState({
            alertInfo:{
                showAlert:true,
                title:'温馨提示',
                message:'提交成功'
            }
        })
        setTimeout(()=>{
            that.props.navigation.navigate("Home");
        },2000);
    }

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
    },
    btnStyle: {
        height: 50,
        width: width - 40,
        borderRadius: 5,
        marginTop: 11,
        marginBottom: 11,
        backgroundColor: '#4077F8',
        justifyContent: 'center',
        alignSelf:'center'
    },
    loginText: {
        textAlign: 'center',
        color: 'white',
        textAlignVertical: 'center',
        fontSize:px2dp(16),
    },
})