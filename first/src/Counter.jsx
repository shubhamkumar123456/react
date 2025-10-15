//1 create component
// precreated component  --> rafce( arrow function export),  rfc(normal function), rfce, rafc

import React, { useState } from 'react'

const Counter = () => {
  // let x = 10;
  const [x, setX] = useState(5);
  console.log(x)
  
  const handleIncrement=()=>{
    // console.log("hello")

    setX(x+1)
   
  }

  function handleDecrement(){
    if(x>0){
      setX(x-1)
    }
  }

  function handleMultiply(){
    setX(x*2)
  }
  function handleDivide(){
    setX(x/2)
  }

  function handleReset(){
    setX(5)
  }


  return (
    <div>
      <h1>THis is counter App page</h1>

      <p>Count : {x}</p>

      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement} >Decrement</button>
      <button onClick={handleMultiply}>Multiply by 2</button>
      <button onClick={handleDivide}>Divide by 2</button>
      <button onClick={handleReset}>Reset</button>

    

     
    </div>
  )
}

export default Counter


