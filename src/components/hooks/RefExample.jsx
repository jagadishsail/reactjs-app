import React, { useRef } from "react";

const RefExample = () => {

    const inputRef = useRef(null);
    
    const handleClick = () => {
        inputRef.current.focus();
    }

    return <div>
        <input type="text" ref={inputRef}></input>
        <button onClick={handleClick}>Click Me</button>
    </div>

}

export default RefExample;