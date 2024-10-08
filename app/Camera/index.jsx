import { useState, useRef } from "react";
import { View, StyleSheet, Text, Image, Button, TouchableOpacity, Linking } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import * as MediaLibrary from 'expo-media-library';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default Camera = () => {
    const [permissao, pedirPermissao] = useCameraPermissions();
    const cameraRef = useRef(null);
    const [foto, setFoto] = useState(null);
    const [facing, setFacing] = useState("front");
    const [modoQrCode, setModoQrCode] = useState(false);
    const [scanned, setScanned] = useState(false);

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
                <Button title={"Pedir permissão"} onPress={pedirPermissao} />
            </View>
        )
    }

    const salvarFoto = async () => {
        await MediaLibrary.saveToLibraryAsync(foto.uri);
        setFoto(null);
    };

    const tirarFoto = async () => {
        const foto = await cameraRef.current?.takePictureAsync({
            quality: 0.5,
            base64: true,
        });
        setFoto(foto);
    }

    const mudarCamera = () => {

        if (facing === "front") {
            setFacing("back");
        } else {
            setFacing("front");
        }
    }

    const escanear = async ({ type, data }) => {
        setScanned(true);
        await Linking.openURL(data);
        setScanned(false);
    };

    return (
        <View style={styles.container}>
            {foto ? (
                <View style={styles.container}>
                    <Image style={styles.img} source={{ uri: foto.uri }} />
                    <View style={styles.btns}>
                        <TouchableOpacity onPress={() => setFoto(null)}>
                            <Image
                                style={styles.icon}
                                source={require('../../assets/images/save.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { salvarFoto() }}>
                            <Image
                                style={styles.icon}
                                source={require('../../assets/delete.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            ) : (
                <View style={styles.container}>
                    {modoQrCode ? (
                        <View style={styles.camera}>
                            <BarCodeScanner
                                onBarCodeScanned={scanned ? undefined : escanear}
                                style={StyleSheet.absoluteFillObject}
                            />
                            <View style={styles.btns}>
                                <TouchableOpacity style={styles.button} onPress={() => setModoQrCode(!modoQrCode)}>
                                    <Image
                                        style={styles.icon}
                                        source={require('../../assets/camera.png')}
                                    />
                                </TouchableOpacity>
                            </View>

                        </View>
                    ) : (
                        <CameraView facing={facing} style={styles.camera} ref={cameraRef}>
                            <View style={styles.btns}>
                                <TouchableOpacity style={styles.button} onPress={() => mudarCamera()}>
                                    <Image
                                        style={styles.icon}
                                        source={require('../../assets/mudar.png')}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button} onPress={() => tirarFoto()}>
                                    <Image
                                        style={styles.icon}
                                        source={require('../../assets/tirarfoto.png')}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button} onPress={() => setModoQrCode(!modoQrCode)}>
                                    <Image
                                        style={styles.icon}
                                        source={require('../../assets/codigo.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                        </CameraView>
                    )}
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    btns: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginBottom: 20,
    },
    alert: {
        color: "red",
        textAlign: "center",
    },
    camera: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: "#272925",
    },
    img: {
        width: 500,
        height: 500,
        padding: 30,
        alignSelf: 'center'
    },
    icon: {
        width: 50,
        height: 50,
        marginHorizontal: 10
    }
})