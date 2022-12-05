import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { State } from './types/State';

const initialState: State = {
   groups: [],
    error: {
        message: ''
    },
};

export const initAsyncGroups = createAsyncThunk('group/initAsyncGroups', () => fetch ('http://localhost:4000/mygroups')
.then((result) => result.json())
.then((data) => data));

const groupSlice = createSlice({
    name: 'groups',
    initialState,
    reducers: {

    }, 
    extraReducers: (builder) => {
        builder
        .addCase(initAsyncGroups.fulfilled, (state, action) => {
            state.groups = action.payload;
        })
        .addCase(initAsyncGroups.rejected, (state, action) => {
            state.error.message = action.error.message;
         })
    },

});

export default groupSlice.reducer;