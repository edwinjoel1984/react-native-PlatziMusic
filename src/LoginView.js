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
import PropTypes from "prop-types";
//  tid:com.facebook.react.JavaScript] undefined is not an object (evaluating '_react2.PropTypes.object')
import FBSDK, { LoginButton, AccessToken} from 'react-native-fbsdk';
import { Actions } from 'react-native-router-flux';

export default class LoginView extends Component<{}> {
  handleLoginFinished = (error, result) => {
          if (error) {
            console.error('')
            // alert("login has error: " + result.error);
          } else if (result.isCancelled) {
            alert("login is cancelled.");
          } else {
            AccessToken.getCurrentAccessToken().then(
              () => {
                Actions.secundary();
              }
            )
          }
        }
          
  
  render() {
    
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Bienvenidos a Platzi Music</Text>
        <LoginButton
          readPermissions={['public_profile', 'email']}
          onLoginFinished={this.handleLoginFinished}
          onLogoutFinished={() => alert("logout.")}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 50, 
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
