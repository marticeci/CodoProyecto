
//variable: espacio reservado de la memoria. Para guardar datos y resultados en la memoria (de la pc durante dura la página)

//VARIABLES. Dos formas: let y var   siempre let (porque es scope local)
//let?


/*

  let valorMaquina="piedra"
  let valorPersona=""

contador=0;
contadorPersona=0
contadorMaquina=0

while (contador<3){

  while (true) {
    valorPersona = prompt("¿Piedra, papel y tijera?");
   valorPersona= valorPersona.toLowerCase();   
  
    if ((valorPersona) === "piedra") {
      contador++;
      break; // Sal del bucle 
    } else if (valorPersona === "papel") {
      contadorPersona++
      contador++;
      break; // Sal del bucle 
    } else if (valorPersona === "tijera") {
        contadorMaquina++
        contador++;
        break; // Sal del bucle 
    } else {
      alert("El valor ingresado no coincide con ninguno de los tres posibles valores. Inténtalo de nuevo.");
    }
  }  
}


    if(contadorMaquina>contadorPersona){
        alert("Ganó la máquina");}
    else if (contadorMaquina<contadorPersona){
        alert("Ganaste")}
    else{
        alert("Empataron")}


        function saludarConNombre(nombre){
            console.log("hola", nombre);
          }

          const duplicar=(a)=>a*2;

          console.log(duplicar(5))

*/


        var inputElement = document.getElementById("form_name");
        var boton = document.getElementById("boton_resumen");

      
        var valorName;
        var resultadoElement = document.getElementById("resultado");
   
        boton.addEventListener("click", function() {
          valorName = inputElement.value; // Guarda el valor del input en la variable
          resultadoElement.textContent="El valor del input es: " + valorName;
        });
      
   