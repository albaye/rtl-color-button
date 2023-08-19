import React, { useState } from 'react';
import './App.css';

export function replaceCamelCase(colorname: string) {
  // if you find a capital letter in the middle of the word
  // and even if you find it multiple times, replace it with
  // whatever letter you found preceded by a space
  return colorname.replace(/\B([A-Z])\B/g, " $1")
}

function App() {
  const [buttonColor, setButtonColor] = useState('MediumVioletRed')
  const [disabled, setDisabled] = useState(false)
  const newButtonColor = buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed'

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
