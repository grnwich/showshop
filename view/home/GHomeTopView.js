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
    ListView,
    ScrollView
} from 'react-native';
var Dimensions=require('Dimensions');
var {width, height}=Dimensions.get('window');
var GTopListView=require('./GTopListView');
var topData=require('../../LocalData/TopMenu.json');

var GHomeTopView=React.createClass({
    getInitialState(){
        return {
            activePage:0
        }

    },
    render() {
        return (
            <View style={styles.container}>
          <ScrollView style={styles.topViewStyle}
          horizontal={true}
                      pagingEnabled={true}
                      keyboardDismissMode="on-drag"
                      showsHorizontalScrollIndicator={false}
                      alwaysBounceHorizontal={true}
                      onMomentumScrollEnd={this.onAnimationEnd}
          >
              {this.renderScrollItem()}
          </ScrollView>
                <View style={styles.topViewScrollViewIndicatorStyle}>{this.rednderIndicator()}</View>
            </View>
        );
    },
    onAnimationEnd(e){
        var offSetX=e.nativeEvent.contentOffset.x;
        var currentPage=Math.floor(offSetX/width);
        console.log("..................>>"+currentPage);
        this.setState({
            activePage:currentPage
        });
    },
    renderScrollItem(){
        var itemArr=[];
        for(let i=0;i<topData.data.length;i++){
            itemArr.push(
             <GTopListView key={i} dataArr={topData.data[i]}></GTopListView>
            );
        }
        return itemArr;
    },
    rednderIndicator(){
        var itemArr=[];
        var colorArr=['red','green'], style;
        for(let i=0;i<topData.data.length;i++){
            style=(i==this.state.activePage)?{color:'orange'}:{color:'gray'};
            itemArr.push(
                <Text key={i} style={[{fontSize:25},style]}>
                    &bull;
                </Text>
            );
        }
        return itemArr;
    }
});
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',

    },
    topViewStyle:{
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
    topViewScrollViewIndicatorStyle:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    }
});
module.exports=GHomeTopView;
