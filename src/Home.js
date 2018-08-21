import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,ScrollView,Image,TouchableOpacity,StatusBar
} from 'react-native';

export default class Home extends Component {
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
                            <CubicFunc text="报修" >
                            </CubicFunc>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('QianFei')}>
                            <CubicFunc text="欠费管理">
                            </CubicFunc>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Demo2')}>
                            <CubicFunc text="宝石">
                            </CubicFunc>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Demo2')}>
                            <CubicFunc text="宝石">
                            </CubicFunc>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Demo2')}>
                            <CubicFunc text="宝石">
                            </CubicFunc>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
                <View></View>
                <View style={{marginLeft:10,marginBottom:15}}>
                    <Text style={styles.title}>保安</Text>
                    <View style={{flexDirection:'row'}}>
                        <LRFunc source={require('../image/ic_home.png')} text="抄水表"></LRFunc>
                        <LRFunc source={require('../image/ic_home.png')} text="抄电表"></LRFunc>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <LRFunc2 source={require('../image/ic_home.png')} text="设备巡检"></LRFunc2>
                        <LRFunc2 source={require('../image/ic_home.png')} text="设备维修"></LRFunc2>
                        <LRFunc2 source={require('../image/ic_home.png')} text="维修派工"></LRFunc2>
                    </View>
                </View>
                <View style={{marginLeft:10,marginBottom:15}}>
                    <Text style={styles.title}>招商租赁</Text>
                    <View style={{flexDirection:'row'}}>
                        <LRFunc source={require('../image/ic_home.png')} text="资源管理"></LRFunc>
                        <LRFunc source={require('../image/ic_home.png')} text="客户管理"></LRFunc>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <LRFunc source={require('../image/ic_home.png')} text="合同管理"></LRFunc>
                        <LRFunc source={require('../image/ic_home.png')} text="运营管理"></LRFunc>
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
                <Text style={{fontSize:16,textAlign:'center',paddingLeft:30}}>{this.props.text}</Text>
                <Image source={this.props.source} style={{width:50,height:50,marginRight:10}}></Image>
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
    title:{
        fontSize:20,
        color:'black',
        paddingTop:20,paddingBottom:10
    },
    LRFunc:{
        borderRadius:3,
        height:80,
        width:80,
        textAlign:"center",
        justifyContent:'space-between',
        alignItems:'center',
        borderWidth:1,
        borderStyle:'solid',
        borderColor:'#c3c3c3',
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
        borderColor:'#c3c3c3',
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
        borderColor:'#c3c3c3',
        marginRight:5,

    }
});