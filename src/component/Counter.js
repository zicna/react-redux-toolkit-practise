const Counter = () => {
  return (
    <div className="counter">
      <h2>Hello from counter</h2>
      <div>
        <p>--Counter--</p>
        <div>
          <button>UP</button>
        </div>
        <div>
          <button>DOWN</button>
        </div>
        <div>
          <select name="up/down" id="">
            <option value="up">UP</option>
            <option value="down">DOWN</option>
          </select>
          <input type="number" min={1}/>
          <button>CHANGE</button>
        </div>
      </div>
    </div>
  )
}

export default Counter
