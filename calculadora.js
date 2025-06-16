const { log } = require('console');
const calculos = require('./funcoesDeCalculo.js');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const totalDeAlunos = 5;
const listaDeAlunos = [];
let alunoAtual = 1;

function coletarDadosDosAlunos() {
    rl.question(`Digite o nome do Aluno ${alunoAtual}:`, (nome) => {
        rl.question(`Digite agora a nota de ${alunoAtual}:`, (respostaNota) => {
            const nota = parseFloat(respostaNota);

            if (isNaN(nota)) {
                console.log("Nota inválida. Por favor, tente novamente.");
                coletarDadosDosAlunos();
                return;
            }

            const aluno = { nome: nome, nota: nota };
            listaDeAlunos.push(aluno);

            alunoAtual++;

            if (alunoAtual <= totalDeAlunos) {
                coletarDadosDosAlunos();
            } else {
                rl.close();
            }
        });
    });
}

rl.on('close', () => {
    console.log("\n---- Processando Resultados ----");

    const mediaDaTurma = calculos.calcularMedia(listaDeAlunos);
    const numeroDeAprovados = calculos.contarAprovados(listaDeAlunos, 7.0);
    const alunoDestaque = calculos.encontrarAlunoComMaiorNota(listaDeAlunos);

    console.log("\n--- Relatório Final da Turma");
    console.log(`Alunos e Notas:`);
    listaDeAlunos.forEach(aluno => {
        console.log(`- ${aluno.nome}: ${aluno.nota}`);
    });
    console.log("-----------------------------------");
    console.log(`Numero de Aprovados: ${numeroDeAprovados}`);
    console.log(`Média Geral da Turma: ${mediaDaTurma.toFixed(2)}`);
    if (alunoDestaque) {
        console.log(`Aluno destaque (maior nota): ${alunoDestaque.nome} com nota ${alunoDestaque.nota}`);
    }
});

console.log("Iniciando o Programa de Cadastro de Notas...");
coletarDadosDosAlunos();