import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import dataReducer from './data/dataSlice'
import totalReducer from './data/totalSlice'

export const store = configureStore({
  reducer: {
    data: dataReducer,
    counter: counterReducer,
    total: totalReducer,
  },
})