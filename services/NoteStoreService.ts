import AsyncStorage from '@react-native-async-storage/async-storage';

export type Note = {
    text: string,
    title: string,
    id: string
}

export type NoteStore = {
    notes: Array<Note>
}

const STORE_KEY = 'TAKE_NOTES_STORE'

export const getAllNotes = async () => {
    const storeItem = await AsyncStorage.getItem(STORE_KEY)
    if (storeItem) {
        return JSON.parse(storeItem) as NoteStore
    }

    return { notes: [] }
}

export const getNote = async (id: string) => {
    const noteStore = await getAllNotes()
    console.log("noteStore", noteStore)
    const note = noteStore.notes.find(note => note.id === id)
    return note
}

export const saveNote = async (text: string, title: string, noteId: string | undefined) => {
    console.log("saveNote", text, title)
    
    const noteStore = await getAllNotes()
    if (noteId) {
        //Edit note
        const noteIndex = noteStore.notes.findIndex(note => note.id === noteId)
        noteStore.notes.splice(noteIndex, 1, { id: noteId, text: text, title: title })
    } else {
        //Add new note
        noteStore.notes.push({ id: Date.now().toString(), text: text, title: title })
    }

    await AsyncStorage.setItem(STORE_KEY, JSON.stringify(noteStore))
}

export const deleteNote = async (noteId: string) => {
    const noteStore = await getAllNotes()
    const noteIndex = noteStore.notes.findIndex(note => note.id === noteId)
    noteStore.notes.splice(noteIndex, 1)
    const newStore = JSON.stringify(noteStore)
    await AsyncStorage.setItem(STORE_KEY, newStore)
}