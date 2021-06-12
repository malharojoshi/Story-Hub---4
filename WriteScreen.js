import React from 'react';
import { Text, View, TouchableOpacity,StyleSheet,TextInput,KeyboardAvoidingView, ToastAndroid } from 'react-native';
import { Header } from 'react-native-elements';
import * as firebase from "firebase";
import db from "../config.js";
export default class ReadScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      titleText:'',
      authorText:'',
      storyText:'',
    };
  }
  submitText() {
    ToastAndroid.show("You submitted your book.", ToastAndroid.SHORT);
    db.collection("writeing").add({
      studentId: this.state.scannedStudentId,
      bookId: this.state.scannedBookId,
      titleText: this.state.titleText,
    });
  }
  render() {
      return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Header
          backgroundColor={'#9c8210'}
          centerComponent={{
            text: 'Write A Story',
            style: { color: '#fff', fontSize: 20 },
          }}
        />
        <Text style={styles.text}>Title</Text>
          <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            this.setState({ titleText: text });
          }}
          value={this.state.text}
        />
        <Text style={styles.text}>Author Of The Story</Text>
        <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            this.setState({ authorText: text });
          }}
          value={this.state.text}
        />
        <Text style={styles.text}>Write Story Below</Text>
        <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            this.setState({ storyText: text });
          }}
          value={this.state.text}
        />
        <TouchableOpacity style={styles.container}
        onPress={
          this.submitText
        }>
        <Text style={styles.submitText}>Submit Story</Text>
        </TouchableOpacity>
        </KeyboardAvoidingView>
      );
    }
  
  
    
}
  const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor:""
  },
  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
    
  },
  text: {
    marginTop:75,
    color:'green',
    alignSelf: 'center',
  },
 submitText:{
      backgroundColor: '#2196F3',
      padding: 10,
      marginTop: 50,
      alignSelf:'center',
      height:35,
    },
});