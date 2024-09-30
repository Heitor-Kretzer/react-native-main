import React, { useState, useEffect } from "react";
import {View, Text, StyleSheet, Image, SafeAreaView, Pressable} from "react-native";
import {Link} from "expo-router";
import Header from "../Header";

const Navega = () => {
    return (
        <View style={styles.container}>
            <Header link=".." title="Sobre mim"  />
            <Image style={styles.image} source={require('../../assets/images/heitor.jpg')} />
            <View>
                <Text style={styles.title}>
                   Seja bem vindo ao App do Heitor Kretzer!
                </Text>
                <Text style={styles.subtitle}>
                    Prazer, me chamo Heitor Kretzer, tenho 17 anos e atualmente estou cursando o ultimo ano do ensino médio, venha conhecer um pouco sobre mim e meus apps
                </Text>
            </View>
            <View style={styles.btnContainer}>
                <Pressable style={styles.btn}>
                    <Link href={'./filmes/index'}>
                        <Text style={styles.btnTxt}>Filmes</Text>
                    </Link>
                </Pressable>

                <Pressable style={styles.btn}>
                    <Link href={"./programming"}>
                        <Text style={styles.btnTxt}>Hobbies</Text>
                    </Link>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: "bold",
        margin: 25,
        textAlign: "center",
    },
    subtitle: {
        fontSize: 18,
        margin: 10,
        textAlign: "center",
    },
    image: {
        borderRadius: 100,
        width: 150,
        height: 150,
        marginTop: 30,
    },
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    btnContainer: {
        flex: 1,
        flexDirection: "column",
    },
    btn: {
        margin: 10,
        width: 200,
        height: 30,
        backgroundColor: "#b0c4de",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    btnTxt: {
        color: "#fff",
        fontSize: 20
    }
})

export default Navega;
