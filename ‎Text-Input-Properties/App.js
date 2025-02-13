import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, Alert, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const KeyboardType = () => {
  const [fName, setfName] = useState('');
  const [lName, setlName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [password, setPassword] = useState('');

  const validateEmail = (text) => {
    setEmail(text);
    if (!text.includes('@')) {
      setError('Invalid Email Address');
    } else {
      setError('');
    }
  };

  const handleSubmit = () => {
    if (fName && lName && email && phone && password) {
      Alert.alert('Submitted Data', `First Name: ${fName}\nLast Name: ${lName}\nEmail: ${email}\nPhone: ${phone}`);
    } else {
      Alert.alert('Error', 'Please fill out all fields');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Ionicons name="person" size={20} color="grey" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Enter First Name"
          onChangeText={setfName}
          value={fName}
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="person" size={20} color="grey" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Enter Last Name"
          onChangeText={setlName}
          value={lName}
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="mail" size={20} color="grey" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          keyboardType="email-address"
          onChangeText={validateEmail}
          value={email}
        />
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <View style={styles.inputContainer}>
        <Ionicons name="call" size={20} color="grey" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          keyboardType="phone-pad"
          onChangeText={setPhone}
          value={phone}
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed" size={20} color="grey" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          secureTextEntry={true}
          onChangeText={setPassword}
          value={password}
        />
      </View>

      <Text style={styles.displayText}>Password Length: {password.length}</Text>
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'blue',
    borderRadius: 30,
    paddingHorizontal: 10,
    width: '90%',
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
  },
  errorText: {
    color: 'red',
    marginVertical: 5,
    fontSize: 14,
  },
  displayText: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default KeyboardType;
