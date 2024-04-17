const fotos = document.querySelectorAll(".item");
const body = document.querySelector("body");

let cont = 0;
let touchstartX = 0
let touchendX = 0

fotos.forEach(foto =>{
    foto.addEventListener('click', e =>{
        foto.classList.toggle("verFoto");
        quitarScroll(); 
    });

    
        foto.addEventListener('touchstart', e => {
            touchstartX = e.changedTouches[0].screenX
        });
          
        foto.addEventListener('touchend', e => {
            touchendX = e.changedTouches[0].screenX
            checkDirection();
        });
    
    
   
});

function quitarScroll(){
    if(cont %2==0){
        body.style.overflowY="hidden";
    }else{
        body.style.overflowY="auto";
    }
    cont++;
}

function checkDirection() {
    if (touchendX < touchstartX){
        for(let i = 0; i < fotos.length;i++){
            if(fotos[i].classList.contains("verFoto") && i != fotos.length-1){
                fotos[i].classList.remove("verFoto");
                fotos[i+1].classList.add("verFoto");
                break;
            }
        }
    }
    if (touchendX > touchstartX){
        for(let i = 0; i < fotos.length;i++){
            if(fotos[i].classList.contains("verFoto") && i != 0){
                fotos[i].classList.remove("verFoto");
                fotos[i-1].classList.add("verFoto");
                break;
            }
        }
  }
}
    


