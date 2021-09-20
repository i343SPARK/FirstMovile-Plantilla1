const iconMenu = document.querySelector('#header-simbles'),
menu = document.querySelector('#menu');

iconMenu.addEventListener('click', (e) =>{
    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');

    const rutaActual = e.target.getAttribute('src');

    if(rutaActual == './assets/hamburguer-menu.svg'){
        e.target.setAttribute('src','./assets/hamburguer-menu.svg');
    }else{
        e.target.setAttribute('src','./assets/hamburguer-menu.svg');
    }
});