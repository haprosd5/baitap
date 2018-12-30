/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
console.disableYellowBox = true;
// import cac thanh phan
import Main from './src/Main';
export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: null
    }
  }
  
  render() {
    
    return (
      <Main />
    );
  }
}

