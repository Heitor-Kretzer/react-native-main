import React, { useState } from 'react';
import { View, TextInput, Text, Pressable, StyleSheet } from 'react-native';

export default function Operacao({ saldoAtual, showErro, showConfirm }) {
    const [valor, setValor] = useState('');

    const handleValueChange = (text) => setValor(text);
    const isValidValue = (value) => !isNaN(value) && value > 0;

    const handleSaque = () => {
        const value = parseFloat(valor);
        if (isValidValue(value) && value <= saldoAtual) {
            showConfirm(value, 'saque');
        } else {
            showErro();
        }
    };

    const handleDeposito = () => {
        const value = parseFloat(valor);
        if (isValidValue(value)) {
            showConfirm(value, 'deposito');
        } else {
            showErro();
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                keyboardType='numeric'
                value={valor}
                onChangeText={handleValueChange}
            />
            <Pressable style={styles.button} onPress={handleSaque}>
                <Text style={styles.textButton}>Saque</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={handleDeposito}>
                <Text style={styles.textButton}>Deposito</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 20,
        padding: 16,
        width: '100%',
    },
    input: {
        height: 50,
        borderColor: '#ff4500',
        borderWidth: 1,
        borderRadius: 30,
        paddingHorizontal: 8,
        fontSize: 16,
        width: '100%',
        marginBottom: 15,
    },
    button: {
        padding: 15,
        backgroundColor: '#ff4500',
        width: '100%',
        marginBottom: 15,
        alignItems: 'center',
    },
    textButton: {
        color: '#fffafa',
    },
});