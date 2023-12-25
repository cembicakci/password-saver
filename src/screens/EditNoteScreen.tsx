import React, { useLayoutEffect } from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'

import NoteInput from '../components/NoteInput'
import DeleteNote from '../components/DeleteNote'

import { EditScreenRouteProp, ScreenNavigationProp } from '../../types'

const EditNoteScreen = () => {

    const navigation = useNavigation<ScreenNavigationProp>()
    const route = useRoute<EditScreenRouteProp>()
    const noteId = route?.params?.noteId

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: noteId ? 'Şifre Güncelle' : 'Yeni Şifre',
            headerLeft: () => (noteId ? <DeleteNote noteId={noteId} /> : <></>)
        })
    }, [navigation])

    return (
        <NoteInput noteId={noteId} />
    )
}

export default EditNoteScreen
