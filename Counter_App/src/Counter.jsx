import React, { useState } from 'react'

function Counter() {

    const [count, setCount] = useState(0);

    const handleIncrease = () => {
        setCount(count => count + 1);
    }

    const handleDecrease = () => {
        setCount(count => count - 1);
    }

    const handleReset = () => {
        setCount(0);
    }



  return (
    <div className='counter-container'>
        <p className='count-display'>Count: {count}</p>
        <button className='counter-button' onClick={handleDecrease}>Decrease</button>
        <button className='counter-button' onClick={handleReset}>Reset</button>
        <button className='counter-button' onClick={handleIncrease}>Increase</button>
    </div>
  )
}

export default Counter