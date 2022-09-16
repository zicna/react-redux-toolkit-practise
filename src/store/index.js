import { createStore } from 'redux'

export const INCREMENT = 'INCREMET'
export const DECREMENT = 'DECREMENT'
export const CHANGE = 'CHANGE'

export const directionUp = 'UP'
export const directionDown = 'DOWN'

const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        counter: state.counter + 1,
      }
    case DECREMENT:
      return {
        counter: state.counter - 1,
      }
    case CHANGE:
      if (action.payload.direction === directionUp) {
        return {
          counter: state.counter + action.payload.coeff,
        }
      }
      if (action.payload.direction === directionDown) {
        return {
          counter: state.counter - action.payload.coeff,
        }
      }

    default:
      return state
  }
}

const store = createStore(counterReducer)

export default store
