import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

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
