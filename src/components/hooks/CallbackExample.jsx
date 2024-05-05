import React, { useState, useCallback, useEffect } from "react";
var functionCount = new Set();


function CallbackExample() {
    const [count, setCount] = useState(0)
    const [number, setNumber] = useState(0)
   
 /* Without callback
  const incrementCounter = () => {
      setCount(count + 1)
    }
    const decrementCounter = () => {
      setCount(count - 1)
    }
     
     const incrementNumber = () => {
      setNumber(number + 1)
    }*/


   //With useCallback
    const incrementCounter = useCallback(() => {
        setCount(count + 1);
    }, [count]);
    const decrementCounter = useCallback(() => {
        setCount(count - 1);
    }, [count]);
    const incrementNumber = useCallback(() => {
        setNumber(number + 1);
    }, [number]);
 
     
    functionCount.add(incrementCounter);
    functionCount.add(decrementCounter);
    functionCount.add(incrementNumber);
   
    alert(functionCount.size);

    //default first render value = 6 
    //increement/decrement click, value gets increased by 2
    //increment Number click, value gets increased by 1

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={incrementCounter}>
        Increase counter
      </button>
      <button onClick={decrementCounter}>
         Decrease Counter
      </button>
      <button onClick={incrementNumber}>
        increase number
      </button>
    </div>
  )
  }
 
 
  export default CallbackExample;
