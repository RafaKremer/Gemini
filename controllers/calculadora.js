const calculos = require('../models/aluno.service.js');
const readline = require('readline');
const {formatarListaDeNomes} = require('../utils/formatador.js');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const totalDeAlunos = 5;
const listaDeAlunos = [];
let alunoAtual = 1;

function coletarNotaDoAluno(nome) {
    rl.question(`Digite a nota de ${nome} (entre 0 e 10): `, (respostaNota) => {
        const nota = parseFloat(respostaNota);
        
        if (isNaN(nota) || nota < 0 || nota > 10) {
            console.log(("Erro: Valor inválido. A nota deve ser um número entre 0 e 10"));
            coletarNotaDoAluno(nome);
            return;  
        }

        const aluno = {nome: nome, nota: nota};
        listaDeAlunos.push(aluno);

        alunoAtual++;

        if (alunoAtual <= totalDeAlunos) {
            coletarNomeDoAluno();            
        } else {
            rl.close();
        }
    });
}

function coletarNomeDoAluno() {
    rl.question(`Digite o nome do aluno ${alunoAtual}: `, (nome) => {
        const padraoNome = /^[a-zA-Z\s]+$/;

        if (!padraoNome.test(nome)) {
            console.log("Erro: O nome deve conter apenas letras e espaços.");
            coletarNomeDoAluno();
            return;
        }

        coletarNotaDoAluno(nome);
    });
}

rl.on('close', () => {
    console.log("\n---- Processando Resultados ----");

    const mediaDaTurma = calculos.calcularMedia(listaDeAlunos);
    const numeroDeAprovados = calculos.contarAprovados(listaDeAlunos, 7.0);

    const maiorNota = calculos.encontrarMaiorNota(listaDeAlunos);


    console.log("\n--- Relatório Final da Turma");
    console.log(`Alunos e Notas:`);
    listaDeAlunos.forEach(aluno => {
        console.log(`- ${aluno.nome}: ${aluno.nota}`);
    });
    console.log("-----------------------------------");
    console.log(`Numero de Alunos Aprovados: ${numeroDeAprovados}`);
    console.log(`Média Geral da Turma: ${mediaDaTurma.toFixed(2)}`);

    if (maiorNota >= 7.0) {
        const alunosDestaque = calculos.filtrarAlunosPorNota(listaDeAlunos, maiorNota);
        alunosDestaque.sort((a, b) => a.nome.localeCompare(b.nome));
        if (alunosDestaque.length > 0) {
            const nomesDestaque = alunosDestaque.map(aluno => aluno.nome);
            const nomesFormatados = formatarListaDeNomes(nomesDestaque);
            const textoAluno = alunosDestaque.length > 1 ? 'Alunos Destaque' : 'Aluno Destaque';

            console.log(`${textoAluno} (maior nota): ${nomesFormatados} com nota ${maiorNota}`);
        }
    }
});

console.log("Iniciando o Programa de Cadastro de Notas...");
coletarNomeDoAluno();