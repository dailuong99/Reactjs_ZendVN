import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'


function App() {
 const [state,setState] = useState('');

function handleChangeName(e){
  setState(e.target.value)
}
  return (
    <div>
      <input onChange={handleChangeName}/>
      <span>
        {state}
      </span>
    </div>
  );
}

export default App;
