let encrip = [];
let resultado= [];
let nEncripta = 1;
let arrayUsuario =[];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function validacionTxt(txtUsuario){
    let validacion = txtUsuario.value.toUpperCase();
    printChar(0, validacion);
}

function convertir(){
    let txtUsuario = document.getElementById('valorUsuario').value;
    let arr = txtUsuario.split('');
    return arr;
}
function encriptarUnicode(){
    arrayUsuario = convertir();
    for(let i=0; i<arrayUsuario.length;i++)
    {
        encrip[i] = arrayUsuario[i].charCodeAt(0)+ nEncripta;
        console.log(encrip[i]);
        resultado[i] = String.fromCharCode(encrip[i]);
    }
   asignarTextoElemento('resultadoUsuario',`El texto cifrado es: ${resultado.join("")}`)
return;
}

function desencriptarUnicode(){
    arrayUsuario = convertir();
    for(let i=0; i<arrayUsuario.length;i++)
    {
        encrip[i] = arrayUsuario[i].charCodeAt(0)- nEncripta;
        resultado[i] = String.fromCharCode(encrip[i]);
    }
   asignarTextoElemento('p',`El texto desifrado es: ${resultado.join("")}`)
return;
}

function validar(vocales){
    if(vocales == "a"){
        return vocales.replace("a", 'ai');
    }if(vocales == "e"){
        return vocales.replace("e", 'enter');
    }if(vocales == "i"){
        return vocales.replace("i", 'imes');    
    } if(vocales == "o"){
        return vocales.replace("o", 'ober');
    }if(vocales == "u"){
        return vocales.replace("u", 'ufat');
    } else{
        return vocales;
    }
}

function validarcifrado(vocales){
    for(let i=0 ; i<vocales.length;i++)
    {
    if(vocales == "ai"){
        return vocales.replace("ai",'a');
    }if(vocales == "enter"){
        return vocales.replace("enter", 'e');
    }if(vocales == "imes"){
        return vocales.replace("imes", 'i');    
    } if(vocales == "ober"){
        return vocales.replace("ober", 'o');
    }if(vocales == "ufat"){
        return vocales.replace("ufat", 'u');
    }
    else{
        return vocales;
    }
}
}

function encriptar(){
    arrayUsuario = convertir();
    for(let i=0; i<arrayUsuario.length;i++)
    {
        encrip[i] = validar(arrayUsuario[i])
    }

    asignarTextoElemento('p',`${encrip.join("")}`)
}

function desencriptar(){
    let txtUsuario = document.getElementById('valorUsuario').value;
        var txtcifrado = txtUsuario.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
        asignarTextoElemento('p',`${txtcifrado}`)
    }