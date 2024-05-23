const menuAbrir = document.getElementById('menuAbrir');
const menuCerrar = document.getElementById('menuCerrar');
const sideMenu = document.querySelector('.sideMenu');

menuAbrir.addEventListener('click', e =>{
    sideMenu.classList.add('showMenu');
});