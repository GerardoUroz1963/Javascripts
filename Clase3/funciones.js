//Declarativas
function miFuncion(){
    return 3;
}


miFuncion();
//Expresion

var miFuncion = function(a,b){
    return a + b;
}

miFuncion();

function saludarEstudiantes(estudiante){
    console.log(`Hola ${estudiante}`);
}
saludarEstudiantes("Diego");

function sumar(a,b){
    resultado = a + b;
    return resultado;
}

sumar(1,3);

function sumar1(a,b){
    return  a + b;
}

sumar(-4,3);
