const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');
const tHeader = document.querySelector("#t-header");
const popup = document.querySelector("#popup-bm");

let showMenu = false;
choiceHeader();

window.addEventListener('resize', choiceHeader);

function choiceHeader() {
	if (window.innerWidth > 768) {
		showMenu = false;
		tHeader.removeAttribute("hidden");
		menuNav.setAttribute("hidden", "hidden");
		menuBtn.setAttribute("hidden", "hidden");
		popup.setAttribute("hidden", "hidden");
		toggleMenu();
	} else {
		showMenu = true;
		tHeader.setAttribute("hidden", "hidden");
		menuNav.removeAttribute("hidden");
		menuBtn.removeAttribute("hidden");
		popup.removeAttribute("hidden");
		toggleMenu();
	}
}

menuBtn.addEventListener('click', toggleMenu);


function toggleMenu() {
	let tumbler = menuBtn.getAttribute("aria-expanded");
	switch (tumbler) {
		case "true":
			menuNav.removeAttribute("hidden");
			break;
		case "false":
			menuNav.setAttribute("hidden", "hidden");
			break;
		case null:
			menuNav.setAttribute("hidden", "hidden");
			break;
		default:
			menuNav.setAttribute("hidden", "hidden");
			break;
	}

	if (!showMenu) {
		hamburger.classList.add('open');
		nav.classList.add('open');
		menuNav.classList.add('open');
		menuBtn.classList.toggle("active");
		menuBtn.setAttribute("aria-expanded", "false");
		navItems.forEach(item => item.classList.add('open'));
		popup.classList.toggle("open");
		popup.appendChild(menuNav);
		showMenu = true;
	} else {
		hamburger.classList.remove('open');
		nav.classList.remove('open');
		menuNav.classList.remove('open');
		menuBtn.setAttribute("aria-expanded", "true");
		navItems.forEach(item => item.classList.remove('open'));
		showMenu = false;
	}
}


