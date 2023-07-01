import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../axios'
import _axios from 'axios';

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

export const userById = createAsyncThunk(
    "users/byId",
    async (id) => {
        return axios.get(`/users/${id}`).then((res) => res.data);
    }
);

export const searchUserByName = createAsyncThunk(
    "users/search/name",
    async (name) => {
        return axios.get(`/users/search/name/${name}`).then((res) => res.data);
    }
);

export const searchUserByEmail = createAsyncThunk(
    "users/search/email",
    async (email) => {
        return axios.get(`/users/search/email/${email}`).then((res) => res.data);
    }
);

export const searchByNameOrEmail = createAsyncThunk(
    "users/search",
    async (nameOrEmail) => {
        return _axios
            .all([
                axios.get(`/users/search/name/${nameOrEmail}`).then(r => r.data), 
                axios.get(`/users/search/email/${nameOrEmail}`).then(r => r.data)
            ])
            .then(_axios.spread((...responses) => {
            return [...responses[0], ...responses[1]]
        }))
    }
);

const initialState = {
  data: [],
  pageData: [],
  error: null,
  loading: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    dataByPageNumber: (state, action) => {
        const { page, limit } = action.payload
        state.pageData = state.data.slice((page-1)*limit, page*limit)
    }
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
            state.loading = false;
            state.data = state.data.filter((item) => item.id !== action.payload)
        })
        .addCase(deleteUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
        //read by id
        .addCase(userById.pending, (state) => {
            state.loading = true;
        })
        .addCase(userById.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload
        })
        .addCase(userById.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        }) 
        
        //search by name
        .addCase(searchUserByName.pending, (state) => {
            state.loading = true;
        })
        .addCase(searchUserByName.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload
        })
        .addCase(searchUserByName.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
        
        //search by email
        .addCase(searchUserByEmail.pending, (state) => {
            state.loading = true;
        })
        .addCase(searchUserByEmail.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload
        })
        .addCase(searchUserByEmail.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })

        //search by name or email
        .addCase(searchByNameOrEmail.pending, (state) => {
            state.loading = true;
        })
        .addCase(searchByNameOrEmail.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload
        })
        .addCase(searchByNameOrEmail.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
  }
})

export const { dataByPageNumber } = userSlice.actions

export default userSlice.reducer