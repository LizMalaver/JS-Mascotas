

/*-------------------------------------------------------*/

/*Guardar en local storage usuario*/
let NombreUsuario = document.getElementById("NombreUsuario").value;


function guardarNombreUsuario() {
   
   let BotonAgregarUsuario = querySelector(".BotonInicio")

    BotonAgregarUsuario.addEventListener ("click",(e) =>{
    e,preventDefault();
    localStorage.setItem("Usuario",NombreUsuario);
})   
};



localStorage.getItem (guardarNombreUsuario);
console.log (NombreUsuario)

