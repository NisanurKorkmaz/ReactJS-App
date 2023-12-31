import React from 'react'
import { useEffect, useState } from 'react';
import {Link}  from 'react-router-dom';

function Users() {
  const [users, setUsers] = useState([]);

useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => setUsers(data));

},[]);

  return (
    <div>
      <h2>Kullanicilar</h2>
      { users.map((user) => (
        <li key={user.id}>
          <Link to={`${user.id}`}> {user.name} </Link> 
        </li>
      ))}
    </div>
  );
}

export default Users