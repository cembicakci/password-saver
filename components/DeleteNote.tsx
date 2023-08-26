import React from 'react'
import { Alert, Pressable, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { FontAwesome } from '@expo/vector-icons'
import { deleteNote } from '../services/NoteStoreService'
import { ScreenNavigationProp } from '../types'

type Props = {
    noteId: string
}

const DeleteNote = ({ noteId }: Props) => {

    const navigation = useNavigation<ScreenNavigationProp>()

    const deleteNoteHandler = async () => {
        await deleteNote(noteId)
        navigation.goBack()
    }

    return (
        <Pressable onPress={() => {
            Alert.alert('Delete', 'Are you sure?', [{
                text: 'Yes', style: 'destructive', onPress: () => {
                    deleteNoteHandler()
                }
            }, { text: 'No' }])
        }}>
            <FontAwesome name={'trash-o'} size={30} color={'#ffb703'} />
        </Pressable >
    )
}

export default DeleteNote

const styles = StyleSheet.create({})