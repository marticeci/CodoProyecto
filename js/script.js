
document.addEventListener("DOMContentLoaded", function() {


let inputName = document.getElementById("form_name");
let inputLastName = document.getElementById("form_last_name");
let inputEmail = document.getElementById("form_email");
let inputCantidad = document.getElementById("form_quantity");
let selectCategoria = document.getElementById("form_selection");
let botonResumen = document.getElementById("boton_resumen");
let botonBorrar = document.getElementById("boton_borrar");
let valorName;
let valorLastName;
let valorEmail;
let valorCantidad;
let valorCategoria;
let validInputName;
let validInputLastName;
let validInputEmail;
let validInputCantidad;



botonResumen.addEventListener("click", function(event) {
        // Realizar validaciones aquí
        if (inputName.checkValidity() === false) {
            document.getElementById("error_form_name").textContent = "Nombre inválido";

            // Mostrar mensaje de error para el campo Nombre
            // Por ejemplo: mensajeErrorName.textContent = "Nombre inválido";
            return;
        }
        if (inputLastName.checkValidity() === false) {
            document.getElementById("error_form_last_name").textContent = "Apellido inválido";
            // Mostrar mensaje de error para el campo Apellido
            return;
        }
        if (inputEmail.checkValidity() === false) {
            document.getElementById("error_form_email").textContent = "Correo inválido";
            // Mostrar mensaje de error para el campo Correo
            return;
        }
        if (inputCantidad.checkValidity() === false) {
document.getElementById("error_form_form_quantity").textContent = "Correo inválido";
            // Mostrar mensaje de error para el campo Cantidad
            return;
        }
    
        // Si todas las validaciones son exitosas, realizar cálculos y mostrar el resultado
        event.preventDefault();
    
        valorName = inputName.value;
        valorLastName = inputLastName.value;
        valorEmail = inputEmail.value;
        valorCantidad = inputCantidad.value;
        valorCategoria = selectCategoria.value;
    
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
    






    botonBorrar.addEventListener("click", function() {
        inputName.value = "";
        inputLastName.value = "";
        inputEmail.value = "";
            inputCantidad.value = "";
            selectCategoria.value = "";
            mensajeJS.textContent = "Total a pagar $ ";
        });

    });