const abrir = document.getElementById('menuAbrir');
const cerrar = document.getElementById('menuCerrar');
const menu = document.querySelector('.menuCont');

let coords = document.querySelector('.showMenu');

let lala = menu.getBoundingClientRect();

abrir.addEventListener('click', e =>{
    menu.className="showMenu";
    document.body.onclick = function (o){
        console.log(o.clientX);
    }

    cerrar.addEventListener('click', e =>{
        menu.className="menuCont";
    });
 
});



