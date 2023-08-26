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

    const [text, setText] = useState<string>('')

    useEffect(() => {
        if (noteId) {
            getNote(noteId).then(result => setText(result?.text ?? ''))
        }
    }, [])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => <SaveNote text={text} id={noteId ?? ''} />
        })
    }, [navigation, text, noteId])

    return (
        <>
            <TextInput
                multiline={true}
                style={styles.textInput}
                value={text}
                onChangeText={(text) => setText(text)}
                autoFocus={true}
            />
        </>
    )
}

export default NoteInput

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: '#ffb70342',
        width: '100%',
        flex: 1,
        fontSize: 16,
        paddingHorizontal: 20,
        paddingTop: 30,
        paddingBottom: 20
    }
})