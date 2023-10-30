


        var inputName = document.getElementById("form_name");
        var inputLastName = document.getElementById("form_last_name");
        var inputEmail = document.getElementById("form_email");
        var inputCantidad = document.getElementById("form_quantity");        
        var selectCategoria = document.getElementById("form_selection");
        var boton = document.getElementById("boton_resumen");
        var valorName;
        var valorLastName;
        var valorEmail;
        var valorCantidad;
        var valorCategoria;

   
        boton.addEventListener("click", function() {
          valorName = inputName.value; // Guarda el valor del input en la variable
          valorLastName = inputLastName.value;
          valorEmail = inputEmail.value;
          valorCantidad = inputCantidad.value;
          valorCategoria = selectCategoria.value;
          console.log(valorName, valorLastName, valorEmail, valorCantidad, valorCategoria);

var valorCantidadXCategoria;
  
  if (valorCategoria === "1"){
    valorCantidadXCategoria = valorCantidad * 40;

    } else if(valorCategoria ==="2"){
      valorCantidadXCategoria = valorCantidad* 100;

    } else{
      valorCantidadXCategoria = valorCantidad * 170;

    }


    
          mensajeJS.textContent = "Total a pagar $ " + valorCantidadXCategoria;
    

        });


        var boton_borrar = document.getElementById("boton_borrar");

        boton_borrar.addEventListener("click", function() {
          inputName.value = "";
          inputLastName.value = "";
          inputEmail.value = "";
          inputCantidad.value = "";
          selectCategoria.value = "";
          mensajeJS.textContent = "Total a pagar $ ";
        });