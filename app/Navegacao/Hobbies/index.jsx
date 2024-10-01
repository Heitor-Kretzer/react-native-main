import { FlatList, Image, Text, StyleSheet, View } from 'react-native';

const data = [
  { id: '1', link: require('../../../assets/images/heitor.jpg'), descricao: 'Jogar Bola' },
  { id: '2', link: require('../../../assets/images/xbox.jpg'), descricao: 'Jogar Video Game' },
  { id: '3', link: require('../../../assets/images/mi.jpg'), descricao: 'Dormir'},
];

export default function Hobbies() {
  return (
    <>
    <FlatList
      style={styles.flatList}
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View>
        <Image
          style={styles.image}
          source={item.link}
        />
        <Text style={styles.descricao}>{item.descricao}</Text>
        </View>

      )}
    />
    </>
  );
}

const styles = StyleSheet.create({

  flatList:{
    display: 'flex',
    width: '100%',
    
  },

  image: {
    margin: 20,
    width: 350,
    height: 600
  },

  descricao:{
    marginLeft: 20,
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 30
  }
});