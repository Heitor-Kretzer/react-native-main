import { ScrollView, FlatList, Image, Text, StyleSheet, View } from 'react-native';
import HeaderSobre from '../../Header';

const data = [
  { id: '1', link: require('../../../assets/images/fifa23.jpg'), descricao: 'Fifa 23' },
  { id: '2', link: require('../../../assets/images/gta.jpg'), descricao: 'Grand Theft Auto V' },
  { id: '3', link: require('../../../assets/images/die.jpg'), descricao: 'Dying Light'},
  { id: '4', link: require('../../../assets/images/dayz.jpg'), descricao: 'Day Z'},
  { id: '5', link: require('../../../assets/images/assasino.jpg'), descricao: 'Assassins Creed IV Black Flag'},
  { id: '6', link: require('../../../assets/images/thecre.png'), descricao: 'The Crew Motorfest'},
];

export default function Jogos() {
  return (
    <>
    <HeaderSobre
    titulo = 'Meus Jogos Favoritos'
    />
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
    display: 'flex',
    justifyContent: 'center',
    margin: 20,
    width: 250,
    height: 350,
  },

  descricao:{
    marginLeft: 20,
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 20
  }
});