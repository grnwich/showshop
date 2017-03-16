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
    TextInput,
    Image,
    TouchableOpacity,
    Platform,
    ScrollView
} from 'react-native';
var HomeDetail=require('./HomeDetail');
var Dimensions=require('Dimensions');
var {width}=Dimensions.get('window');
var GHomeNavBarView=require('./GHomeNavBarView');
var GHomeTopView=require('./GHomeTopView');
var GHomeMiddleView=require('./GHomeMiddleView');
var GHomeShopCenterView=require('./GHomeShopCenterView');


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
               <GHomeNavBarView></GHomeNavBarView>
                <ScrollView>
                    <GHomeTopView></GHomeTopView>
                    <GHomeMiddleView ></GHomeMiddleView>
                    <GHomeShopCenterView></GHomeShopCenterView>
                </ScrollView>
            </View>
        );
    }
});
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8',
    },


});
module.exports=GHome;
