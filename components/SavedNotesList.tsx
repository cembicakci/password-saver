import React, { useCallback, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { useFocusEffect } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

import { Note, getAllNotes } from "../services/NoteStoreService";
import { ScreenNavigationProp } from "../types";

const SavedNotesList = () => {

    const navigation = useNavigation<ScreenNavigationProp>();

    const [data, setData] = useState<Note[]>([])

    useFocusEffect(
        useCallback(() => {
            getAllNotes().then(result => setData(result.notes))
        }, [])
    )

    return (
        <View style={styles.container}>
            <ScrollView>
                {
                    data.map((note) => (
                        <Pressable key={note.id} onPress={() => { navigation.navigate('EditNoteScreen', { noteId: note.id }) }}>
                            <View style={styles.row}>
                                <Text style={styles.note}>
                                    {note.text.length === 0 ? '(Blank Note)' : note.text}
                                </Text>
                            </View>
                        </Pressable>
                    ))
                }
            </ScrollView>
        </View>
    )
}
export default SavedNotesList

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    row: {
        width: '90%',
        borderBottomWidth: 1,
        borderBottomColor: '#e6e6e6',
        alignSelf: 'center',
        height: 90,
        justifyContent: 'center'

    },
    note: {
        paddingVertical: 20,
        width: '100%',
        fontSize: 16
    }
})