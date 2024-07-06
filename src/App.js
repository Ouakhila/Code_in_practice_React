// App.js
import React from 'react';
import Support from './Support/Support';

function App() {
  const supportInfo = [
    {
        key:122,
        icon:"",
        title:"Scolarships",
        description:"That means you will never have to worry about every penny....."
      
    },

      {
        key:123,
        icon:"",
        title:"Free Counselling session",
        description:"That means you every penny....."
      }
    ,

      {
        key:124,
        icon:"",
        title:"Child Care Support",
        description:"That means you every penny....."
      }
    
  ];

  return (
    <div>
      <h1>React Example</h1>
      <Support supportInfo = {supportInfo}></Support>
    </div>
  );
};

export default App;

