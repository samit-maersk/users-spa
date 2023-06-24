import { configureStore } from '@reduxjs/toolkit'
import userReducer, { allUsers } from './userSlice'

export const store = configureStore({
    reducer: {
        users: userReducer,
    },
})

store.dispatch(allUsers())