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
import px2dp from '../../util/index';
import AwesomeAlert from 'react-native-awesome-alerts';
import FetchUtil from "../../util/FetchUtil";
import AppJson from "../../../App";
import {NavigationActions} from "react-navigation";
import Toast from 'react-native-easy-toast';

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
export default class BaoShi extends Component {
    static navigationOptions = (props)=> {
        return {
            headerTitle: '报事',
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
            name:'',
            area:1,
            room:'',
            roomId:'',
            tel:'',
            content:"",
            avatarSource: null,
            timeType:1,
            time:"",
            datetime:"",
            loacation:"",
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
                    {this.state.area == "1" ?
                        <View style={styles.line}>
                            <Text style={styles.txt}>房间：</Text>
                            <TouchableOpacity style={{flex:1,flexDirection:'row',justifyContent:'flex-end',alignItems:"center",marginRight:15}} onPress={this.selectPeople.bind(this)}>
                                <Text>{this.state.room==''?'请选择':this.state.room}</Text>
                                <Image style={{width:16,height:16,}} source={require('../../../image/arrow.png')}/>
                            </TouchableOpacity>
                        </View>
                        :
                        <View style={styles.line}>
                            <Text style={styles.txt}>区域位置：</Text>
                            <TextInput underlineColorAndroid='transparent'
                                       onChangeText={(text) => this.setState({location: text})}
                                       style={{flex: 1, fontSize: 16, color: '#565656'}}
                                       placeholder={'请输入具体位置'}
                            />
                        </View>
                    }
                    {/*<View style={styles.line}>*/}
                        {/*<Text style={styles.txt}>报修人：</Text>*/}
                        {/*<TextInput underlineColorAndroid='transparent'onChangeText={(text)=>this.setState({name:text})} style={{flex:1,fontSize:16,color:'#565656'}}/>*/}
                    {/*</View>*/}
                    <View style={styles.line}>
                        <Text style={styles.txt}>联系电话：</Text>
                        <TextInput underlineColorAndroid='transparent'onChangeText={(text)=>this.setState({tel:text})} style={{flex:1,fontSize:16,color:'#565656'}}
                                   placeholder={'请输入'}
                        />
                    </View>
                    <View style={styles.line1}>
                        <Text style={[styles.txt,{alignSelf:"flex-start",paddingTop:12}]}>报修内容：</Text>
                        <TextInput underlineColorAndroid='transparent'onChangeText={(text)=>this.setState({content:text})} style={{flex:1,fontSize:16,color:'#565656',alignSelf:"flex-start"}} multiline={true}
                                   placeholder={'请输入'}
                        />
                    </View>
                </View>

                <View style={styles.container}>
                <View style={styles.line}>
                    <Text style={styles.txt}>期望时间：</Text>
                    <RadioGroup selectedIndex={0}
                        onSelect = {(index, value) => {this.setState({timeType:value})}} style={{flexDirection:'row',flex:1,justifyContent:'center',alignSelf:'center'}}>
                        <RadioButton value={1} >
                            <Text>随时</Text>
                        </RadioButton>
                        <RadioButton value={2}>
                            <Text>预约</Text>
                        </RadioButton>
                    </RadioGroup>
                </View>
                {
                    this.state.timeType==1?(null):(
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
                                <Image style={{width:40,height:40,alignSelf:'center',justifyContent:'center'}} source={require('../../../image/add.png')}/>
                            </View>
                        </TouchableOpacity>

                        { this.state.images.length ==0 ? null :
                            <FlatList
                                horizontal={true}
                                extraData={this.state}
                                data={this.state.images}
                                extradata={this.state.images}
                                renderItem={({item}) =>
                                    <View style={{width:70,height:70,marginLeft:10,position:'relative'}}>
                                        <Image style={{width:70,height:70}} source={item} />
                                        <TouchableOpacity onPress={()=>this.deleteImg(item.index)} style={{position:'absolute',top:0,right:0}}>
                                            <Image style={{width:20,height:20,}} source={require('../../../image/delete.png')}/>
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

                <Toast ref="toast" opacity={0.8}
                       position='top'
                       positionValue={300}
                       fadeInDuration={750}
                       fadeOutDuration={2000}/>
            </View>
        )
    };
    selectPeople=()=>{
        this.props.navigation.navigate('BaoShiSelectRoom', {returnData: this.returnData.bind(this)});
    }

    returnData(id, name) {
        this.setState({roomId: id, room: name});
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
    let a="";
    var list=this.state.images;

    var result=[];
    for (let i=0;i<list.length;i++){
        if(list[i].index!==index1){
            result.push(list[i]);
        }

    }

    this.setState({
        images:result
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
        let that=this;

        // if(!!!this.state.num){
        //     that.refs.toast.show("抄表读数不能为空");
        //     return;
        // }else{
        //     if(+this.state.num<=0){
        //         that.refs.toast.show("抄表读数应大于0");
        //         return;
        //     }
        // }

        FetchUtil.postJSON(AppJson.url+"/app/service/repairs/v1/save",
            {
                areaType:this.state.area,
                roomId:this.state.roomId,
                location:this.state.loacation,
                content:this.state.content,
                expectType:this.state.timeType,
                expectTime:this.state.datetime,
                imgs:this.state.images,
                phone:this.state.tel,
            },(responseJSON)=>{
            if(responseJSON.code==200){//成功
                that.refs.toast.show("提交成功");
                setTimeout(()=>{
                    that.props.navigation.goBack();
                },AppJson.jumpSec);
            }else if(responseJSON.code==204001||responseJSON.code==204002){
                let resetAction = NavigationActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({routeName:'LoginView'})//要跳转到的页面名字
                    ]
                });
                that.props.navigation.dispatch(resetAction);
            }else{
                that.refs.toast.show(responseJSON.message);
            }
        })
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

