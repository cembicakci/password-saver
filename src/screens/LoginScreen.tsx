import React, { useState } from 'react'
import { Alert, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { FontAwesome } from '@expo/vector-icons';
import * as LocalAuthentication from 'expo-local-authentication';
import { useDispatch, useSelector } from 'react-redux';
import { changeUser } from '../redux/userSlice';

const LoginScreen = () => {

    const dispatch = useDispatch()

    const handleSubmit = async () => {
        const hasAuth = await LocalAuthentication.isEnrolledAsync();
        const hasAuth2 = await LocalAuthentication.hasHardwareAsync();
        console.log("hasAuth", hasAuth)
        console.log("hasAuth2", hasAuth2)

        if (hasAuth || hasAuth2) {
            const auth = LocalAuthentication.authenticateAsync({
                promptMessage: 'Giriş Yapmak İçin Şifrenizi Giriniz',
                fallbackLabel: 'Enter Password',
            });

            auth.then(result => {
                console.log(result)
                if (result.success) {
                    dispatch(changeUser())
                }
            }
            );
        } else {
            //Kullanıcının şifresi yok, doğrudan giriş yapacak.
            Alert.alert('Uyarı', 'Telefon şifresi bulunmadığından dolayı doğrudan giriş yapıldı', [{ text: 'Tamam' }])
            dispatch(changeUser())
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <FontAwesome name="lock" size={52} color="white" />
            <Text style={styles.text}>Telefon şifreni kullanarak giriş yap!</Text>
            <TouchableOpacity style={styles.button} onPress={() => { handleSubmit() }}>
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