import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView,FlatList,Image,TouchableOpacity,TextInput
} from 'react-native';
import px2dp from '../../util';

var dimensions = require('Dimensions');
//获取屏幕的宽度
var {width} = dimensions.get('window');

export default class ResourceList extends Component {
    static navigationOptions = (props)=> {
        return {
            headerTitle: '资源管理',
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

    constructor(props) {
        super(props);
        this.state = {
            list: [{id: '201', class: '老王', date: '13516845242', status: '个人'},
                {id: '202', class: '张三', desc: '环境问题', date: '13516845242', status: '个人'},
                {id: '203', class: '李四', desc: '环境问题', date: '13516845242', status: '个人'},
                {id: '201', class: '老王', date: '13516845242', status: '个人'},
                {id: '202', class: '张三', desc: '环境问题', date: '13516845242', status: '个人'},
                {id: '203', class: '李四', desc: '环境问题', date: '13516845242', status: '个人'}],
            key:''
        }
    }

    render() {
        return (
            <View style={{flex:1}}>
                <View style={{height:50,backgroundColor:'white',paddingLeft:10,paddingRight:10,justifyContent:'center',width:width}}>
                    <View style={{height:35,backgroundColor:'white',borderColor:'#eee',borderWidth:1,borderStyle:'solid',borderRadius:5,flexDirection:'row',justifyContent:'center'}}>
                        <TextInput style={{alignSelf:'center',height:40,flex:1,fontSize:px2dp(12),fontColor:'#CECECE'}} placeholder={'请输入客户姓名/手机号'} underlineColorAndroid='transparent' onChangeText={(text)=>this.setState({key:text})}/>
                        <TouchableOpacity onPress={()=>this.search()} style={{width:40,justifyContent:'center',paddingLeft:5,marginBottom:8,marginTop:8,borderColor:'#eee',borderLeftWidth:1,borderStyle:'solid',}}>
                            <Text style={{alignSelf:'center',fontSize:12,color:'#4083FF'}}>搜索</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView style={{flex:1,position:'relative',marginTop:10}}>
                    <FlatList
                        extraData={this.state}
                        data={this.state.list}
                        renderItem={({item,index}) =>
                            <TouchableOpacity onPress={()=>{this.props.navigation.navigate("ResourceDetail");}}>
                                <View style={styles.container}>
                                    <View style={{flex:5}}>
                                        <View style={{flexDirection:'row',height:40,alignItems:'center'}}>
                                            <Text style={{fontSize:16,lineHeight:40,color:'#383838',alignSelf:'center'}}>{item.class}</Text>
                                        </View>
                                        <View style={{flexDirection:'row',height:40,alignItems:'center'}}>
                                            <Text style={{fontSize:16,lineHeight:40,color:'#383838'}}>{item.date}</Text>
                                        </View>
                                    </View>
                                    <View style={{width:65,justifyContent:'center'}}>
                                        <Image style={{width:16,height:16,alignSelf:'flex-end'}} source={require('../../../image/arrow.png')}/>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        }
                    />
                </ScrollView>
                {/*<View style={{height:40,width:width,justifyContent:'center',flexDirection:"row"}}>*/}
                    {/*<TouchableOpacity onPress={()=>this.props.navigation.navigate("CustomerAdd")} style={{flexDirection:'row',justifyContent:'center',flex:1}}>*/}
                        {/*<View style={{height:40,justifyContent:'center',backgroundColor:'#4083FF',flex:1}}>*/}
                            {/*<Text style={{color:'white',alignSelf:'center'}}>新增客户</Text>*/}
                        {/*</View>*/}
                    {/*</TouchableOpacity>*/}
                {/*</View>*/}
            </View>
        );
    };
    search=()=>{
        let key=this.state.key;
        let list=this.state.list;

        let list2=list.filter(function(e){return e.class==key;});

        this.setState({list:list2});

    };
}


const styles=StyleSheet.create({
    title:{
        fontSize:18,
        color:'black'
    },
    container:{
        borderBottomWidth:1,
        borderColor:'#eee',
        flexDirection:'row',
        flex:4,
        paddingLeft:10,
        paddingRight:10,




        backgroundColor:'white'
    }
})