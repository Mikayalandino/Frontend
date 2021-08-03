let puntajeDeUsuario1 = 0;
let puntajeDeUsuario2 = 0;

let respuestaUsuario1;
let respuestaUsuario2

// Una funcion que usando estas dos respuestas me diga quien gano 

const jugarPiedraPapelTijera = (a, b) => {

    respuestaUsuario1 = prompt("Usuario 1, piedra, papel o tijera");
    respuestaUsuario2 = prompt("Usuario 2, piedra, papel o tijera");

    const empate = (respuestaUsuario1 === respuestaUsuario2);

    const ganaUsuario1 = (respuestaUsuario1 === "piedra" && respuestaUsuario2 === "tijera") || (respuestaUsuario1 === "papel" && respuestaUsuario2 === "piedra") || (respuestaUsuario1 === "tijera" && respuestaUsuario2 === "papel")

    const ganaUsuario2 = (respuestaUsuario2 === "piedra" && respuestaUsuario1 === "tijera") || (respuestaUsuario2 === "papel" && respuestaUsuario1 === "piedra") || (respuestaUsuario2 === "tijera" && respuestaUsuario1 === "papel")

    if (empate){
       alert("Empate!")
    } else if (ganaUsuario1){
        alert("Gano el usuario 1!") 
        puntajeDeUsuario1 ++;  
    } else if (ganaUsuario2){
        alert("Gano el usuario 2!")
        puntajeDeUsuario2 ++;
    } else{
        alert("Ingrese una opcion valida")
    }
    
}

const jugada1 = jugarPiedraPapelTijera(respuestaUsuario1, respuestaUsuario2); 

const jugada2 = jugarPiedraPapelTijera(respuestaUsuario1, respuestaUsuario2); 

const jugada3 = jugarPiedraPapelTijera(respuestaUsuario1, respuestaUsuario2); 

if (puntajeDeUsuario1 > puntajeDeUsuario2){
    alert("Resultado final: Ganador Usuario 1!")
} else if (puntajeDeUsuario1 < puntajeDeUsuario2){
    alert("Resultado final: Ganador Usuario 2!")
}