'use strict';

const menuBtn =  document.getElementById('menu-toggle');

function hideMenu () {
    const nav =  document.querySelectorAll('.nav-item');
    nav.forEach(item => {
        item.classList.toggle('hide-menu');
    });
    
    console.log(nav)
}

menuBtn.addEventListener('click', hideMenu);