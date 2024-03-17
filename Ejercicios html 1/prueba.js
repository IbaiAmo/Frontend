/*Esto es para cambiar el className de lo que sea al
hacer click sobre el checkbox:*/
const boton = document.getElementById("check");
const texto = document.querySelector(".tachado");

boton.addEventListener('change', e =>{
    if (boton.checked == true){
        texto.className="notachado";
    }else{
        texto.className="tachado";
    }
});

