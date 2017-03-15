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
    Image
} from 'react-native';
var Dimensions=require('Dimensions');
var {width}=Dimensions.get('window');
var GHomeCenterCellView=React.createClass({
    getDefaultProps(){
        return {
            title:'',
            titleColor: '',
            iconImage:'',
            secondTitle:'',
            secondTitleColor:''
        }
    },
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textContentStyle}>
                    <Text style={styles.textTitleStyle}>
                        {this.props.title}
                    </Text>
                    <Text style={styles.textSecondTitleStyle}>
                        {this.props.secondTitle}
                    </Text>
                </View>
                <Image style={styles.rightImageStyle} source={{uri:this.props.iconImage}}>
                </Image>
            </View>
        );
    }
});
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        width:(width/2)-1,
        flexDirection:'row'

    },
    textTitleStyle:{
        // color:this.props.titleColor,
    },
    textSecondTitleStyle:{
        // color:this.props.secondTitleColor,
    },
    textContentStyle:{

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
    rightImageStyle:{
        width:60,
        height:30,
        position:'absolute',
        right:10
    }
});
module.exports=GHomeCenterCellView;

