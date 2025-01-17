import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/todo">Todo</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;