import React, { useState } from 'react';
import { SafeAreaView, Text, Button, FlatList, StyleSheet } from 'react-native';

const App = () => {
  const [click, setClick] = useState([]);

  const addNumber = () => {
    setClick([
      ...click,
      {
        id: click.length,
        value: Math.random() * 10,
      },
    ]);
  };
//   Let me break down what each part of this abobe code does:

// Spread Operator (...click):

// The spread operator is used to create a shallow copy of the existing click array. It takes all the elements from the current array and spreads them out in the new array.
// New Object ({ id: click.length, value: Math.random() * 10 }):

// This code creates a new object with two properties:
// id: The id property is assigned the length of the current click array. This is done to give each item a unique identifier.
// value: The value property is assigned a random number between 0 and 10 using Math.random() * 10.
// Array Concatenation ([...]):

// The spread operator is used again to create a new array by concatenating the existing items from click with the new object created in the previous step.
// setClick:

// Finally, the setClick function is called with the new array as an argument. This updates the state variable click with the new array, triggering a re-render of the component.

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={click}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <SafeAreaView style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.value}</Text>
          </SafeAreaView>
        )}
      />
      <Button title="Click me" onPress={addNumber} style={styles.button} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  itemContainer: {
    marginVertical: 10,
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 8,
  },
  itemText: {
    fontSize: 18,
    color: 'black',
  },
  button: {
    marginTop: 20,
  },
});

export default App;
