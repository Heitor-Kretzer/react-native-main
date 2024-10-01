import { StyleSheet, Image, Text, View, FlatList } from "react-native";
import { Link } from "expo-router";

export default function SobreHome() {

  const data = [
    { id: '1', link: './Hobbies', titulo: 'Meus Hobbies' },
    { id: '2', link: './Jogos', titulo: 'Meus jogos' }
  ];
  
  return (
    <>
        <View style={styles.main}>
            <Image
            style={styles.perfil}
            source={require('../../assets/images/heitor.jpg')}
            />
            <Text style={styles.welcome}>Bem-vindo ao meu App</Text>
            <Text style={styles.descricao}></Text>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Link style={styles.link} href={item.link}>
                        {item.titulo}
                    </Link>
                )}
            />
        </View>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
        height: '100%'
    },

    main:{
      flex: 1,
      alignItems: 'center',
      marginTop: 30
    },

    perfil: {
        padding:0,
      width: 200,
      height: 200,
      overflow: 'hidden',
      borderRadius: parseInt('100%')
    },

    welcome:{
      fontSize: 26,
      fontWeight: 'bold',
      marginTop: 10
    },

    descricao: {
      textAlign: 'center',
      margin: 10,
      width: 305
    },

    link:{
      backgroundColor: '#0479b3',
      margin: 20,
      padding: 10,
      borderRadius: 10,
      width: 300,
      color: '#fff',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 20
    }
  });