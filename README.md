Sistema de Gerenciamento Escolar (School Management)– Aplicação de Console com Node.js

Descrição:
Este projeto foi desenvolvido como uma solução de linha de comando para simular o gerenciamento de dados em um ambiente escolar. O sistema evoluiu de uma simples calculadora de notas para uma aplicação mais robusta, com foco na qualidade do código, experiência do usuário e lógica de negócio refinada.

O núcleo do projeto lida com a coleta interativa de dados de alunos (nomes e notas), processa essas informações para gerar um relatório completo e se prepara para futuras expansões, como o gerenciamento de salas e funcionários.

Principais Funcionalidades e Aprendizados:

Arquitetura Modular (MVC): Para garantir a manutenibilidade e escalabilidade, o projeto foi estruturado em um padrão MVC adaptado para uma aplicação de console. A lógica de negócio (Model) foi isolada do controle de fluxo e da entrada do usuário (Controller), facilitando a depuração e a adição de novas funcionalidades.
Validação e Robustez: Foi implementado um sistema de validação rigoroso para todas as entradas de dados. Nomes são validados com Expressões Regulares (Regex) para permitir apenas caracteres alfabéticos, e as notas são validadas para garantir que são numéricas e estão dentro do intervalo acadêmico permitido (0-10). O sistema é resiliente a entradas inválidas, solicitando a informação novamente de forma recursiva até que os dados corretos sejam fornecidos.
Lógica de Negócio Complexa: A funcionalidade de "Aluno Destaque" foi cuidadosamente desenvolvida para ir além do básico. O sistema identifica a maior nota, filtra todos os alunos que a alcançaram (tratando empates), ordena os nomes em ordem alfabética e formata a saída gramaticalmente correta para um ou múltiplos vencedores. Além disso, uma regra de negócio foi adicionada para que o destaque só seja concedido a alunos com nota de aprovação.
Programação Assíncrona: A interação com o usuário no terminal foi construída utilizando o módulo readline do Node.js, o que proporcionou uma experiência prática com o fluxo de trabalho assíncrono do JavaScript, utilizando callbacks e o Event Loop.
JavaScript Moderno (ES6+): O projeto utiliza extensivamente funcionalidades modernas da linguagem, como Arrow Functions, let/const, desestruturação, template literals e métodos de array avançados (.map, .filter, .find, .sort).

Histórico de Progresso do Projeto

Log de 14/06/2025
Início do Projeto e Prova de Conceito:
Realizada uma avaliação de conhecimentos em lógica de programação e algoritmos para definir o ponto de partida.
Definição do escopo do projeto inicial: uma "Calculadora de Média da Turma".
Criação do primeiro algoritmo em pseudocódigo e posterior tradução para JavaScript, para execução em ambiente de navegador (prompt).

Log de 16/06/2025
Migração para Ambiente de Desenvolvimento Local:
O projeto foi migrado do navegador para um ambiente de desenvolvimento com Node.js e VS Code.
O método de entrada de dados foi refatorado, substituindo o prompt() pelo módulo readline nativo do Node.js.
Introdução a conceitos de programação assíncrona (callbacks e o fluxo do readline).
Primeira sessão de depuração de sintaxe e primeira execução bem-sucedida do script no terminal.

Log de 17/06/2025
Refatoração e Estrutura de Dados:
O programa foi aprimorado para utilizar Arrays para armazenar as notas, permitindo análises de dados mais complexas após a coleta.
Implementação de algoritmos para iterar sobre a array e encontrar valores específicos (maior e menor nota).
Realizada a primeira grande refatoração do código, separando a lógica de negócio em funções especializadas (calcularMedia, contarAprovados, etc.) para melhorar a organização e a legibilidade.

Log de 18/06/2025
Profissionalização e Refinamento de Lógica:
O projeto foi reestruturado para seguir um padrão de design similar ao MVC (Model-View-Controller), separando o código em pastas (/models, /controllers).
A estrutura de dados foi evoluída de uma lista de notas para uma lista de objetos de aluno (contendo nome e nota).
Implementação de validação de entrada de dados com Expressões Regulares (Regex) para nomes e verificação de intervalo para as notas.
A funcionalidade "Aluno Destaque" foi refinada para lidar com empates, formatar a saída gramaticalmente e obedecer a regras de negócio (nota mínima para destaque).
Realização de um questionário teórico para aprofundamento em conceitos chave do JavaScript.