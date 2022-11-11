let NombreMascotaAgregar = document.getElementById('NombreMascota');
let DescripcionMascotaAgregar = document.getElementById ("DescribeMascota");
let RazaMascotaAgregar = document.getElementById ("RazaMascota");
let TamañoMascotaAgregar = document.getElementById ("TamanoMascota");
let PesoMascotaAgregar = document.getElementById ("PesoMascota");
let EdadMascotaAgregar = document.getElementById ("EdadMascota");


function Agregar() {

    localStorage.setItem("UltimoIndex"  ,(parseInt( localStorage.getItem("UltimoIndex") ) || 0)+1);
    let actualUltimoIndex = localStorage.getItem("UltimoIndex");
    /*Lectura de arreglo en LocalStorage*/
    let listaIndices = JSON.parse(localStorage.getItem("listaIndices") ||JSON.stringify([]));
    listaIndices.push( "m"+actualUltimoIndex )
    /*Guardado de arreglo en LocalStorage*/
    localStorage.setItem("listaIndices", JSON.stringify(listaIndices));
    
    
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Mascota Agregada',
        showConfirmButton: false,
        timer: 2500
     })
     setTimeout(function () {
        window.location = "mascotas.html"
    }, 2500);


    if ( RazaMascotaAgregar.value )
        localStorage.setItem("RazaMascota_m"+actualUltimoIndex,  RazaMascotaAgregar.value );
    else
        localStorage.setItem("RazaMascota_m"+actualUltimoIndex, "Criolla" );
    
    localStorage.setItem("Nombre_m"+actualUltimoIndex,  NombreMascotaAgregar.value );
    localStorage.setItem("Descripcion_m"+actualUltimoIndex,  DescripcionMascotaAgregar.value );
    localStorage.setItem("TamañoMascota_m"+actualUltimoIndex,  TamañoMascotaAgregar.value );
    localStorage.setItem("PesoMascota_m"+actualUltimoIndex,  PesoMascotaAgregar.value );
    localStorage.setItem("EdadMascota_m"+actualUltimoIndex,  EdadMascotaAgregar.value );
    localStorage.setItem("SexoMascota_m"+actualUltimoIndex,  document.querySelector('input[name="sexo"]:checked').value) ;
    
    
    window.location = "mascotas.html"
}

document.getElementById("ConozcamosAmigo").innerHTML = `${localStorage.getItem("Usuario")} conozcamos más a tu mejor amig@`;