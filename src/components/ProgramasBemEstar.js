// src/components/ProgramasBemEstar.js
import React from 'react';
import './ProgramasBemEstar.css';

const ProgramasBemEstar = () => {
  return (
    <div className="programas-bem-estar-container">
      <h2>Programas de Bem-Estar</h2>
      <ul>
        <li>
          <h3>Sessões de Suporte Psicológico</h3>
          <p>Oferecemos sessões de suporte psicológico para ajudar a lidar com o estresse e melhorar o bem-estar geral.</p>
        </li>
        <li>
          <h3>Recursos para Bem-Estar</h3>
          <p>Disponibilizamos uma variedade de recursos para promover o bem-estar, incluindo dicas de saúde e práticas de autocuidado.</p>
        </li>
      </ul>
    </div>
  );
};

export default ProgramasBemEstar;
