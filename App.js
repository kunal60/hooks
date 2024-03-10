
import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView
} from "react-native";
export default function App() {
  const click = useState('GeeksForGeeks'); 
    return ( 
      <SafeAreaView  style={styles.container}>
        <Text  style={styles.textContainer}>Welcome to {click}</Text> 
        </SafeAreaView>
    ); 
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001f3f',
  },

  textContainer: {
    color: 'white',
  },

});



