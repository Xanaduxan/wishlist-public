import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { groupId, State } from './types/State';

const initialState: State = {
   groups: [],
    error: {
        message: ''
    },
};

export const initAsyncGroups = 
createAsyncThunk('group/initAsyncGroups',
() => fetch ('http://localhost:4000/mygroups')
.then((result) => result.json())
.then((data) => data));

export  const addAsyncGroups = createAsyncThunk('group/addAsyncGroups', 
async ({id, name, adminId, picture, description}:{id:number, name:string, adminId:number, picture:string, description:string}) =>
fetch('http://localhost:4000/mygroups', {
    method: 'post',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({
        id,
        name,
        adminId,
        picture,
        description,
      }),
})
.then((result) => result.json())
.then((data) => data));

export const delAsyncGroups = createAsyncThunk('group/delAsyncGroups',
async(id:groupId) => 
fetch(`http://localhost:4000/groups/${id}`, {
    method: 'delete',
    headers: { 'Content-type': 'application/json' },
    credentials: 'include',
})
.then((result) => result.json())
.then((data) => data)
);

export const editAsyncGroups =  createAsyncThunk('group/editAsyncGroups',
async({id, name, adminId, picture, description}:{id:number, name:string, adminId:number, picture:string, description:string}) =>
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
)

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
            state.groups.push(action.payload);
         })
         .addCase(addAsyncGroups.rejected, (state, action) => {
            state.error.message = action.error.message;
          })
          .addCase(delAsyncGroups.fulfilled, (state, action) => {
            const index = state.groups.findIndex((group) => group.id === action.payload);
            state.groups.splice(index, 1);
          })
          .addCase(delAsyncGroups.rejected, (state, action) => {
            state.error.message = action.error.message;
          })
          .addCase(editAsyncGroups.fulfilled, (state, action) => {
            state.groups = state.groups.map((group) => {
              if (group.id === action.payload.id) {
              return { ...group,
                name: action.payload.name,
                adminId: action.payload.adminId,
                picture: action.payload.picture,
                description: action.payload.description };
    } return group;
    });
          })
          .addCase(editAsyncGroups.rejected, (state, action) => {
            state.error.message = action.error.message;
          });
    } });

export default groupSlice.reducer;

// function async(arg0: { id: any; name: void; adminId: any; picture: any; description: any; }, arg1: { id: any; name: any; adminId: any; picture: any; description: any; }): import("@reduxjs/toolkit").AsyncThunkPayloadCreator<unknown, void, { state?: unknown; dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined; extra?: unknown; rejectValue?: unknown; serializedErrorType?: unknown; pendingMeta?: unknown; fulfilledMeta?: unknown; rejectedMeta?: unknown; }> {
//     throw new Error('Function not implemented.');
// }
