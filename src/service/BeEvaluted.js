import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,ScrollView,Image,RefreshControl,Button
} from 'react-native';

export default class Demo1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRefreshing: false,
            loaded: 0,
            rowData:[]
        };
    }

    render() {
        var rows = this.state.rowData.map((row) => {
            return <View><Text>{row.Text}</Text></View>;
        });

        if(rows==""){
            rows=<View><Image source={require('../../image/empty.png')} style={{width:40,height:40,marginTop:50,alignSelf:'center'}}/>
                <Text style={{fontSize:12,textAlign:'center',color:'#929292',paddingTop:10}}>没有更多数据了</Text></View>;
        }

        return (
            <ScrollView refreshControl={  //设置下拉刷新组件
                <RefreshControl
                    refreshing={this.state.isRefreshing}
                    onRefresh={this.onRefresh.bind(this)}  //(()=>this.onRefresh)或者通过bind来绑定this引用来调用方法
                    tintColor='red'
                    title= {'刷新中....'}
                />}>

                {rows}
            </ScrollView>
        )
    }
    onRefresh(){
        this.setState({
            isRefreshing:false,
            rowData:[{Text:1},{Text:2},{Text:3},]
        })
    }
}