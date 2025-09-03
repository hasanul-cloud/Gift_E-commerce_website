    document.getElementById('year').textContent = new Date().getFullYear();

    let btnMenu = document.querySelector('.btnmenu');
    let menuMobile = document.getElementById('menu-mobile');
    btnMenu.addEventListener('click', ()=>{
    menuMobile.classList.toggle('max-sm:left-[25%]');
});