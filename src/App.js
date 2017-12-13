/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View, 
} from 'react-native';
 
import {Scene, Router} from 'react-native-router-flux';

import HomeView from './HomeView.js';
import LoginView from './LoginView.js';
import ArtistDetailView from './ArtistDetailView.js';

export default class App extends Component<{}> {
  render() {
    const isAndroid= Platform.OS !== 'android';
    return <Router>
      <Scene key="root">
        <Scene key="login" component={LoginView} hideNavBar={isAndroid}  />
        <Scene key="secundary">
          <Scene key="home" component={HomeView} hideNavBar={isAndroid} />
          <Scene key="artistDetail" component={ArtistDetailView} hideNavBar={isAndroid}/>
      </Scene>
      </Scene>
      
    </Router>
  }
}
