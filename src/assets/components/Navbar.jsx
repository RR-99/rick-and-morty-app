import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#333', color: '#fff' }}>
      <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Inicio</Link>
    </nav>
  );
}

export default Navbar;
