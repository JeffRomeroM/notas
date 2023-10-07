import React, { useState } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="header--brand">
        <Link to="/" className="link" onClick={toggleMenu}>
        <img src="../../../public/J.png" alt="j" width={50}/>
        </Link>
      </div>
      <button className={`header--toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      
      <nav className={`header--nav ${isOpen ? 'open' : ''}`}>
         <ul>
            <li className="menu-item">
              <Link to="/deportes" className="link" onClick={toggleMenu}>Deportes</Link>
            </li>
            <li className="menu-item">
              <Link to="/comerciales" className="link" onClick={toggleMenu}>Comerciales</Link>
            </li>
            <li className="menu-item">
              <Link to="/gastronomias" className="link" onClick={toggleMenu}>Gastronomia</Link>
            </li>
            <li className="menu-item">
              <Link to="/musicas" className="link" onClick={toggleMenu}>Musicas</Link>
            </li>
         </ul>
      </nav>
    </header>
  );
};

export default Navbar;
