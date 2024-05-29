import React from 'react';

function FooterLinks() {
  return (
    <ul style={{ listStyleType: 'none', display: 'flex', gap: '10px' }}>
      <li><a href="#privacy" style={{ color: 'white' }}>Privacy Policy</a></li>
      <li><a href="#terms" style={{ color: 'white' }}>Terms of Service</a></li>
    </ul>
  );
}

export default FooterLinks;