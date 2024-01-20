let NumeroSecreto = 6;
let NumeroUsuario = 0;
let intentos = 1;
let palabra = 'ves';
    
while(NumeroUsuario != NumeroSecreto){
    NumeroUsuario = prompt('instrodusca un numero de entre 1 y 10');
    if(NumeroUsuario==NumeroSecreto){
        alert(`Acertaste , el numero secreto es ${NumeroSecreto} . Lo hiciste en ${intentos} ${palabra} .`);
    }else{
        intentos = intentos+1;
        palabra = `veces`;
    if(NumeroUsuario<NumeroSecreto){
        alert(`muy cerca el numero secreto es Mayor`);
    }else {
        alert(`muy cerca el numero secreto es menor`);
    }
    if(intentos == 3){
        alert(`FIN DE JUEGOS SUPERERASTE LOS INTENTOS`);
        break;
    }    
}
}