function formatarListaDeNomes(nomes) {
    const quantidade = nomes.length;
    if (quantidade === 0) return "";
    if (quantidade === 1) return nomes[0];
    if (quantidade === 2) return nomes.join(' e ');
    const todosMenosOUltimo = nomes.slice(0, -1);
    const ultimoNome = nomes[quantidade - 1];
    return `${todosMenosOUltimo.join(', ')} e ${ultimoNome}`;
}

module.exports = {
    formatarListaDeNomes
}