import React from 'react';
import { Text, View, TouchableOpacity,StyleSheet,TextInput,Header } from 'react-native';


export default class ReadScreen extends React.Component {
  
  
    render() {
      
      return (
        <View style={styles.container}>
          <Text>Read Story</Text>
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  
});