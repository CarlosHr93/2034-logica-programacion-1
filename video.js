// let NumeroSecreto = 6;  //Variables
let NumeroUsuario = 0;
// let intentos = 1;
let palabra = 'ves';
let intentos = 0;
let NumeroSecreto = parseInt(Math.random() * 10) + 1;  //Numeros aleatorios
//let NumeroSecreto = Math.floor(math.random()*10)+1;
console.log(NumeroSecreto);
let palabraVeces = intentos == 1 ? "ves" : "veces";
NumeroUsuario = prompt('instrodusca un numero de entre 1 y 10');

while(NumeroUsuario != NumeroSecreto){ // ciclo while
    NumeroUsuario = prompt('instrodusca un numero de entre 1 y 10');
    if(NumeroUsuario==NumeroSecreto){
        alert(`Acertaste , el numero secreto es ${NumeroSecreto} . Lo hiciste en ${intentos} ${palabraVeces} .`);
    }else{
        
        palabra = `veces`;
        if(NumeroUsuario<NumeroSecreto){
            alert(`muy cerca el numero secreto es Mayor`);
        }else {
            alert(`muy cerca el numero secreto es menor`);
        }
        intentos++;
        if(intentos > 2){
        alert(`FIN DE JUEGOS SUPERERASTE LOS ${intentos+1} INTENTOS`);
        break;
        }    
    }
}

// // ciclo FOr
// NumeroUsuario = prompt('instrodusca un numero de entre 1 y 10');
// for(;NumeroUsuario != NumeroSecreto;intentos++ ){   
//      if(intentos > 2){
//         alert(`FIN DE JUEGOS SUPERERASTE LOS ${intentos+1} INTENTOS`);
//         break;
//         }  
//         let NumeroUser = prompt('instrodusca un numero de entre 1 y 10');
//      if(NumeroUser<NumeroSecreto){
//         alert(`muy cerca el numero secreto es Mayor`);
//     }else {
//         alert(`muy cerca el numero secreto es menor`);
//         }
//     NumeroUsuario=NumeroUser;
       
//     }
//     if(NumeroUsuario == NumeroSecreto){
//         alert(`Acertaste , el numero secreto es ${NumeroSecreto} . Lo hiciste en ${intentos+1} ${palabraVeces} .`);
//     }   