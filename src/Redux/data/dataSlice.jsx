import { createSlice } from '@reduxjs/toolkit'
import { useEffect } from 'react'

const initialState = {
  value: [],
  quantities: {},
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload
      let existingitem = state.value.find((i) => i.des === item.des)
      if (existingitem) {
        state.quantities[item.des] += 1
      }
      else {
        state.value.push(item)
        state.quantities[item.des] = 1
      }
    },

    multiply: (state, action) => {
      const itemDes = action.payload.des; // Get the des of the clicked item
      const item = (state.value).find((i) => i.des === itemDes) // Find the item in value
      if (item) {
        state.quantities[item.des] += 1
        item.total = parseInt(item.price.replace(/[^0-9]/g, "")) * state.quantities[item.des]
      }
    },

    minus: (state, action) => {
      const itemDes = action.payload.des;
      const item = (state.value).find((i) => i.des === itemDes)
      if (item) {
        if (state.quantities[item.des] >= 2) {
          state.quantities[item.des] -= 1
            item.total = parseInt(item.price.replace(/[^0-9]/g, "")) * state.quantities[item.des]
        }
        else{
          state.value = state.value.filter((i)=> i.des !== item.des)
        }
      }
    },

    total: (state, action)=>{
      console.log(action.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const {total,  minus, addToCart, multiply } = dataSlice.actions
export default dataSlice.reducer