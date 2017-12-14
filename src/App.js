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
    return <Router>
      <Scene key="root" hideNavBar> 
        <Scene key="login" component={LoginView}   />
        <Scene key="secundary">
          <Scene key="home" component={HomeView} hideNavBar />
          <Scene key="artistDetail" component={ArtistDetailView} title="Comentarios" hideNavBar={false}/>
      </Scene>
      </Scene>
      
    </Router>
  }
}
