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
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button';
import DatePicker from 'react-native-datepicker';
import ImagePicker from 'react-native-image-picker';
import px2dp from '../../util';
import AwesomeAlert from 'react-native-awesome-alerts';

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
export default class ShiJianAdd extends Component {

    static navigationOptions = (props)=> {
        return {
            headerTitle: '登记突发事件',
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
            timeflag:'1',
            name:'',
            date:'',
            language:'',
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
                <View style={{backgroundColor:'white',paddingRight:10,paddingLeft:10,marginTop:10,paddingTop:10}}>
                    <Text>处理前</Text>
                        <View style={{alignSelf:'flex-start',flexDirection:'row',paddingBottom:10,paddingTop:10}}>
                            <TouchableOpacity onPress={()=>this.openMycamera()} style={{}}>
                                <View style={{width:70,height:70,alignContent:'center',alignSelf:'center',justifyContent:'center',backgroundColor:'white',borderRadius:5,borderStyle:'solid',borderWidth:1,borderColor:'#c9c9c9'}}>
                                    <Image style={{width:40,height:40,alignSelf:'center',justifyContent:'center'}} source={require('../../../image/add.png')}/>
                                </View>
                            </TouchableOpacity>

                            { this.state.images.length ==0 ? null :
                                <FlatList
                                    horizontal={true}
                                    data={this.state.images}
                                    extraData={this.state}
                                    renderItem={({item}) =>
                                        <View style={{width:70,height:70,marginLeft:10,position:'relative',flexDirection:'row'}}>
                                            <Image style={{width:70,height:70}} source={item} />
                                            <TouchableOpacity onPress={()=>this.deleteImg(item.index)} style={{position:'absolute',top:0,right:0}}>
                                                <Image style={{width:20,height:20,}} source={require('../../../image/delete.png')}/>
                                            </TouchableOpacity>
                                        </View>
                                    }
                                />
                            }
                        </View>
                    </View>

                    <View style={{backgroundColor:'white',paddingRight:10,paddingLeft:10,marginTop:10}}>
                        <View style={{height:40,justifyContent:'center',color:'#929292',fontSize:14,flexDirection:'row',alignItems:'center',borderColor:'#eee',borderBottomWidth:1,borderStyle:'solid'}}>
                            <Text style={{color:'#929292',fontSize:14}}>类型：</Text>
                            <TextInput style={{flex:1,fontSize:14,fontColor:'#CECECE'}} placeholder={'请输入类型'} underlineColorAndroid='transparent' onChangeText={(text)=>this.setState({name:text})}/>
                        </View>
                        <View style={{height:40,justifyContent:'center',color:'#929292',fontSize:14,flexDirection:'row',alignItems:'center',borderColor:'#eee',borderBottomWidth:1,borderStyle:'solid'}}>
                            <Text style={{color:'#929292',fontSize:14}}>时间：</Text>
                            <TextInput style={{flex:1,fontSize:14,fontColor:'#CECECE'}} placeholder={'请输入时间'} underlineColorAndroid='transparent' onChangeText={(text)=>this.setState({name:text})}/>
                        </View>
                        <View style={{height:40,justifyContent:'center',color:'#929292',fontSize:14,flexDirection:'row',alignItems:'center',borderColor:'#eee',borderBottomWidth:1,borderStyle:'solid'}}>
                            <Text style={{color:'#929292',fontSize:14}}>位置：</Text>
                            <TextInput style={{flex:1,fontSize:14,fontColor:'#CECECE'}} placeholder={'请输入位置'} underlineColorAndroid='transparent' onChangeText={(text)=>this.setState({name:text})}/>
                        </View>
                        <View style={{height:80,justifyContent:'center',flexDirection:'row',alignItems:'flex-start',borderColor:'#eee',borderBottomWidth:1,borderStyle:'solid'}}>
                            <Text style={{color:'#929292',fontSize:14,paddingTop:15}}>描述：</Text>
                            <TextInput placeholder="输入具体描述" underlineColorAndroid='transparent'onChangeText={(text)=>this.setState({content:text})} style={{flex:1,fontSize:14,color:'#565656'}} multiline={true}/>
                        </View>
                    </View>

                    <View style={{backgroundColor:'white',paddingRight:10,paddingLeft:10,marginTop:10}}>
                        <View style={{height:40,justifyContent:'center',color:'#929292',fontSize:14,flexDirection:'row',alignItems:'center',borderColor:'#eee',borderBottomWidth:1,borderStyle:'solid'}}>
                            <Text style={{color:'#929292',fontSize:14}}>处理情况：</Text>
                            <RadioGroup  selectedIndex={0}
                                         onSelect = {(index, value) => this.setState({timeflag:value})} style={{flexDirection:'row',flex:1,justifyContent:'center',alignSelf:'flex-end'}}>
                                <RadioButton value={'1'} >
                                    <Text>下一步处理</Text>
                                </RadioButton>
                                <RadioButton value={'2'}>
                                    <Text>处理完成</Text>
                                </RadioButton>
                            </RadioGroup>
                        </View>
                        <View style={{height:40,justifyContent:'center',color:'#929292',fontSize:14,flexDirection:'row',alignItems:'center',borderColor:'#eee',borderBottomWidth:1,borderStyle:'solid'}}>
                            <Text style={{color:'#929292',fontSize:14}}>处理人：</Text>
                            <TextInput style={{flex:1,fontSize:14,fontColor:'#CECECE'}} placeholder={'请输入处理人'} underlineColorAndroid='transparent' onChangeText={(text)=>this.setState({name:text})}/>
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
    selectPeople=()=>{
        this.props.navigation.navigate('SelectPeople', {returnData: this.returnData.bind(this)});
    }

    returnData(id, name) {
        alert(name);
        this.setState({id: id, name: name});
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

deleteImg=(index1)=>{
    var list1=this.state.images.filter((e)=>e.index==index1);

    var list=this.state.images;
    list.pop(list1[0]);

    this.setState({
        images:list
    })
}

    openMycamera = () =>{
        ImagePicker.showImagePicker(photoOptions,(response) =>{
            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = { uri: 'data:image/png;base64,'+response.data,index:index++ };

                let list=this.state.images;
                list.push(source);
                this.setState({
                    images: list
                });
            }
        })
    }

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
    txt:{
        fontSize:16,
        color:'#565656',
        alignSelf:'center'
    },
    container:{
        padding:10,
        backgroundColor:'white',
        borderRadius:5,
        flex:1,
        height:200,
        justifyContent:'space-around'
    },
    line:{
        height:px2dp(50),
        lineHeight:px2dp(50),
        paddingLeft:10,
        fontSize:16,
        borderStyle:'solid',
        borderBottomWidth:1,
        borderBottomColor:'#c9c9c9',
        justifyContent:'center',
        flexDirection:'row'
    },
    line1:{
        height:180,
        lineHeight:40,
        paddingLeft:10,
        fontSize:16,
        justifyContent:'center',
        flexDirection:'row'
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
    avatarContainer: {
        borderColor: '#9B9B9B',
        borderWidth: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        borderRadius: 50,
        width: 100,
        height: 100
    }
})
