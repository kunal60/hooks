import React, { useState } from 'react';
import {
  Text,
  Button,
  StyleSheet,
  SafeAreaView
} from "react-native";

export default function App() {
  const [click, setClick] = useState(0);

  const handleButtonClick = () => {
    setClick(click + 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textContainer}>
        You clicked {click} times
      </Text>
      <Button title="Click me" onPress={handleButtonClick} />
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
