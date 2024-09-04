import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders header and menu when menu is visible', () => {
  render(<App />);
  // Verifica se o cabeçalho está presente
  const headerElement = screen.getByText(/AppAuxVet/i);
  expect(headerElement).toBeInTheDocument();
  
  // Verifica se o menu está presente
  const menuElement = screen.getByText(/Dashboard/i); // Pode ajustar para outros itens do menu, se necessário
  expect(menuElement).toBeInTheDocument();
});

test('renders PacientesList when menu is hidden', () => {
  render(<App />);
  
  // Simula o clique para esconder o menu
  const menuButton = screen.getByText(/Menu/i); // Ajuste conforme o texto do botão no seu menu
  fireEvent.click(menuButton);
  
  // Verifica se PacientesList está presente
  const pacientesListElement = screen.getByText(/Lista de Pacientes/i);
  expect(pacientesListElement).toBeInTheDocument();
});

test('navigates to the correct route', () => {
  render(<App />);
  
  // Simula o clique para esconder o menu
  const menuButton = screen.getByText(/Menu/i); // Ajuste conforme o texto do botão no seu menu
  fireEvent.click(menuButton);
  
  // Navega para outra página
  const calendarioLink = screen.getByText(/Calendário/i); // Ajuste conforme o texto do link
  fireEvent.click(calendarioLink);
  
  // Verifica se a página de Calendário está presente
  const calendarioElement = screen.getByText(/Calendário/i);
  expect(calendarioElement).toBeInTheDocument();
});
