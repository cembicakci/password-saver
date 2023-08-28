import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

import { FontAwesome } from '@expo/vector-icons';

const LoginScreen = () => {
    return (
        <SafeAreaView>
            <Text>Telefon şifreni kullanarak giriş yap!</Text>
            <FontAwesome name="lock" size={24} color="black" />
        </SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({})