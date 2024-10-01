import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import Header from './Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header style={styles.header} />
      <View style={styles.buttonContainer}>
        <Link href="./Banco/Banco">
          <View style={styles.buttonWrapper}>
            <Button title="App Banco" color="#b0c4de" />
          </View>
        </Link>
        <Link href="./Calculadora/Calculadora">
          <View style={styles.buttonWrapper}>
            <Button title="App Calculadora" color="#b0c4de" />
          </View>
        </Link>
        <Link href="./Calculadora2/Calcula">
          <View style={styles.buttonWrapper}>
            <Button title="App Calculadora 2" color="#b0c4de" />
          </View>
        </Link>
        <Link href="./Ifome">
          <View style={styles.buttonWrapper}>
            <Button title="App IFome" color="#b0c4de" />
          </View>
        </Link>
        <Link href="./Lista-tarefa/Lista">
          <View style={styles.buttonWrapper}>
            <Button title="App Lista de Tarefa" color="#b0c4de" />
          </View>
        </Link>
        <Link href="./Navegacao/Navega">
          <View style={styles.buttonWrapper}>
            <Button title="App Sobre mim" color="#b0c4de" />
          </View>
        </Link>
        <Link href="./Pokemon/Pokemon">
          <View style={styles.buttonWrapper}>
            <Button title="App Pokemon" color="#b0c4de" />
          </View>
        </Link>
        <Link href="./Registro/Registro">
          <View style={styles.buttonWrapper}>
            <Button title="App Registro" color="#b0c4de" />
          </View>
        </Link>
        <Link href="./Seletor/Picker">
          <View style={styles.buttonWrapper}>
            <Button title="App Seletor" color="#b0c4de" />
          </View>
        </Link>
        <Link href="./Splash-screen/Splash">
          <View style={styles.buttonWrapper}>
            <Button title="App Splash Screen" color="#b0c4de" />
          </View>
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  buttonWrapper: {
    borderRadius: 25, // Arredondar o botão
    borderWidth: 2,   // Borda ao redor
    borderColor: '#000000', // Cor da borda
    overflow: 'hidden', // Garante que o botão siga o arredondamento da View
    marginVertical: 5,
    width: 200,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
  },
});