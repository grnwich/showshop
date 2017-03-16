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
                    <Text style={[styles.textTitleStyle,{color:this.props.titleColor}]}>
                        {this.props.title}
                    </Text>
                    <Text style={[{color:this.props.secondTitleColor},styles.textSubTitleStyle]}>
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
        flexDirection:'row',
        height:55,
        borderColor:'#dfdfdf',
        alignItems:'center',
        borderTopWidth:1,
        borderLeftWidth:1

    },
    textTitleStyle:{
        // ,
        marginLeft:10,
        fontSize:15
    },
    textSubTitleStyle:{
        marginLeft:10,
        fontSize:13,
        marginTop:5
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
        right:5
    }
});
module.exports=GHomeCenterCellView;

