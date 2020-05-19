const symbol1 = Symbol();
const symbol2 = Symbol();

console.log('Symbol1 é igual a Symbol2:', symbol1 === symbol2);

const nameSymbol1 = Symbol('name');
const nameSymbol2 = Symbol('name');

const userName = {
    [nameSymbol1]: 'Luciana',
    [nameSymbol2]: 'Renata',
    lastName: 'Nunes'
}

console.log(userName);


for (const key in userName) {
    if (userName.hasOwnProperty(key)){
        console.log(`\nValor da chave ${key}: ${userName[key]}`)
    }
}


console.log('Propriedades do objeto userName:', Object.keys(userName));

console.log('Valores das propriedades do objeto userName:', Object.values(userName));

console.log('Symbols registrados no objeto userName:', Object.getOwnPropertySymbols(userName));

console.log('Todas as propriedades do objeto userName:', Reflect.ownKeys(userName));


// Criar um enum
const direction = {
    UP: Symbol('UP');
    DOWN: Symbol('DOWN');
    LEFT: Symbol('LEFT');
    RIGHT: Symbol('RIGHT');
}