import React from 'react'
interface SomeFunction{
    count:number
    handleIncrement?:()=> void
    handleDecrement?:()=>void
}

const SomeFunction = ({count, handleDecrement, handleIncrement}) => {
  return (
    <div>
        <h1>Count Function</h1>
        <p>{count}</p>
        {handleIncrement && <button onClick={handleIncrement}>Increment</button>}
        {handleDecrement && <button onClick={handleDecrement}>Decrement</button>}
    </div>
  )
}

export default SomeFunction