/**
 * Calcula a média de uma lista de alunos.
 * @param {object[]} alunos - A array de alunos para calcular a média.
 * @returns {number} A média calculada.
 */

function calcularMedia(alunos) {
    if (alunos.length === 0) {
        return 0;
    }

    let soma = 0;
    for (const aluno of alunos) {
        soma += aluno.nota;
    }
    return soma / alunos.length;
}

/**
 * Conta quantos alunos foram aprovados.
 * @param {object[]} alunos - A array de notas.
 * @param {number} notaDeCorte - A nota mínima para aprovação.
 * @returns {number} O número de alunos aprovados.
 */

function contarAprovados(alunos, notaDeCorte) {
    let aprovados = 0;
    for (const aluno of alunos) {
        if (aluno.nota >= notaDeCorte) {
            aprovados++;
        }
    }
    return aprovados;
}

/**
 * Encontra o aluno com a maior nota.
 * @param {object[]} alunos - A array de objetos de alunos.
 * @returns {object} O objeto do aluno com maior nota.
 */

function encontrarMaiorNota(alunos) {
    if (alunos.length === 0) return 0;

    let maiorNota = alunos[0].nota;
    for (const aluno of alunos) {
        if (aluno.nota > maiorNota) {
            maiorNota = aluno.nota;
        }
    }
    return maiorNota;
}

/** 
* @param {object[]} alunos
* @param {number} nota
* @param {object[]}
*/

function filtrarAlunosPorNota(alunos, nota) {
    return alunos.filter(aluno => aluno.nota === nota);
}

module.exports = {
    calcularMedia,
    contarAprovados,
    encontrarMaiorNota,
    filtrarAlunosPorNota
};