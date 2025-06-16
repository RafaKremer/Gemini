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

/**
 * @param {string[]} nomes
 * @returns {string}
 */

function formatarListaDeNomes(nomes) {
    const quantidade = nomes.length;

    if (quantidade === 0) {
        return "";
    }

    if (quantidade === 1) {
        return nomes[0];
    }

    if (quantidade === 2) {
        return nomes.join(' e ');
    }

    const todosMenosOUltimo = nomes.slice(0, -1);
    const ultimoNome = nomes[quantidade - 1];

    return `${todosMenosOUltimo.join(', ')} e ${ultimoNome}`;
}

rl.on('close', () => {
    console.log("\n---- Processando Resultados ----");

    const mediaDaTurma = calculos.calcularMedia(listaDeAlunos);
    const numeroDeAprovados = calculos.contarAprovados(listaDeAlunos, 7.0);
    const maiorNota = calculos.encontrarMaiorNota(listaDeAlunos);
    const alunosDestaque = calculos.filtrarAlunosPorNota(listaDeAlunos, maiorNota);
    alunosDestaque.sort((a, b) => a.nome.localeCompare(b.nome));

    console.log("\n--- Relatório Final da Turma");
    console.log(`Alunos e Notas:`);
    listaDeAlunos.forEach(aluno => {
        console.log(`- ${aluno.nome}: ${aluno.nota}`);
    });
    console.log("-----------------------------------");
    console.log(`Numero de Alunos Aprovados: ${numeroDeAprovados}`);
    console.log(`Média Geral da Turma: ${mediaDaTurma.toFixed(2)}`);

    if (alunosDestaque.length > 0) {
        const nomesDestaque = alunosDestaque.map(aluno => aluno.nome);

        const nomesFormatados = formatarListaDeNomes(nomesDestaque);

        const textoAluno = alunosDestaque.length > 1 ? 'Alunos Destaque' : 'Aluno Destaque';

        console.log(`${textoAluno} (maior nota): ${nomesFormatados} com nota ${maiorNota}`);
        
    }
});

console.log("Iniciando o Programa de Cadastro de Notas...");
coletarDadosDosAlunos();