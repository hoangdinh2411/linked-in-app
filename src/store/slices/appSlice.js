import {createSlice} from '@reduxjs/toolkit'

const initialState={
    isLoading: false
}

const appSlice = createSlice({
    name:'appSlice',
    initialState,
    reducers:{
       
    }
})

// actions
export const {} = appSlice.actions;
export default appSlice.reducer