


        let inputName = document.getElementById("form_name");
        let inputLastName = document.getElementById("form_last_name");
        let inputEmail = document.getElementById("form_email");
        let inputCantidad = document.getElementById("form_quantity");        
        let selectCategoria = document.getElementById("form_selection");
        let boton = document.getElementById("boton_resumen");
        let valorName;
        let valorLastName;
        let valorEmail;
        let valorCantidad;
        let valorCategoria;
        let validInputName;
        let validInputLastName;
        let validInputEmail;
        let validInputCantidad;




        boton.addEventListener("click", function(event) {
          event.preventDefault();
          valorName = inputName.value; // Guarda el valor del input en la variable
          valorLastName = inputLastName.value;
          valorEmail = inputEmail.value;
          valorCantidad = inputCantidad.value;
          valorCategoria = selectCategoria.value;
          console.log(valorName, valorLastName, valorEmail, valorCantidad, valorCategoria);

 
let valorCantidadXCategoria;
  
  if (valorCategoria === "2"){
    valorCantidadXCategoria = valorCantidad * 40;

    } else if(valorCategoria ==="3"){
      valorCantidadXCategoria = valorCantidad* 100;

    } else if(valorCategoria ==="4"){
      valorCantidadXCategoria = valorCantidad* 170;

    } else{
      valorCantidadXCategoria = valorCantidad * 200;

    }


    
          mensajeJS.textContent = "Total a pagar $ " + valorCantidadXCategoria;
    

        });


        let boton_borrar = document.getElementById("boton_borrar");

        boton_borrar.addEventListener("click", function() {
          inputName.value = "";
          inputLastName.value = "";
          inputEmail.value = "";
          inputCantidad.value = "";
          selectCategoria.value = "";
          mensajeJS.textContent = "Total a pagar $ ";
        });

