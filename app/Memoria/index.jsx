import { FlatList, Image, Text, View, StyleSheet, Pressable } from 'react-native'
import { Link } from 'expo-router'
import { useState, useEffect } from 'react'
import Header from './components/header'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default Memorias = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        async function getData() {
            const value = await AsyncStorage.getItem('memorias');
            if (value !== null) {
                setData(JSON.parse(value))
            } else {
                setData([])
            }
        }
        getData()
    }, [])

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.memoriesContainer}>
                <FlatList
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.memoryCard}>
                            <Image source={{ uri: item.imagem }} style={styles.imagem} />
                            <Text style={styles.titulo}>{item.titulo}</Text>
                            <View style={styles.ano}>
                                <Image source={require('../../assets/images/calendario.png')} style={styles.icon} />
                                <Text style={styles.data}>{item.ano}</Text>
                            </View>
                            <Text style={styles.local}>
                                <Image source={require('../../assets/images/localiza.png')} style={styles.icon} />
                                <Text>{item.local}</Text>
                            </Text>
                            <Text style={styles.descricao}>{item.descricao}</Text>
                        </View>
                    )}
                />
            </View>
            <Pressable style={styles.addButton}>
                <Link href='./Outratela'>
                    <Text style={styles.addButtonText}>Adicionar memória</Text>
                </Link>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#778899',
    },
    memoriesContainer: {
        flex: 1,
        padding: 20,
        marginTop: 20,
    },
    memoryCard: {
        backgroundColor: '#778899',
        borderRadius: 12,
        padding: 20,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 3,
    },
    imagem: {
        width: '100%',
        height: 200,
        borderRadius: 12,
        marginBottom: 15,
    },
    titulo: {
        fontSize: 27,
        fontWeinht: 'bolder',
        color: '#222',
        marginBottom: 10,
    },
    ano: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    icon: {
        width: 'auto',
        height: 'auto',
        backgroundColor: '#32a897',
        borderRadius: 12,
        marginRight: 7,
        padding: 20
    },
    data: {
        fontSize: 23,
    },
    local: {
        fontSize: 17,
        color: '#777',
        marginBottom: 10,
    },
    descricao: {
        fontSize: 15,
        lineHeight: 22,
        color: '#888',
    },
    addButton: {
        backgroundColor: '#778899',
        paddingVertical: 15,
        borderRadius: 25,
        alignItems: 'center',
        marginBottom: 30,
        marginHorizontal: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 5,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 1.2,
    },
})