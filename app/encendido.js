
let encendido = false;
let status = "";


if (encendido){
    status = "encender";
    console.log(status);
}
status = "apagar";
console.log(status);

/*const boton = document.getElementById("encendido").addEventListener("click", encender);
    function encender() {
  let encendido = false;
let status = "";
    if (encendido){
        status = "encender";
        console.log(status);
    }
    status = "apagar";
    console.log(status);
}
document.getElementById("neutro");
frenomano = document.getElementById("frenoM")
 if ((neut = true)&&(frenomano = true)) { 
     this.encendido == true;
     
 } else
 encendido = false;
 if (encendido = true){

 }*/

 
//var cambios = [neutro, primera, segunda, tercera, cuarta, quinta, sexta, retro];}//

var encendido = false;
//evento del boton
$("#btn_encendido").click(function() {
  encendido = true;
});
//funcion para validar si ya se hizo click o no
function validar(){
if (encendido) {
  alert("clicked");
} else {
  alert("no´t clicked");
}
//reinicio la variable
ejecutar = false;
}
