// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = ({ onBackClick, showBackButton }) => {
  return (
    <header className={showBackButton ? 'with-back' : ''}>
      <div className="header-content">
        {showBackButton && (
          <button className="back-button" onClick={onBackClick}>
            &larr;
          </button>
        )}
        <h1>AppAuxVet</h1>
      </div>
    </header>
  );
};

export default Header;
