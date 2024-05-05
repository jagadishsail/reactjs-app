import React from "react";

//Function
const MyFirstComponent = (props) => {
    return (
        <div>
            <h1>Hello, {props.name}!</h1> 
            <p>My First React component </p>
        </div>
    )
}

export default MyFirstComponent;