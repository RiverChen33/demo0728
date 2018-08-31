import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView,
    TextInput,
    TouchableOpacity,FlatList,Image
} from 'react-native';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button';
import DatePicker from 'react-native-datepicker';
import ImagePicker from 'react-native-image-picker';
import px2dp from '../util';
import AwesomeAlert from 'react-native-awesome-alerts';

var dimensions = require('Dimensions');
//获取屏幕的宽度
var {width,height} = dimensions.get('window');

var photoOptions = {
    //底部弹出框选项
    title:'请选择',
    cancelButtonTitle:'取消',
    takePhotoButtonTitle:'拍照',
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
export default class BaoShi extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            area:1,
            room:'',
            tel:'',
            content:"",
            avatarSource: null,
            time:1,
            datetime:"",
            images:[],
            alertInfo:{
                showAlert:false,
                title:'温馨提示',
                message:'提交成功'
            }
        }
    }

    render() {
        let display=this.state.time=="1"?"none":"";
        return (
            <View style={{flex:1}}>
            <ScrollView style={{flex:1}}>
                <View style={styles.container}>
                    <View style={styles.line}>
                        <Text style={styles.txt}>区域：</Text>
                        <RadioGroup  selectedIndex={0}
                            onSelect = {(index, value) => this.setState({area:value})} style={{flexDirection:'row',flex:1,justifyContent:'center',alignSelf:'center'}}>
                            <RadioButton value={'1'} >
                                <Text>住宅</Text>
                            </RadioButton>
                            <RadioButton value={'2'}>
                                <Text>公共区域</Text>
                            </RadioButton>
                        </RadioGroup>
                    </View>
                    <View style={styles.line}>
                        <Text style={styles.txt}>房间：</Text>
                        <TextInput underlineColorAndroid='transparent'onChangeText={(text)=>this.setState({room:text})} style={{flex:1,fontSize:16,color:'#565656'}}/>
                    </View>
                    <View style={styles.line}>
                        <Text style={styles.txt}>报修人：</Text>
                        <TextInput underlineColorAndroid='transparent'onChangeText={(text)=>this.setState({name:text})} style={{flex:1,fontSize:16,color:'#565656'}}/>
                    </View>
                    <View style={styles.line}>
                        <Text style={styles.txt}>联系电话：</Text>
                        <TextInput underlineColorAndroid='transparent'onChangeText={(text)=>this.setState({tel:text})} style={{flex:1,fontSize:16,color:'#565656'}}/>
                    </View>
                    <View style={styles.line1}>
                        <Text style={styles.txt}>报修内容：</Text>
                        <TextInput underlineColorAndroid='transparent'onChangeText={(text)=>this.setState({content:text})} style={{flex:1,fontSize:16,color:'#565656'}} multiline={true}/>
                    </View>
                </View>

                <View style={styles.container}>
                <View style={styles.line}>
                    <Text style={styles.txt}>期望时间：</Text>
                    <RadioGroup selectedIndex={0}
                        onSelect = {(index, value) => {this.setState({time:value})}} style={{flexDirection:'row',flex:1,justifyContent:'center',alignSelf:'center'}}>
                        <RadioButton value={1} >
                            <Text>随时</Text>
                        </RadioButton>
                        <RadioButton value={2}>
                            <Text>预约</Text>
                        </RadioButton>
                    </RadioGroup>
                </View>
                {
                    this.state.time==1?(null):(
                        <View style={styles.line1}>
                            <Text style={styles.txt}>*期望时间：</Text>
                            <DatePicker
                                style={{flex:1,justifyContent:'center'}}
                                date={this.state.datetime}
                                mode="datetime"
                                format="YYYY-MM-DD HH:mm"
                                confirmBtnText="确定"
                                cancelBtnText="取消"
                                customStyles={{
                                    dateIcon: {
                                        position: 'absolute',
                                        left: 0,
                                        top: 4,
                                        marginLeft: 0
                                    },
                                    dateInput: {
                                        marginLeft: 36
                                    }
                                }}
                                minuteInterval={10}
                                onDateChange={(datetime) => {this.setState({datetime: datetime});}}
                            />
                        </View>
                    )
                }
                </View>

                    <View style={[{marginLeft: 10,flex:1,flexDirection:'row'}]}>
                        <TouchableOpacity onPress={()=>this.openMycamera()}>
                            <View style={{width:70,height:70,alignContent:'center',alignSelf:'center',justifyContent:'center',backgroundColor:'white',borderRadius:5,borderStyle:'solid',borderWidth:1,borderColor:'#c9c9c9'}}>
                                <Image style={{width:40,height:40,alignSelf:'center',justifyContent:'center'}} source={require('../../image/add.png')}/>
                            </View>
                        </TouchableOpacity>

                        { this.state.images.length ==0 ? null :
                            <FlatList
                                horizontal={true}
                                extraData={this.state}
                                data={this.state.images}
                                renderItem={({item}) =>
                                    <View style={{width:70,height:70,marginLeft:10,position:'relative'}}>
                                        <Image style={{width:70,height:70}} source={item} />
                                        <TouchableOpacity onPress={()=>this.deleteImg(item.index)} style={{position:'absolute',top:0,right:0}}>
                                            <Image style={{width:20,height:20,}} source={require('../../image/delete.png')}/>
                                        </TouchableOpacity>
                                    </View>
                                }
                            />
                        }
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
        margin:10,
        backgroundColor:'white',
        borderRadius:5,
        flex:1
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
        height:80,
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

