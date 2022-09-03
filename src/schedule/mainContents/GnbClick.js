import React, {useState} from 'react';

const Counter = () => { 
  const [counter, setCounter] = useState(0); 
  

  return ( 
  <div> 
  
    <ul> 
      </ul> 
          <p> 현재카운트 <b>{counter}</b></p> 
          <button onClick={() => setCounter(counter + 1)}>+1</button> 
          <button onClick={() => setCounter(counter - 1)}>-1</button> 
          </div> 
          ) 
        }; export default Counter;

  

