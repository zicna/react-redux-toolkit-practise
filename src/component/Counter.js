import React, { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { directionDown, directionUp } from '../store/index'

import { increment, decrement, change } from '../store/index'


const Counter = () => {
  const [coefficient, setCoefficient] = useState(0)
  const [direction, setDirection] = useState(directionUp)

  const counter = useSelector((state) => state.counter)

  const dispatch = useDispatch()

  const counterUpHandler = () => {
    dispatch(increment())
  }

  const counterDownHandler = () => {
    dispatch(decrement())
  }

  const coefficientChangeHandler = (event) => {
    setCoefficient(event.target.value)
  }
// ! dispatching with payload
  const counterCoeffHandler = () => {
    dispatch(change({ direction, coeff: parseInt(coefficient) })
      )
  }

  const selectChangeHandler = (event) => {
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
