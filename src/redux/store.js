import { configureStore } from '@reduxjs/toolkit'
import userReducer, { allUsers } from './userSlice'
import authSlice from './authSlice'

export const store = configureStore({
    reducer: {
        users: userReducer,
        auth: authSlice,
    },
})
console.log("store loaded")

if(localStorage.getItem('token')) {
    store.dispatch(allUsers())
}
