//console.log(document.getElementById("encabezado1"));
let encabezado1 = document.getElementById("encabezado1");
//encabezado1.innerText = "DOM Ejercicio";
let encabezado2= document.getElementById("encabezado2");
let listas = document.getElementsByTagName("ul");// elementos de la etiqueta
 let txtRFC = document.getElementById("txtRFC");
 let txtCURP = document.getElementById("txtCURP");
 let txTelefono = document.getElementById("txTelefono");


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
    //console.log("botón btnModificar presionado");

    let element = document.createElement("li");
    element.innerText="Another item"; //<li> Another item</li>
    element.classList.add("list-group-item");
     let element2 = element.cloneNode(true);

   // listas.item(0).before(element);
    //listas.item(0).prepend(element2);
    //listas.item(0).append(element);
    //listas.item(0).after(element);
    //listas.item(1).insertAdjacentElement("afterbegin", element);
    //listas.item(1).insertAdjacentElement("beforeend",element2);
    listas.item(1).insertAdjacentHTML("beforebegin", `<li class="list-group-item">Before Begin Item</li>`);
    listas.item(1).insertAdjacentHTML("afterend", `<li class="list-group-item">After End item</li>`);
    listas.item(1).insertAdjacentHTML("afterbegin", `<li class="list-group-item">After Begin item</li>`);
    listas.item(1).insertAdjacentHTML("beforeend", `<li class="list-group-item">Before End item</li>`);
});//btnMostrar
// Se ejecuta cuando se termina de cargar todos los elementos de la página
window.addEventListener("load",function(event){
    console.log("se terminó de cargar la página");
});//load

//blur -> cuando se sale del campo
// txtRFC.addEventListener("blur", function(event){
//     event.preventDefault();
//     txtRFC.value = txtRFC.value.toUpperCase();
// });//txtRFC----> función para convertir a mayúsculas y los eventos blur de los campos de RFC

// txtCURP.addEventListener("blur", function(event){
//     event.preventDefault();
//     txtCURP.value = txtCURP.value.toUpperCase();
// });//txtCURP-----> función para convertir a mayúsculas y los eventos blur de los campos de CURP.

function txtToUpper(event){
    event.preventDefault();
    event.target.value = event.target.value.trim().toUpperCase();
}//txtToUpper
//blur -> cuando se sale del campo
txtRFC.addEventListener("blur",txtToUpper);// txtRFC
txtCURP.addEventListener("blur",txtToUpper); //txtCURP



txTelefono.addEventListener("blur", function (event){
    event.preventDefault();
    txTelefono.value = txTelefono.value.trim().slice(0,10);
}); //txtTelefono

//let contador=0;
//function modifica(){

   // encabezado1.innerHTML = "<em>Ejercicio</em> DOM";

    //encabezado2.innerText = "DOM Exercise";

//}

//console.log(encabezado1.innerText);



//console.log(encabezado2.innerText);
//innertext es una propiedad de la etiqueta que esta almacenando de texto que esta en el interior