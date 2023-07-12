import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const Add = () => {
    const [users, setUsers]= useState([]);
    useEffect(()=>{
      fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data))
    },[])
  
    const handleAddUser = event =>{
      event.preventDefault();
      const name = event.target.name.value;
      const email = event.target.email.value;
      const user = {name, email}
      console.log(user)

      fetch('http://localhost:5000/users',{
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then(res => res.json())
      .then(data => {
        console.log( 'success',data)
        alert('one user added successfully')

      })
      .catch(err => console.log(err))
      event.target.reset()
    }
  return (
    <div>
        <form onSubmit={handleAddUser}>
        <input type="text" name="name" placeholder='Name' />
        <br />
        <input type="email" name="email" placeholder='email'/>
        <br />
        <button type="submit">Add User</button>
      </form>

      <h2>Users: {users.length}</h2>
      <div className="">
        {
          users.map(user => <p key={user._id}>Name:{user.name} Email: {user.email} {user.phone}</p>)
        }
      </div>
    </div>
  )
}

export default Add