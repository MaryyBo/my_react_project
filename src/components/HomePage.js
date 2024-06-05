import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Friend Seeker</h1>
      <p>This app allows you to view essential information about users with whom you can make friends and manage a special todo list.</p>

      <Link to="/users">Go to Users</Link>
      <br />
      <Link to="/todo">Go to Todo List</Link>
    </div>
  );
};

export default HomePage;