"use strict"
alert("Bienvenid@ a mi pagina web");

let total = 0;
let productos = [];
let precioUnitario = [];
let cantidadDeProducto = [];

let botonAgregar = document.getElementById("agregarProducto");
botonAgregar.addEventListener("click", agregarProducto);

let botonCalcular = document.getElementById("calcularTotal");
botonCalcular.addEventListener("click", calcularCompra);

let miLista = document.querySelector(".lista");

contenedor.classList.add("contenedor");
input.classList.add("inputBlock")
titulo.classList.add("tipoDeLetra");
boton.classList.add("boton")




function agregarProducto(){
    let producto = document.querySelector(".productoUnico").value;
    productos.push(producto);

    let precio = parseInt(document.querySelector(".precioUnitario").value);
    precioUnitario.push(precio);

    let cantidad = parseInt(document.querySelector(".cantidadProducto").value);
    cantidadDeProducto.push(cantidad);

    let lista = document.createElement("li");
    lista.innerHTML =" Producto " + producto + " Cantidad " + cantidad + " Precio " + precio;
    miLista.appendChild(lista);

}

function calcularCompra(){
    for(let i = 0; i < productos.length; i++){

        total = total + parseInt((preciosUnitarios[i] * cantidadDeProductos[i]));
    }
    document.querySelector("h1").innerHTML = "Total de su compra" + total; 
}