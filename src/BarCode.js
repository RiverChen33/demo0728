import React,{Component} from 'react';
import BarcodeScanner from 'react-native-barcode-scanner-universal'
import {
    AppRegistry,
    View,
    Text,
    StyleSheet,
    Platform,
} from 'react-native';

export default class BarCode extends Component {
    static navigationOptions = {
        headerTitle: '二维码扫码Demo',
    };

    constructor(props) {
        super(props);
        this.state = {
            code: "None"
        };
        this._show = this._show.bind(this);
    }


    render() {
        let scanArea = null;
        if (Platform.OS === 'ios') {
            scanArea = (
                <View style={styles.rectangleContainer}>
                    <View style={styles.rectangle} />
                </View>
            )
        }
        return (
//官方demo上BarcodeScanner外面还包了层View,但是会有一个问题,看不到相机页面,但是扫码正常,后面我就直接把BarcodeScanner外层的View给掉了,结果就好了
            <BarcodeScanner
                onBarCodeRead={ (code) => this._show(code)}
                style={styles.camera}>
                {scanArea}
            </BarcodeScanner>
        )
    }

    _show(val) {
        this.setState({
            code:val.data,

        });
        alert(val.data);
    }


};

var styles = StyleSheet.create({
    camera: {
        flex: 1,
        marginTop:0,
    },
    rectangleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    rectangle: {
        height: 250,
        width: 250,
        borderWidth: 2,
        borderColor: '#00FF00',
        backgroundColor:'transparent',


    }
})

var Dimensions = require('Dimensions');
var widthd = Dimensions.get('window').width;
var height  = Dimensions.get('window').height;

