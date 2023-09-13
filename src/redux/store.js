import { configureStore } from '@reduxjs/toolkit'
import userReducer, { allUsers } from './userSlice'
import authSlice, { status } from './authSlice'

export const store = configureStore({
    reducer: {
        users: userReducer,
        auth: authSlice,
    },
})
console.log("store loaded")
store.dispatch(status())

//TODO: fix this
if (localStorage.getItem('token')) {
    store.dispatch(allUsers())
}