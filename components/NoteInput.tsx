import React, { useEffect, useLayoutEffect, useState } from 'react'
import { StyleSheet, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { getNote } from '../services/NoteStoreService'
import { ScreenNavigationProp } from '../types'
import SaveNote from './SaveNote'

type Props = {
    noteId: string | undefined
}

const NoteInput = ({ noteId }: Props) => {

    const navigation = useNavigation<ScreenNavigationProp>()

    const [title, setTitle] = useState<string>('')
    const [text, setText] = useState<string>('')

    console.log(text)
    console.log(title)

    useEffect(() => {
        if (noteId) {
            getNote(noteId).then(result => {
                console.log(result)

                setText(result?.text ?? '')
                setTitle(result?.title ?? '')
            })
        }
    }, [])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => <SaveNote text={text} title={title} id={noteId ?? ''} />
        })
    }, [navigation, text, title, noteId])

    return (
        <>
            <TextInput
                multiline={true}
                style={styles.textInput}
                value={text}
                onChangeText={(text) => setText(text)}
                placeholder='Şifre İsmi Giriniz...'
                autoFocus={true}

            />

            <TextInput
                style={styles.textInputTitle}
                value={title}
                onChangeText={(text) => setTitle(text)}
                placeholder='Şifre Giriniz...'

            />
        </>
    )
}

export default NoteInput

const styles = StyleSheet.create({
    textInputTitle: {
        backgroundColor: '#f8f8f9',
        width: '100%',
        fontSize: 16,
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderColor: '#fefefe'
    },
    textInput: {
        backgroundColor: '#f8f8f9',
        width: '100%',
        fontSize: 16,
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderColor: '#fefefe'
    }
})