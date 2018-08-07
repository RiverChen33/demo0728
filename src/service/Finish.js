import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class Demo1 extends Component {
    render() {
        return (
            <View>
                <Text onPress={() => this.props.navigation.navigate('Demo2')}>去Demo2</Text>
            </View>
        )
    };
}