import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Ionicons } from '@expo/vector-icons'
import { Note, saveNote } from '../services/NoteStoreService'
import { ScreenNavigationProp } from '../types'

const SaveNote = ({ text, id }: Note) => {

    const navigation = useNavigation<ScreenNavigationProp>()

    const saveNotHandler = async () => {
        await saveNote(text, id)
        navigation.goBack()
    }

    return (
        <Pressable onPress={saveNotHandler}>
            <Ionicons name={'chevron-back'} size={30} color={'#ffb703'} />
        </Pressable>
    )
}

export default SaveNote
