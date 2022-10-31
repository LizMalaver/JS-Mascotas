    

let listaIndices = JSON.parse(localStorage.getItem("listaIndices") ||JSON.stringify([]));
Cargar(listaIndices)

function Cargar(lista) {
    /*Lectura de arreglo en LocalStorage*/
    
    lista.forEach(indice => {
        let cardNueva = document.createElement("div");

        let Nombre = localStorage.getItem("Nombre_"+indice)
        let TamañoMascota = localStorage.getItem("TamañoMascota_"+indice)
        let EdadMascota = localStorage.getItem("EdadMascota_"+indice)

        cardNueva.innerHTML = `<div class="ColorCard"></div> <img src="../Images/HuellaGrisF.jpg" alt="Foto perfil" class="ImagenPerfil"> <h1 class="NombreMascota">${Nombre}</h1> <p class="EtapaMascota">${EtapaMascota(TamañoMascota,EdadMascota)}</p> <button class="BotonCard" onclick="IrAVerMas('${indice}')">Ver más</button> <button class="BotonCardEliminar" onclick="Eliminar('${indice}')">Eliminar</button>`
        cardNueva.classList.add("Card")
        document.getElementById("ContenedorCardsId").appendChild(cardNueva)
    });

}


function Eliminar(id) {
    let listaIndices = JSON.parse(localStorage.getItem("listaIndices") ||JSON.stringify([]));
    listaIndices.splice( listaIndices.indexOf(id), 1 )
    localStorage.setItem("listaIndices", JSON.stringify(listaIndices));

 /*Borro todas las tarjetas temporalmente para preparar el contenedor a la nueva carga*/
    document.getElementById("ContenedorCardsId").innerHTML = ""

    listaIndices = JSON.parse(localStorage.getItem("listaIndices") ||JSON.stringify([]));
    Cargar(listaIndices)
}


function IrAVerMas(id) {
    console.log(id);
    window.location = "cardGeneral.html?indice="+id;
}



function EtapaMascota(TamanoMascota, EdadMascotaAgregar){
    let resultado = "Etapa desconocida"

    switch(TamanoMascota){
        case "pequeño": 
            if(EdadMascotaAgregar >0 && EdadMascotaAgregar ==1) {
                resultado = "Cachorro";
            } else if (EdadMascotaAgregar>=2 && EdadMascotaAgregar<= 8) {
                resultado = "Adulto";
            } else if (EdadMascotaAgregar >9){
                resultado = "Adulto Mayor";
            } else {
                resultado = "Etapa desconocida";
            };
    
            break;
    
        case "mediano": 
            if(EdadMascotaAgregar >0 && EdadMascotaAgregar ==1) {
                resultado = "Cachorro";
            } else if (EdadMascotaAgregar>=2 && EdadMascotaAgregar<= 6) {
                resultado = "Adulto";
            } else if (EdadMascotaAgregar >7){
                resultado = "Adulto Mayor";
            } else {
                resultado = "Etapa desconocida";
            };
            
            break;
        case "grande": 
    
            if(EdadMascotaAgregar >0 && EdadMascotaAgregar ==1) {
                resultado = "Cachorro";
            } else if (EdadMascotaAgregar>=1 && EdadMascotaAgregar<= 5) {
                resultado = "Adulto";
            } else if (EdadMascotaAgregar >6){
                resultado = "Adulto Mayor";
            } else {
                resultado = "Etapa desconocida";
        };
            
            break;
        default: 
            console.log("No se pudo calcular la etapa")
        break;
    }

    return resultado;
};

let inputBuscar = document.getElementById("inputBuscador")

inputBuscar.onkeyup= () => {
    /*cargar lista de indices desde el localStorage*/
    let listaIndices = JSON.parse(localStorage.getItem("listaIndices") ||JSON.stringify([]));
    /*Nuevo arreglo de nombres de mascota*/
    let mascotas = {}
    /*CAarga de cada uno de los nombres dependiendo de su indice*/
    listaIndices.forEach((id) => mascotas[id]= localStorage.getItem("Nombre_"+id))
    console.log(mascotas);

    let filtrados = Object.keys(mascotas).reduce(function (filtered, key) {
        if (mascotas[key].toLowerCase().includes(inputBuscar.value.toLowerCase()))
            filtered[key] = mascotas[key];
        return filtered;
    }, {});

    let resultado= Object.keys(filtrados)

    /*Borro todas las tarjetas temporalmente para preparar el contenedor a la nueva carga*/
    document.getElementById("ContenedorCardsId").innerHTML = ""

    Cargar(resultado)
};