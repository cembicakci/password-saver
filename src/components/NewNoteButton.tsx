import React from 'react'
import { Pressable, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { AntDesign } from '@expo/vector-icons';

import { ScreenNavigationProp } from '../../types'

const NewNoteButton = () => {
    const navigation = useNavigation<ScreenNavigationProp>()

    return (
        <Pressable onPress={() => { navigation.navigate('EditNoteScreen', { noteId: undefined }) }} style={styles.button}>
            <AntDesign name="plus" size={30} color="#ffb703" />
        </Pressable>
    )
}

export default NewNoteButton

const styles = StyleSheet.create({
    button: {
        marginRight: 12
    }
})