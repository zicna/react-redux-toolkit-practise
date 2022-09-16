import { createSlice, configureStore } from '@reduxjs/toolkit'

export const directionUp = 'UP'
export const directionDown = 'DOWN'

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    change(state, action) {
      if (action.payload.direction === directionUp) {
        state.counter = state.counter + action.payload.coeff
      }
      if (action.payload.direction === directionDown) {
        state.counter = state.counter - action.payload.coeff
      }
    },
  },
})

export const { increment, decrement, change } = counterSlice.actions

const store = configureStore({
    reducer: counterSlice.reducer
}) 

export default store

