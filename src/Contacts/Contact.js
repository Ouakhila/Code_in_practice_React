import React from 'react';
import './Contact.css';

function Contact(props) {
    
  return (
    <div>
    <h1>List of Contacts</h1>
    {props.listContacts.map((list) =>(
    <div className=''>
      <h1>Name: {list.name}</h1>
      <h2>Email: {list.email}</h2>
      <p>Phone: {list.phone}</p>
    </div>
    ))} 
    </div>
  );
}
export default Contact;