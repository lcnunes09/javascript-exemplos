const persons = Array.of('John', 'Cris', 'Jenny');
const personsList = Array('John', 'Cris', 'Jenny');

// Pegando elementos divs
const divs = document.querySelectorAll('div'); // Node List
const divArray = Array.from(divs); // Array

// push (Adiciona na última posição e retorna tamanho do array)
// pop (Remove último elemento e retorna quem removeu)
// unshift (Adiciona na primeira posição e retorna tamanho do array)
// shift (Remove primeiro elemento e retorna quem removeu)
// concat (Concatena os Arrays)
// slice (Retorna um novo array fatiando o array de acordo com início e fim)
// splice (Altera um array adicionando novos elementos enquanto remove elementos antigos)

const frutas = ['banana', 'maçã'];
frutas.shit();

const salgados = ['coxinha'];

const alimentos = frutas.concat(salgados);
alimentos.slice(-1);

salgados.splice(2);
salgados.splice(1, 0, "empada"); // na posição 1, 0 itens removidos, acrescenta empada

// forEach
// map
// flat
// flatMap
// keys
// values
// entries
// find
// findIndex
// filter
// indexOf
// lastIndexOf
// includes
// some - ver se tem algum elemento que está na condição (exemplo: tem algum elemento par?)
// every - todos os itens satisfazem uma condição 
// sort - ordenar
// reverse - inverter a ordem do array
// join - transformar array em outro tipo de dado: junta tudo 
// reduce - para cada item do array, realiza uma função e junta os valores, por exemplo, valor total somando todos os itens do array ou tirando a média

const frutasNovas = ['banana', 'maçã', 'laranja', 'mamão', 'melancia'];
const frutasNovasIterator = frutasNovas.entries();

frutasNovasIterator.next();

const users = ['Luciana', 'Renata', 'Rita', 'Leandro'];

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const personsNovo = [
    {
        name: 'Luciana',
        age: 32,
        gender: gender.WOMAN
    },
    {
        name: 'Renata',
        age: 34,
        gender: gender.WOMAN
    },
    {
        name: 'Rita',
        age: 60,
        gender: gender.WOMAN
    },
    {
        name: 'Leandro',
        age: 57,
        gender: gender.MAN
    }
]


console.log('\nItens:', personsNovo.length);

console.log('\nA variável personsNovo é um array:', Array.isArray(personsNovo));

personsNovo.forEach(person => {
    console.log(`Nome: ${person.name}`)
});

// Filter, Map e Reduce
// Não alteram as referências dos objetos, eles retornam um novo


const mens = personsNovo.filter(person => person.gender === gender.MAN);
console.log('\nNova lista apenas com homens:', mens);

const personWithCourse = personsNovo.map(person => {
    person.course = 'Introdução ao JavaScript';
    return person;
});

console.log('\nPessoas com a adição do course', personWithCourse);

const totalAge = personsNovo.reduce((age, person) => {
    age += person.age;
    return age;
}, 0);

console.log('\nSoma de idade das pessoas', totalAge);

// Somar idade das pessoas que tem a idade par
const totalEvenAges = personsNovo
                        .filter(person => person.age % 2 === 0)
                        .reduce((age,person) => {
                            age += person.age;
                            return age;
                        }, 0);

console.log('\nSoma de idade das pessoas que tem idade par', totalEvenAges);


