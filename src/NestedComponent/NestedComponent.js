import React from 'react';
import Contact from '../Contacts/Contact';
import data from '../models/listcontact.json';

function NestedComponent() {


    if( data.length === 0) {
     return <p>there is no contact list here....</p>
    }

  return (
    <div>
    <Contact listContacts = {data}/>
    </div>
  );
}

export default NestedComponent;