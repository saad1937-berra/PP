import React from 'react';
import FooterLinks from './FooterLinks';
import FooterCopyright from './FooterCopyright';

function Footer() {
  return (
    <footer style={{ padding: '10px', background: '#282c34', color: 'white', position: 'fixed', width: '100%', bottom: 0 }}>
      <FooterLinks />
      <FooterCopyright />
    </footer>
  );
}

export default Footer;

