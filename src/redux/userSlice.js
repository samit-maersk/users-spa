import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../axios'

export const allUsers = createAsyncThunk(
  "users/all",
  async () => {
    return axios.get('/users').then((res) => res.data);
  }
);

export const addUser = createAsyncThunk(
    "users/add",
    async (data) => {
        return axios.post('/users', data).then((res) => res.data);
    }
);

export const editUser = createAsyncThunk(
    "users/edit",
    async (data) => {
        return axios.put(`/users/${data.id}`, data).then((res) => res.data);
    }
);

export const deleteUser = createAsyncThunk(
    "users/delete",
    async (id) => {
        return axios.delete(`/users/${id}`).then((res) => id);
    }
);

const initialState = {
  data: [],
  error: null,
  loading: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
        //read
        .addCase(allUsers.pending, (state) => {
        state.loading = true;
        state.data = []
        })
        .addCase(allUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload
        })
        .addCase(allUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        })
        //create
        .addCase(addUser.pending, (state) => {
            state.loading = true;
        })
        .addCase(addUser.fulfilled, (state, action) => {
            state.loading = false;
            state.data.push(action.payload)
        })
        .addCase(addUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
        //update
        .addCase(editUser.pending, (state) => {
            state.loading = true;
        })
        .addCase(editUser.fulfilled, (state, action) => {
            state.loading = false;
            const index = state.data.findIndex((item) => item.id === action.payload.id)
            if(index !== -1) state.data[index] = action.payload
        })
        .addCase(editUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
        //delete
        .addCase(deleteUser.pending, (state) => {
            state.loading = true;
        })
        .addCase(deleteUser.fulfilled, (state, action) => {
            console.log(action.payload)
            state.loading = false;
            state.data = state.data.filter((item) => item.id !== action.payload)
        })
        .addCase(deleteUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
  }
})

//export const {  } = userSlice.actions

export default userSlice.reducer