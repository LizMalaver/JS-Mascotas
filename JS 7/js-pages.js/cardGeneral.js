let NombreMascotaCardGeneral = document.querySelector('#CardNombreMascota');
let DescripcionCardGeneral = document.querySelector(".CardGeneralDescripcion");
let RazaCardGeneral = document.getElementById ("CardGeneralRaza");
let TamañoCardGeneral = document.getElementById ("CardGeneralTamano");
let PesoCardGeneral = document.getElementById ("CardGeneralPeso");
let EdadCardGeneral = document.getElementById ("CardGeneralEdad");
let ComidaCardGeneral = document.getElementById ("CardGeneralComida");
let CardGeneralGenero = document.getElementById ("CardGeneralGenero");

let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let index = urlParams.get('indice')

let Nombre = localStorage.getItem("Nombre_"+index)
let Descripcion = localStorage.getItem("Descripcion_"+index)
let Raza = localStorage.getItem("RazaMascota_"+index)
let TamañoMascota = localStorage.getItem("TamañoMascota_"+index)
let PesoMascota = localStorage.getItem("PesoMascota_"+index) 
let EdadMascota = localStorage.getItem("EdadMascota_"+index)
let SexoMascota = localStorage.getItem("SexoMascota_"+index)

NombreMascotaCardGeneral.innerHTML = Nombre ? Nombre : NombreMascotaCardGeneral.innerHTML
DescripcionCardGeneral.innerHTML = Descripcion ? Descripcion : DescripcionCardGeneral.innerHTML
RazaCardGeneral.innerHTML = Raza ? Raza : RazaCardGeneral.innerHTML
TamañoCardGeneral.innerHTML = TamañoMascota ? TamañoMascota : TamañoCardGeneral.innerHTML 
CardGeneralGenero.innerHTML = SexoMascota ? SexoMascota: CardGeneralGenero.innerHTML 
PesoCardGeneral.innerHTML = PesoMascota ? PesoMascota + " gr":PesoCardGeneral.innerHTML
EdadCardGeneral.innerHTML = EdadMascota ? EdadMascota: EdadCardGeneral.innerHTML 
let GramosComida = parseInt( PesoMascota) * 0.025;
ComidaCardGeneral.innerHTML = GramosComida ? GramosComida.toFixed(3) +" gr" : ComidaCardGeneral.innerHTML





