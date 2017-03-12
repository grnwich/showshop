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
var HomeDetail=require('./HomeDetail');

var GHome=React.createClass({
    pushToDetail(){
        this.props.navigator.push({
            component:HomeDetail,
            title:'详情界面'
        });
    },
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>this.pushToDetail()}>
                    <Text style={styles.instructions}>
                        首页
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
        backgroundColor: '#F5FCFF',

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
module.exports=GHome;
