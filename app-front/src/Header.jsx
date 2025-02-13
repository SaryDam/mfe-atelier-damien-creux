import React from 'react';
import './header.css';

function Header() {
    return (
        <div className="header">
            <h1>Mon Header</h1>
            <nav>
                <a href="#home">Accueil</a>
                <a href="#about">À propos</a>
                <a href="#contact">Contact</a>
            </nav>
        </div>
    );
}

export default Header;
