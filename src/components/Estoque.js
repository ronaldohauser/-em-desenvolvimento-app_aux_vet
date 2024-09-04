import React, { useState } from 'react';
import './Estoque.css';

const initialEstoque = [
  { id: 1, nome: 'Antibiótico', quantidade: 10 },
  { id: 2, nome: 'Vacina', quantidade: 5 },
];

const Estoque = () => {
  const [estoque, setEstoque] = useState(initialEstoque);
  const [novoItem, setNovoItem] = useState({ nome: '', quantidade: 0 });

  const handleAddItem = () => {
    setEstoque([...estoque, { id: estoque.length + 1, ...novoItem }]);
    setNovoItem({ nome: '', quantidade: 0 });
  };

  const handleDeleteItem = (id) => {
    setEstoque(estoque.filter(item => item.id !== id));
  };

  return (
    <div className="estoque-container">
      <h2 className="estoque-heading">Estoque de Medicamentos e Insumos</h2>
      <div className="add-item">
        <input
          type="text"
          placeholder="Nome do Item"
          value={novoItem.nome}
          onChange={e => setNovoItem({ ...novoItem, nome: e.target.value })}
        />
        <input
          type="number"
          placeholder="Quantidade"
          value={novoItem.quantidade}
          onChange={e => setNovoItem({ ...novoItem, quantidade: Number(e.target.value) })}
        />
        <button onClick={handleAddItem}>Adicionar Item</button>
      </div>
      <ul className="estoque-list">
        {estoque.map(item => (
          <li key={item.id} className="estoque-item">
            {item.nome} - Quantidade: {item.quantidade}
            <button className="delete-button" onClick={() => handleDeleteItem(item.id)}>
              <i className="fas fa-trash-alt"></i>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Estoque;
