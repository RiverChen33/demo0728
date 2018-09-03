import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView,FlatList,Image,TouchableOpacity
} from 'react-native';
var dimensions = require('Dimensions');
//获取屏幕的宽度
var {width} = dimensions.get('window');

export default class JianChaList extends Component {
    static navigationOptions = (props)=> {
        return {
            headerTitle: '品质检查',
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

    componentWillMount() {                    //通过setParams将increase方法绑定到_increase
    }

    constructor(props) {
        super(props);
        this.state = {
            list: [{id: '201', class: '楼内楼梯扶手、栏杆、窗台', date: '2018-01-05', status: '考评中'},
                {id: '202', class: '楼内楼梯扶手、栏杆、窗台', desc: '环境问题', date: '2018-01-05', status: '整改中'},
                {id: '203', class: '环境投诉', desc: '环境问题', date: '2018-01-05', status: '验收通过'},
                {id: '203', class: '环境投诉', desc: '环境问题', date: '2018-01-05', status: '验收通过'},
                {id: '203', class: '环境投诉', desc: '环境问题', date: '2018-01-05', status: '验收通过'},
                {id: '203', class: '环境投诉', desc: '环境问题', date: '2018-01-05', status: '验收通过'},
                {id: '203', class: '环境投诉', desc: '环境问题', date: '2018-01-05', status: '验收通过'},
                {id: '203', class: '环境投诉', desc: '环境问题', date: '2018-01-05', status: '验收通过'},
                {id: '203', class: '环境投诉', desc: '环境问题', date: '2018-01-05', status: '验收通过'},
                {id: '204', class: '环境投诉', desc: '环境问题', date: '2018-01-05', status: '整改中'}]
        }
    }

    render() {
        return (
            <ScrollView style={{flex:1,position:'relative'}}>
                <FlatList
                    extraData={this.state}
                    data={this.state.list}
                    renderItem={({item,index}) =>
                        <View style={styles.container}>
                            <View style={{height:50}}>
                                <View style={{flexDirection:'row',height:50,alignContent:'center',borderColor:'#eee',borderBottomWidth:1,borderStyle:'solid'}}>
                                    <Text style={{fontSize:16,lineHeight:50,fontWeight:'600',color:'#565656'}}>{item.class}</Text>
                                </View>
                            </View>
                            <TouchableOpacity onPress={()=>{this.props.navigation.navigate("JCCheckDetail",{id:item.id})}}>
                                <View style={{justifyContent:'center',flexDirection:'row',flex:1}}>
                                    <View style={{flex:1}}>
                                        <Text style={{fontSize:16,lineHeight:40,fontWeight:'600'}}>{item.class}</Text>
                                       <Text style={{textAlign:'center',color:'red',height:20,width:60,borderRadius:5,borderWidth:1,borderColor:'red',borderStyle:'solid'}}>{item.status}</Text>
                                    </View>
                                    <View style={{width:65,justifyContent:'center'}}>
                                        <Image style={{width:16,height:16,alignSelf:'flex-end'}} source={require('../../../image/arrow.png')}/>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                        }
                />
            </ScrollView>
        )
    };

    add=()=>{
        this.props.navigation.navigate("CheckList");
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
        flex:4,
        paddingLeft:10,
        paddingRight:10,
        marginBottom:0,




        backgroundColor:'white',
        paddingBottom:10
    }
})