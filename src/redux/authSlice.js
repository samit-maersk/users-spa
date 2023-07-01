import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../axios'

export const login = createAsyncThunk(
    "auth/login",
    async (data) => {
        return axios.post('/login', data).then((res) => res.data);
    }
);

const initialState = {
    data: [],
    error: null,
    loading: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.data = [];
            localStorage.removeItem('token');
        }
    },
    extraReducers: (builder) => {
      builder
        .addCase(login.pending, (state) => {
            state.loading = true;
        })
        .addCase(login.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload
            localStorage.setItem('token', action.payload.token);
        })
        .addCase(login.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
    }
  })
  
  export const {logout} = authSlice.actions
  
  export default authSlice.reducer