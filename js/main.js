const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');
const tHeader = document.querySelector("#t-header");


let showMenu = false;
choiceHeader();

window.addEventListener('resize', choiceHeader);

function choiceHeader() {
	if (window.innerWidth > 768) {
		showMenu = false;
		tHeader.removeAttribute("hidden");
		menuNav.setAttribute("hidden", "hidden");
		menuBtn.setAttribute("hidden", "hidden");
		toggleMenu();
	} else {
		showMenu = true;
		tHeader.setAttribute("hidden", "hidden");
		menuNav.removeAttribute("hidden");
		menuBtn.removeAttribute("hidden");
		toggleMenu();
	}
}

menuBtn.addEventListener('click', toggleMenu);


function toggleMenu() {
	if (!showMenu) {
		hamburger.classList.add('open');
		nav.classList.add('open');
		menuNav.classList.add('open');
		menuBtn.classList.toggle("active");
		navItems.forEach(item => item.classList.add('open'));
		showMenu = true;
	} else {
		hamburger.classList.remove('open');
		nav.classList.remove('open');
		menuNav.classList.remove('open');
		navItems.forEach(item => item.classList.remove('open'));
		showMenu = false;
	}
}


