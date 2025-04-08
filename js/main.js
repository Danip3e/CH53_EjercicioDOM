//console.log(document.getElementById("encabezado1"));
let encabezado1 = document.getElementById("encabezado1");
//encabezado1.innerText = "DOM Ejercicio";
let encabezado2= document.getElementById("encabezado2");
let listas = document.getElementsByTagName("ul");// elementos de la etiqueta

let elementos = document.getElementsByClassName("list-group-item");//clase asignada de la etiqueta
//tagname regresa elementos esta vivaaa

let otroElemento = document.querySelector("ul>li");
console.log("otro elemento: ", otroElemento);// el primero que encuentra , un selector

let otrosElementos = document.querySelectorAll("ul>li"); //todos, está estatica no viva

let btnMostrar = document.getElementById("btnMostar");

console.log(otrosElementos.length);
console.log(listas.length); //2
console.log(listas.item(1));
console.log(elementos.item(2));

btnMostrar.addEventListener("click", function(event){
    console.log("botón btnModificar presionado");
});

//let contador=0;
//function modifica(){

   // encabezado1.innerHTML = "<em>Ejercicio</em> DOM";

    //encabezado2.innerText = "DOM Exercise";

//}

//console.log(encabezado1.innerText);



//console.log(encabezado2.innerText);
//innertext es una propiedad de la etiqueta que esta almacenando de texto que esta en el interior