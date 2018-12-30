import React, { Component } from 'react';
import {createStackNavigator} from 'react-navigation';

// cac thanh phan
import Home from './Home';
import Item from './Item';
const Main = createStackNavigator({
    Home: Home,
    Item: Item
}, {
    initialRouteName: 'Home',
    headerMode: 'none'
})
export default Main;