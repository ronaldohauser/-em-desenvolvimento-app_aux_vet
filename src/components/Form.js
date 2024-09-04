

import React from 'react';
import './Form.css'; 

const Form = ({ formData, onChange, onSubmit, onClose, formType }) => {
  return (
    <div className="form-modal">
      <div className="form-modal-content">
        <h2>{formType === 'edit' ? 'Editar Pet' : 'Adicionar Novo Pet'}</h2>
        {['imagem', 'nome', 'especie', 'raca', 'peso', 'idade'].map(field => (
          <label key={field}>{`${field.charAt(0).toUpperCase() + field.slice(1)}:`}
            <input
              type="text"
              name={field}
              value={formData[field]}
              onChange={onChange}
            />
          </label>
        ))}
        <label>Observações:
          <textarea
            name="observacoes"
            value={formData.observacoes}
            onChange={onChange}
          />
        </label>
        <button className="form-save-button" onClick={onSubmit}>Salvar</button>
        <button className="form-close-button" onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
};

export default Form;
