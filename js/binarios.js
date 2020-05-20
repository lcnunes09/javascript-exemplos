
var arvores = new Array("pau-brasil", "loureiro", "cedro", "carvalho", "sicômoro");
0 in arvores;
3 in arvores;
6 in arvores;
console.log("cedro" in arvores);
console.log("cedro" in arvores[2]);
"lenght" in arvores;

"PI" in Math;
var minhaString = new String("coral");
"lenght" in minhaString;

var meuCarro = {marca: 'Honda', modelo: 'Accord', ano: 1998};
"marca" in meuCarro;
"modelo" in meuCarro;


var dia = new Date(2020, 12, 17);

if (dia instanceof Date){
    console.log(dia)
}