//Código para abrir el menu y cerrarlo.

const menuAbrir = document.getElementById('menuAbrir');
const menuCerrar = document.getElementById('menuCerrar');
const sideMenu = document.querySelector('.sideMenu');
const body = document.querySelector('body');


menuAbrir.addEventListener('click', e =>{
    sideMenu.classList.add('showMenu');

    //Cerrar menu clickando afuera.
    window.addEventListener('click', e =>{
        if(e.clientX < body.clientWidth - sideMenu.clientWidth){
            sideMenu.classList.remove('showMenu');  
        }
    });
});

menuCerrar.addEventListener('click', e =>{
    sideMenu.classList.remove('showMenu');
});