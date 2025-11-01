let button = document.querySelector('.button-add-menu')

button.addEventListener('click' , ()=>{
   document.querySelector('.menu-navbar').classList.toggle('activo-navbar')
    button.classList.toggle('activo-line')
})