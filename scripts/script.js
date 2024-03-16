let palabra="";
let cadena=[];
let letra="";
let variableMomentanea;
let longitud=0;
let descuento=1;
let palabrareordenada=[];
let shoWords="";
let newWord ="";
let historialOfWordsEncripted = [];
let historialOfWordsEncripting = [];
let newOrderLvOne = []; //array of algortim lv on



//funciton replace level alura
function aluraEnript(){
    shoWords=document.getElementById('text-encripting').id;
    let newPalabra="";
    palabra = document.getElementById('text-for-encript').value;
    newPalabra = palabra.replace(/e/g, 'enter');
    newPalabra = newPalabra.replace(/i/g, 'imes');
    newPalabra = newPalabra.replace(/a/g, 'ai');
    newPalabra = newPalabra.replace(/o/g, 'ober');
    newPalabra = newPalabra.replace(/u/g, 'ufat');
    console.log(newPalabra);
    guardarHistorial();
    addElementWord(shoWords, newPalabra);
    palabra = "";

}
//funcion replace wilmer style lv1
function replaceWilmerStyle(){
    shoWords=document.getElementById('text-encripting').id;
    constructorOtherMethod();
    newWord = palabrareordenada.join('');
    addElementWord(shoWords, newWord);
}


function desencriptarAluraEnript(){
    shoWords=document.getElementById('text-encripting').id;
    palabra = document.getElementById('text-for-encript').value;
    let lastWord = "";
    lastWord = palabra.replace(/ufat/g, 'u');
    lastWord = lastWord.replace(/ober/g, 'o');
    lastWord = lastWord.replace(/ai/g, 'a');
    lastWord = lastWord.replace(/imes/g, 'i');
    lastWord = lastWord.replace(/enter/g, 'e');
    console.log(lastWord);
    guardarHistorial();
    addElementWord(shoWords, lastWord);
    palabra="";
    return lastWord;
    
}

//funcion para encriptar nivel wilmer
function constructorOtherMethod(){
    cadena=[];
    palabra = document.getElementById('text-for-encript').value;
    longitud = palabra.length
    //parametro = palabra.length
    console.log("longitud" +longitud);
    console.log(palabra[palabra.length-1]);

    //cicle, this is for make a array with letters of cadena variable
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
    palabrareordenada = palabrareordenada.map(letraI => letraI.toLowerCase() === 'i' ? '45af5e6s2v1gu7n' :letraI);
    palabrareordenada = palabrareordenada.map(letraJ => letraJ.toLowerCase() === 'j' ? '961dcng148hg7b7' :letraJ);
    palabrareordenada = palabrareordenada.map(letraK => letraK.toLowerCase() === 'k' ? 'a584dhkohgyu009' :letraK);
    palabrareordenada = palabrareordenada.map(letraL => letraL.toLowerCase() === 'l' ? 'dfgd7496f6d8gh8' :letraL);
    palabrareordenada = palabrareordenada.map(letraM => letraM.toLowerCase() === 'm' ? '789dcvbedrgs9s8' :letraM);
    palabrareordenada = palabrareordenada.map(letraN => letraN.toLowerCase() === 'n' ? '998sdf4j2h8f5f6' :letraN);
    palabrareordenada = palabrareordenada.map(letraO => letraO.toLowerCase() === 'o' ? '9h2m8ku3u1u4k8u' :letraO);
    palabrareordenada = palabrareordenada.map(letraP => letraP.toLowerCase() === 'p' ? '0045009800sdfes' :letraP);
    palabrareordenada = palabrareordenada.map(letraQ => letraQ.toLowerCase() === 'q' ? '789xb8kl9h79re9' :letraQ);
    palabrareordenada = palabrareordenada.map(letraR => letraR.toLowerCase() === 'r' ? '9s8d7fgv4bh5h4h' :letraR);
    palabrareordenada = palabrareordenada.map(letraS => letraS.toLowerCase() === 's' ? '996sdf2c45c1c5r' :letraS);
    palabrareordenada = palabrareordenada.map(letraT => letraT.toLowerCase() === 't' ? '98fg7r8d5r1d2s6' :letraT);
    palabrareordenada = palabrareordenada.map(letraU => letraU.toLowerCase() === 'u' ? 's5d4f8e6w1s3g1b' :letraU);
    palabrareordenada = palabrareordenada.map(letrav => letrav.toLowerCase() === 'v' ? '88f5bb55s5ss5gr' :letrav);
    palabrareordenada = palabrareordenada.map(letraK => letraK.toLowerCase() === 'w' ? '96d3x185s4g8r3r' :letraK);
    palabrareordenada = palabrareordenada.map(letraL => letraL.toLowerCase() === 'x' ? '78d9f2d1d4jj2i4' :letraL);
    palabrareordenada = palabrareordenada.map(letraM => letraM.toLowerCase() === 'y' ? 'p9y8y5h8k9o4548' :letraM);
    palabrareordenada = palabrareordenada.map(letraN => letraN.toLowerCase() === 'z' ? '5f6dh78dt4hd684' :letraN);
    //case for languages with ñ letter
    palabrareordenada = palabrareordenada.map(letraÑ => letraÑ.toLowerCase() === 'ñ' ? '46546af486e4f8w' :letraÑ);
    //empty value
    palabrareordenada = palabrareordenada.map(spaceWord => spaceWord === " " ? '00100577770077w' :spaceWord);
    //save word in a other array because need saver for other array
    newOrderLvOne = palabrareordenada;
    console.log(palabrareordenada);
    //print new array but convert array to string
    
    guardarHistorial();
    
    console.log
}


//function for save in a temporal variable all words
function guardarHistorial(wordForSabeEncriptated, wordForSabeEncripting){
    //save words encriptated and words no encripted
    historialOfWordsEncripted.push(wordForSabeEncriptated);
    historialOfWordsEncripting.push(wordForSabeEncripting);
}

function encriptationGeneral(){
    //validation for a type of encriptation
    let comprobation = document.getElementById('select-level-encript').value;
    if (comprobation == 'nivelAlura'){
        aluraEnript();
    }else if (comprobation == 'nivelWilmer'){
        replaceWilmerStyle();
        wilmerLvAlgoritm(); //just for tester
    }else if (comprobation == 'nivelWilmerLvTwo'){
        
    }

    guardarHistorial(palabra);
}

function desencriptarGeneral(){
    let comprobation = document.getElementById('select-level-encript').value;
    if (comprobation == 'nivelAlura'){
        desencriptarAluraEnript();

    }else if(comprobation == 'nivelWilmer'){
        
    }else if(comprobation == 'nivelWilmerLvTwo'){

    }
}

function addElementWord(element, text){
    let addWord = document.getElementById(element);
    addWord.value= text;
    return ;
}


//function for replace with algoritm
function wilmerLvAlgoritm(){
    const countLengthMiddle= 0;
    const secundaryCount=0;
    console.log(newOrderLvOne);
    //algoritm
    console.log>(newOrderLvOne.length[newOrderLvOne.length-2]); 
}