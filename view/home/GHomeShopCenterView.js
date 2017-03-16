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
 var HomeTopMiddle=require('../../LocalData/HomeTopMiddle.json');
 var ShopCenterShops=require('../../LocalData/ShopCenterShops.json');
var Dimensions=require('Dimensions');
var {width}=Dimensions.get('window');
var GHomeShopCenterView=React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {this.renderShopCenterTopView()}

            </View>

        );
    },
    renderShopCenterTopView(){
        var leftView=[];
        for(let i=0;i<HomeTopMiddle.data.length;i++){
            let itemData=HomeTopMiddle.data[i];
            leftView.push(
                <View key={i}  style={styles.shopCenterTopViewStyle}>
                    <View style={styles.leftCenterTopViewStyle}>
                        <Text style={{fontSize:18,color:'red'}}>{itemData.title}</Text>
                        <Text style={{fontSize:14,color:'gray',marginTop:10}}>{itemData.subTitle}</Text>
                    </View>
                        <Image
                            source={{uri:itemData.image}}
                            style={{width:90,height:40,position:'absolute',right:10}}>
                        </Image>
                </View>


            );
        }
        return leftView;
    },
    renderShopCenterBottomView(){
        var bottomView=[];
        for(let i=0;i<ShopCenterShops.data.length;i++){
            let itemData=ShopCenterShops.data[i];
            bottomView.push(
                <GHomeCenterCellView key={i}
                                     title={itemData.shopName}
                                     titleColor={itemData.titleColor}
                                     secondTitleColor={'gray'}
                                     secondTitle={itemData.subTitle}
                                     iconImage={itemData.rightImage}
                ></GHomeCenterCellView>
            );
        }
        return bottomView;
    }
});
// "shopImage" : "kd",
//     "shopName" : "凯德广场·云尚",
//     "saleCount": 22
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
        flexDirection:'row',

},
    shopCenterTopViewStyle:{
        width:width,
        borderColor:'#dfdfdf',
        borderTopWidth:1,
        flexDirection:'row',
        paddingTop:10,
        paddingLeft:20,
        paddingBottom:10,
        alignItems:'center'
    },
    leftCenterTopViewStyle:{

    },
    rightCenterTopViewStyle:{

    }
});
module.exports=GHomeShopCenterView;
