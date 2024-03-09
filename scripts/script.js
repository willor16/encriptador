let palabra="";
let cadena=[];
let letra="";
let variableMomentanea;
let longitud=0;
let descuento=1;
let palabrareordenada="";
let historialEncriptando =[];
let HistorialEncriptado = [];





//funcion para encriptar nivel wilmer
function encriptWilmerLvOne(){
    cadena=[];
    palabra = document.getElementById('text-for-encript').value;
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
descuento = 1;

palabrareordenada = cadena.map(letraA=> letraA.toLocaleLowerCase() === 'a' ? '56a565f8a8ese42' :letraA);
palabrareordenada = palabrareordenada.map(letraB => letraB.toLowerCase() === 'b' ? '99s9f8r5g5h5j5r' :letraB);
palabrareordenada = palabrareordenada.map(letraC => letraC.toLowerCase() === 'c' ? '46sd79s80000471' :letraC);
palabrareordenada = palabrareordenada.map(letraD => letraD.toLowerCase() === 'd' ? '96poe147ddf2783' :letraD);
palabrareordenada = palabrareordenada.map(letraE => letraE.toLowerCase() === 'e' ? '78s9fg5f5gh7dr8' :letraE);
palabrareordenada = palabrareordenada.map(letraF => letraF.toLowerCase() === 'f' ? '00as8790054d000' :letraF);
palabrareordenada = palabrareordenada.map(letraG => letraG.toLowerCase() === 'g' ? '64xfd87df95d887' :letraG);
palabrareordenada = palabrareordenada.map(letraH => letraH.toLowerCase() === 'h' ? '87sf78qq9ybb786' :letraH);
palabrareordenada = palabrareordenada.map(letraJ => letraJ.toLowerCase() === 'j' ? '961dcng148hg7b7' :letraJ);
palabrareordenada = palabrareordenada.map(letraK => letraK.toLowerCase() === 'k' ? 'a584dhkohgyu009' :letraK);
palabrareordenada = palabrareordenada.map(letraL => letraL.toLowerCase() === 'l' ? 'dfgd7496f6d8gh8' :letraL);
palabrareordenada = palabrareordenada.map(letraM => letraM.toLowerCase() === 'm' ? '789dcvbedrgs9s8' :letraM);
palabrareordenada = palabrareordenada.map(letraN => letraN.toLowerCase() === 'n' ? '998sdf4j2h8f5f6' :letraN);
palabrareordenada = palabrareordenada.map(letraP => letraP.toLowerCase() === 'p' ? '0045009800sdfes' :letraP);
palabrareordenada = palabrareordenada.map(letraQ => letraQ.toLowerCase() === 'q' ? '789xb8kl9h79re9' :letraQ);
palabrareordenada = palabrareordenada.map(letraF => letraF.toLowerCase() === 'r' ? '9s8d7fgv4bh5h4h' :letraF);
palabrareordenada = palabrareordenada.map(letraG => letraG.toLowerCase() === 's' ? '996sdf2c45c1c5r' :letraG);
palabrareordenada = palabrareordenada.map(letraH => letraH.toLowerCase() === 't' ? '98fg7r8d5r1d2s6' :letraH);
palabrareordenada = palabrareordenada.map(letraJ => letraJ.toLowerCase() === 'v' ? '88f5bb55s5ss5gr' :letraJ);
palabrareordenada = palabrareordenada.map(letraK => letraK.toLowerCase() === 'w' ? '96d3x185s4g8r3r' :letraK);
palabrareordenada = palabrareordenada.map(letraL => letraL.toLowerCase() === 'x' ? '78d9f2d1d4jj2i4' :letraL);
palabrareordenada = palabrareordenada.map(letraM => letraM.toLowerCase() === 'y' ? 'p9y8y5h8k9o4548' :letraM);
palabrareordenada = palabrareordenada.map(letraN => letraN.toLowerCase() === 'z' ? '5f6dh78dt4hd684' :letraN);
//case for languages with ñ letter
palabrareordenada = palabrareordenada.map(letraÑ => letraÑ.toLowerCase() === 'ñ' ? '46546af486e4f8w' :letraÑ);

console.log(palabrareordenada);
guardarHistorial();
cadena=[];
console.log
}

function guardarHistorial(){
    historialEncriptando.push(palabra);
    console.log(historialEncriptando);
    

}