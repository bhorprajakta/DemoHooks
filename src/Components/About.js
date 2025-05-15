import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate()
  function handaleClicke() {
    navigate('/contact')
  }

  const [count, setCount] = useState(0);

  console.log('component state updated ');

  const expensiveCalculation = () => {
    console.log('Run  calculation');
    return "something";
  };
       
  // usememo
  useMemo(() => {
    expensiveCalculation();
  }, []);

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={handaleClicke}>go to Contact</button>
    </div>
  );
};

export default About;
