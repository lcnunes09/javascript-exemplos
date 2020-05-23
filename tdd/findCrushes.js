const somaCrush = (n, m) => { return n + m }
const pessoasCrush = [
    'Pessoa encontrada',
    'Pessoa encontrada 1',
    'Pessoa encontrada 2'
]

const encontraCrush = nome => {
    try {
        validacao(nome)
        const crushEncontrado = pessoasCrush.find(crush => crush === nome)
        return crushEncontrado ? 'Pessoa crush encontrada' : 'Crush não encontrado' 
    } catch (erro){
        return erro
    }
}

const validacao = nome => {
    if (!nome) throw 'Campo nome está vazio'
    if (typeof nome !== 'string') throw 'Campo nome inválido'
}

module.exports = {
    somaCrush,
    encontraCrush
}