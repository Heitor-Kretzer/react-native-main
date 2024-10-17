import { Image, Text, TextInput, View, ScrollView, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import { useState, useRef } from 'react'
import { useRouter } from 'expo-router'
import Header from '../components/header'
import { CameraView, useCameraPermissions } from 'expo-camera'
import * as ImagePicker from 'expo-image-picker'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default Adicionar = () => {
    const [imagem, setImagem] = useState(null)
    const [titulo, setTitulo] = useState('')
    const [ano, setAno] = useState('')
    const [local, setLocal] = useState('')
    const [descricao, setDescricao] = useState('')
    const [permissao, pedirPermissao] = useCameraPermissions();
    const cameraRef = useRef(null);
    const router = useRouter();
    const [facing, setFacing] = useState('front');
    const [modoFoto, setModoFoto] = useState(false); 

    const selecionarImagem = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImagem(result.assets[0].uri);
            setModoFoto(false); 
        }
    };

    if (!permissao) {
        return (
            <View style={styles.container}>
                <Text style={styles.alert}>Carregando...</Text>
            </View>
        )
    }
    if (!permissao.granted) {
        return (
            <View style={styles.container}>
                <Text style={styles.alert}>Você precisa da permissão para utilizar a câmera</Text>
                <Pressable onPress={pedirPermissao} style={styles.button}>
                    <Text style={styles.buttonText}>Pedir permissão</Text>
                </Pressable>
            </View>
        )
    }

    const tirarFoto = async () => {
        const foto = await cameraRef.current?.takePictureAsync({
            quality: 0.5,
            base64: true,
        });
        if (foto) {
            setImagem(foto.uri);
            setModoFoto(false);
        }
    }

    const mudarCamera = () => {
        setFacing(prev => (prev === 'front' ? 'back' : 'front'));
    }

    const salvar = async () => {
        try {
            let data = await AsyncStorage.getItem('memorias')
            if (data !== null) {
                let json = JSON.parse(data)
                json.push({
                    imagem: imagem,
                    titulo: titulo,
                    ano: ano,
                    local: local,
                    descricao: descricao,
                })
                await AsyncStorage.setItem('memorias', JSON.stringify(json))
            }
            else {
                let data = JSON.stringify([{
                    imagem: imagem,
                    titulo: titulo,
                    ano: ano,
                    local: local,
                    descricao: descricao,
                }])
                await AsyncStorage.setItem('memorias', data)
            }
            router.push('../');
        }
        catch (e) {
            console.log(e)
        }
    }

    return (
        <ScrollView style={styles.container}>
            <Header />
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} onChangeText={setTitulo} placeholder='Título' />
                <TextInput style={styles.input} onChangeText={setAno} placeholder='Quando aconteceu? (ano)' />
                <TextInput style={styles.input} onChangeText={setLocal} placeholder='Onde aconteceu? (cidade)' />
                <TextInput style={styles.input} onChangeText={setDescricao} placeholder='Conte sobre sua memória' multiline />
                <View style={styles.imagePickerContainer}>
                    {modoFoto ? (
                        <CameraView style={styles.camera} facing={facing} ref={cameraRef}>
                            <View style={styles.btns}>
                                <TouchableOpacity style={styles.button} onPress={mudarCamera}>
                                    <Text style={styles.buttonText}>Trocar Câmera</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button} onPress={tirarFoto}>
                                    <Text style={styles.buttonText}>Tirar Foto</Text>
                                </TouchableOpacity>
                            </View>
                        </CameraView>
                    ) : (
                        <>
                            <Pressable style={styles.button} onPress={selecionarImagem}>
                                <Text style={styles.buttonText}>Selecionar uma imagem da Galeria</Text>
                            </Pressable>
                            {imagem && <Image source={{ uri: imagem }} style={styles.imagem} />}
                        </>
                    )}
                </View>
                <Pressable style={styles.button} onPress={() => setModoFoto(!modoFoto)}>
                    <Text style={styles.buttonText}>{modoFoto ? 'Cancelar' : 'Abrir Câmera'}</Text>
                </Pressable>
            </View>
            <Pressable style={styles.buttonAdd} onPress={salvar}>
                <Text style={styles.buttonText}>Adicionar</Text>
            </Pressable>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#778899',
    },
    inputContainer: {
        marginBottom: 20,
        padding: 10
    },
    input: {
        backgroundColor: '#778899',
        padding: 10,
        borderRadius: 10,
        marginBottom: 15,
        borderColor: '#ccc',
        borderWidth: 1,
        fontSize: 16,
    },
    imagePickerContainer: {
        alignItems: 'center',
        marginTop: 10,
    },
    button: {
        backgroundColor: '#778899',
        padding: 15,
        borderRadius: 30,
        alignItems: 'center',
        marginBottom: 25,
        marginVertical: 10,
        marginHorizontal: 20,
    },
    buttonAdd: {
        backgroundColor: '#778899',
        padding: 15,
        borderRadius: 30,
        alignItems: 'center',
        marginBottom: 25,
        marginVertical: 10,
        marginHorizontal: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    imagem: {
        width: '100%',
        height: 300,
        borderRadius: 10,
        marginTop: 10,
    },
    camera: {
        width: '100%',
        height: 300,
        borderRadius: 10,
        marginTop: 10,
    },
    btns: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
    },
});