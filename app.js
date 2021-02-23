/*Activar menu hamburguesa*/

const menu = document.querySelector('.menu-items') /*Menu sin el is-active*/
const burgerbutton = document.querySelector('#burger-menu') /*Botton de hamburguesa*/

/*Esta funcion activa o desactiva el menu hamburguesa*/
function hideShow() {
    if (menu.classList.contains('is-active')) {
        menu.classList.remove('is-active')
    } else {
        menu.classList.add('is-active') /*Juntando el menu + is-active*/
    }
}


burgerbutton.addEventListener('click', hideShow) /*Escucha un evento sobre el menu hamburguesa*/ /*ejecuta la funcion hideshow para activar o desactivar el menu*/