let palabra="";
let cadena=[];
let letra="";
let variableMomentanea;
let longitud=0;
let descuento=1;
let palabrareordenada="";


function crear(){
    palabra = document.getElementById('text-of-word').value;
    longitud = palabra.length
parametro = palabra.length
console.log("longitud" +longitud);

console.log(palabra[palabra.length-1]);
    while (longitud>0){
    
    longitud --;
    
    letra=palabra[palabra.length-descuento];
    console.log("letra palabra" + palabra[palabra.length-descuento]);
    cadena.push(letra);
    console.log(letra);
    console.log("cadena "+ cadena);
    descuento ++;
    
    console.log(descuento);
}


}