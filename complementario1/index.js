/* 
estructura del for
for(desde; hasta; actualizacion){
  codigo a repetir
}
*/


/* 
estructura del while
while(condicion){
  codigo a repetir mientras las condicion sea verdadera
}
*/


/* 
estructura del do while
do{
  codigo a ejecutar por primera vez y cuando la condicion sea verdadera
}while(condicion);
*/



/* 
estructura del switch
switch(valor){
  case valor1:
    codigo a ejecutar en caso de que valor sea valor1
    break;
  
  case valor2:
    codigo a ejecutar en caso de que valor sea valor2
    break;
  default:
    codigo a ejecutar en caso de que valor no coincida con ninguno de los anteriores
    break;
}
*/

alert("Bienvenido a la unidad especial de los expedientes X");
let entrada = prompt("Identifiquese").toLowerCase();
while(entrada !="ESC"){
    switch (entrada) {
        case "Danna".toLowerCase():
        alert("Bienvenida agente Danna Scully");
        break;

    case "Fox".toLowerCase():
        alert("Bienvenido agente Fox Mulder");
        break;

    default:
        alert("Acceso denegado");
        break;
    }
    alert("No intente corromper información confidencial");
    entrada = prompt("Ingresar un nombre");
}

