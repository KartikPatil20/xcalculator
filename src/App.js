import React, {useState} from 'react';
import './App.css';

const App = () => {
  const [expression, setExpression] = useState('');
  const [answer, setAnswer] = useState('')
  const [error, setError] = useState('')
  
  const handleValue = (value) => {

    if(value === "="){
      setAnswer(calculation(expression))
    }else if(value === "C"){
      setExpression('')
      setAnswer('')
      setError('')
    }else{
      setExpression( expression + value);
    }
  }

  const calculation = (expression) => {
    /*try{
      let input = exp
      setAnswer(input)
      console.log(exp)
    }
    catch(e){
      setError('Error')
    }*/

    const operators = ['+', '-', '*', '/'];
    let currentNumber = '';
    let currentOperator = '';
    const numbers = [];

    for (let i = 0; i < expression.length; i++) {
        const char = expression[i];

        if (operators.includes(char)) {
            if (currentNumber !== '') {
                numbers.push(parseFloat(currentNumber));
                currentNumber = '';
            }
            currentOperator = char;
        } else if(expression[expression.length-1] === "+" || expression[expression.length-1] === "/" || expression[expression.length-1] === "*" | expression[expression.length-1] === "-"){
            return setError('Error')
        } else {
            currentNumber += char;
        }
    }

    if (currentNumber !== '') {
        numbers.push(parseFloat(currentNumber));
    }

    let result = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        const number = numbers[i];
        switch (currentOperator) {
            case '+':
                result += number;
                break;
            case '-':
                result -= number;
                break;
            case '*':
                result *= number;
                break;
            case '/':
                result /= number;
                break;
            default: 
        }
    }

    return result;

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
