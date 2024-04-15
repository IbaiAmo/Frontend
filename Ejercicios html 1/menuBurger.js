const abrir = document.getElementById('menuAbrir');
const cerrar = document.getElementById('menuCerrar');
const menu = document.querySelector('.menuCont');

let coords = document.querySelector('.showMenu');

abrir.addEventListener('click', e =>{
    menu.className="showMenu";
    cerrar.addEventListener('click', e =>{
        menu.className="menuCont";
    });
 
});



