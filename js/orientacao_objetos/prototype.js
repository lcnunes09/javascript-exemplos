const myText = String('Hello prototype!');

console.log(myText.__proto__.split === String.prototype.split);

console.log(myText.constructor === String)

function Animal(){
    this.qtdePatas = 4;
}

const cachorro = new Animal();

console.log(cachorro.qtdePatas);

class Pessoa {
    constructor(name) {
        this.name = name;
    }
}

const p = new Pessoa('Luciana');

console.log(p);

// Outro exemplo
function Animal() {}

Animal.prototype.qtdePatas = 0;
Animal.prototype.movimentar = function(){}


function Cachorro(morde){
    this.qtdePatas = 4;
    this.morde = morde;
}

Cachorro.prototype = Object.create(Animal);
Cachorro.prototype.latir = function(){
    console.log('Au!');
}
Cachorro.prototype.brincar = function(){}


const pug = new Cachorro(false);
const pitbull = new Cachorro(true);

console.log(pug);
console.log(pitbull);

// Sintaxe de Classe

class Person {
    constructor(name) {
        this.name = name;
    }
}

class PessoaF extends Person {
    constructor(name, cpf) {
        super(name);
        this.cpf = cpf;
    }
}


// Rescrevendo a function Animal e Cachorro usando classe
class Animal {
    constructor(){
        this.qtdePatas = 0;
    }

    movimentar() {}
}

class Cachorro extends Animal{
    constructor(morde) {
        super();
        this.qtdePatas = 4;
        this.morde = morde;
    }

    latir() {
        console.log('Au!')
    }
}

const beagle = new Cachorro(true);


// Privado / Publico
function Person(initialName){
    let name = initialName;

    this.getName = function(){
        return name;
    }

    this.setName = function(newName){
        name = newName;
    }
}

const p = new Person('Luciana');

// Privado / Publico
class Person{
    name = '';

    constructor(initialName) {
        this.#name = initialName;
    }

    setName(name){
        this.#name = name;
    }

    getName(){
        return this.#name;
    }
}


// Encapsulamento
function Person(initialName) {
    var name = initialName;

    Object.defineProperty(this, 'name',{
        get: function(){
            return name;
        },
        set: function(value) {
            name = value;
        }
    });
}

class Person {
    #name = '';

    constructor(name){
        this.#name = name;
    }

    get name(){
        return this.#name;
    }

    set name(name) {
        this.#name = name;
    }
}