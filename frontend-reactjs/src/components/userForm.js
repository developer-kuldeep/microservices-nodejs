// src/components/UserForm.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch existing users when the component mounts
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3001/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
        // Handle error, show error message, etc.
      }
    };

    fetchUsers();
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/users', formData);
      console.log(response.data);
      // After adding a user, refetch the users to update the list
      const {data} = await axios.get('http://localhost:3001/users');
      setUsers(data);
      // Handle success, update UI, etc.
    } catch (error) {
      console.error('Error adding user:', error);
      // Handle error, show error message, etc.
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
        </label>
        <br />
        <button type="submit">Add User</button>
      </form>

      <div>
        <h2>Existing Users:</h2>
        <ul>
          {users.map((user) => (
            <li key={user._id}>{user.name} - {user.email}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserForm;
