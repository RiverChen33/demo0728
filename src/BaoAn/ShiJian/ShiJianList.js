import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,ScrollView,FlatList,Image,StatusBar,TextInput,TouchableOpacity
} from 'react-native';
import px2dp from '../../util';

var dimensions = require('Dimensions');
//获取屏幕的宽度
var {width} = dimensions.get('window');

export default class ShiJianList extends Component {
    static navigationOptions = (props)=> {
        return {
            headerTitle: '突发事件',
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
            list: [{id: '201', class: '楼内楼梯扶手、栏杆、窗台', date: '2018-01-05', status: '整改中'},
                {id: '202', class: '楼内楼梯扶手、栏杆、窗台', desc: '环境问题', date: '2018-01-05', status: '整改中'},
                {id: '203', class: 'qqqq', desc: '环境问题', date: '2018-01-05', status: '验收通过'},
                {id: '203', class: '环境投诉', desc: '环境问题', date: '2018-01-05', status: '验收通过'},
                {id: '203', class: '环境投诉', desc: '环境问题', date: '2018-01-05', status: '验收通过'},
                {id: '203', class: '环境投诉', desc: '环境问题', date: '2018-01-05', status: '验收通过'},
                {id: '203', class: '环境投诉', desc: '环境问题', date: '2018-01-05', status: '验收通过'},
                {id: '203', class: '环境投诉', desc: '环境问题', date: '2018-01-05', status: '验收通过'},
                {id: '203', class: '环境投诉', desc: '环境问题', date: '2018-01-05', status: '验收通过'},
                {id: '204', class: '环境投诉', desc: '环境问题', date: '2018-01-05', status: '整改中'}],
            key:'',
            dateSearch:new Date()
        }
    }


    render() {
        return (
            <View style={{flex:1}}>
                <View style={{height:50,backgroundColor:'white',paddingLeft:10,paddingRight:10,justifyContent:'center',width:width}}>
                    <View style={{height:35,backgroundColor:'white',borderColor:'#eee',borderWidth:1,borderStyle:'solid',borderRadius:5,flexDirection:'row',justifyContent:'center'}}>
                        <TextInput style={{alignSelf:'center',height:40,flex:1,fontSize:px2dp(12),fontColor:'#CECECE'}} placeholder={'请输入事件'} underlineColorAndroid='transparent' onChangeText={(text)=>this.setState({key:text})}/>
                        <TouchableOpacity onPress={()=>this.search()} style={{width:40,justifyContent:'center',paddingLeft:5,marginBottom:8,marginTop:8,borderColor:'#eee',borderLeftWidth:1,borderStyle:'solid',}}>
                            <Text style={{alignSelf:'center',fontSize:12,color:'#4083FF'}}>搜索</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{backgroundColor:'white',flexDirection:'row',alignContent:'center',height:40}}>
                    <TouchableOpacity onPress={()=>this.changeDate(-1)} style={{flex:1,paddingLeft:10,justifyContent:'center'}}>
                        <Text style={{flex:1,height:40,lineHeight:40}}>上个月</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.changeDate(1)} style={{flex:1}}>
                        <Text style={{flex:1,textAlign:'center',height:40,lineHeight:40}}>{this.state.dateSearch.getFullYear()+"年"+this.state.dateSearch.getMonth()+"月"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.changeDate(1)} style={{flex:1,paddingRight:10}}>
                        <Text style={{flex:1,textAlign:'right',height:40,lineHeight:40}}>下个月</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={{backgroundColor:'#eaeaea',paddingBottom:20}}>
                    <FlatList
                        data={[{num: '201',class:'环境投诉',desc:'环境问题',location:'A幢-201',status:'已分派',time:'2018-12-12'},{num: '201',class:'环境投诉',desc:'环境问题',location:'A幢-201',status:'已分派',time:'2018-12-12'},{num: '201',class:'环境投诉',desc:'环境问题',location:'A幢-201',status:'已分派',time:'2018-12-12'},{num: '201',class:'环境投诉',desc:'环境问题',location:'A幢-201',status:'已分派',time:'2018-12-12'},{num: '201',class:'环境投诉',desc:'环境问题',location:'A幢-201',status:'已分派',time:'2018-12-12'},{num: '201',class:'环境投诉',desc:'环境问题',location:'A幢-201',status:'已分派',time:'2018-12-12'}]}
                        renderItem={({item}) =>
                            <View style={styles.container}>
                                <View style={{flex:5}}>
                                     <View style={{flexDirection:'row',height:30}}>
                                         <Text style={{fontSize:16,lineHeight:30,width:60,}}>{item.num}</Text>
                                         <Text style={{fontSize:14,lineHeight:30,width:80,}}>{item.class}</Text>
                                         <Text style={{fontSize:14,lineHeight:30,width:140,}}>描述：{item.desc}</Text>
                                     </View>
                                    <View style={{flexDirection:'row',height:30}}>
                                        <Text style={{fontSize:14,lineHeight:30,width:180,}}>位置：{item.location}</Text>
                                    </View>
                                    <View style={{flexDirection:'row',height:30}}>
                                        <Text style={{fontSize:14,lineHeight:30,width:180,}}>{item.time}</Text>
                                    </View>
                                </View>
                                <View style={{flex:1,justifyContent:'center',}}>
                                    <Text style={{textAlign:'right'}}>已分配</Text>
                                </View>
                                <View style={{width:14,justifyContent:'center'}}>
                                    <Image source={require('../../../image/arrow.png')} style={{width:14,height:14}}></Image>
                                </View>
                            </View>}
                    />

                </ScrollView>
                <View style={{height:40,width:width,justifyContent:'center',flexDirection:"row"}}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate("ShiJianAdd")} style={{flexDirection:'row',justifyContent:'center',flex:1}}>
                        <View style={{height:40,justifyContent:'center',backgroundColor:'#4083FF',flex:1,flexDirection:'row'}}>
                            <Text style={{color:'white',alignSelf:'center'}}>登记事件</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    };

    changeDate=(num)=>{
        let date=this.state.dateSearch;
        date.setMonth(date.getMonth()+num);

        this.setState({
            dateSearch:date
        });
    }
}

const styles=StyleSheet.create({
    title:{
        fontSize:18,
        color:'black'
    },
    container:{
        margin:10,
        borderWidth:1,
        borderColor:'#eee',
        borderRadius:5,
        flexDirection:'row',
        flex:4,
        paddingLeft:10,
        paddingRight:10,
        marginBottom:0,
        backgroundColor:'white'
    }
})

