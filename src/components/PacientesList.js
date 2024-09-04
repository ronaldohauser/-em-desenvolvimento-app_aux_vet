// PacientesList.js
import React, { useState, } from 'react';
import './PacientesList.css';
import Form from './Form';

const initialPacientes = [
  { id: 1, nome: 'Rex', especie: 'Cachorro', raca: 'Labrador', peso: '30kg', idade: '5 anos', observacoes: 'Amigo leal e brincalhão', imagem: 'https://via.placeholder.com/100' },
  { id: 2, nome: 'Mia', especie: 'Gato', raca: 'Persa', peso: '4kg', idade: '3 anos', observacoes: 'Companheira curiosa e independente', imagem: 'https://via.placeholder.com/100' },
];

const PacienteCard = ({ paciente, onEdit, onDelete }) => (
  <div className="paciente-card">
    <img
      src={paciente.imagem}
      alt={paciente.nome}
      className="paciente-avatar"
      onClick={() => onEdit(paciente)}
    />
    <div className="paciente-info">
      <h3>{paciente.nome}</h3>
      <p>{paciente.especie}</p>
      <p>{paciente.raca}</p>
    </div>
    <button className="delete-button" onClick={() => onDelete(paciente.id)}>Excluir</button>
  </div>
);

const PacientesList = () => {
  const [pacientes, setPacientes] = useState(initialPacientes);
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState('add');
  const [currentPaciente, setCurrentPaciente] = useState(null);
  const [formData, setFormData] = useState({
    nome: '',
    especie: '',
    raca: '',
    peso: '',
    idade: '',
    observacoes: '',
    imagem: 'https://via.placeholder.com/100',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    const fields = ['nome', 'especie', 'raca', 'peso', 'idade', 'observacoes'];
    const isValid = fields.every(field => formData[field].trim() !== '');

    if (!isValid) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    if (formType === 'add') {
      setPacientes(prevPacientes => [
        ...prevPacientes,
        { ...formData, id: prevPacientes.length + 1 }
      ]);
    } else if (formType === 'edit') {
      setPacientes(prevPacientes => prevPacientes.map(paciente =>
        paciente.id === currentPaciente.id ? { ...formData, id: paciente.id } : paciente
      ));
    }

    resetForm();
  };

  const handleEdit = (paciente) => {
    setFormData(paciente);
    setCurrentPaciente(paciente);
    setFormType('edit');
    setShowForm(true);
  };

  const handleDelete = (id) => {
    setPacientes(pacientes.filter(paciente => paciente.id !== id));
  };

  const resetForm = () => {
    setFormData({
      nome: '',
      especie: '',
      raca: '',
      peso: '',
      idade: '',
      observacoes: '',
      imagem: 'https://via.placeholder.com/100',
    });
    setShowForm(false);
    setCurrentPaciente(null);
    setFormType('add');
  };

  return (
    <div className="pacientes-list-container">
      {!showForm ? (
        <>
          <button className="add-button" onClick={() => { setShowForm(true); setFormType('add'); }}>Adicionar Novo Pet</button>
          <div className="pacientes-list">
            {pacientes.map(paciente => (
              <PacienteCard
                key={paciente.id}
                paciente={paciente}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </div>
        </>
      ) : (
        <Form
          formData={formData}
          onChange={handleChange}
          onSubmit={handleSubmit}
          onClose={resetForm}
          formType={formType}
        />
      )}
    </div>
  );
};

export default PacientesList;
