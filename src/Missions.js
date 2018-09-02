import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,ScrollView,Image,TouchableOpacity,StatusBar,BackAndroid
} from 'react-native';


export default class Missions extends Component {
    static navigationOptions = {
        headerTitle: '我的任务',
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
            <ScrollView style={{backgroundColor:'#eaeaea'}} showsVerticalScrollIndicator={false} >
                <StatusBar
                    backgroundColor='#4083FF'
                    translucent={false}
                    hidden={false}
                    animated={true}
                />
                <View style={{flexDirection:'row',flex:1,marginLeft:10,marginRight:10,marginBottom:15,marginTop:15,height:120}}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('BarCode')} style={{flex:1,borderRadius:3,}}>
                        <LRFunc source={require('../image/qrcode2.png')} text="扫一扫"></LRFunc>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('DianBiaoList')} style={{flex:1}}>
                        <LRFunc source={require('../image/opendoor.png')} text="一键开门"></LRFunc>
                    </TouchableOpacity>
                </View>
                <View style={styles.container}>
                    <View>
                        <Text style={{fontSize:18,fontWeight:'600'}}>待办任务</Text>
                    </View>
                    <View style={{flexDirection:'row',height:50,borderStyle:'solid',borderColor:'#eee',borderBottomWidth:1}}>
                        <View style={{flex:5,flexDirection:'row',justifyContent:'space-between'}}>
                            <View style={{flexDirection:'row',height:50,alignItems:'center'}}>
                                <Text style={{fontSize:16,lineHeight:50,color:'#383838',alignSelf:'center'}}>业主服务</Text>
                            </View>
                            <View style={{flexDirection:'row',height:20,alignItems:'center',width:40,backgroundColor:'#4083FF',borderRadius:8,alignSelf:'center',justifyContent:'center'}}>
                                <Text style={{fontSize:16,lineHeight:20,color:'white'}}>11</Text>
                            </View>
                        </View>
                        <View style={{width:35,justifyContent:'center'}}>
                            <Image style={{width:16,height:16,alignSelf:'flex-end'}} source={require('../image/arrow.png')}/>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',height:50,borderStyle:'solid',borderColor:'#eee',borderBottomWidth:1}}>
                        <View style={{flex:5,flexDirection:'row',justifyContent:'space-between'}}>
                            <View style={{flexDirection:'row',height:50,alignItems:'center'}}>
                                <Text style={{fontSize:16,lineHeight:50,color:'#383838',alignSelf:'center'}}>业主服务</Text>
                            </View>
                            <View style={{flexDirection:'row',height:20,alignItems:'center',width:40,backgroundColor:'#4083FF',borderRadius:8,alignSelf:'center',justifyContent:'center'}}>
                                <Text style={{fontSize:16,lineHeight:20,color:'white'}}>11</Text>
                            </View>
                        </View>
                        <View style={{width:35,justifyContent:'center'}}>
                            <Image style={{width:16,height:16,alignSelf:'flex-end'}} source={require('../image/arrow.png')}/>
                        </View>
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
                <Image source={require('../image/ic_home.png')} style={{width:30,height:30}}></Image>
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
                <View style={{flex:1,justifyContent:'center'}}>
                    <Image source={this.props.source} style={{width:50,height:50,alignSelf:'center'}}></Image>
                </View>
                <Text style={{fontSize:14,color:'#565656',height:30,justifyContent:'center',alignSelf:'center',backgroundColor:'white'}}>
                    {this.props.text}
                </Text>
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
                <Image source={this.props.source} style={{width:40,height:40}}></Image>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        borderBottomWidth:1,
        borderColor:'#eee',
        flex:4,
        paddingLeft:10,
        paddingRight:10,
        backgroundColor:'white',
        paddingTop:10
    },
    title:{
        fontSize:20,
        color:'black',
        paddingTop:20,paddingBottom:10
    },
    LRFunc:{
        height:100,
        textAlign:"center",
        justifyContent:'center',
        alignItems:'center',
        borderStyle:'solid',
        borderColor:'#eee',
        flex:1,
        marginLeft:3,
        marginRight:3,
        backgroundColor:'white',

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