

/*-------------------------------------------------------*/

/*Guardar en local storage usuario*/


function guardarNombreUsuario() {
   
   
   let NombreUsuarioIngresado = document.getElementById("NombreUsuarioInicio").value;
  
   Swal.fire({
      position: 'top-end',
      title: `Hola, ${localStorage.getItem("Usuario")} bienvenid@`,
      showConfirmButton: false,
      timer: 2500
   })
   setTimeout(function () {
      window.location = "Pages/agregar.html"
  }, 2500);

   localStorage.setItem("Usuario",NombreUsuarioIngresado);
   

};



/*Foto perrito aleatorio fetch*/

    const BotonFoto = document.getElementById('BotonPerrito');

    BotonFoto.addEventListener ('click',() => {
         
         fetch ('https://random.dog/woof.json')
         .then((res) => res.json())
         .then((data) => {

            Swal.fire({
               title: '¡Hey mira!',
               text: 'El perrito del día',
               imageUrl: data.url,
               imageWidth: 400,
               imageHeight: 200,
               imageAlt: 'Custom image',
             })

         }) 
     } )

