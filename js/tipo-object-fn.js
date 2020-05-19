const userObj = {
    name:'Luciana',
    lastName: 'Nunes'
}

console.log('\nPropriedades do objeto userObj:', Object.keys(userObj));

console.log('\nValores das propriedades do objeto user:', Object.values(userObj));

console.log('\nLista de propriedades e valores:', Object.entries(userObj));

Object.assign(userObj, {fullName: 'Luciana Nunes'});

console.log('\nAdiciona a propriedade fullName no objeto userObj', userObj);

// Forma recomendada para mergiar arrays, criando um novo objeto
console.log('\nRetorna um novo objeto mergeando dois ou mais objetos', Object.assign({}, userObj, {age: 32}));

// Congela o objeto e não permite mudanças
const newObj = {foo: 'bar'};
Object.freeze(newObj);

newObj.foo = 'changes';
delete newObj.foo;
newObj.bar = 'foo';

console.log('\nVariável newObj após as alterações:', newObj);

// Permite apenas a alteração de propriedades existentes em um objeto
// Seal não cria nem edita
const person = {name: 'Luciana'};
Object.seal(person);

person.name = 'Luciana Nunes';
delete person.name;
person.age = 32;

console.log('\nVariável person após as alterações:', person)