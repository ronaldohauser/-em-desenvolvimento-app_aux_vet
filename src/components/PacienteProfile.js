import React from 'react';
import { useParams } from 'react-router-dom';
import './PacienteProfile.css';

const pacientes = [
  { id: 1, nome: 'Rex', especie: 'Cachorro', idade: '5 anos' },
  { id: 2, nome: 'Mia', especie: 'Gato', idade: '3 anos' },
];

const PacienteProfile = () => {
  const { id } = useParams();
  
  const paciente = pacientes.find(p => p.id === parseInt(id));

  if (!paciente) {
    return <div>Paciente não encontrado</div>;
  }

  return (
    <div className="paciente-profile-container">
      <h2>Perfil do Paciente</h2>
      <p><strong>Nome:</strong> {paciente.nome}</p>
      <p><strong>Espécie:</strong> {paciente.especie}</p>
      <p><strong>Idade:</strong> {paciente.idade}</p>
    </div>
  );
};

export default PacienteProfile;
