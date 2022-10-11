function NombreMascota(){
    let NombrePerro = prompt("Ahora, ¿Como se llama tu perro?");
    alert(`${NombrePerro} es un lindo nombre para tu mejor amigo`); 
};

function EdadPerro(){
    let EdadPerro =parseInt(prompt("Pon la cantidad de años de tu perro"));
};

/* ------------------- */

let x;
while(x!="salir"){
let Nombre = prompt ("¿Cómo te llamas?");
    alert(`Hola ${Nombre} bienvenid@!`);


NombreMascota ();


let TamanoPerro =(prompt("¿Que tamaño tiene tu perro? (grande, mediano o pequeño)"));


switch(TamanoPerro){
     case "pequeño": 
        if(EdadPerro >0 && EdadPerro ==1) {
            alert (`${NombrePerro} aún es un cachorro`);
        } else if (EdadPerro>=2 && EdadPerro<= 8) {
            alert(`${NombrePerro} es un adulto`);
        } else if (EdadPerro >9){
            alert (`${NombrePerro} es un perrito mayor`);
        } else {
            alert("ups no es una edad valida intenta de nuevo");}

        break;

    case "mediano": 
        if(EdadPerro >0 && EdadPerro ==1) {
            alert (`${NombrePerro} aún es un cachorro`);
        } else if (EdadPerro>=2 && EdadPerro<= 6) {
            alert(`${NombrePerro} es un adulto`);
        } else if (EdadPerro >7){
            alert (`${NombrePerro} es un perrito mayor`);
        } else {
            alert("ups no es una edad valida intenta de nuevo");
        }
        break;
       
     case "grande": 

        if(EdadPerro >0 && EdadPerro ==1) {
            alert (`${NombrePerro} aún es un cachorro`);
        } else if (EdadPerro>=1 && EdadPerro<= 5) {
            alert(`${NombrePerro} es un adulto`);
        } else if (EdadPerro >6){
            alert (`${NombrePerro} es un perrito mayor`);
        } else {
            alert("ups no es una edad valida intenta de nuevo");
        }
        break;
     
     default: 
        alert ("ingresa un tamaño válido")
     
     break;

}

let PesoPerro= parseInt(prompt("Cuanto pesa tu perrito? (En gramos)"));
let GramosComida = PesoPerro * 0.025;
alert(`${NombrePerro}debe comer ${GramosComida} gramos de comida`)

x=prompt("Para salir del bucle escriba: salir") 
} 

/* Agregar Mascota */

let Nombre = NombreMascota();
let Raza = prompt("Ingresa Raza de tu perro, si no lo sabes no contestes")
    if (Raza=="") {
        Raza=criollo
    };
let Edad = EdadPerro(); 
let Genero = prompt("Marca H (hembra) o M de (Macho)")
    if ((Genero != H) && (Genero != M)){
        alert ("Ingresa un valor válido")
    }

class Mascota {
    constructor (Nombre, Raza, Edad, Sexo){
    this.Nombre = Nombre
    this.Raza = Raza
    this.Edad = Edad
    this.Sexo = Sexo
}
}

const NombreMascota = new Mascota

/* Agregar Mascotas en lista */

let MascotasRegistradas = [Nombre]

MascotasRegistradas.push (Nombre) 
console.log (MascotasRegistradas)

/* Eliminar Mascota lista */

let EliminarMascotaLista = prompt("¿Desea eliminar mascota de la lista?")
if (EliminarMascotaLista == "si".toUpperCase){
    MascotasRegistradas
};


/* Busqueda en lista de mascotas registradas */

let MascotaABuscar = prompt("¿Cuál mascota buscas?")
let Buscar = MascotasRegistradas.find (NombreMascotaLista => NombreMascotaLista.Nombre==MascotaABuscar.toUpperCase);
console.log (Buscar);