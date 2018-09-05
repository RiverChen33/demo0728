import React,{Component} from 'react';
import {
    AppRegistry,
    View,
    Text,
    StyleSheet,
    Platform,Toast,TouchableOpacity,Image
} from 'react-native';

import { QRScannerView } from 'ac-qrcode';

export default class DefaultScreen extends Component {
    static navigationOptions = (props)=> {
        return {
            headerTitle: '扫码',
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
                    <Image style={{width:25,height:25,marginLeft:10}} source={require('../image/back-icon.png')}/>
                </TouchableOpacity>
            </View>
        }

    }

    render() {
        return (
            < QRScannerView
                onScanResultReceived={this.barcodeReceived.bind(this)}
                 renderTopBarView={() => this._renderTitleBar()}
                 renderBottomMenuView={() => this._renderMenu()}
            />
        )
    }

    _renderTitleBar(){
        return(
            <Text
                style={{color:'white',textAlignVertical:'center', textAlign:'center',font:20,padding:12}}
            ></Text>
        );
    }

    _renderMenu() {
        return (
            <Text
                style={{color:'white',textAlignVertical:'center', textAlign:'center',font:20,padding:12}}
            ></Text>
        )
    }

    barcodeReceived(e) {
        alert('Type: ' + e.type + '\nData: ' + e.data);
    }
}


