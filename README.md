# AppAuxVet

## Descrição

**AppAuxVet** é um aplicativo desenvolvido para auxiliar profissionais da área veterinária no gerenciamento de suas tarefas diárias, agendas, comunicação com clientes e acesso a informações úteis, como guias práticos e casos clínicos. O objetivo é criar uma ferramenta eficiente que contribua para a organização e a melhoria dos serviços oferecidos pelos auxiliares veterinários.

## Funcionalidades

### Sprint 1: Estrutura Inicial e Interface do Usuário
- Configuração do ambiente de desenvolvimento
- Criação da estrutura do projeto
- Desenvolvimento da página inicial (Dashboard) com resumo das atividades e acesso rápido
- Desenvolvimento da estrutura de navegação com um menu principal

### Sprint 2: Funcionalidades Essenciais para Pacientes e Agenda
- Listagem e visualização de pacientes
- Visualização do calendário

### Sprint 3: Interatividade e Adição de Novos Dados
- Adicionar novo paciente
- Adicionar evento à agenda
- Gerenciamento de inventário (medicamentos e insumos)

### Sprint 4: Guias e Procedimentos
- Guias práticos de procedimentos comuns e cuidados diários
- Guia de raças de cães e gatos
- Guia de doenças comuns em cães e gatos

### Sprint 5: Comunicação e Tarefas
- Comunicação com clientes via notificações
- Sistema de feedback e avaliação
- Lista de tarefas e criação de tarefas

### Sprint 6: Funcionalidades Avançadas
- Banco de casos clínicos
- Mapa interativo com clínicas veterinárias e serviços de emergência

### Sprint 7: Funcionalidades Administrativas e Relatórios
- Gestão de documentos
- Relatórios de atendimentos
- Biblioteca de recursos para educação contínua

### Sprint 8: Funcionalidades de Comunidade e Suporte
- Fórum de discussão e grupos de estudo
- Programas de bem-estar para auxiliares

### Sprint 9: Finalização e Ajustes
- Comunicação interna entre usuários
- Procedimentos de emergência e contato de emergência
- Configurações de perfil de usuário e preferências
- Ajuda e suporte com FAQs e contato para suporte

## Tecnologias Utilizadas

- **Frontend:** React.js, Bootstrap
- **Backend:** Spring Boot
- **Banco de Dados:** PostgreSQL, MongoDB
- **Gerenciamento de Estado:** Redux
- **Autenticação:** JWT (JSON Web Tokens)
- **Mapas:** Leaflet.js para mapas interativos
- **Comunicação:** WebSockets para notificações em tempo real

## Configuração do Ambiente

1. Clone o repositório:
    ```sh
    git clone https://github.com/seu-usuario/app_aux_vet.git
    ```

2. Navegue até o diretório do projeto:
    ```sh
    cd app_aux_vet
    ```

3. Instale as dependências do frontend:
    ```sh
    cd frontend
    npm install
    ```

4. Instale as dependências do backend:
    ```sh
    cd backend
    ./mvnw install
    ```

5. Configure o banco de dados no arquivo `application.properties` no diretório `src/main/resources` do backend.

6. Execute o backend:
    ```sh
    ./mvnw spring-boot:run
    ```

7. Execute o frontend:
    ```sh
    npm start
    ```

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/fooBar`)
3. Faça commit das suas alterações (`git commit -am 'Add some fooBar'`)
4. Faça o push para a branch (`git push origin feature/fooBar`)
5. Crie um novo Pull Request

## Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

## Contato

Ronaldo Hauser Dias - [duqueronaldo@icloud.com](mailto:duqueronaldo@icloud.com)

Projeto Link: [https://github.com/seu-usuario/app_aux_vet](https://github.com/seu-usuario/app_aux_vet)
