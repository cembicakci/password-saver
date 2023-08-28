import React from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { FontAwesome } from '@expo/vector-icons';

const LoginScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <FontAwesome name="lock" size={52} color="white" />
            <Text style={styles.text}>Telefon şifreni kullanarak giriş yap!</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Giriş</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#222',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        marginTop: 12
    },
    button: {
        padding: 12
    },
    buttonText: {
        color: '#007AFF',
        fontSize: 18
    }
})