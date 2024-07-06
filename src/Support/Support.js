// src/Greeting.js
import React from 'react';
import './Support.css';

function Support(props) {

    
  return (
    <div>
        <div>
            <h1>Why Niyo Bootcamp</h1>
            <h1>Bespoke All Round</h1>
            <h1>Support</h1>
        </div>
    {props.supportInfo.map((item) =>(
    <div className='supportComponent'>
      <h1>{item.title}</h1>
      <p>{item.description}</p>
    </div>
    ))}  
    </div>
  );
}
export default Support;