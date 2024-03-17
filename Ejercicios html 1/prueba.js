/*Esto es para cambiar el className de lo que sea al
hacer click sobre el checkbox:*/
const boton = document.getElementById("check");
const texto = document.querySelector(".noshow");

boton.addEventListener('change', e =>{
    if (boton.checked == true){
        texto.className="showburger";
        
    }else{
        texto.className="noshow";
    }
});

