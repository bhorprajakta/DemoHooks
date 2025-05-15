import React from 'react';

const Child = React.memo(({ click }) => {
  console.log('Child component rendered');
  
  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={click}>Call Parent Function</button>
    </div>
  );
});

export default Child;
