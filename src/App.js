import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Menu from './components/Menu';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            {/* Adicione mais rotas aqui conforme necessário */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
