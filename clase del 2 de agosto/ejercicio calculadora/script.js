"use strict"
alert("Bienvenid@");

let contador = 0;

let botonContar = document.getElementById("sumarClicks");
botonContar.addEventListener("click", contarClick);

let botonRestar = document.getElementById("restarClicks");
botonRestar.addEventListener("click", restarClick);

let botonMostrar = document.getElementById("mostrarCantidadDeClicks");
botonMostrar.addEventListener("click", mostrarClick);


function contarClick(){
    contador ++;
    document.querySelector("h1").innerHTML = contador;
}
function restarClick(){
    contador --;
    document.querySelector("h1").innerHTML = contador;
}
function mostrarClick(){
    document.querySelector("h1").innerHTML = contador;
    alert(contador);
}