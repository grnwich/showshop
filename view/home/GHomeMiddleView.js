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
                <View style={styles.containerRightStyle}>
                    <Image source={{uri:MiddleData.dataLeft.img1}} style={styles.image1Style}></Image>
                    <Image source={{uri:MiddleData.dataLeft.img2}} style={styles.image1Style}></Image>
                    <Text>{MiddleData.dataLeft.title}</Text>
                    <View style={styles.priceStyle}>
                        <Text>{MiddleData.dataLeft.price}</Text>
                        <Text>{MiddleData.dataLeft.sale}</Text>
                    </View>
                </View>
                <View>
                    {this.renderMiddleRight()}
                </View>
            </View>

        );
    },
    renderMiddleRight(){
        var rightView=[];
        for(let i=0;i<MiddleData.dataRight.length;i++){
            let ItemData=MiddleData.dataRight[i];
            rightView.push(
                <GHomeCenterCellView key={i}
                    title={ItemData.title}
                    titleColor={ItemData.titleColor}
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
        borderWidth:0.5,
        flexDirection:'row',

},
    containerRightStyle:{
        width:(width/2)-1,
    },
    image1Style:{
        width:40,
        height:20

    },
    image2Style:{
        width:40,
        height:20
    },
    priceStyle:{
        flexDirection:'row'
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
