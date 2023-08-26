import React, { useLayoutEffect } from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'

import NoteInput from '../components/NoteInput'
import { EditScreenRouteProp, ScreenNavigationProp } from '../types'
import DeleteNote from '../components/DeleteNote'

const EditNoteScreen = () => {

    const navigation = useNavigation<ScreenNavigationProp>()
    const route = useRoute<EditScreenRouteProp>()
    const noteId = route?.params?.noteId

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: noteId ? 'Edit Note' : 'New Note',
            headerRight: () => (noteId ? <DeleteNote noteId={noteId} /> : <></>)
        })
    }, [navigation])

    return (
        <NoteInput noteId={noteId} />
    )
}

export default EditNoteScreen
