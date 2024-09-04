import React, { useState } from 'react';
import './Calendario.css';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isValid } from 'date-fns';
import { ptBR } from 'date-fns/locale'; // Importa a localidade em português

const Calendario = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [compromissos, setCompromissos] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [newCompromisso, setNewCompromisso] = useState('');

  const handleMonthChange = (direction) => {
    setCurrentMonth(prevMonth =>
      direction === 'next' ? addMonths(prevMonth, 1) : subMonths(prevMonth, 1)
    );
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handleAddCompromisso = () => {
    setShowModal(true);
  };

  const handleSaveCompromisso = () => {
    if (newCompromisso && selectedDate) {
      setCompromissos(prev => ({
        ...prev,
        [format(selectedDate, 'yyyy-MM-dd')]: [
          ...(prev[format(selectedDate, 'yyyy-MM-dd')] || []),
          newCompromisso
        ]
      }));
      setNewCompromisso('');
      setShowModal(false);
    }
  };

  const daysOfWeek = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

  const start = startOfMonth(currentMonth);
  const end = endOfMonth(currentMonth);
  const daysInMonth = eachDayOfInterval({ start, end }).filter(date => isValid(date));

  return (
    <div className="calendario">
      <header>
        <button onClick={() => handleMonthChange('prev')}>&lt;</button>
        <span>{format(currentMonth, 'MMMM yyyy', { locale: ptBR })}</span> {/* Usa a localidade ptBR */}
        <button onClick={() => handleMonthChange('next')}>&gt;</button>
      </header>
      <div className="days-of-week">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="day-of-week">{day}</div>
        ))}
      </div>
      <div className="days">
        {daysInMonth.map(date => (
          <div
            key={date.toString()}
            className={`day ${selectedDate && format(date, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd') ? 'selected' : ''}`}
            onClick={() => handleDateClick(date)}
          >
            {format(date, 'd')}
          </div>
        ))}
      </div>
      {selectedDate && (
        <div className="compromissos">
          <h3>Compromissos para {format(selectedDate, 'd MMMM yyyy', { locale: ptBR })}</h3> {/* Usa a localidade ptBR */}
          <ul>
            {(compromissos[format(selectedDate, 'yyyy-MM-dd')] || []).map((compromisso, index) => (
              <li key={index}>{compromisso}</li>
            ))}
          </ul>
          <button onClick={handleAddCompromisso}>Adicionar Compromisso</button>
        </div>
      )}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Adicionar Compromisso</h2>
            <input
              type="text"
              value={newCompromisso}
              onChange={(e) => setNewCompromisso(e.target.value)}
              placeholder="Descrição do compromisso"
            />
            <button className="salvar" onClick={handleSaveCompromisso}>Salvar</button>
            <button className="cancelar" onClick={() => setShowModal(false)}>Cancelar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendario;
