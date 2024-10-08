import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Image></Image>
      <Text style={styles.headerText}>Heitor Kretzer | 3º Ano C</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#778899',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60, // Altura do cabeçalho
    width: '100%', // Largura total da tela
    position: 'absolute', // Posicionamento absoluto
    top: 0, // Posicionar no topo
    left: 0, // Alinhar à esquerda
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Header;