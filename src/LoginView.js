/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View, 
  Text,
  Button, Image
} from 'react-native';
import PropTypes from "prop-types";
//  tid:com.facebook.react.JavaScript] undefined is not an object (evaluating '_react2.PropTypes.object')
import FBSDK, { LoginButton, AccessToken} from 'react-native-fbsdk';
import { Actions } from 'react-native-router-flux';

import firebase , { firebaseAuth, firebaseDatabase } from "./firebase";


const { FacebookAuthProvider } = firebase.auth;

export default class LoginView extends Component<{}> {
  state = { credentials : null}
  componentWillMount() {
    this.authenticateUser()
  }
  authenticateUser = () => {
    AccessToken.getCurrentAccessToken().then(
      (data) => {
        const {
          accessToken
        } = data;
        const credential = FacebookAuthProvider.credential(accessToken);
        firebaseAuth.signInWithCredential(credential).then((credentials) => {
          // this.setState({
          //   credentials
          // });
          Actions.secundary();
        }, function (error) {
          console.log('Sing in error', error)
        })
      })
  }
  handleLoginFinished = (error, result) => {
    if (error) {
      console.error('')
      // alert("login has error: " + result.error);
    } else if (result.isCancelled) {
      alert("login is cancelled.");
    } else {
      this.authenticateUser();
      AccessToken.getCurrentAccessToken().then(
        () => {
          authenticateUser(data.accessToken);
        }
      )
    }
  }
  handleButtonPress= () => {
    Actions.secundary();
  }        
  
  
  render() {
    
    return (
      <Image source={require('./bg.jpg')} style={styles.container}>
        <Text style={styles.welcome}>Bienvenidos a Platzi Music</Text>
        <LoginButton
          readPermissions={['public_profile', 'email']}
          onLoginFinished={this.handleLoginFinished}
          onLogoutFinished={() => alert("logout.")}/>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome:{
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20
  }

});



// linkContent.contentDescription = [RCTConvert NSString:contentData[@"contentDescription"]];
// linkContent.contentTitle = [RCTConvert NSString:contentData[@"contentTitle"]];
// linkContent.imageURL = [RCTConvert NSURL:contentData[@"imageUrl"]];
