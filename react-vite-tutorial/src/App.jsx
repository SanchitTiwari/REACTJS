import './App.css'
import { useState } from 'react';

function App() {

let [counter,setCounter] =  useState(0)


  function addValue(){
    counter = counter +1;
    setCounter(counter);
    console.log("Value added");
  }
  function subtractValue(){
    if(counter<=0){
      alert("Cant go below 0")
    }
    else{
    counter = counter-1;
    setCounter(counter);
    }
    
  }
  const remove =() => {
    counter = 0;
    setCounter(counter);
  }
  return (
    <>
      <h1>React with Vite Tutorial</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={addValue}>Add 1</button>
      <br></br>
      <button onClick={subtractValue}>Subtract 1</button>
      <br/>
      <button onClick={remove}>Remove Value</button>
    </>
  )
}

export default App
