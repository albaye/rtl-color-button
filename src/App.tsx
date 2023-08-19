import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

export function replaceCamelCase(colorname: string) {
  // if you find a capital letter in the middle of the word
  // and even if you find it multiple times, replace it with
  // whatever letter you found preceded by a space
  return colorname.replace(/\B([A-Z])\B/g, " $1")
}

function App() {
  const [buttonColor, setButtonColor] = useState('red')
  const [disabled, setDisabled] = useState(false)
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red'

  const buttonHandler = () => {
    setButtonColor(newButtonColor)
  }
  return (
    <div>
      <button style={{ backgroundColor: disabled ? "gray" : buttonColor }} disabled={disabled} onClick={buttonHandler}>Change to {newButtonColor}</button>
      <input id="disable-button-checkbox" type="checkbox" onChange={(e) => setDisabled(e.target.checked)} />
      <label htmlFor='disable-button-checkbox'>Disable button</label>
    </div>
  );
}

export default App;
