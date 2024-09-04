// src/App.js
import React, { useState } from 'react';
import Menu from './components/Menu';
import PacientesList from './components/PacientesList';
import PacienteProfile from './components/PacienteProfile';
import Calendario from './components/Calendario';
import Estoque from './components/Estoque';
import GuiasPraticos from './components/GuiasPraticos';
import ComunicaoETarefas from './components/ComunicaoETarefas';
import BancoCasosClinicos from './components/BancoCasosClinicos';
import MapaClinicas from './components/MapaClinicas';
import ColaboracaoComunidade from './components/ColaboracaoComunidade';
import ProgramasBemEstar from './components/ProgramasBemEstar';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

function App() {
  const [showMenu, setShowMenu] = useState(true);

  const handleMenuClick = () => {
    setShowMenu(false);
  };

  return (
    <div className="App">
      {showMenu ? (
        <>
          <Header />
          <Menu onMenuClick={handleMenuClick} />
        </>
      ) : (
        <div className="content-container">
          <Header /> {/* Remova showBackButton e handleBackClick */}
          <main>
            <Routes>
              <Route path="/pacientes" element={<PacientesList />} />
              <Route path="/pacientes/:id" element={<PacienteProfile />} />
              <Route path="/calendario" element={<Calendario />} />
              <Route path="/estoque" element={<Estoque />} />
              <Route path="/guias-praticos" element={<GuiasPraticos />} />
              <Route path="/comunicacao-tarefas" element={<ComunicaoETarefas />} />
              <Route path="/banco-casos-clinicos" element={<BancoCasosClinicos />} />
              <Route path="/mapa-clinicas" element={<MapaClinicas />} />
              <Route path="/colaboracao-comunidade" element={<ColaboracaoComunidade />} />
              <Route path="/programas-bem-estar" element={<ProgramasBemEstar />} />
              <Route path="/" element={<PacientesList />} /> {/* Rota padrão */}
            </Routes>
          </main>
        </div>
      )}
    </div>
  );
}

export default App;
