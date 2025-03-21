function fn(){
    return 'Code here';
}

// Iniciado no ES6
const arrowFn = () => 'Code here';
const arrowFn2 = () => {
    // Mais de uma expressão
    // Precisa de return explícito
    return 'Code here';
}

// Funções também são objetos

fn.prop = 'Posso criar propriedades';

console.log(fn());
console.log(fn.prop);

// Receber parâmetros
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn);

// Receber e retornar funções
/*
const controlFnExec => fnParam => allowed => {
    if (allowed){
        fnParam();
    }
}
*/

function controlFnExec(fnParam) {
    return function(allowed) {
        if (allowed){
            fnParam();
        }
    }
}

const handleFnExecution = controlFnExec(fn);

handleFnExecution(true); // Executará a função fn
handleFnExecution(); // Não executará a função fn
