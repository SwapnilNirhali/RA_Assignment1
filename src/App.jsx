import "bootstrap/dist/css/bootstrap.min.css"
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import plusSign from "./assets/plusSign.jpg"
import minusSign from "./assets/minusSign.png"
import reset from "./assets/reset.jpg"
import './App.css'
import { useCounter, useCustomLogger } from './useCounter'
import {useToggle}  from "./useToggle"
import useFetch from "./useFetch"
import {useLogger} from "./useLogger"
import { useState, useEffect } from "react"

function useLocalStorage(){
  const [localStorageValue, setLocalStorageValue] =  useState("")
  
  useEffect(() => { getLocalValue("myKey")}, [])

  function storeLocally(key, localValue){
    localStorage.setItem(key, localValue)
  }

  function getLocalValue(key){
    const value = localStorage.getItem(key)
    setLocalStorageValue(value)
  }
  
  return {localStorageValue, storeLocally, getLocalValue}
}

function App() {
  
  const {counter, incrementCounter, decrementCounter, resetCounter} = useCounter();
  const { booleanState, toggle } = useToggle();
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users');
  const{changedValue, changeValue}=useLogger();
  const {localStorageValue, storeLocally, getLocalValue} = useLocalStorage();
  useCustomLogger(counter)
 
  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started with Counter </h1>
          <br />
          <h1>{counter}</h1>

          <br />
          <hr />
        </div >
        <div className="row" style={{ display: 'flex', gap: '10px' }}>
        <button
          className="counter col-2"
          onClick={incrementCounter}
          style={{ width: '100px', height: '100px' }} 
        >       
                <img className="button-icon" src={plusSign} alt="" />
                    
        </button>
        <button
          className="counter  col-2"
          onClick={decrementCounter}
          style={{ width: '100px', height: '100px' }} 
        >
          <img className="button-icon" src={minusSign} alt="" />
        </button>
         <button
          className="counter  col-2"
          onClick={resetCounter}
           style={{  width: '100px', height: '100px' }} 
        >
         <img className="button-icon" src={reset} alt="" />
        </button>
        </div>
        <hr />
        <div>
          <h1>Get started with Toggle </h1>
          <br />
          <h1>{booleanState === true ? "TRUE" : "FALSE"}</h1>

          <br />
        </div >
        <div className="toggle-wrapper">
      <div 
        className={`toggle-container ${booleanState ? 'on' : 'off'}`} 
        onClick={toggle}
      >
        <div className="toggle-knob"></div>
      </div>
      <span>{booleanState ? "Enabled" : "Disabled"}</span>
    </div>
   <br /><br />
    <hr /> 
    <div>
          <h1>Lets Import Data from URL </h1>
          <br />
    {loading && <p>Loading...</p>}
  {error && <p>Error: {error.message}</p>}
    <ul>
      { data?.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
     <br />
    <hr className="my-4" style={{ borderTop: '5px solid black' }} />
    

      </div>

       <div className='mb-3'>
       <h1>Lets display the input text </h1>
          <br />
          <div className="input-group ">
      <input id="inputTextBox"
        className="form-control"
        type="text"
        onChange={(e) => changeValue(e.target.value)}
        placeholder="Type something..."
        aria-describedby="basic-addon1"
        
      /></div>
     
      <p className='fs-3 fw-bold position-absolute start-30' >Current value: {changedValue}</p>
    </div>
    
      <br /> <hr className="my-4" style={{ borderTop: '5px solid black' }} />
      <div className='mb-3'>
       <h1>Lets Store Values Locally </h1>
          <br />
        <div className="input-group ">
      <input id="inputTextBox"
        className="form-control"
        type="text"
        onChange={(e) => storeLocally("myKey", e.target.value)}
        placeholder="Enter value to be stored locally "
        aria-describedby="basic-addon1"
        
      /></div>
     
      <p className='fs-3 fw-bold position-absolute start-30' >Current Value: {localStorageValue}</p>
          </div> <hr className="my-4" style={{ borderTop: '5px solid black' }} /><br />
      </section>
      
    </>
  )
}

export default App
