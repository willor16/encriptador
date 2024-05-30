let palabra="";
let cadena=[];
let letra="";
let historialValor;
let longitud=0;
let descuento=1;
let palabrareordenada=[];
let shoWords="";
let newWord ="";
let historialOfWordsEncriptedODesecriptando ="";
let historialOfWords ="";
let newOrderLvOne = []; //array of algortim lv on
let newWordLvWilmerOne = [];
let secundaryLength=0;
let tempralNumerN = 0;
let countLengthMiddle= 0;
let variabledesencriptarLvWilmer;
let nivel=" ";
let textoUno="";
let textoDos="";
//funcionpara reemplazar elemneto en html y mostrar el texto encriptado
function addElementWord(element, text){
    let addWord = document.getElementById(element);
    addWord.value= text;
    return ;
}


//reemplazar letras nivel alura
function aluraEnript(){
    shoWords=document.getElementById('text-encripting').id;
    let newPalabra="";
    palabra = document.getElementById('text-for-encript').value;
    historialOfWords=palabra;
    newPalabra = palabra.replace(/e/g, 'enter');
    newPalabra = newPalabra.replace(/i/g, 'imes');
    newPalabra = newPalabra.replace(/a/g, 'ai');
    newPalabra = newPalabra.replace(/o/g, 'ober');
    newPalabra = newPalabra.replace(/u/g, 'ufat');
    console.log(newPalabra);
    addElementWord(shoWords, newPalabra);
    historialOfWordsEncriptedODesecriptando=newPalabra;
    palabra = "";

}



//funcion para reemplazar letras en los dos niveles de wilmer
function constructorOtherMethod(){
    
    palabra = document.getElementById('text-for-encript').value;
    longitud = palabra.length;
    secundaryLength = longitud;
    //parametro = palabra.length
    console.log("longitud" +longitud);
    console.log(palabra[palabra.length-1]);

    //ciclo para reemplazar las 27 letras del abecedario
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
    //caso especial para la letra ñ
    palabrareordenada = palabrareordenada.map(letraÑ => letraÑ.toLowerCase() === 'ñ' ? '46546af486e4f8w' :letraÑ);
    //para un espacio o valor vacio
    palabrareordenada = palabrareordenada.map(spaceWord => spaceWord === " " ? '00100577770077w' :spaceWord);
    //salvamos la palabra en un nuevo array para reordenarlo despues o imprimirlo en un input
    newOrderLvOne = palabrareordenada;
    console.log(palabrareordenada);

    cadena=[];
    console.log
    //reiniciando cadena
    ;
}

//-poner unavariable que divida todo dentro de 15
//-cuando ya este esa variable hacer la logica que devuelva de 15 en 15 los valores reordenandolos a su valor original
function algoritmoDeConverisonArrayCadena(){
    palabra = document.getElementById('text-for-encript').value;
    for (let index = palabra.length; index > 0 ; index -= 15) {
        let suSecciones = palabra.slice(Math.max(0, index - 15), index);
        cadena.push(suSecciones);
    }
    console.log(cadena);
}

//funcion para construir un array y poer sustituir letras 
function constructorDesencritpacion(){
    palabrareordenada="";
    palabrareordenada = cadena.map(letraa => letraa.toLowerCase() === '56a565f8a8ese42' ? 'a' : letraa);
    palabrareordenada = palabrareordenada.map(letrabb => letrabb.toLowerCase() === '99s9f8r5g5h5j5r' ? 'b' : letrabb);
    palabrareordenada = palabrareordenada.map(letracc => letracc.toLowerCase() === '46sd79s80000471' ? 'c' : letracc);
    palabrareordenada = palabrareordenada.map(letradd => letradd.toLowerCase() === '96poe147ddf2783' ? 'd' : letradd );
    palabrareordenada = palabrareordenada.map(letraee => letraee.toLowerCase() === '78s9fg5f5gh7dr8' ? 'e' : letraee );
    palabrareordenada = palabrareordenada.map(letraff => letraff.toLowerCase() === '00as8790054d000' ? 'f' : letraff );
    palabrareordenada = palabrareordenada.map(letragg => letragg.toLowerCase() === '64xfd87df95d887' ? 'g' : letragg );
    palabrareordenada = palabrareordenada.map(letrahh => letrahh.toLowerCase() === '87sf78qq9ybb786' ? 'h' : letrahh );
    palabrareordenada = palabrareordenada.map(letraii => letraii.toLowerCase() === '45af5e6s2v1gu7n' ? 'i' : letraii );
    palabrareordenada = palabrareordenada.map(letrajj => letrajj.toLowerCase() === '961dcng148hg7b7' ? 'j' : letrajj );
    palabrareordenada = palabrareordenada.map(letrakk => letrakk.toLowerCase() === 'a584dhkohgyu009' ? 'k' : letrakk );
    palabrareordenada = palabrareordenada.map(letrall => letrall.toLowerCase() === 'dfgd7496f6d8gh8' ? 'l' : letrall );
    palabrareordenada = palabrareordenada.map(letramm => letramm.toLowerCase() === '789dcvbedrgs9s8' ? 'm' : letramm );
    palabrareordenada = palabrareordenada.map(letrann => letrann.toLowerCase() === '998sdf4j2h8f5f6' ? 'n' : letrann );
    palabrareordenada = palabrareordenada.map(letraoo => letraoo.toLowerCase() === '9h2m8ku3u1u4k8u' ? 'o' : letraoo );
    palabrareordenada = palabrareordenada.map(letrapp => letrapp.toLowerCase() === '0045009800sdfes' ? 'p' : letrapp );
    palabrareordenada = palabrareordenada.map(letraqq => letraqq.toLowerCase() === '789xb8kl9h79re9' ? 'q' : letraqq );
    palabrareordenada = palabrareordenada.map(letrarr => letrarr.toLowerCase() === '9s8d7fgv4bh5h4h' ? 'r' : letrarr );
    palabrareordenada = palabrareordenada.map(letrass => letrass.toLowerCase() === '996sdf2c45c1c5r' ? 's' : letrass );
    palabrareordenada = palabrareordenada.map(letratt => letratt.toLowerCase() === '98fg7r8d5r1d2s6' ? 't' : letratt );
    palabrareordenada = palabrareordenada.map(letrauu => letrauu.toLowerCase() === 's5d4f8e6w1s3g1b' ? 'u' : letrauu );
    palabrareordenada = palabrareordenada.map(letravv => letravv.toLowerCase() === '88f5bb55s5ss5gr' ? 'v' : letravv );
    palabrareordenada = palabrareordenada.map(letraww => letraww.toLowerCase() === '96d3x185s4g8r3r' ? 'w' : letraww );
    palabrareordenada = palabrareordenada.map(letraxx => letraxx.toLowerCase() === '78d9f2d1d4jj2i4' ? 'x' : letraxx );
    palabrareordenada = palabrareordenada.map(letrayy => letrayy.toLowerCase() === 'p9y8y5h8k9o4548' ? 'y' : letrayy );
    palabrareordenada = palabrareordenada.map(letrazz => letrazz.toLowerCase() === '5f6dh78dt4hd684' ? 'z' : letrazz );
// caso especial para ñ
    palabrareordenada = palabrareordenada.map(letraññ => letraññ.toLowerCase() === '46546af486e4f8w' ? 'ñ' : letraññ );
    palabrareordenada = palabrareordenada.map(empty => empty === '00100577770077w' ? '' : empty);
    console.log(cadena);

}


//funcion para convertir el arrray en un string
function replaceWilmerStyle(){
    shoWords=document.getElementById('text-encripting').id;
    constructorOtherMethod();
    historialOfWords = palabra;
    newWord = palabrareordenada.join('');
    addElementWord(shoWords, newWord);
    historialOfWordsEncriptedODesecriptando = newWord;
}

//historial


//funcion para reemplazar o reordenar las letras con el fin de que el encriptado sea mas dificil
function wilmerLvAlgoritm(){
    constructorOtherMethod();
    shoWords=document.getElementById('text-encripting').id;
    palabra = document.getElementById('text-for-encript').value;
    let countLengthMiddle = 0;
    historialOfWords = palabra;
    console.log(newOrderLvOne);
    //algoritm
    console.log(newOrderLvOne[newOrderLvOne.length-2]);
    
        countLengthMiddle = secundaryLength/2;
        tempralNumerN= 0;
        while(countLengthMiddle< secundaryLength){
            countLengthMiddle ++;
            tempralNumerN ++;
            
            newWordLvWilmerOne.push(newOrderLvOne[newOrderLvOne.length-countLengthMiddle]);
            newWordLvWilmerOne.push(newOrderLvOne[newOrderLvOne.length-tempralNumerN]);
            
            console.log("contador mitad mayor " + countLengthMiddle);
            console.log("contador mitad menor " + tempralNumerN);

            console.log("contador" + countLengthMiddle);
        }
        console.log("secundario " + secundaryLength);
        console.log("xd " + countLengthMiddle);
        console.log("mostrando la palabra " + newWordLvWilmerOne);
        newWord = newWordLvWilmerOne.join('');
        addElementWord(shoWords, newWord);
        console.log(newWordLvWilmerOne[newWordLvWilmerOne.length-1]);
        console.log(newWordLvWilmerOne[newWordLvWilmerOne.length-2]);
        console.log(newWordLvWilmerOne[newWordLvWilmerOne.length-3]);
        console.log(newWordLvWilmerOne[newWordLvWilmerOne.length-4]);
        console.log(newWord.length);
    
    newWordLvWilmerOne = [];
    historialOfWordsEncriptedODesecriptando = newWord;
    
}

//desencriptacion alura: desencritpa el mensaje encriptado con el nivel de encriptacion alura
function desencriptarAluraEnript(){
    shoWords=document.getElementById('text-encripting').id;
    palabra = document.getElementById('text-for-encript').value;
    
    historialOfWords = palabra;
    let lastWord = "";
    lastWord = palabra.replace(/ufat/g, 'u');
    lastWord = lastWord.replace(/ober/g, 'o');
    lastWord = lastWord.replace(/ai/g, 'a');
    lastWord = lastWord.replace(/imes/g, 'i');
    lastWord = lastWord.replace(/enter/g, 'e');
    console.log(lastWord);
    addElementWord(shoWords, lastWord);
    historialOfWordsEncriptedODesecriptando = lastWord;
    palabra="";
    return lastWord;
}

//desencriptacion nivel wilmer lv1

function desenriptationWimlerLvOne(){
    let newPalabra ="";
    palabrareordenada="";
    palabra = document.getElementById('text-for-encript').value;
    historialOfWords = palabra;
    shoWords=document.getElementById('text-encripting').id;
    addElementWord(shoWords, '');
    algoritmoDeConverisonArrayCadena();
    constructorDesencritpacion();
    newPalabra = palabrareordenada.join('');
    historialOfWordsEncriptedODesecriptando = newPalabra;
    addElementWord(shoWords, newPalabra);
    newPalabra ="";
    cadena=[];
    console.log(cadena);
    return newPalabra;
}

//funcion para encriptar y desencriptar
//llama a las funciones de encriptar y desencriptar segun la nececidad
//funcion encriptar
function encriptationGeneral(){
    textoUno = "Texto a encriptar";
    textoDos = "Texto encriptado";
    //validation for a type of encriptation
    let comprobation = document.getElementById('select-level-encript').value;
    if (comprobation == 'nivelAlura'){
        nivel = "Encriptado - Nivel de encriptación alura";
        aluraEnript();
        historial();
    }else if (comprobation == 'nivelWilmer'){
        nivel = "Encriptado - Nivel de encriptación: encriptacion nivel Wilmer lv uno";
        replaceWilmerStyle();
        historial();
    }else if (comprobation == 'nivelWilmerLvTwo'){
        nivel = "Encriptado - Nivel de encriptación: encriptacion nivel Wilmer lv dos";
        wilmerLvAlgoritm();
        historial();
    }
}

//funcion desencriptar
function desencriptarGeneral(){
    textoUno = "Texto a desencriptar";
    textoDos = "Texto desencriptado";
    let comprobation = document.getElementById('select-level-encript').value;
    if (comprobation == 'nivelAlura'){
        nivel = "DESENCRIPTADO - Nivel de desencriptacion: desencriptacion nivel alura";
        desencriptarAluraEnript();
        historial();

    }else if(comprobation == 'nivelWilmer'){
        nivel = "DESENCRIPTADO - Nivel de desencriptacion: desencriptacion nivel Wilmer lv uno";
        desenriptationWimlerLvOne();
        historial();
    }else if(comprobation == 'nivelWilmerLvTwo'){
        nivel = "DESENCRIPTADO - Nivel de desencriptacion: desencriptacion nivel Wilmer lv dos";

        
        historial();
    }

}


function historial() {
    let inputLikeDiv = document.querySelector('.input-like');

    // Crear el div principal
    let divBlock = document.createElement('div');
    divBlock.setAttribute('class', 'block');

    // Crear el párrafo
    let p = document.createElement('p');
    p.textContent = nivel;
    divBlock.appendChild(p);

    // Crear la tabla
    let table = document.createElement('table');

    // Crear la fila de encabezado
    let trHeader = document.createElement('tr');
    let tdEncrypted = document.createElement('td');
    tdEncrypted.textContent = textoUno;
    let tdDecrypted = document.createElement('td');
    tdDecrypted.textContent = textoDos;
    trHeader.appendChild(tdEncrypted);
    trHeader.appendChild(tdDecrypted);
    table.appendChild(trHeader);

    // Crear la fila de datos
    let trData = document.createElement('tr');
    let tdEncryptedData = document.createElement('td');
    tdEncryptedData.textContent = historialOfWords; // Usar la variable para llenar el td
    let tdDecryptedData = document.createElement('td');
    tdDecryptedData.textContent = historialOfWordsEncriptedODesecriptando; // Usar la variable para llenar el td
    trData.appendChild(tdEncryptedData);
    trData.appendChild(tdDecryptedData);
    table.appendChild(trData);

    // Agregar la tabla al div principal
    divBlock.appendChild(table);

    // Agregar el div principal al div seleccionado
    inputLikeDiv.appendChild(divBlock);
}

function limpiarHistorial(){
    historialValor = document.getElementById('historial-div');
    historialValor.innerHTML = "";
}

function copiar(){
    let texto= document.getElementById('text-encripting').value;
    console.log(texto);
    navigator.clipboard.writeText(texto);

}

//contactar mediante formulario
const btn = document.getElementById('boton-enviar-datos-email');

document.getElementById('contactForm')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_eptxk8s';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Enviar';
      alert(JSON.stringify(err));
    });
});