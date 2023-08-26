import React, { useCallback, useLayoutEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { Note, getAllNotes } from "../services/NoteStoreService";
import { ScreenNavigationProp } from "../types";

import { Feather } from '@expo/vector-icons';

const SavedNotesList = () => {

    const navigation = useNavigation<ScreenNavigationProp>();

    const [data, setData] = useState<Note[]>([])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerSearchBarOptions: {
                // search bar options
            },
        });
    }, [navigation]);

    useFocusEffect(
        useCallback(() => {
            getAllNotes().then(result => setData(result.notes))
        }, [])
    )

    return (
        <View style={styles.container}>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
            >
                {
                    data.map((note) => (
                        <Pressable key={note.id} onPress={() => { navigation.navigate('EditNoteScreen', { noteId: note.id }) }}>
                            <View style={styles.row}>
                                <Text style={styles.note}>
                                    {note.text.length === 0 ? '(Blank Note)' : note.text}
                                </Text>
                                <Feather name="chevron-right" size={24} color="black" />
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
        flex: 1,
    },
    row: {
        borderBottomWidth: 1,
        borderBottomColor: '#e6e6e6',
        alignSelf: 'center',
        height: 60,
        backgroundColor: '#fff',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 32
    },
    note: {
        width: '100%',
        fontSize: 16
    }
})