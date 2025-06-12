/**
 * Calcula a média de uma lista de notas.
 * @param {number[]} notas - A array de notas para calcular a média.
 * @returns {number} A média calculada.
 */

function calcularMedia(notas) {
    if(notas.length === 0) {
        return 0;
    }
}

let soma = 0;
for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}
return soma / notas.length;

/**
 * Conta quantos alunos foram aprovados.
 * @param {number[]} notas - A array de notas.
 * @param {number} notaDeCorte - A nota mínima para aprovação.
 * @returns {number} O número de alunos aprovados.
 */

function contarAprovados(notas, notaDeCorte) {
    let aprovados = 0;
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] >= notaDeCorte) {
            aprovados++;
        }
    }
    return aprovados;
}

/**
 * Encontra a maior nota em uma lista.
 * @param {number[]} notas - A array de notas.
 * @returns {number} A maior nota encontrada.
 */

function encontrarMaiorNota(notas) {
    if (notas.length === 0) {
        return 0;
    }
    let maiorNota = notas[0];
    for (let i = 1; i < notas.length; i++) {
        if (notas[i] > maiorNota) {
            maiorNota = notas[i];
        }
    }
    return maiorNota;
}

module.exports = {
    calcularMedia,
    contarAprovados,
    encontrarMaiorNota
};