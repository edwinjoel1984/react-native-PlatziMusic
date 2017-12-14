/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput, 
  Text,
  TouchableOpacity
} from 'react-native';

import ArtistBox from './ArtistBox'
import CommentList from './CommentList'
import { getArtists } from './api-client'
import Icon from 'react-native-vector-icons/Ionicons';
import {firebaseDatabase, firebaseAuth } from './firebase';

export default class ArtistDetailView extends Component<{}> {
  state = {
    artists : [],
    comments: []
  }
  handleSend = () => {
    const { text } = this.state;
    const artistCommentsRef = this.getArtistCommentsRef()
    const {uid, photoURL} = firebaseAuth.currentUser
    var newCommentRef = artistCommentsRef.push();
    newCommentRef.set({
      text,
      userPhoto: photoURL,
      uid
    });
    this.setState({text:''})
    
  }
  componentDidMount(){
    this.getArtistCommentsRef().on('child_added', (data) => {
      const comment = data.val();
      this.setState({
        comments: this.state.comments.concat(comment)
      })
    });
  }

  getArtistCommentsRef = () => {
    const { id } = this.props.artist
    return firebaseDatabase.ref(`comments/${id}`);
  }
  handleChangeText = (text) => this.setState({text})

  render() {
    
    const artist = this.props.artist;
    const {comments} = this.state;
    return (
      <View style={styles.container}>
        <ArtistBox artist={artist} />
        <CommentList comments={comments} />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={this.state.text}
            placeholder="Opina sobre este artista"
            onChangeText={this.handleChangeText}
          />
           <TouchableOpacity onPress={this.handleSend}>
              <Icon name="ios-send-outline" size={30} color="gray" /> 
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 10
  },
  inputContainer:{
      height: 50,
      backgroundColor: 'white',
      paddingHorizontal: 10,
      flexDirection: 'row',
      alignItems:'center'
  },
  input:{
    flex: 1,
    height: 50,
  },
  header: {
    fontSize: 20,
    paddingHorizontal: 15,
    marginVertical :10
  }

});
