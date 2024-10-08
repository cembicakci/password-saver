import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    login: false,
}

const slice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        changeUser: (state) => {
            state.login = !state.login
        }
    }
})

export const { changeUser } = slice.actions
export default slice.reducer