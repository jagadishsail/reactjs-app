import React, { useState, useMemo } from 'react';


function UseMemoExample() {
  const [count, setCount] = useState(0);


//without useMemo, doubleCout will be re-evaluated on every render
  //const doubleCount = count * 2;


//with useMemo, doubleCount will be re-evaluated only when count changes
  const doubleCount = useMemo(() => {
    return count * 2;
  }, [count]);


  return (
    <div>
      <p>Count: {count}</p>
      <p>Double Count: {doubleCount}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
export default UseMemoExample;