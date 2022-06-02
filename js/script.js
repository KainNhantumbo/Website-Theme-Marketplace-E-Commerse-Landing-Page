'use strict';
const menuBtn = document.getElementById('menu-toggle');
const hideMenu = () => {
	const nav = document.querySelectorAll('.nav-item');
	nav.forEach((item) => {
		item.classList.toggle('hide-menu');
	});
};
menuBtn.addEventListener('click', hideMenu);
