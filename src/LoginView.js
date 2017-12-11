/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View, 
  Text
} from 'react-native';

// import FBSDK, { LoginButton, AccessToken} from 'react-native-fbsdk';

export default class LoginView extends Component<{}> {
 
  render() {
    
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Bienvenidos a Platzi Music</Text>
        {/* <LoginButton /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 50
  },
  welcome:{}

});
