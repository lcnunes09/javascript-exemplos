const textSize = 'Texto'.length;
console.log(`Quantidade de letras: ${textSize}`);

const splittedText = 'Texto'.split('x');
console.log('\nArray com as posições separadas pelo delimitador: ', splittedText);

const replacedText = 'Texto'.replace('Text', 'txeT');
console.log('\nSubstituição de valor:', replacedText)

const lastChar = 'Texto'.slice(-1);
console.log('\Última letra de uma string:', lastChar);

const allWithoutLastChar = 'Texto'.slice(0, -1);
console.log('\Valor da string da primeira letra menos a última:', allWithoutLastChar);

const secondtoEnd = 'Texto'.slice(1);
console.log('\nValor da string na segunda letra até a última:', secondtoEnd);

const twoCharsBeforeFirstPos = 'Texto'.substr(0, 2);
console.log('\nAs duas letras primeiras são:', twoCharsBeforeFirstPos);
