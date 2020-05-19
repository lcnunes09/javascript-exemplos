const myNumber = 12.4032;

const numberAsString = myNumber.toString();
console.log('\nNúmero transformado em string: ', numberAsString, typeof numberAsString);

const fixedTwoDecimals = myNumber.toFixed(2);
console.log('\nNúmero com duas casas decimais:', fixedTwoDecimals);

console.log('\nString parseada para float:', typeof parseFloat('13.22'));

console.log('\nString parseada para int:', typeof parseInt('13.20'));