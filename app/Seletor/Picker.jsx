import React, { useEffect, useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, FlatList } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Link } from 'expo-router';

const App = () => {
    const [name, setName] = useState('');
    const [element, setElement] = useState('');
    const [pokemons, setPokemons] = useState([]);
    const [elements, setElements] = useState([]);
    const [filteredPokemons, setFilteredPokemons] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [pokemonsResponse, elementsResponse] = await Promise.all([
                    fetch('https://pokeapi.co/api/v2/pokemon?limit=100'),
                    fetch('https://pokeapi.co/api/v2/type')
                ]);

                const [pokemonsData, elementsData] = await Promise.all([
                    pokemonsResponse.json(),
                    elementsResponse.json()
                ]);

                setPokemons(pokemonsData.results);
                setFilteredPokemons(pokemonsData.results);
                setElements(elementsData.results);
            } catch (error) {
                console.error(`Erro: ${error}`);
            }
        };

        fetchData();
    }, []);

    const handleSearch = () => {
        const nameFiltered = pokemons.filter(pokemon =>
            pokemon.name.toLowerCase().includes(name.toLowerCase())
        );
        setFilteredPokemons(nameFiltered);
    };

    const handleElementChange = async (element) => {
        setElement(element);

        if (element) {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/type/${element}`);
                const data = await response.json();
                const pokemonList = data.pokemon.map(p => p.pokemon.name);
                const typeFiltered = pokemons.filter(p => pokemonList.includes(p.name));
                setFilteredPokemons(typeFiltered);
            } catch (error) {
                console.error(`Erro: ${error}`);
            }
        } else {
            setFilteredPokemons(pokemons);
        }

        handleSearch();
    };

    return (
        <View style={styles.container}>
            <View>
                <Link href='../'>
                    <Text>Voltar ao início</Text>
                </Link>
            </View>
            <TextInput
                style={styles.input}
                placeholder="Buscar Pokémon por nome"
                value={name}
                onChangeText={setName}
            />
            <Button title="Buscar" onPress={handleSearch} />

            <Picker
                selectedValue={element}
                style={styles.picker}
                onValueChange={handleElementChange}
            >
                <Picker.Item label="Selecione um tipo" value="" />
                {elements.map((type, index) => (
                    <Picker.Item key={index} label={type.name} value={type.name} />
                ))}
            </Picker>

            <FlatList
                data={filteredPokemons}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.pokemonName}>{item.name}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    input: {
        height: 40,
        borderColor: '#ddd',
        borderWidth: 1,
        marginBottom: 15,
        width: '100%',
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    picker: {
        width: '100%',
        height: 40,
        marginVertical: 15,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 10,
        marginVertical: 5,
        width: '100%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    pokemonName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default App;