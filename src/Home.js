import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,ScrollView,Image,TouchableOpacity,StatusBar,BackAndroid,Alert
} from 'react-native';


export default class Home extends Component {
    static navigationOptions = {
        headerTitle: '首页',
        gestureResponseDistance: {horizontal: 300},
        headerBackTitle: null,
        headerStyle: {backgroundColor: '#4083FF',height:60},//导航栏的样式
        headerTitleStyle: {

            color: 'white',
            //设置标题的大小
            fontSize: 16,
            //居中显示
            alignSelf: 'center',
            textAlign:'center',
        },
        headerRight:<View/>,
        headerLeft:<View/>,
    }

    // componentWillMount() {
    //     if (Platform.OS === 'android') {
    //         BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
    //     }
    // }
    // componentWillUnmount() {
    //     if (Platform.OS === 'android') {
    //         BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
    //     }
    // }
    // onBackAndroid = () => {
    //     const routeName=this.props.navigation.state.routeName;
    //
    //     if(routeName=="LoginView"||routeName=="Home"||routeName=="Mine"){
    //
    //     }
    //
    //     const nav = this.navigation;
    //     const routers = nav.getCurrentRoutes();
    //     if (routers.length > 1) {
    //         nav.pop();
    //         return true;
    //     }
    //     return false;
    // };

    render() {
        return (
            <ScrollView style={{backgroundColor:'white'}} showsVerticalScrollIndicator={false} >
                <StatusBar
                    backgroundColor='#4083FF'
                    translucent={false}
                    hidden={false}
                    animated={true}
                />
                <View style={{marginLeft:10,marginBottom:15}}>
                    <Text style={styles.title}>服务中心</Text>
                    <ScrollView style={{backgroundColor:'white'}} horizontal={true} showsHorizontalScrollIndicator={false}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('BaoShi')}>
                            <CubicFunc source={require('../image/baoshi.png')} text="报修" >
                            </CubicFunc>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('QianFei')}>
                            <CubicFunc source={require('../image/qianfei.png')} text="欠费管理">
                            </CubicFunc>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('ZhuHuList')}>
                            <CubicFunc source={require('../image/zhuhu.png')} text="住户管理">
                            </CubicFunc>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('KaoPinList')}>
                            <CubicFunc source={require('../image/ic_home.png')} text="品质考评">
                            </CubicFunc>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('JianChaList')}>
                            <CubicFunc source={require('../image/ic_home.png')} text="品质检查">
                            </CubicFunc>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('ZhengGai')}>
                            <CubicFunc source={require('../image/ic_home.png')} text="品质整改">
                            </CubicFunc>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
                <View style={{marginLeft:10,marginBottom:15,marginRight:10}}>
                    <Text style={styles.title}>保安</Text>
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('ChaYan')} style={{flex:1}}>
                            <LRFunc2 source={require('../image/chayan.png')} text="访客查验"></LRFunc2>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('WeiTingList')} style={{flex:1}}>
                            <LRFunc2 source={require('../image/weiting.png')} style={{width:48,height:30}} text="车辆违停"></LRFunc2>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('ShiJianList')} style={{flex:1}}>
                            <LRFunc2 source={require('../image/baoxiu.png')} text="上报事件"></LRFunc2>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{marginLeft:10,marginBottom:15,marginRight:10}}>
                    <Text style={styles.title}>工程人员</Text>
                    <View style={{flexDirection:'row',flex:1}}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('ShuiBiaoList')} style={{flex:1}}>
                            <LRFunc source={require('../image/shuibiao.png')} text="抄水表"></LRFunc>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('DianBiaoList')} style={{flex:1}}>
                            <LRFunc source={require('../image/dianbiao.png')} text="抄电表"></LRFunc>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('XunJianList')} style={{flex:1}}>
                            <LRFunc2 source={require('../image/xunjian.png')} style={{width:32,height:40}} text="设备巡检"></LRFunc2>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('WeiXiuTab')} style={{flex:1}}>
                            <LRFunc2 source={require('../image/weixiu.png')} text="设备维修"></LRFunc2>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Tab4')} style={{flex:1}}>
                            <LRFunc2 source={require('../image/paigong.png')} text="维修派工"></LRFunc2>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{marginLeft:10,marginBottom:15,marginRight:10}}>
                    <Text style={styles.title}>招商租赁</Text>
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('ResourceList')} style={{flex:1}}>
                            <LRFunc source={require('../image/ic_home.png')} text="资源管理"></LRFunc>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('CustomerList')} style={{flex:1}}>
                            <LRFunc source={require('../image/ic_home.png')} text="客户管理"></LRFunc>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Tab4')} style={{flex:1}}>
                            <LRFunc source={require('../image/ic_home.png')} text="合同管理"></LRFunc>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Tab4')} style={{flex:1}}>
                            <LRFunc source={require('../image/ic_home.png')} text="运营管理"></LRFunc>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        )
    };
}

class CubicFunc extends  Component{
    constructor(prop){
        super(prop);
    }
    render(){
        return (
            <View style={styles.cubic}>
                <Image source={this.props.source}  style={{width:30,height:30,marginBottom:10,marginTop: 10}}></Image>
                <Text>{this.props.text}</Text>
            </View>
        )
    }
}

class LRFunc extends Component{
    constructor(prop){
        super(prop);
    }

    render(){
        return(
            <View style={styles.LRFunc}>
                <Text style={{fontSize:16,textAlign:'center',paddingLeft:30}}>{this.props.text}</Text>
                <Image source={this.props.source} style={{width:50,height:50,marginRight:10,marginBottom:10,marginTop: 10}}></Image>
            </View>
        )
    }
}

class LRFunc2 extends Component{
    constructor(prop){
        super(prop);
    }

    render(){
        return(
            <View style={styles.LRFunc2}>
                <Text style={{fontSize:16,textAlign:'center'}}>{this.props.text}</Text>
                <Image source={this.props.source} style={[{width:40,height:40,marginBottom:10,marginTop: 10},this.props.style]}></Image>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    title:{
        fontSize:20,
        color:'black',
        paddingTop:20,paddingBottom:10
    },
    LRFunc:{
        borderRadius:3,
        height:80,
        textAlign:"center",
        justifyContent:'space-between',
        alignItems:'center',
        borderWidth:1,
        borderStyle:'solid',
        borderColor:'#eee',
        flexDirection:'row',
        flex:1,
        margin:3,
        backgroundColor:'#f7f9fb'
    },
    LRFunc2:{
        borderRadius:3,
        height:100,
        textAlign:"center",
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderStyle:'solid',
        borderColor:'#eee',
        flex:1,
        margin:3,
        backgroundColor:'#f7f9fb'
    },
    cubic:{
        borderRadius:5,
        height:80,
        width:80,
        textAlign:"center",
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderStyle:'solid',
        borderColor:'#eee',
        marginRight:5,

    }
});