import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const App = () => {
  const [data, setData] = useState({
    // username: 'ffff', //try these values also
    // password: 'ggg',
    username: '',
    password: '',
  });
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const [submit, setSubmitted] = useState(false);


  // printValues: Called when the "Submit" button is pressed. It updates the form state with the current values from the data state and sets submit to true.
  // updateField: Called when the text in the TextInput fields changes. It updates the corresponding field in the data state.

  const printValues = () => {
    setForm({
      username: data.username,
      password: data.password,
    });
    setSubmitted(true);
  };

  const updateField = (fieldName, value) => {
    setData({
      ...data,
      [fieldName]: value,
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={data.username}
        placeholder="Username"
        style={styles.input}
        onChangeText={(text) => updateField('username', text)}
      />
      <TextInput
        value={data.password}
        placeholder="Password"
        secureTextEntry
        style={styles.input}
        onChangeText={(text) => updateField('password', text)}
      />
      <Button title="Submit" onPress={printValues} />

      {submit && <Text>{form.username}</Text>}
      {submit && <Text>{form.password}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    width: '80%',
  },
});

export default App;
