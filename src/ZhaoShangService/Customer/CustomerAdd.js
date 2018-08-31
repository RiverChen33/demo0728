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
export default class CustomerAdd extends Component {
    static navigationOptions = {
        headerTitle: '新增客户',
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
            customertype:'',
            customername:'',
            customermobile:'',
            customertel:'',
            email:'',
            birthday:'',
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
                <Text style={{paddingLeft:10,height:30,justifyContent:'center',lineHeight:30,marginTop:10}}>基础信息</Text>
                <View style={{backgroundColor:'white',paddingRight:10,paddingLeft:10}}>
                    <View style={{height:40,justifyContent:'center',flexDirection:'row',alignItems:'center',borderColor:'#eee',borderBottomWidth:1,borderStyle:'solid'}}>
                        <Text style={{color:'#929292',fontSize:14,width:100}}>设备：</Text>
                        <TouchableOpacity style={{flex:1,flexDirection:'row',justifyContent:'flex-end'}} onPress={this.selectPeople.bind(this)}>
                            <Text>{this.state.name==''?'请选择':this.state.name}</Text>
                            <Image style={{width:16,height:16,alignSelf:'flex-end'}} source={require('../../../image/arrow.png')}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{height:40,justifyContent:'center',color:'#929292',fontSize:14,flexDirection:'row',alignItems:'center',borderColor:'#eee',borderBottomWidth:1,borderStyle:'solid'}}>
                        <Text style={{color:'#929292',fontSize:14}}>客户类型：</Text>
                        <Picker selectedValue={this.state.language} mode={Picker.MODE_DIALOG} style={{flex:1,textAlign:'center'}} prompt='请选择部件'
                                enabled={true}
                                itemStyle={{fontSize:25, color:'red',textAlign:'left',fontWeight:'bold'}} onValueChange={(lang)=>this.setState({customertype:lang})}>
                            <Picker.Item  label='Java' value='java'/>
                            <Picker.Item  label="JavaScript" value="js" />
                            <Picker.Item  label="C++" value="cpp" />
                            <Picker.Item  label="Swift" value="swift" />
                        </Picker>
                    </View>

                    <View style={{height:40,justifyContent:'center',flexDirection:'row',alignItems:'flex-start',borderColor:'#eee',borderBottomWidth:1,borderStyle:'solid'}}>
                        <Text style={{color:'#929292',fontSize:14,width:80,paddingTop:15}}>客户名称：</Text>
                        <TextInput placeholder="必填" underlineColorAndroid='transparent'onChangeText={(text)=>this.setState({customername:text})} style={{flex:1,fontSize:16,color:'#565656'}}/>
                    </View>
                    <View style={{height:40,justifyContent:'center',flexDirection:'row',alignItems:'flex-start',borderColor:'#eee',borderBottomWidth:1,borderStyle:'solid'}}>
                        <Text style={{color:'#929292',fontSize:14,width:80,paddingTop:15}}>联系电话：</Text>
                        <TextInput placeholder="必填" underlineColorAndroid='transparent'onChangeText={(text)=>this.setState({customermobile:text})} style={{flex:1,fontSize:16,color:'#565656'}}/>
                    </View>
                    <View style={{height:40,justifyContent:'center',flexDirection:'row',alignItems:'flex-start',borderColor:'#eee',borderBottomWidth:1,borderStyle:'solid'}}>
                        <Text style={{color:'#929292',fontSize:14,width:80,paddingTop:15}}>固定电话：</Text>
                        <TextInput placeholder="请输入" underlineColorAndroid='transparent'onChangeText={(text)=>this.setState({customertel:text})} style={{flex:1,fontSize:16,color:'#565656'}}/>
                    </View>
                    <View style={{height:40,justifyContent:'center',flexDirection:'row',alignItems:'flex-start',borderColor:'#eee',borderBottomWidth:1,borderStyle:'solid'}}>
                        <Text style={{color:'#929292',fontSize:14,width:80,paddingTop:15}}>电子邮箱：</Text>
                        <TextInput placeholder="请输入" underlineColorAndroid='transparent'onChangeText={(text)=>this.setState({email:text})} style={{flex:1,fontSize:16,color:'#565656'}}/>
                    </View>
                    <View style={{height:40,justifyContent:'center',flexDirection:'row',alignItems:'flex-start',borderColor:'#eee',borderBottomWidth:1,borderStyle:'solid'}}>
                        <Text style={{color:'#929292',fontSize:14,width:80,paddingTop:15}}>生日：</Text>
                        <TextInput placeholder="请输入" underlineColorAndroid='transparent'onChangeText={(text)=>this.setState({birthday:text})} style={{flex:1,fontSize:16,color:'#565656'}}/>
                    </View>
                    <View style={{height:80,justifyContent:'center',flexDirection:'row',alignItems:'flex-start',borderColor:'#eee',borderBottomWidth:1,borderStyle:'solid'}}>
                        <Text style={{color:'#929292',fontSize:14,width:80,paddingTop:15}}>通讯地址：</Text>
                        <TextInput placeholder="请填写" underlineColorAndroid='transparent'onChangeText={(text)=>this.setState({content:text})} style={{flex:1,fontSize:16,color:'#565656'}} multiline={true}/>
                    </View>
                </View>

                <View style={{backgroundColor:'white',paddingRight:10,paddingLeft:10,marginTop:10}}>
                    <View style={{height:40,justifyContent:'center',color:'#929292',fontSize:14,flexDirection:'row',alignItems:'center',borderColor:'#eee',borderBottomWidth:1,borderStyle:'solid'}}>
                        <Text style={{color:'#929292',fontSize:14}}>证件类型：</Text>
                        <Picker selectedValue={this.state.language} mode={Picker.MODE_DIALOG} style={{flex:1,textAlign:'center'}} prompt='请选择部件'
                                enabled={true}
                                itemStyle={{fontSize:25, color:'red',textAlign:'left',fontWeight:'bold'}} onValueChange={(lang)=>this.setState({customertype:lang})}>
                            <Picker.Item  label='Java' value='java'/>
                            <Picker.Item  label="JavaScript" value="js" />
                            <Picker.Item  label="C++" value="cpp" />
                            <Picker.Item  label="Swift" value="swift" />
                        </Picker>
                    </View>
                    <View style={{height:40,justifyContent:'center',flexDirection:'row',alignItems:'flex-start',borderColor:'#eee',borderBottomWidth:1,borderStyle:'solid'}}>
                        <Text style={{color:'#929292',fontSize:14,width:80,paddingTop:15}}>证件号码：</Text>
                        <TextInput placeholder="请输入" underlineColorAndroid='transparent'onChangeText={(text)=>this.setState({birthday:text})} style={{flex:1,fontSize:16,color:'#565656'}}/>
                    </View>
                    <View style={{alignSelf:'flex-start',flexDirection:'row',paddingBottom:10,paddingTop:10,height:100}}>
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
                    <Text style={{paddingLeft:10,height:30,justifyContent:'center',lineHeight:30,marginTop:10}}>其他信息</Text>
                    <View style={{backgroundColor:'white',paddingRight:10,paddingLeft:10}}>
                        <View style={{height:40,justifyContent:'center',flexDirection:'row',alignItems:'flex-start',borderColor:'#eee',borderBottomWidth:1,borderStyle:'solid'}}>
                            <Text style={{color:'#929292',fontSize:14,width:80,paddingTop:15}}>中介公司：</Text>
                            <TextInput placeholder="请输入" underlineColorAndroid='transparent'onChangeText={(text)=>this.setState({email:text})} style={{flex:1,fontSize:16,color:'#565656'}}/>
                        </View>
                        <View style={{height:40,justifyContent:'center',flexDirection:'row',alignItems:'flex-start',borderColor:'#eee',borderBottomWidth:1,borderStyle:'solid'}}>
                            <Text style={{color:'#929292',fontSize:14,width:80,paddingTop:15}}>企业资质：</Text>
                            <TextInput placeholder="请输入" underlineColorAndroid='transparent'onChangeText={(text)=>this.setState({email:text})} style={{flex:1,fontSize:16,color:'#565656'}}/>
                        </View>
                        <View style={{height:40,justifyContent:'center',flexDirection:'row',alignItems:'flex-start',borderColor:'#eee',borderBottomWidth:1,borderStyle:'solid'}}>
                            <Text style={{color:'#929292',fontSize:14,width:100,paddingTop:15}}>租赁经办人：</Text>
                            <Text style={{flex:1,fontSize:16,lineHeight:40,color:'#565656',justifyContent:'center'}}>老王</Text>
                        </View>
                        <View style={{height:40,justifyContent:'center',flexDirection:'row',alignItems:'flex-start',borderColor:'#eee',borderBottomWidth:1,borderStyle:'solid'}}>
                            <Text style={{color:'#929292',fontSize:14,width:80,paddingTop:15}}>品牌：</Text>
                            <TextInput placeholder="请输入" underlineColorAndroid='transparent'onChangeText={(text)=>this.setState({email:text})} style={{flex:1,fontSize:16,color:'#565656'}}/>
                        </View>
                        <View style={{height:40,justifyContent:'center',flexDirection:'row',alignItems:'flex-start',borderColor:'#eee',borderBottomWidth:1,borderStyle:'solid'}}>
                            <Text style={{color:'#929292',fontSize:14,width:80,paddingTop:15}}>业态：</Text>
                            <TextInput placeholder="请输入" underlineColorAndroid='transparent'onChangeText={(text)=>this.setState({email:text})} style={{flex:1,fontSize:16,color:'#565656'}}/>
                        </View>
                        <View style={{height:80,justifyContent:'center',flexDirection:'row',alignItems:'flex-start',borderColor:'#eee',borderBottomWidth:1,borderStyle:'solid'}}>
                            <Text style={{color:'#929292',fontSize:14,width:80,paddingTop:15}}>详情：</Text>
                            <TextInput placeholder="请填写" underlineColorAndroid='transparent'onChangeText={(text)=>this.setState({content:text})} style={{flex:1,fontSize:16,color:'#565656'}} multiline={true}/>
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

