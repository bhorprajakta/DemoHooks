import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Child from './Child';

function Contact() {
  const navigate = useNavigate()
  function handaleClicke() {
    navigate('/')
  }

  const [count, setCount] = useState(0);
  console.log('component state updated ');

  // Callback
  const handleClick = useCallback(() => {
    console.log('Child button clicked');
  }, []);

  return (
    <div>
      This is contact
      <button onClick={handaleClicke}>go to Home</button>

      <button onClick={() => setCount(count + 1)}>Increment Count</button>

      <Child click={handleClick} />
    </div>
  )
}

export default Contact
