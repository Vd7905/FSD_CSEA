import React, { useState } from 'react'

const UseOfState = () => {
 const[count,setCount] = useState(100);

 function increment(){
    setCount(count+4);
 }
 function decrement(){
    setCount(count-10);
 }
  return (
    <div>

     <div>
     <h2> {count} </h2> 
     </div>
     
     <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
     </div>

    </div>
  )
}

export default UseOfState
