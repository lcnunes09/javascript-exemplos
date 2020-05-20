const array = ['one', 'two', 'three'];

for (let index = 0; index < array.length; index++){
    const element = array[index];
    console.log(`Element: #${index}: ${element}.`)
}

let arr = [3, 5, 7];
arr.foo = 'hello';

for (let i in arr) {
    console.log(i);
}

// Só mostra propriedades enumeradas
for (let i of arr) {
    console.log(i);
}