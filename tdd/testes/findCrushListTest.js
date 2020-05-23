const should = require('should')
const findCrushes = require('../findCrushes')

describe('find crushes', () => {
    it('soma crushs', () => {
        findCrushes.somaCrush(2,3).should.be.equal(5)
    })
    it('deve somar dois números e retornar 30', () => {
        findCrushes.somaCrush(10,20).should.be.equal(30)    
    })
    it('passar um nome e deve retornar mensagem de pessoa não encontrada', () => {
        findCrushes.encontraCrush('Pessoa Crush').should.be.equal('Crush não encontrado')
    })
    it('retorna mensagem de que nome está vazio', () => {
        findCrushes.encontraCrush().should.be.equal('Campo nome está vazio')
    })
    it('retornar mensagem de tipo inválido', () => {
        findCrushes.encontraCrush(6545).should.be.equal('Campo nome inválido')
    })
    it('deve retornar o nome da lista', () => {
        findCrushes.encontraCrush('Pessoa encontrada').should.be.equal('Pessoa crush encontrada')
    })
})