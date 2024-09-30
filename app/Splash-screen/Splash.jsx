import * as React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const image = require('../../../assets/images/download.png')
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#7cfc00', 'transparent']}
        style={styles.background}
      />
      <Image
    style={styles.image}
    source={image}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#008000',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
  image: {
    width:300,
    height:360
},
});