import React, { useEffect, useState } from 'react';
import {Link } from 'react-router-dom';

const List = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('https://my-contact-api-project.herokuapp.com/contacts')
      .then((res) => res.json())
      .then((data) => setContacts(data));
  }, []);

  window.console.dir(contacts);
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {contacts &&
          contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.id}</td>
              <td>{contact.firstName}</td>
              <td>{contact.lastName}</td>
              <td>{contact.phone}</td>
              <td>{contact.email}</td>
            </tr>
          ))}
      </tbody>
      <tfoot>
      <Link to={'/add'}>
        <button className='addContacts' >Add Contacts</button>
        </Link>
      </tfoot>
    </table>
  );
};

export default List;