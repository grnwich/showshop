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
    Image,
    ListView,
    TouchableOpacity
} from 'react-native';
var Dimensions=require('Dimensions');
var {width, height}=Dimensions.get('window');
var GTopListView=React.createClass({
    getDefaultProps(){
        return {
            dataArr:[]
        }
    },
    getInitialState(){
        const ds=new ListView.DataSource({rowHasChanged:(row1,row2)=>row1!==row2});
        return {
            dataSource:ds.cloneWithRows(this.props.dataArr)
        }
    },
    render() {
        return (
            <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderRow}
            contentContainerStyle={styles.contentViewStyle}
            >
            </ListView>
        );
    },
    go2List(){
       alert(0)
    },
    renderRow(rowData){
        return (
            <TouchableOpacity
                style={styles.touchableViewStyle}
                activeOpacity={0.7} onPress={()=>this.go2List()}>
                <View  style={styles.cellViewStyle}>
                    <Image source={{uri:rowData.image}} style={{width:52,height:52}}></Image>
                    <Text style={{fontSize:13,color:'gray'}}>{rowData.title}</Text>
                </View>
            </TouchableOpacity>
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
    contentViewStyle:{
        flexWrap:'wrap',
        flexDirection:'row',
        width: width-10,
        marginLeft:5,
        marginRight:5,
        marginTop:5
},
    touchableViewStyle:{
        width:(width-10)/5,
        height:70,
        marginTop:10
    },
    cellViewStyle:{

        alignItems:'center',
        justifyContent:'center',

    }
});
module.exports=GTopListView;
