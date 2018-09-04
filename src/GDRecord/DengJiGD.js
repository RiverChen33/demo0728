import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,ScrollView,FlatList,Image,StatusBar,TouchableOpacity
} from 'react-native';

export default class DengJiGD extends Component {

    static navigationOptions = (props)=> {
        return {
            headerTitle: '登记',
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
                    props.navigation.navigate("Mine")
                }}>
                    <Image style={{width:25,height:25,marginLeft:10}} source={require('../../image/back-icon.png')}/>
                </TouchableOpacity>
            </View>
        }

    }

    constructor(props) {
        super(props);
        this.state = {
            list: [{num: '201',class:'环境投诉',desc:'环境问题',location:'A幢-201',status:'已分派',time:'2018-12-12'},
                {num: '201',class:'环境投诉',desc:'环境问题',location:'A幢-201',status:'已分派',time:'2018-12-12'},
                {num: '201',class:'环境投诉',desc:'环境问题',location:'A幢-201',status:'已分派',time:'2018-12-12'},
                {num: '201',class:'环境投诉',desc:'环境问题',location:'A幢-201',status:'已分派',time:'2018-12-12'},
                {num: '201',class:'环境投诉',desc:'环境问题',location:'A幢-201',status:'已分派',time:'2018-12-12'},
                {num: '201',class:'环境投诉',desc:'环境问题',location:'A幢-201',status:'已分派',time:'2018-12-12'}],
            key:''
        }
    }

    render() {
        return (
            <ScrollView style={{backgroundColor:'#eaeaea',paddingBottom:20}}>
                <StatusBar
                    backgroundColor='#4083FF'
                    translucent={false}
                    hidden={false}
                    animated={true}
                />
                <FlatList
                    data={this.state.list}
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
                                <Image source={require('../../image/arrow.png')} style={{width:14,height:14}}></Image>
                            </View>
                        </View>}
                />

            </ScrollView>
        )
    };
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

