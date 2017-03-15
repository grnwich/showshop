/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity,
    Platform
} from 'react-native';
var Dimensions=require('Dimensions');
var {width}=Dimensions.get('window');

var GHomeNavBarView=React.createClass({
    render() {
     return(
            <View style={styles.homeHearderStyle}>
                <TouchableOpacity activeOpacity={0.7}>
                    <Text style={styles.hearderTitleCityStyle}>广州</Text>
                </TouchableOpacity>

                <TextInput style={styles.headerInputStyle} placeholder={'输入商家，品类，商圈'}
                underlineColorAndroid={"transparent"}></TextInput>
                <View style={styles.hearderNaviRightIconStyle}>
                    <TouchableOpacity activeOpacity={0.7}>
                        <Image source={{uri:'icon_homepage_message'}} style={styles.navRightImgStyle}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7}>
                        <Image source={{uri:'icon_homepage_scan'}} style={styles.navRightImgStyle}></Image>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
});
const styles = StyleSheet.create({
    homeHearderStyle:{
        height:Platform.OS=='ios'?64:64,
        backgroundColor: 'rgba(255,96,34,1.0)',
        marginTop:Platform.OS=='ios'?0:0,
        justifyContent:'space-around',
        flexDirection:'row'
    },
    hearderNaviRightIconStyle:{
        height:Platform.OS=='ios'?64:64,
        flexDirection: 'row',
        marginTop:Platform.OS=='ios'?22:26,

    },
    hearderTitleCityStyle:{
        color:'white',
        marginLeft:10,
        marginTop:31,
    },
    navRightImgStyle:{
        width:25,
        height:25
    },
    headerInputStyle:{
        width:width*0.67,
        height:35,
        marginTop:Platform.OS=='ios'?18:23,
        backgroundColor:'white',
        borderRadius:17,
        fontSize:14,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop:5,
        alignItems:'center'

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
module.exports=GHomeNavBarView;
