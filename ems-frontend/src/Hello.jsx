import React, { useState } from 'react';
function Hello() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-center'>Hello world {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </>
  )
}

export default Hello