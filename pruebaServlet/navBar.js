const menu = document.querySelector('.menuDesplegable');
const abrirMenu = document.getElementById('menuAbrir');
const cerrarMenu = document.getElementById('menuCerrar');
const body = document.querySelector('body');


let menuAbierto = false;
abrirMenu.addEventListener('click', e=>{
    menuAbierto = true;
    menu.classList.add('menuDesplegado');
    body.style.overflowY="hidden";
    body.addEventListener('click', e=>{
        if (e.clientX < body.clientWidth - menu.clientWidth && menuAbierto == true){
            menu.classList.remove('menuDesplegado');
        }
        
    });
});

cerrarMenu.addEventListener('click', e=>{
    menu.classList.remove('menuDesplegado');
    body.style.overflowY="auto";
    menuAbierto = false;
});
