const menuAbrir = document.getElementById('menuAbrir');
const menuCerrar = document.getElementById('menuCerrar');
const sideMenu = document.querySelector('.sideMenu');
const body = document.querySelector('body');


menuAbrir.addEventListener('click', e =>{
    sideMenu.classList.add('showMenu');

});

body.addEventListener('click', e =>{
    console.log(body.clientWidth - sideMenu.clientWidth)
    if(e.clientX < body.clientWidth - sideMenu.clientWidth){
        alert ("cerrado")
    }
});

menuCerrar.addEventListener('click', e =>{
    sideMenu.classList.remove('showMenu');
});