import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '10px', background: '#282c34', color: 'white' }}>
      <h1>My React App</h1>
      <ul style={{ listStyleType: 'none', display: 'flex', gap: '10px' }}>
        <li><Link to="/" style={{ color: 'white' }}>Home</Link></li>
        <li><Link to="/about" style={{ color: 'white' }}>About</Link></li>
        <li><Link to="/contact" style={{ color: 'white' }}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
