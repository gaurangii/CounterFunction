import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]= useState(5)

 // let counter=5
  const addValue = () => {
    console.log("clicked", counter);
    counter +=1
    setCounter(counter)
    //setCounter(prevcounter => prevcounter+1) *4 will result in adding 4 times
  }

  const removeValue = () => {
    console.log("clicked", counter);
    counter -=1
    setCounter(counter)
  }

  return (
    <>
      <h1>COUNTER FUNCTION</h1>
      <h2>counter value:{counter}</h2>

      <button onClick={addValue}> add value{counter}</button><br />
    <br /><button onClick={removeValue}> remove value{counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
