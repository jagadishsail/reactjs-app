import React, { useContext } from "react";
import MyContext from "./MyContext";

const MyChildComponent = () => {

    //consume the global value
    const contextValue = useContext(MyContext);

    return <div>
        <h2>{contextValue}</h2>
        </div>

}

export default MyChildComponent;