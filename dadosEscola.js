const salas = [
    {id: 101, nome: 'sala101', capacidade: 30},
    {id: 102, nome: 'sala102', capacidade: 30},
    {id: 203, nome: 'sala203', capacidade: 25},
    {id: 'AUD', nome: 'Auditório', capacidade: 150},
    {id: 'BIB', nome: 'Biblioteca', capacidade: 80},
];

const turmas = [
    {id: 'T1', nome: 'Turma 8A', serie: '8ª', nivel: 'Fundamental', numAlunos: 28},
    {id: 'T2', nome: 'Turma 3B', serie: '3° Ano', nivel: 'Médio', numAlunos: 35},
    {id: 'T3', nome: 'Turma 1C', serie: '1° Ano', nivel: 'Médio', numAlunos: 32},
    {id: 'T4', nome: 'Turma Info A', serie: '2° Módulo', nivel: 'Técnico', numAlunos: 25},
    {id: 'T5', nome: 'Turma 5C', serie: '5ª', nivel: 'Fundamental', numAlunos: 29},
];

module.exports = {
    salas,
    turmas
};