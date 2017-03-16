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
 var GHomeCenterCellView=require('./GHomeCenterCellView');
 var MiddleData=require('../../LocalData/HomeTopMiddleLeft.json');
var Dimensions=require('Dimensions');
var {width}=Dimensions.get('window');
var GHomeMiddleView=React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {this.rnderMiddleLeft()}
                <View style={{borderBottomWidth:1,borderColor:'#dfdfdf'}}>
                    {this.renderMiddleRight()}
                </View>
            </View>

        );
    },
    rnderMiddleLeft(){
        var leftView=[];
        for(let i=0;i<MiddleData.dataLeft.length;i++){
            let itemData=MiddleData.dataLeft[i];
            leftView.push(
                <View key={i} style={styles.containerLeftStyle}>
                    <Image source={{uri:itemData.img1}} style={styles.image1Style}></Image>
                    <Image source={{uri:itemData.img2}} style={styles.image1Style}></Image>
                    <Text style={styles.leftTitleStyle}>{itemData.title}</Text>
                    <View style={styles.priceStyle}>
                        <Text style={styles.leftPriceStyle}>{itemData.price}</Text>
                        <Text style={styles.leftSellStyle}>{itemData.sale}</Text>
                    </View>
                </View>
            );
        }
        return leftView;
    },
    renderMiddleRight(){
        var rightView=[];
        for(let i=0;i<MiddleData.dataRight.length;i++){
            let ItemData=MiddleData.dataRight[i];
            rightView.push(
                <GHomeCenterCellView key={i}
                    title={ItemData.title}
                    titleColor={ItemData.titleColor}
                                     secondTitleColor={'gray'}
                    secondTitle={ItemData.subTitle}
                    iconImage={ItemData.rightImage}
                ></GHomeCenterCellView>
            );

        }
        return rightView;
    }
});
// {"title" : "天天特价", "subTitle" : "特惠不打烊", "rightImage" : "tttj", "titleColor": "orange"},
// title:'',
//     titleColor: '',
//     iconImage:'',
//     secondTitle:'',
//     secondTitleColor:''
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginTop:10,
        borderColor:'#dfdfdf',
        flexDirection:'row',


},
    leftTitleStyle:{
        color:'gray',
        fontSize:13,
        marginTop:6
    },
    leftPriceStyle:{
        color:'green',
        fontSize:12
    },
    leftSellStyle:{
        color:'red',
        fontSize:12,
        backgroundColor:'yellow'
    },
    containerLeftStyle:{
        width:(width/2),
        height:111,
        alignItems:'center',
        borderColor:'#dfdfdf',
        borderTopWidth:1,
        borderBottomWidth:1


    },
    image1Style:{
        width:70,
        height:20,
        marginTop:10

    },
    image2Style:{
        width:70,
        height:30,
        marginTop:7
    },
    priceStyle:{
        flexDirection:'row',
        marginTop:7
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
module.exports=GHomeMiddleView;
