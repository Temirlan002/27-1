import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: 'usersSlice',
    initialState: {
        users: [],
        inputValue: ''
    },
    reducers: {
        changeInput: (state, action) => {
            state.inputValue = action.payload
        },
        addUser: (state, action) => {
            state.inputValue = ''
            state.users = [...state.users, action.payload]
        },
        deleteAll: (state, action) => {
            state.inputValue = ''
            state.users = []
        }
    }
})

export const { changeInput, addUser, deleteAll } = usersSlice.actions

export default usersSlice.reducer