import React from "react";
import { useState } from "react";
import {View, Text, StyleSheet, TextInput, Button, Pressable} from 'react-native';
import { Link } from "expo-router";
import Voltar from "../voltar";

const App = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [res, setRes] = useState(null)

  function op(op) {
    let a = parseFloat(num1);
    let b = parseFloat(num2);
    let c;
    switch(op) {
      case '+':
        c=a+b;
        break;
      case '-':
        c=a-b;
        break;
      case '*':
        c=a*b;
        break;
      case '/':
        c=a/b;
        break;
      case '**':
        c=a**b;
        break;
    }
    if(isNaN(c)) setRes('Type only numbers in input');
    else setRes(c);
  }

  return(
    <View style={styles.container}>
      <Text>Calculadora</Text>
      <View>
        <TextInput 
          style={styles.input}
          onChangeText={setNum1}
          value={num1}
          keyboardType="numeric"
          
        />
        <TextInput 
          style={styles.input}
          onChangeText={setNum2}
          value={num2}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.div}>
        <Button
          onPress={() => op('+')}
          title="+"
          color="#000000"
        />
        <Button
          onPress={() => op('-')}
          title="-"
          color="#000000"
        />
        <Button
          onPress={() => op('*')}
          title="*"
          color="#000000"
        />
        <Button
          onPress={() => op('/')}
          title="/"
          color="#000000"
        />
        <Button
          onPress={() => op('**')}
          title="**"
          color="#000000"
        />
      </View>
      <Text>{res}</Text>

      <Voltar />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  div: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  }
})

export default App;