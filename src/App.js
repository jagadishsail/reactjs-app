import './App.css';
import React from 'react';

import MyContext from './components/context/MyContext';
import MyChildComponent from './components/context/MyChildComponent';

function App() {

  const globalVal = "Hello Context";

  return (

      /* React Context API*/  
       <MyContext.Provider value={globalVal}>
           <MyChildComponent/>
      </MyContext.Provider>
      
       )

}

export default App;

