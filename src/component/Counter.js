import React, { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { INCREMENT, DECREMENT, CHANGE } from '../store/index'
import { directionDown, directionUp } from '../store/index'


const Counter = () => {
  const [coefficient, setCoefficient] = useState(0)
  const [direction, setDirection] = useState(directionUp)

  const counter = useSelector((state) => state.counter)

  const dispatch = useDispatch()

  const counterUpHandler = () => {
    dispatch({ type: INCREMENT })
  }

  const counterDownHandler = () => {
    dispatch({ type: DECREMENT })
  }

  const coefficientChangeHandler = (event) => {
    setCoefficient(event.target.value)
  }

  const counterCoeffHandler = () => {
    dispatch({
      type: CHANGE,
      payload: { direction, coeff: parseInt(coefficient) },
    })
  }

  const selectChangeHandler = (event) => {
    // debugger

    setDirection(event.target.value)
  }

  return (
    <div className="counter">
      <h2>Hello from counter</h2>
      <div>
        <p>{counter}</p>
        <div>
          <button onClick={counterUpHandler}>UP</button>
        </div>
        <div>
          <button onClick={counterDownHandler}>DOWN</button>
        </div>
        <div>
          <select name="up/down" id="" onChange={selectChangeHandler}>
            <option value={directionUp}>UP</option>
            <option value={directionDown}>DOWN</option>
          </select>
          <input
            type="number"
            min={1}
            value={coefficient}
            onChange={coefficientChangeHandler}
          />
          <button onClick={counterCoeffHandler}>CHANGE</button>
        </div>
      </div>
    </div>
  )
}

export default Counter
