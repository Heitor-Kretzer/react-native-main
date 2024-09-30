import React, { useState } from 'react';
import { View, Modal, Text, Pressable, StyleSheet } from 'react-native';
import Saldo from './Components/Cache';
import Operacao from './Components/Operacao';

export default function App() {
    const [saldo, setSaldo] = useState(7320.92);
    const [valorModal, setValorModal] = useState(0);
    const [operacao, setOperacao] = useState('');
    const [erroVisible, setErroVisible] = useState(false);
    const [confirmarVisible, setConfirmarVisible] = useState(false);

    const calcular = () => {
        if (operacao === 'saque') {
            const multa = valorModal * 0.025;
            setSaldo(saldo - valorModal - multa);
        } else if (operacao === 'deposito') {
            const bonus = valorModal * 0.01;
            setSaldo(saldo + valorModal + bonus);
        }
        setValorModal(0);
        setConfirmarVisible(false);
    };

    const showErro = () => setErroVisible(true);

    const showConfirm = (valor, operacao) => {
        setValorModal(valor);
        setOperacao(operacao);
        setConfirmarVisible(true);
    };

    return (
        <View style={styles.container}>
            <Saldo saldo={saldo} />
            <Operacao
                saldoAtual={saldo}
                showErro={showErro}
                showConfirm={showConfirm}
            />

            <Modal
                transparent
                visible={erroVisible}
                onRequestClose={() => setErroVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Valor invalido.</Text>
                        <Pressable style={styles.button} onPress={() => setErroVisible(false)}>
                            <Text style={styles.textButton}>Voltar</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>

            <Modal
                transparent
                visible={confirmarVisible}
                onRequestClose={() => setConfirmarVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>
                            {operacao === 'saque'
                                ? `Desejar prosseguir com o Saque ?`
                                : `Desejar prosseguir com o Depósito ?`}
                        </Text>
                        <View style={styles.modalButtonContainer}>
                            <Pressable style={styles.button} onPress={calcular}>
                                <Text style={styles.textButton}>Avançar</Text>
                            </Pressable>
                            <Pressable style={styles.button} onPress={() => setConfirmarVisible(false)}>
                                <Text style={styles.textButton}>Negar</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        width: '75%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    modalButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    button: {
        padding: 15,
        backgroundColor: '#ff4500',
        borderRadius: 5,
        width: '45%',
        marginBottom: 15,
        alignItems: 'center',
    },
    textButton: {
        color: '#fff',
    },
});