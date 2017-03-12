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
    Platform,
    Navigator
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

var Home=require('../home/GHome');
var Mine=require('../mine/GMine');
var More=require('../more/GMore');
var Shop=require('../shop/GShop');


var GMain=React.createClass({
    getInitialState(){
        return {
            selectedTab:'home'
        }
    },
    tabItemView(iconTitle,componentName,selectedTabName,component,renderIcon,renderSelectedIcon){
       return (
           <TabNavigator.Item
               selected={this.state.selectedTab ===selectedTabName}
               title={iconTitle}
               selectedTitleStyle={styles.selectedTitleStyle}
               renderIcon={() => <Image source={{uri:renderIcon}} style={styles.iconStyle}/>}
               renderSelectedIcon={() => <Image source={{uri:renderSelectedIcon}} style={styles.iconStyle} />}
               onPress={() => this.setState({ selectedTab: selectedTabName})}>
               <Navigator
                   initialRoute={{name:componentName,component:component}}
                   configureScene={()=>{
                             return Navigator.SceneConfigs.PushFromRight;
                        }}
                   renderScene={(route,navigator)=>{
                           let Component = route.component;
                           return <Component {...route.passProps} navigator={navigator}/>;
                        }}
               />
           </TabNavigator.Item>
       )
    },
    render() {
        return (
            <TabNavigator>
                {
                  this.tabItemView('首页','首页','home',Home,'icon_tabbar_homepage',
                      'icon_tabbar_homepage_selected')
                }
                {
                    this.tabItemView('商家','商家','shop',Shop,'icon_tabbar_merchant_normal',
                        'icon_tabbar_merchant_selected')
                }
                {
                    this.tabItemView('我的','我的','mine',Mine,'icon_tabbar_mine',
                        'icon_tabbar_mine_selected')
                }
                {
                    this.tabItemView('更多','更多','more',More,'icon_tabbar_misc',
                        'icon_tabbar_misc_selected')
                }
                </TabNavigator>
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
    iconStyle:{
        width:Platform.OS=='ios'? 25:25,
        height:Platform.OS=='ios'? 25:25,
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
    selectedTitleStyle:{
        color:'orange'
    }
});
module.exports=GMain;
