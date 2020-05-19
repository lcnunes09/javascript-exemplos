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


