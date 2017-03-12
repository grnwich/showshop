/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

var HomeDetail=React.createClass({
    popToHomePage(){
        this.props.navigator.pop();
    },
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>this.popToHomePage()}>
                    <Text style={styles.webView}>
                        详情页面
                    </Text>
                </TouchableOpacity>

            </View>
        );
    }
});
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',

    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
module.exports=HomeDetail;
