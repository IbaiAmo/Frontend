const peliculas = document.querySelectorAll('.pelicula');
const flechaDerecha = document.getElementById('flechaDerecha');
const flechaIzquierda = document.getElementById('flechaIzquierda');
const carrusel = document.querySelector('carrousel');

flechaDerecha.addEventListener('click', e =>{
    pasarPeliculaDerecha();
});

flechaIzquierda.addEventListener('click', e =>{
    pasarPeliculaIzquierda();
});

let xStart = 0;
let xEnd = 0;



function pasarPeliculaDerecha(){
    for(let i = 0; i < peliculas.length; i++){
        if(peliculas[i].classList.contains('active') && i != peliculas.length-1){
            peliculas[i].classList.remove('active');
            peliculas[i].classList.add('filmShownAfter');
            peliculas[i+1].classList.add('active');
            break;
        }
    }
}

const carrouselTemp = setInterval(pasarPeliculaDerecha, 7000);

function pasarPeliculaIzquierda(){
    for(let i = 0; i < peliculas.length; i++){
        if(peliculas[i].classList.contains('active') && i != 0){
            peliculas[i].classList.remove('active');
            peliculas[i-1].classList.remove('filmShownAfter');
            peliculas[i-1].classList.add('active');
            break;
        }
    }
}