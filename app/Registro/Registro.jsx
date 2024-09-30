import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Pressable, Text, Alert } from 'react-native';
import { Link } from 'expo-router';
import axios from 'axios';

const App = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleNameChange = (n) => setName(n);
    const handleEmailChange = (e) => setEmail(e);
    const handlePasswordChange = (p) => setPassword(p);

    const register = async () => {
        if (name && email && password) {
            try {
                const response = await axios.post(
                    'https://taskhub-s37f.onrender.com/auth/signup',
                    { "name": name, "email": email, "password": password }
                );
                if (response.status === 200) {
                    console.log('User criado');
                }
            } catch (error) {
                console.log('Error', error);
            }
        } else {
            console.log('Complete todos os dados');
        }
    };

    return (
        <View style={styles.container}>
            <Link href='../'>
                <Text>Voltar ao início</Text>
            </Link>
            <Text style={styles.title}>Cadastro</Text>
            <TextInput
                value={name}
                onChangeText={handleNameChange}
                placeholder='Nome completo'
                style={styles.input}
            />
            <TextInput
                keyboardType='email-address'
                placeholder='Email'
                value={email}
                onChangeText={handleEmailChange}
                style={styles.input}
            />
            <TextInput
                placeholder='Senha'
                secureTextEntry={true}
                value={password}
                onChangeText={handlePasswordChange}
                style={styles.input}
            />
            <Pressable style={styles.button} onPress={register}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
        padding: 20
    },
    title: {
        fontSize: 32,
        fontWeight: '700',
        color: '#333',
        marginBottom: 30
    },
    input: {
        width: '100%',
        marginBottom: 15,
        borderRadius: 10,
        borderColor: '#ddd',
        borderWidth: 1,
        paddingHorizontal: 15,
        paddingVertical: 12,
        fontSize: 16,
        backgroundColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    button: {
        backgroundColor: '#007BFF',
        borderRadius: 10,
        height: 50,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    buttonText:  {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600'
    }
});

export default App;