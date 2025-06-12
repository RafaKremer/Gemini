const calculos = require('./funcoesDeCalculos.js');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const totalDeAlunos = 5;
const todasAsNotas = [];
let alunoAtual = 1;

function perguntarNota() {
    rl.question(`Digite a nota do aluno ${alunoAtual}: `, (resposta) => {
        const notaAluno = parseFloat(resposta);

        if (isNaN(notaAluno)) {
            console.log("Valor inválido. Por favor, digite um número.");
            perguntarNota();
            return;
        }

        todasAsNotas.push(notaAluno);
        alunoAtual++;

        if (alunoAtual <= totalDeAlunos) {
            perguntarNota();
        } else {
            rl.close();
        }
    });
}

rl.on('close', () => {
    console.log("\n---- Processando Resultados ---");

  const mediaDaTurma = calculos.calcularMedia(todasAsNotas);
  const numeroDeAprovados = calculos.contarAprovados(todasAsNotas, 7.0);
  const maiorNotaDaTurma = calculos.encontrarMaiorNota(todasAsNotas);

  console.log("\n--- Relatório Final da Turma ---");
  console.log(`Notas digitadas: ${todasAsNotas.join(', ')}`);
  console.log(`Total de Alunos: ${totalDeAlunos}`);
  console.log(`Número de Alunos Aprovados: ${numeroDeAprovados}`);
  console.log(`Média Geral da Turma: ${mediaDaTurma.toFixed(2)}`);
  console.log(`Maior nota da turma: ${maiorNotaDaTurma}`);
});

console.log("Iniciando o Programa...");
perguntarNota();