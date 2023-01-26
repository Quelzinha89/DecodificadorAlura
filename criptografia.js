const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");
/*As "chaves" de criptografia que utilizaremos são:
A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"*/

function removeFundo(){
    mensagem.style.background = 'none';
}

function btnCriptografar(){
    const textoEncriptado = criptografar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
    removeFundo();
}

function btnDescriptografar(){
    const textoDesencriptado = descriptografar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
    removeFundo();
}

function btnCopiar(){
    navigator.clipboard.writeText(mensagem.value);
    alert("Texto Copiado!")
}

const matrizCodigo = [
    ["e" , "enter"] ,
    ["i" , "imes"] ,
    ["a" , "ai"] ,
    ["o" , "ober"] ,
    ["u" , "ufat"] ,
    ];

function criptografar (entrada){
    entrada = entrada.toLowerCase();

    for(let indice = 0; indice < matrizCodigo.length; indice++){
       if(entrada.includes(matrizCodigo[indice][0])){
            entrada = entrada.replaceAll(matrizCodigo[indice][0], matrizCodigo[indice][1]);
       }
    }
    return entrada
}

function descriptografar (entrada){
    entrada = entrada.toLowerCase();

    for(let indice = 0; indice < matrizCodigo.length; indice++){
       if(entrada.includes(matrizCodigo[indice][1])){
            entrada = entrada.replaceAll(matrizCodigo[indice][1], matrizCodigo[indice][0]);
       }
    }
    return entrada
}