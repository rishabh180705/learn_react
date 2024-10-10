import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let count=0;
  let [counter, setCounter] = useState(count);

  const addValue=()=>{
    if (counter <20) {
      setCounter(counter + 1); // Decrement only if greater than 0
      // setCounter(counter +1);
      // setCounter(counter +1); do not increment counter because they are same and execute once;
      setCounter(counter=> counter + 1); 
      setCounter(counter => counter + 1); 


    }
  };
  const removeValue=()=>{
    if (counter > 0) {
      setCounter(counter - 1); // Decrement only if greater than 0
    }
  };


  return (
    <>
        <h1>counter</h1>
        <h3>Value:{counter}</h3>
        <button onClick={addValue}>Add</button>
        <button onClick={removeValue}>Remove</button>
    </>
  );
}

export default App


