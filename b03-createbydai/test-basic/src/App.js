import React, { useState } from 'react';
import Header  from './Header';
import Footer  from './Footer';

function App() {
  const [count, setCount] = useState(0);

  function handleClick(){
    setCount (count + 1) ;
  }
  return (
    <div className="App">
      <Header count={count}/>
      <Footer handleClick={handleClick}/>
    </div>
  );
}

export default App;
