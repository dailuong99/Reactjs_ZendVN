import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'


function App() {
 const [state,steState] = useState('');

function handleChangeName(e){
  return steState(e.target.value)
}

  return (
    <div>
      <input onChange={handleChangeName}/>
      <span> {state}</span>
    </div>
  );
}

export default App;
