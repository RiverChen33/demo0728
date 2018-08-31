import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView,FlatList,Image,TouchableOpacity,Linking
} from 'react-native';
import px2dp from '../../util';
import AwesomeAlert from 'react-native-awesome-alerts';

var dimensions = require('Dimensions');
//获取屏幕的宽度
var {width} = dimensions.get('window');

export default class PaiGongDetail extends Component {
    static navigationOptions = {
        headerTitle: '维修派工详情',
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
                images:[],
                tel:'95555'
            },
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
            <ScrollView style={{flex:1}}>
                <View style={{backgroundColor:'white',paddingRight:10,paddingLeft:10,marginBottom:10}}>
                    <View style={{height:40,justifyContent:'center'}}>
                        <Text style={{fontSize:16,fontWeight:'600'}}>{this.state.detail.class}</Text>
                    </View>
                    <View style={{height:40,justifyContent:'center',}}>
                        <Text style={{color:'#929292',fontSize:14}}>故障类型：{this.state.detail.desc}</Text>
                    </View>
                    <View style={{height:40,justifyContent:'center',color:'#929292',fontSize:14}}>
                        <Text style={{color:'#929292',fontSize:14}}>故障描述：{this.state.detail.date}</Text>
                    </View>
                </View>
                <View style={{backgroundColor:'white',paddingRight:10,paddingLeft:10,flexDirection:'row'}}>
                    <View style={{flex:1}}>
                        <View style={{height:40,justifyContent:'center',}}>
                            <Text style={{color:'#929292',fontSize:14}}>联系人：{this.state.detail.desc}</Text>
                        </View>
                        <View style={{height:40,justifyContent:'center',color:'#929292',fontSize:14}}>
                            <Text style={{color:'#929292',fontSize:14}}>来源：{this.state.detail.date}</Text>
                        </View>
                        <View style={{height:40,justifyContent:'center',color:'#929292',fontSize:14}}>
                            <Text style={{color:'#929292',fontSize:14}}>报修时间：{this.state.detail.date}</Text>
                        </View>
                    </View>
                    <View style={{width:50,justifyContent:'center'}}>
                        <TouchableOpacity onPress={()=>this.makeCall()}>
                            <Image style={{width:50,height:50,alignSelf:'flex-end'}} source={require('../../../image/tel.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{backgroundColor:'white',paddingRight:10,paddingLeft:10,marginBottom:10,flexDirection:'row'}}>
                    { this.state.detail.images.length ==0 ? null :
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
                    }
                </View>
                <View style={{backgroundColor:'white',paddingRight:10,paddingLeft:10,marginBottom:10}}>
                    <View style={{height:40,justifyContent:'center',}}>
                        <Text style={{color:'#929292',fontSize:14}}>状态：{this.state.detail.desc}</Text>
                    </View>
                    <View style={{height:40,justifyContent:'center',color:'#929292',fontSize:14}}>
                        <Text style={{color:'#929292',fontSize:14}}>处理人：{this.state.detail.date}</Text>
                    </View>
                    <View style={{height:40,justifyContent:'center',color:'#929292',fontSize:14}}>
                        <Text style={{color:'#929292',fontSize:14}}>处理人：{this.state.detail.date}</Text>
                    </View>
                    { this.state.detail.tel.length ==0 ? null :(
                        <View style={{backgroundColor:'white',marginBottom:10}}>
                            <View style={{height:30,justifyContent:'center',color:'#929292',fontSize:14}}>
                                <Text style={{color:'#929292',fontSize:14}}>完成时间：{this.state.detail.date}</Text>
                            </View>
                            <View style={{height:30,justifyContent:'center',color:'#929292',fontSize:14}}>
                                <Text style={{color:'#929292',fontSize:14}}>维修级别：{this.state.detail.date}</Text>
                            </View>
                            <View style={{height:30,justifyContent:'center',color:'#929292',fontSize:14}}>
                                <Text style={{color:'#929292',fontSize:14}}>处理方式：{this.state.detail.date}</Text>
                            </View>
                            <View style={{height:30,justifyContent:'center',color:'#929292',fontSize:14}}>
                                <Text style={{color:'#929292',fontSize:14}}>完成情况：{this.state.detail.date}</Text>
                            </View>
                        </View>
                        )}
                </View>
                { this.state.detail.tel.length ==0 ? null :
                    <TouchableOpacity style={styles.btnStyle} onPress={()=>this.props.navigation.navigate("PaiGongZhuanPai")}>
                        <Text style={styles.loginText}>转派</Text>
                    </TouchableOpacity>
                }
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

    makeCall=()=>{
        let url = 'tel: ' + this.state.detail.tel;
        Linking.canOpenURL(url).then(supported => {
            if (!supported) {
                console.log('Can\'t handle url: ' + url);
            } else {
                return Linking.openURL(url);
            }
        }).catch(err => console.error('An error occurred', err));
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