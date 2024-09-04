import React from 'react';
import { FaCalendarAlt, FaListAlt, FaBoxOpen, FaBook, FaUsers, FaMapMarkerAlt, FaSmile } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Menu.css';

const Menu = ({ onMenuClick }) => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    onMenuClick();  // Define showMenu como false
    navigate(path);  // Navega para a nova rota
  };

  return (
    <nav>
      <ul>
        <li>
          <button onClick={() => handleClick('/pacientes')}>
            <FaListAlt /><span>Pacientes</span>
          </button>
        </li>
        <li>
          <button onClick={() => handleClick('/calendario')}>
            <FaCalendarAlt /><span>Calendário</span>
          </button>
        </li>
        <li>
          <button onClick={() => handleClick('/estoque')}>
            <FaBoxOpen /><span>Estoque</span>
          </button>
        </li>
        <li>
          <button onClick={() => handleClick('/guias-praticos')}>
            <FaBook /><span>Guias</span>
          </button>
        </li>
        <li>
          <button onClick={() => handleClick('/comunicacao-tarefas')}>
            <FaUsers /><span>Tarefas</span>
          </button>
        </li>
        <li>
          <button onClick={() => handleClick('/banco-casos-clinicos')}>
            <FaBook /><span>Banco de Casos</span>
          </button>
        </li>
        <li>
          <button onClick={() => handleClick('/mapa-clinicas')}>
            <FaMapMarkerAlt /><span>Clínicas</span>
          </button>
        </li>
        <li>
          <button onClick={() => handleClick('/colaboracao-comunidade')}>
            <FaUsers /><span>Comunidade</span>
          </button>
        </li>
        <li>
          <button onClick={() => handleClick('/programas-bem-estar')}>
            <FaSmile /><span>Bem-Estar</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
