let button = document.querySelector('.button-add-menu')

button.addEventListener('click' , ()=>{
   document.querySelector('.menu-navbar').classList.toggle('activo-navbar')
    button.classList.toggle('activo-line')
})


let lastOne = document.querySelectorAll('.last-one')

let myObserve = new IntersectionObserver(entries =>{

    entries.forEach(entriy =>{
        if(entriy.isIntersecting) {
            entriy.target.classList.add("activo")
        }

        else {
            entriy.target.classList.remove("activo")
        }
    })
})

lastOne.forEach(lasts =>{
    myObserve.observe(lasts)
})

let hidden = document.querySelector('.hidden')

let hiddenObserver = new IntersectionObserver(h_entries =>{
    h_entries.forEach(h_entry =>{
     if(h_entry.isIntersecting){
        h_entry.target.classList.add('h_activo')
     }

     else {
        h_entry.target.classList.remove('h_activo')
     }
    })
})

hiddenObserver.observe(hidden)