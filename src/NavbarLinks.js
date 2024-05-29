import React from 'react';

function NavbarLinks() {
  return (
    <ul style={{ listStyleType: 'none', display: 'flex', gap: '10px' }}>
      <li><a href="#home" style={{ color: 'white' }}>Home</a></li>
      <li><a href="#about" style={{ color: 'white' }}>About</a></li>
      <li><a href="#contact" style={{ color: 'white' }}>Contact</a></li>
    </ul>
  );
}

export default NavbarLinks;
