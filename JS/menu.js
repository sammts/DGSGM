let btnMenu = document.getElementById('btnmenu');
let menu = document.getElementById('menu');
btnMenu.addEventListener('click', function(){
    'use strict';
    menu.classList.toggle('mostrar');
});

const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const slider = document.querySelector('.slider')

/*prev.addEventListener('click', () => {
    slider.scrollLeft -= 300
})

next.addEventListener('click', () => {
    slider.scrollLeft += 300
})*/

let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.querySelectorAll(".cta")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalC = document.querySelectorAll(".modal-container")[0];

/*abrir.addEventListener("click", function(e){
    e.preventDefault();
    modalC.style.opacity="1";
    modalC.style.visibility="visible";
    modal.classList.toggle("modal-close")
});

cerrar.addEventListener("click", function(){
    modal.classList.toggle("modal-close");
    setTimeout(function(){
        modalC.style.opacity="0";
        modalC.style.visibility="hidden";
    },900)
})*/

window.addEventListener("click", function(e){
    console.log(e.target)
})







//Barra de búsqueda

bars_search = document.getElementById("cnt-bars-search");
inputSearch = document.getElementById("inputSearch");
box_Search = document.getElementById("box-search");

//Mostrar opciones de buscador

document.getElementById("inputSearch").addEventListener("keyup", buscador_interno);

function buscador_interno () {
    filter = inputSearch.value.toUpperCase();
    li = box_Search.getElementsByTagName("li");

    for(i=0; i<li.length; i++)
    {
        a= li[i].getElementsByTagName("a")[0];
        textValue = a.textContent || a.innerText;

        if(textValue.toUpperCase().indexOf(filter) > -1)
        {
            li[i].style.display = "";
            box_Search.style.display = "block";

            if(inputSearch.value === ""){
                box_Search.style.display = "none"
            }

        }else {
            li[i].style.display = "none";
        }
    }
}
