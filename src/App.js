import React, {useState} from 'react';
import './App.css';

const App = () => {
  const [expression, setExpression] = useState('');
  const [answer, setAnswer] = useState('')
  const [error, setError] = useState('')
  
  const handleValue = (value) => {

    if(value === "="){
      calculation(expression)
    }else if(value === "C"){
      setExpression('')
      setAnswer('')
      setError('')
    }else{
      setExpression( expression + value);
    }
  }

  const calculation = (exp) => {
    try{
      let input = eval(exp)
      setAnswer(input)
    }
    catch(e){
      setError('Error')
    }
  }



  return (
    <div className='App'>
      <div className='sec-a'>
        <h1>React Calculator</h1>
        <input value={expression} readOnly></input>
        <h3>{error ? "Error" : answer}</h3>
      </div>
      <div className='sec-b' >
        <button onClick={(e) => {
          handleValue(e.target.textContent)
        }}>7</button>
        <button onClick={(e) => {
          handleValue(e.target.textContent)
        }}>8</button>
        <button onClick={(e) => {
          handleValue(e.target.textContent)
        }}>9</button>
        <button onClick={(e) => {
          handleValue(e.target.textContent)
        }}>+</button>
        <button onClick={(e) => {
          handleValue(e.target.textContent)
        }}>4</button>
        <button onClick={(e) => {
          handleValue(e.target.textContent)
        }}>5</button>
        <button onClick={(e) => {
          handleValue(e.target.textContent)
        }}>6</button>
        <button onClick={(e) => {
          handleValue(e.target.textContent)
        }}>-</button>
        <button onClick={(e) => {
          handleValue(e.target.textContent)
        }}>1</button>
        <button onClick={(e) => {
          handleValue(e.target.textContent)
        }}>2</button>
        <button onClick={(e) => {
          handleValue(e.target.textContent)
        }}>3</button>
        <button onClick={(e) => {
          handleValue(e.target.textContent)
        }}>*</button>
        <button onClick={(e) => {
          handleValue(e.target.textContent)
        }}>C</button>
        <button onClick={(e) => {
          handleValue(e.target.textContent)
        }}>0</button>
        <button onClick={(e) => {
          handleValue(e.target.textContent)
        }}>=</button>
        <button onClick={(e) => {
          handleValue(e.target.textContent)
        }}>/</button>
      </div>
    </div>
  )
}

export default App
