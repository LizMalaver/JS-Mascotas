
/*-------------------------------------------------------*/

/*Calcular etapa y agregar a Card Mascotas */

function EtapaMascota(){
    let TamanoMascota= document.getElementById ("TamanoMascota").value
    let EdadMascotaAgregar = document.getElementById ("EdadMascota").value
    let EtapaCardMascota = document.querySelector("EtapaMascota")

    switch(TamanoMascota){
         case "pequeño": 
            if(EdadMascotaAgregar >0 && EdadMascotaAgregar ==1) {
                EdadMascotaAgregar.onkeydown= () => {
                EtapaCardMascota.innerHTML = "Cachorro";
                };

            } else if (EdadMascotaAgregar>=2 && EdadMascotaAgregar<= 8) {
                EdadMascotaAgregar.onkeydown= () => {
                EtapaCardMascota.innerHTML = "Adulto";
                };
            } else if (EdadMascotaAgregar >9){
                EdadMascotaAgregar.onkeydown= () => {
                EtapaCardMascota.innerHTML = "Adulto Mayor";
                };
            } else {
                EdadMascotaAgregar.onkeydown= () => {
                EtapaCardMascota.innerHTML = "Etapa desconocida";
                }};
    
            break;
    
        case "mediano": 
            if(EdadMascotaAgregar >0 && EdadMascotaAgregar ==1) {
                EdadMascotaAgregar.onkeydown= () => {
                EtapaCardMascota.innerHTML = "Cachorro";
                };

            } else if (EdadMascotaAgregar>=2 && EdadMascotaAgregar<= 6) {
                EdadMascotaAgregar.onkeydown= () => {
                EtapaCardMascota.innerHTML = "Adulto";
                };

            } else if (EdadMascotaAgregar >7){
                EdadMascotaAgregar.onkeydown= () => {
                EtapaCardMascota.innerHTML = "Adulto Mayor";
                };

            } else {
                EdadMascotaAgregar.onkeydown= () => {
                EtapaCardMascota.innerHTML = "Etapa desconocida";
                }};
            
            break;
           
         case "grande": 
    
            if(EdadMascotaAgregar >0 && EdadMascotaAgregar ==1) {
                EdadMascotaAgregar.onkeydown= () => {
                EtapaCardMascota.innerHTML = "Cachorro";
                };

            } else if (EdadMascotaAgregar>=1 && EdadMascotaAgregar<= 5) {
                EdadMascotaAgregar.onkeydown= () => {
                EtapaCardMascota.innerHTML = "Adulto";
                };

            } else if (EdadMascotaAgregar >6){
                EdadMascotaAgregar.onkeydown= () => {
                EtapaCardMascota.innerHTML = "Adulto Mayor";
                };

            } else {
                EdadMascotaAgregar.onkeydown= () => {
                EtapaCardMascota.innerHTML = "Etapa desconocida";
                }};
            
            break;
         
         default: 
            alert ("ingresa un tamaño válido")
         
         break;
    
    }
};


let PesoPerro= parseInt(prompt("Cuanto pesa tu perrito? (En gramos)"));
let GramosComida = PesoPerro * 0.025;
alert(`${NombrePerro}debe comer ${GramosComida} gramos de comida`)

 

/*-------------------------------------------------------*/

/* Agregar Mascota */

class Mascota {
    constructor (Nombre, Etapa,){
    this.Nombre = Nombre
    this.Etapa = Etapa
}
};

const ListaMascotas = [];

const NuevaMascota = ()=>{
    let Nombre = document.getElementById("NombreMascota").value
    let Etapa = EtapaMascota

    let MascotaNueva = new Mascota (Nombre,Etapa)
    ListaMascotas.push(MascotaNueva)
    return ListaMascotas
};




/* Agregar Mascotas en lista */

ListaMascotas = [Nombre,Etapa]

ListaMascotas.push (Nombre,Etapa) 
console.log (ListaMascotas)

/* Eliminar Mascota lista */

let EliminarMascotaLista = prompt("¿Desea eliminar mascota de la lista?")
if (EliminarMascotaLista == "si".toUpperCase){
    MascotasRegistradas
};


/* Busqueda en lista de mascotas registradas */

let MascotaABuscar = document.querySelector(".Buscador").value
let Buscar = ListaMascotas.find
(Mascota => Mascota.Nombre==MascotaABuscar.toUpperCase);


console.log (Buscar);


/*-------------------------------------------------------*/

/* Modificación DOM Agregar texto*/
/* Modificación DOM Agregar texto en "htmlCardGeneral" del formulario de "html agregar"*/

/* PROBLEMA AGREGAR PARSEINT*/


let NombreMascotaAgregar = document.getElementById("NombreMascota").value
let DescripcionMascotaAgregar = document.getElementById ("DescribeMascota").value
let RazaMascotaAgregar = document.getElementById ("RazaMascota").value
let TamañoMascotaAgregar = document.getElementById ("TamanoMascota").value
let PesoMascotaAgregar = document.getElementById ("PesoMascota").value 
let EdadMascotaAgregar = document.getElementById ("EdadMascota").value


let NombreMascotaCardGeneral = document.querySelector(".CardNombreMascota")
let DescripcionCardGeneral = document.querySelector(".CardGeneralDescripcion")
let RazaCardGeneral = document.getElementById ("CardGeneralRaza")
let TamañoCardGeneral = document.getElementById ("CardGeneralTamano")
let PesoCardGeneral = document.getElementById ("CardGeneralPeso")
let EdadCardGeneral = document.getElementById ("CardGeneralEdad")
let ComidaCardGeneral = document.getElementById ("CardGeneralComida")


NombreMascotaAgregar.onkeydown= () => {
NombreMascotaCardGeneral.innerHTML = NombreMascotaAgregar.value;
};

DescripcionMascotaAgregar.onkeydown= () => {
DescripcionCardGeneral.innerHTML = DescripcionMascotaAgregar.value;
};

RazaMascotaAgregar.onkeydown= () => {  /* No sé si está bien formulado*/
RazaCardGeneral.innerHTML = RazaMascotaAgregar.value;
if (RazaMascotaAgregar.value=="") {
    RazaCardGeneral = innerHTML = criollo
}
};

TamañoMascotaAgregar.onkeydown= () => {
TamañoCardGeneral.innerHTML = TamañoMascotaAgregar.value;
};

PesoMascotaAgregar.onkeydown= () => {
PesoCardGeneral.innerHTML = PesoMascotaAgregar.value;  
};

EdadMascotaAgregar.onkeydown= () => {
EdadCardGeneral.innerHTML = EdadMascotaAgregar.value;
};

ComidaCardGeneral.innerHTML = "hola"



/*-------------------------------------------------------*/

/* Modificación DOM Agregar card en "html mascotas" al oprimir agregar de "html agregar" y al oprimir el boton de eliminar "html mascotas" se elimine la card */

const AgregarCard = document.querySelector(".DatosFormulario"); /* html agregar*/
const EliminarCard = document.querySelector(".Card");   /* html mascotas*/
let NuevaCard = document.querySelector(".ContenedorCards");

AgregarCard.addEventListener("submit", (e)=> {
e.preventDefault();
NuevaCard.append (".Card");   /* Agrega Card*/
})

EliminarCard.addEventListener(document.querySelector("BotonCardEliminar"), (e)=> {
e.preventDefault();
NuevaCard.remove(".Card");   /* Elimina Card*/
})


/*-------------------------------------------------------*/

/*Guardar en local storage usuario*/

function guardarNombreUsuario() {
   let NombreUsuario = document.getElementById("NombreUsuario").value;
   let BotonAgregarUsuario = querySelector(".BotonInicio")

    BotonAgregarUsuario.addEventListener ("click",(e) =>{
    e,preventDefault();
    localStorage.setItem("Usuario",NombreUsuario);
})   
};

/*Guardar en local storage Array Mascotas*/

function guardarDatosMascotas() {
    let BotonGuardarMascota= document.querySelector(".BotonAgregar") /* html agregar*/

    BotonGuardarMascota.addEventListener ("submit",(e) =>{
    e,preventDefault();
    localStorage.setItem("NuevaMascota",JSON.stringify(Mascota)).value;
})
};






