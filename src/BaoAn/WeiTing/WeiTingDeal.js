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
import ImagePicker from 'react-native-image-picker';
import px2dp from '../../util';
import AwesomeAlert from 'react-native-awesome-alerts';
import FetchUtil from "../../util/FetchUtil";
import AppJson from "../../../app.json"
import Toast from 'react-native-easy-toast';
import { NavigationActions } from 'react-navigation';

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
export default class WeiTingDeal extends Component {

    static navigationOptions = (props)=> {
        return {
            headerTitle: '处理违停',
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
            carNo:"",
            carOwner:"",
            carPhone:"",
            memo:'',
            imgs:[],
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
                    <View style={{backgroundColor:'white',paddingRight:10,paddingLeft:10,marginTop:10}}>
                        <View style={{height:40,justifyContent:'center',color:'#929292',fontSize:14,flexDirection:'row',alignItems:'center',borderColor:'#eee',borderBottomWidth:1,borderStyle:'solid'}}>
                            <Text style={{color:'#929292',fontSize:14}}>车牌号：</Text>
                            <TextInput style={{flex:1,fontSize:14,fontColor:'#CECECE'}} placeholder={'请输入车牌号'} underlineColorAndroid='transparent' onChangeText={(text)=>this.setState({carNo:text})}/>
                        </View>
                        <View style={{height:40,justifyContent:'center',color:'#929292',fontSize:14,flexDirection:'row',alignItems:'center',borderColor:'#eee',borderBottomWidth:1,borderStyle:'solid'}}>
                            <Text style={{color:'#929292',fontSize:14}}>车主：</Text>
                            <TextInput style={{flex:1,fontSize:14,fontColor:'#CECECE'}} placeholder={'请输入名字'} underlineColorAndroid='transparent' onChangeText={(text)=>this.setState({carOwner:text})}/>
                        </View>
                        <View style={{height:40,justifyContent:'center',color:'#929292',fontSize:14,flexDirection:'row',alignItems:'center',borderColor:'#eee',borderBottomWidth:1,borderStyle:'solid'}}>
                            <Text style={{color:'#929292',fontSize:14}}>电话：</Text>
                            <TextInput style={{flex:1,fontSize:14,fontColor:'#CECECE'}} placeholder={'请输入电话'} underlineColorAndroid='transparent' onChangeText={(text)=>this.setState({carPhone:text})}/>
                        </View>
                    </View>

                    <View style={{backgroundColor:'white',paddingRight:10,paddingLeft:10,marginTop:10}}>
                        <View style={{height:80,justifyContent:'center',flexDirection:'row',alignItems:'flex-start',borderColor:'#eee',borderBottomWidth:1,borderStyle:'solid'}}>
                            <Text style={{color:'#929292',fontSize:14,width:80,paddingTop:15}}>备注：</Text>
                            <TextInput placeholder="输入具体位置或者标记原因" underlineColorAndroid='transparent'onChangeText={(text)=>this.setState({memo:text})} style={{flex:1,fontSize:16,color:'#565656'}} multiline={true}/>
                        </View>
                    </View>

                    <View style={{alignSelf:'flex-start',flexDirection:'row',paddingBottom:10,paddingTop:10}}>
                        <TouchableOpacity onPress={()=>this.openMycamera()} style={{}}>
                            <View style={{width:70,height:70,alignContent:'center',alignSelf:'center',justifyContent:'center',backgroundColor:'white',borderRadius:5,borderStyle:'solid',borderWidth:1,borderColor:'#c9c9c9'}}>
                                <Image style={{width:40,height:40,alignSelf:'center',justifyContent:'center'}} source={require('../../../image/add.png')}/>
                            </View>
                        </TouchableOpacity>

                        { this.state.imgs.length ==0 ? null :
                            <FlatList
                                horizontal={true}
                                data={this.state.imgs}
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
                    <TouchableOpacity style={styles.btnStyle} onPress={this.Submit.bind(this)}>
                        <Text style={styles.loginText}>标记处理</Text>
                    </TouchableOpacity>
                </ScrollView>
                <Toast ref="toast" opacity={0.8}
                       position='top'
                       positionValue={300}
                       fadeInDuration={750}
                       fadeOutDuration={2000}/>
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
        let a="";
        var list=this.state.imgs;

        var result=[];
        for (let i=0;i<list.length;i++){
            if(list[i].index!==index1){
                result.push(list[i]);
            }

        }

        this.setState({
            imgs:result
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

                let list=this.state.imgs;
                list.push(source);
                this.setState({
                    imgs: list
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
let data=            {
    carNo :this.state.carNo,
    carOwner :this.state.carOwner,
    carPhone:this.state.carPhone,
    imgs:this.state.imgs,
    memo:this.state.memo ,
};
        FetchUtil.postJSON(AppJson.url+"/app/illegallyPark/v1/save",
            {
                illegallyPark:JSON.stringify(data)
            },(responseJSON)=>{
            if(responseJSON.code==200){//成功
                that.refs.toast.show("提交成功");
                setTimeout(()=>{
                    that.props.navigation.state.params.refresh();
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

