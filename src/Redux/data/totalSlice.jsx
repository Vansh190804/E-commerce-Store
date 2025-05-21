import { createSlice } from '@reduxjs/toolkit'



const initialState = {
  value: 0,
}

export const totalSlice = createSlice({
  name: 'total',
  initialState,
  reducers: {
    increase: (state, action) => {
      console.log(action.payload)
      state.value += action.payload .item
    },
    decrease: (state, action) => {
      state.value -= action.payload .item
    },
  },
})

// Action creators are generated for each case reducer function
export const { increase, decrease} = totalSlice.actions

export default totalSlice.reducer