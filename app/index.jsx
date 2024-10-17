import React from 'react';
import { Button, View, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import Header from './Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header style={styles.header} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
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
          <Link href="./Camera">
            <View style={styles.buttonWrapper}>
              <Button title="App Camera" color="#b0c4de" />
            </View>
          </Link>
          <Link href="./Memoria">
            <View style={styles.buttonWrapper}>
              <Button title="App Memoria" color="#b0c4de" />
            </View>
          </Link>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContainer: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'flex-ende'
  },
  buttonContainer: {
    marginTop: 120,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  buttonWrapper: {
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#000000',
    overflow: 'hidden',
    marginVertical: 5,
    width: 200,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
  },
});
