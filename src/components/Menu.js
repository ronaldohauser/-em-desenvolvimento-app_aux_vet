import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        {/* Adicione mais itens de menu conforme necessário */}
      </ul>
    </nav>
  );
};

export default Menu;
