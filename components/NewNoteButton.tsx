import React from 'react'
import { Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { FontAwesome } from '@expo/vector-icons'
import { ScreenNavigationProp } from '../types'

const NewNoteButton = () => {
    const navigation = useNavigation<ScreenNavigationProp>()

    return (
        <Pressable onPress={() => { navigation.navigate('EditNoteScreen', { noteId: undefined }) }}>
            <FontAwesome name='pencil-square-o' size={30} color={'#ffb703'} />
        </Pressable>
    )
}

export default NewNoteButton
