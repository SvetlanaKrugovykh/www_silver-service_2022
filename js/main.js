//#region pageContentNames
const pageContent = [
	{
		"page": "SILVER_SERVICE",
		"basePage": "index.html",
		"forHide": ["div[field='tn_text_1578322192366']",
			"[id ^= 'rec149442898']",
			"[id ^= 'rec149504840']",
			"[id ^= 'rec149521426']",
			".owl-stage-outer"
		],
		"keysForReDefine": [".t-feed__post-preloader__textwrapper"],
		"valuesForReDefine": ["font-size: 18px;"],
		"toAdd": [
			{
				"id": "imageIndex_1",
				"where": "[id ^= 'rec153154582']",
				"img": "images/backgrIndex.png",
				"href": "index.html"
			}
		]
	},
	{
		"page": "INTERNET",
		"basePage": "page8498574.html",
		"forHide": [
			".t396",
			"#rec150333633",
			"#rec150338650",
			"#rec150333603"
		],
		"keysForReDefine": [],
		"valuesForReDefine": [],
		"toAdd": [
			{
				"id": "imageIndex_2",
				"where": "#t-footer",
				"img": "images/backgrIndex.png",
				"href": "page8498574.html"
			}
		]
	},
	{
		"page": "TV",
		"basePage": "page8629852.html",
		"forHide": [
			".t396",
			"#rec153306226"
		],
		"keysForReDefine": [],
		"valuesForReDefine": [],
		"toAdd": [
			{
				"id": "imageIndex_3",
				"where": "#t-footer",
				"img": "images/backgrTV.png",
				"href": "page8629852.html"
			}
		]
	}
];
//#endregion

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
		launchPageRebuilding();
	}
}

//#region toggleMenu
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
//#endregion 


//#region rewriteForAdaptuve

//#region hidingElements
function hideDivs() {
	for (const page of pageContent) {
		if (document.baseURI.includes(page.basePage)) {
			for (let element of page.forHide) {
				try {
					let elements = document.querySelectorAll(element);
					for (let elem of elements) {
						if (elem != null) elem.setAttribute("style", "display: none");
					}
				} catch (error) { console.log(error); }
			}
			break;
		}
	}
}
//#endregion

//#region reDefineElements
function reDefineDivs() {

	for (const page of pageContent) {
		if (document.baseURI.includes(page.basePage)) {
			let i = 0;
			for (let element of page.keysForReDefine) {
				i++;
				try {
					let elements = document.querySelectorAll(element);
					for (let elem of elements) {
						if (elem != null) elem.setAttribute("style", page.valuesForReDefine[i - 1]);
					}
				} catch (error) { console.log(error); }
			}
			for (let element of page.toAdd) {
				let where = document.querySelector(element.where);
				if (where == null) continue;
				let img = document.createElement("img");
				let a = document.createElement("a");
				a.id = element.id;
				a.href = element.href;
				a.style.display = "flex";
				img.style.width = "100%";
				img.src = element.img;
				if (document.querySelector(`[id ^= '${element.id}']`) == null) {
					where.insertAdjacentElement("beforebegin", a);
					a.appendChild(img);
				}
			}
			break;
		}
	}
}
//#endregion


//#region calls
function launchPageRebuilding() {
	hideDivs();
	reDefineDivs();
}
//#endregion

