import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView,
    TextInput,
    TouchableOpacity,FlatList,Image,Picker
} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import Toast from "react-native-easy-toast";

var dimensions = require('Dimensions');
//获取屏幕的宽度
var {width,height} = dimensions.get('window');

var photoOptions = {
    //底部弹出框选项
    title:'请选择',
    cancelButtonTitle:'取消',
    takePhotoButtonTitle:'',
    chooseFromLibraryButtonTitle:'选择相册',
    quality:0.75,
    allowsEditing:true,
    noData:false,
    storageOptions: {
        skipBackup: true,
        path:'images'
    }
}
var index=0;
export default class WeiXiuDengJi extends Component {
    static navigationOptions = (props)=> {
        return {
            headerTitle: '访客查验',
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

    constructor(props){
        super(props);
        this.state={
            id:'',
            content:"",
            images:[],
            checkCode:'',
            name:'',
            date:'',
            language:'',
            displayPage:true,
            visitor:{
                name:'张三',
                sex:'男',
                dest:'A栋',
                hostname:'李四'
            },
            alertInfo:{
                showAlert:false,
                title:'温馨提示',
                message:'提交成功'
            }
        }
    }

    componentDidMount(){

    }

    render() {
        return (
            <View style={{flex:1}}>
                { this.state.displayPage?
                    <View style={{flex: 1, position: 'relative', backgroundColor: "white"}}>
                    <Text style={{
                        fontSize: 18,
                        alignSelf: 'center',
                        fontWeight: '600',
                        marginTop: 40
                    }}>请输入访客验证码</Text>
                    <View style={{
                        position: 'relative',
                        marginTop: 60,
                        width: width,
                        alignContent: 'center',
                        marginLeft: (width - 180) / 2
                    }}>
                        <TextInput
                            style={[styles.textInputStyle, {opacity: 0, zIndex: 2}]}
                            keyboardType="numeric" maxLength={4}
                            onChangeText={(checkCode) => this.changeText(checkCode)}
                            value={this.state.checkCode}
                            autoFocus={true}
                        />
                        <View style={{
                            position: 'absolute',
                            top: 0,
                            flexDirection: 'row',
                            alignContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Text
                                style={[styles.rect, this.state.checkCode.length == 0 ? styles.active : {}]}>{this.state.checkCode.length >= 1 ? this.state.checkCode[0] : ""}</Text>
                            <Text
                                style={[styles.rect, this.state.checkCode.length == 1 ? styles.active : {}]}>{this.state.checkCode.length >= 2 ? this.state.checkCode[1] : ""}</Text>
                            <Text
                                style={[styles.rect, this.state.checkCode.length == 2 ? styles.active : {}]}>{this.state.checkCode.length >= 3 ? this.state.checkCode[2] : ""}</Text>
                            <Text
                                style={[styles.rect, this.state.checkCode.length == 3 ? styles.active : {}]}>{this.state.checkCode.length >= 4 ? this.state.checkCode[3] : ""}</Text>
                        </View>
                    </View>
                </View>:null
                }
                { this.state.displayPage?null:
                    <View style={{flex: 1, position: 'relative', backgroundColor: "white"}}>
                        <Text style={{
                            fontSize: 18,
                            alignSelf: 'center',
                            fontWeight: '600',
                            marginTop: 40,
                            color: '#4083FF'
                        }}>允许通行</Text>
                        <View style={{alignContent: 'center', paddingTop: 20}}>
                            <Text style={{alignSelf: 'center', lineHeight: 25}}>访客姓名：{this.state.visitor.name}</Text>
                            <Text style={{alignSelf: 'center', lineHeight: 25}}>访客性别：{this.state.visitor.sex}</Text>
                            <Text style={{alignSelf: 'center', lineHeight: 25}}>到访房产：{this.state.visitor.dest}</Text>
                            <Text
                                style={{alignSelf: 'center', lineHeight: 25}}>业主姓名：{this.state.visitor.hostname}</Text>
                        </View>
                    </View>
                }
            </View>
    )
    };

    changeText=(checkCode)=>{
        var that=this;
        this.setState({checkCode:checkCode},()=>{
            //提交验证

            if(that.state.checkCode.length==4){
                that.setState({
                    displayPage:false
                });
            }
        });
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
    textInputStyle:{
        width:180,
        height:40,
        position:'absolute',
        top:0,
        left:0,
        alignSelf:"center"
    },
    rect:{
        width:40,
        height:40,
        fontSize:20,
        lineHeight:40,
        paddingLeft:5,
        paddingRight:5,
        marginRight:5,
        borderColor:'#eee',
        borderStyle:'solid',
        borderWidth:1,
        alignSelf:'center',
        textAlign:'center',
    },
    active:{
        borderColor:'#4083FF',
    }
})

