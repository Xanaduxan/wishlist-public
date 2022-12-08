import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { State } from './types/State';

const initialState: State = {
   groups: [],
   req: [],
    error: {
        message: ''
    },
};

export const initAsyncGroups =
createAsyncThunk('group/initAsyncGroups',
() => fetch('http://localhost:4000/mygroups', { credentials: 'include' })
.then((result) => result.json())
.then((data) => data
 ));

export const initAsyncUsersInGroups =
createAsyncThunk('group/initAsyncUsersInGroups',
(id: number) => fetch(`http://localhost:4000/mygroups/:${id}`, { credentials: 'include' })
.then((result) => result.json())
.then((data) => data
 ));

export const addAsyncGroups = createAsyncThunk('group/addAsyncGroups',
async ({ name, adminId, picture, description }:{ name:string, adminId:number, picture:string, description:string }) =>
fetch('http://localhost:4000/mygroups', { credentials: 'include',
    method: 'post',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({
        name,
        adminId,
        picture,
        description,
      }),
})
.then((result) => result.json())
.then((data) => data));
//hg
// export const delAsyncGroups = createAsyncThunk('group/delAsyncGroups',
// async (id:groupId) =>
// fetch(`http://localhost:4000/groups/${id}`, {
//     method: 'delete',
//     headers: { 'Content-type': 'application/json' },
//     credentials: 'include',
// })
// .then((result) => result.json())
// .then((data) => data)
// );

export const editAsyncGroups = createAsyncThunk('group/editAsyncGroups',
async ({ id, name, adminId, picture, description }:{ id:number, name:string, adminId:number, picture:string, description:string }) =>
fetch(`http://localhost:4000/mygroups/${id}`, {
    method: 'post',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({
        id,
        name,
        adminId,
        picture,
        description,
      }),
      credentials: 'include',
    })
    .then((result) => result.json())
    .then((data) => data)
);

export const addUserInGroup = createAsyncThunk('group/addUserInGroup', ({ idGroup, userId } : { idGroup: number, userId: number }) => fetch(`http://localhost:4000/mygroups/${idGroup}`, {
  credentials: 'include',
  method: 'post',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ userId })
})
  .then((result) => result.json())
  .then((data) => data));

export const deleteUserInGroup = createAsyncThunk('group/delUserInGroups', async ({ idGroup, userId } : { idGroup: number, userId: number }) =>
fetch(`http://localhost:4000/mygroups/${idGroup}`, {
    method: 'delete',
    headers: { 'Content-type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ userId })
})
.then((result) => result.json())
.then((data) => data)
);

export const OutGroup = createAsyncThunk('group/OutGroups', async ({ groupId, adminId}: { groupId: number, adminId: number }) => fetch('http://localhost:4000/mygroups', {
    method: 'delete',
    headers: { 'Content-type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ groupId, adminId })
})
.then((result) => result.json())
.then((data) => data)
);

export const initAsyncReq =
createAsyncThunk('group/initAsyncReq',
() => fetch('http://localhost:4000/mygroups/gr', { credentials: 'include' })
.then((result) => result.json())
.then((data) => data
 ));

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
         .addCase(addAsyncGroups.fulfilled, (state, action) => {
          console.log(action.payload);
          
            state.groups.push(action.payload);
         })
         .addCase(addAsyncGroups.rejected, (state, action) => {
            state.error.message = action.error.message;
          })
          .addCase(editAsyncGroups.rejected, (state, action) => {
            state.error.message = action.error.message;
          })
          .addCase(addUserInGroup.fulfilled, (state, action) => {
            state.req.push(action.payload);
          })
          .addCase(deleteUserInGroup.fulfilled, (state, action) => {
            state.req = state.req.filter((el) => el.userId !== +action.payload);
          })
          .addCase(initAsyncUsersInGroups.fulfilled, (state, action) => {
            state.req = action.payload;
        })
        .addCase(initAsyncUsersInGroups.rejected, (state, action) => {
            state.error.message = action.error.message;
         })
         .addCase(OutGroup.fulfilled, (state, action) => {
          console.log(action.payload);
          // console.log(state.req);
          
          state.req = state.req.filter((el) => el.groupId !== action.payload.id);
          state.groups = state.groups.filter((el) => el.id !== action.payload.groupId);
          // console.log(state.req);
          // console.log(state.groups);
          
         })
         .addCase(initAsyncReq.fulfilled, (state, action) => {
          state.req = action.payload
         })
    } });

export default groupSlice.reducer;
