import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userDetail: {},
}

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUserDetail: (state, action) => {
      state.userDetail = action.payload
    },
  },
})

// actions
export const {setUserDetail} = userSlice.actions
export default userSlice.reducer
