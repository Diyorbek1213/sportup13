"use strict"

/* АНИМАЦИЯ ПРИ КЛИКЕ ИЛИ ПРИ НАВЕДЕНИИ МЫШИ КОРЗИНКИ И ВХОДА В ШАПКЕ */

if (window.innerWidth > 920) {
	const headerCart = document.querySelector('.header__cart');
	const cartBalance = document.querySelector('.cart__balance');
	const cartNum = document.querySelector('.cart__balance__num');
	if (headerCart && cartNum) {
		headerCart.addEventListener("mouseover", function (e) {
			cartNum.style.color = "#2BB9A9";
			cartNum.style.transition = "all 0.3s ease 0s";
			cartBalance.style.color = "#2BB9A9";
			cartBalance.style.transition = "all 0.3s ease 0s";
			headerCart.addEventListener('mouseleave', function (e) {
				cartNum.style.color = "#2BB9A9";
				cartBalance.style.color = "#24a497";
			})
		})
	}
	const loginText = document.querySelector('.login__link');
	const loginLogo = document.querySelector('.login__logo');
	if (loginText && loginLogo) {
		loginText.addEventListener("mouseover", function (e) {
			loginLogo.classList.add('_active');
			loginText.addEventListener("mouseleave", function (e) {
				loginLogo.classList.remove('_active');
			})
		})
	}

}

/* АНИМАЦИЯ КОРЗИНКИ И ВХОДА ДЛЯ УСТРОЙСТ МЕНЬШЕ 920PX */

if (window.innerWidth < 920) {
	const loginLink = document.querySelector('.login__link');
	const logoImg = document.querySelector('.login__img');
	if (loginLink && logoImg) {
		loginLink.onclick = () => {
			logoImg.classList.add('mob_active');
		}
	}
	const headerCart = document.querySelector('.header__cart');
	const cartBalance = document.querySelector('.cart__balance');
	const cartNumber = document.querySelector('.cart__number');
	if (headerCart && cartBalance && cartNumber) {
		headerCart.onclick = () => {
			cartBalance.classList.add('mob_active');
			cartNumber.classList.add('mob_active');
		}
	}
}

/* СКРИПТ ДЛЯ ОЧИСТКИ ПРИ ВВОДЕ В INPUT */

const mainInput = document.querySelector('.main__form__input');
const mainClear = document.querySelector('.main__input__clear');
if (mainInput && mainClear) {
	mainInput.addEventListener('input', (e) => {
		if (e.target.value !== "") {
			mainClear.classList.add('_active');
		} else {
			mainClear.classList.remove('_active');
		}
	})
	mainClear.onclick = () => {
		mainClear.classList.add('_succes');
		mainInput.value = '';
		setTimeout(() => {
			mainClear.classList.remove('_active');
			mainClear.classList.remove('_succes');
		}, "500")

		mainInput.focus();
	}
}


/*АНИМАЦИЯ ПРИ НАВЕДЕНИИ МЫЩЬЮ В МЕНЮ*/

const mainMenu = document.querySelector('.main__menu__images');
const menuContent = document.querySelector('.main__menu__bar');
// const menuBorder = document.querySelector('.main__menu__block');
const header = document.querySelector('header');
const mainContainer = document.querySelector('.main__container');
const menuBack = document.querySelector('.main__menu__block__back');
const footer = document.querySelector('.footer__container');

if (mainMenu && menuContent && header && mainContainer) {
	mainMenu.addEventListener('click', (e) => {
		menuContent.classList.add('_active');
		header.classList.add('_active');
		mainContainer.classList.add('_active');
		footer.classList.add('_active');
		// menuBorder.addEventListener('mouseenter', (e) => {
		// 	menuContent.classList.remove('_active');
		// 	header.classList.remove('_active');
		// 	mainContainer.classList.remove('_active');
		// })
		menuBack.addEventListener('click', () => {
			menuBack.classList.add('_active');
			setTimeout(() => {
				menuContent.classList.remove('_active');
				header.classList.remove('_active');
				mainContainer.classList.remove('_active');
				footer.classList.remove('_active');
			}, "500")

		})
		menuBack.classList.remove('_active');
	})
}

/* АНИМАЦИЯ ПРИ НАВЕДЕНИИ МЫЩЬЮ НА ЭЛЕМЕНТ ... */


var acc = document.getElementsByClassName("menu__item__link__dots");
var i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("mouseover", function () {
		this.classList.add("active");
		var panel = this.previousElementSibling;
		if (!panel.style.maxHeight) {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	});
	acc[i].addEventListener("click", function () {
		var panel = this.previousElementSibling;
		setTimeout(() => {
			this.classList.remove("active");
		}, "300")
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		}
	})
}




// const itemImg = document.querySelectorAll('.menu__item__image');
// const itemTitle = document.querySelectorAll('.menu__item__title');
// const menuLink = document.querySelectorAll('.menu__item__link');


// if (itemImg && itemTitle && menuLink) {
// 	for (let i = 0; i < itemImg.length; i++) {
// 		itemTitle[i].addEventListener("mouseover", () => {
// 			itemImg[i].classList.add('_active');
// 			itemTitle[i].addEventListener("mouseleave", () => {
// 				itemImg[i].classList.remove('_active');
// 			})
// 		})
// 		itemImg[i].addEventListener("mouseover", () => {
// 			itemTitle[i].classList.add('_active')
// 			itemImg[i].addEventListener("mouseleave", () => {
// 				itemTitle[i].classList.remove('_active');
// 			})
// 		})
// 	}
// }

const itemTitle1 = document.querySelector('.menu__item__title_1');
const itemLink1 = document.querySelectorAll('.menu__item__link_1');
const itemList1 = document.querySelector('.menu__item__list_1');
if (itemLink1 && itemLink1) {
	for (let i = 0; i < itemLink1.length; i++) {
		itemLink1[i].addEventListener("mouseover", () => {
			itemTitle1.classList.add('_active');
			itemList1.addEventListener("mouseleave", () => {
				itemTitle1.classList.remove('_active');
			})
		})
	}
}

const itemTitle2 = document.querySelector('.menu__item__title_2');
const itemLink2 = document.querySelectorAll('.menu__item__link_2');
const itemList2 = document.querySelector('.menu__item__list_2');
if (itemLink2 && itemLink2) {
	for (let i = 0; i < itemLink2.length; i++) {
		itemLink2[i].addEventListener("mouseover", () => {
			itemTitle2.classList.add('_active');
			itemList2.addEventListener("mouseleave", () => {
				itemTitle2.classList.remove('_active');
			})
		})
	}
}

const itemTitle3 = document.querySelector('.menu__item__title_3');
const itemLink3 = document.querySelectorAll('.menu__item__link_3');
const itemList3 = document.querySelector('.menu__item__list_3');
if (itemLink3 && itemLink3) {
	for (let i = 0; i < itemLink3.length; i++) {
		itemLink3[i].addEventListener("mouseover", () => {
			itemTitle3.classList.add('_active');
			itemList3.addEventListener("mouseleave", () => {
				itemTitle3.classList.remove('_active');
			})
		})
	}
}

const itemTitle4 = document.querySelector('.menu__item__title_4');
const itemLink4 = document.querySelectorAll('.menu__item__link_4');
const itemList4 = document.querySelector('.menu__item__list_4');
if (itemLink4 && itemLink4) {
	for (let i = 0; i < itemLink4.length; i++) {
		itemLink4[i].addEventListener("mouseover", () => {
			itemTitle4.classList.add('_active');
			itemList4.addEventListener("mouseleave", () => {
				itemTitle4.classList.remove('_active');
			})
		})
	}
}

const itemTitle5 = document.querySelector('.menu__item__title_5');
const itemLink5 = document.querySelectorAll('.menu__item__link_5');
const itemList5 = document.querySelector('.menu__item__list_5');
if (itemLink5 && itemLink5) {
	for (let i = 0; i < itemLink5.length; i++) {
		itemLink5[i].addEventListener("mouseover", () => {
			itemTitle5.classList.add('_active');
			itemList5.addEventListener("mouseleave", () => {
				itemTitle5.classList.remove('_active');
			})
		})
	}
}

const itemTitle6 = document.querySelector('.menu__item__title_6');
const itemLink6 = document.querySelectorAll('.menu__item__link_6');
const itemList6 = document.querySelector('.menu__item__list_6');
if (itemLink6 && itemLink6) {
	for (let i = 0; i < itemLink6.length; i++) {
		itemLink6[i].addEventListener("mouseover", () => {
			itemTitle6.classList.add('_active');
			itemList6.addEventListener("mouseleave", () => {
				itemTitle6.classList.remove('_active');
			})
		})
	}
}

const itemTitle7 = document.querySelector('.menu__item__title_7');
const itemLink7 = document.querySelectorAll('.menu__item__link_7');
const itemList7 = document.querySelector('.menu__item__list_7');
if (itemLink7 && itemLink7) {
	for (let i = 0; i < itemLink7.length; i++) {
		itemLink7[i].addEventListener("mouseover", () => {
			itemTitle7.classList.add('_active');
			itemList7.addEventListener("mouseleave", () => {
				itemTitle7.classList.remove('_active');
			})
		})
	}
}

const itemTitle8 = document.querySelector('.menu__item__title_8');
const itemLink8 = document.querySelectorAll('.menu__item__link_8');
const itemList8 = document.querySelector('.menu__item__list_8');
if (itemLink8 && itemLink8) {
	for (let i = 0; i < itemLink8.length; i++) {
		itemLink8[i].addEventListener("mouseover", () => {
			itemTitle8.classList.add('_active');
			itemList8.addEventListener("mouseleave", () => {
				itemTitle8.classList.remove('_active');
			})
		})
	}
}

const itemTitle9 = document.querySelector('.menu__item__title_9');
const itemLink9 = document.querySelectorAll('.menu__item__link_9');
const itemList9 = document.querySelector('.menu__item__list_9');
if (itemLink9 && itemLink9) {
	for (let i = 0; i < itemLink9.length; i++) {
		itemLink9[i].addEventListener("mouseover", () => {
			itemTitle9.classList.add('_active');
			itemList9.addEventListener("mouseleave", () => {
				itemTitle9.classList.remove('_active');
			})
		})
	}
}

// const itemLink = document.querySelectorAll('.menu__item__link');
// const itemTitl = document.querySelectorAll('.menu__item__title');
// for (let i = 0; i < itemLink.length; i++) {
// 	itemLink[i].addEventListener("mouseover", () => {
// 		if (+i < 13) {
// 			alert('hi1');
// 		}
// 		if (13 < +i && 20 < +i) {
// 			alert('hi2');
// 		}
// 	})
// }


const scrollBody = document.querySelector('.main__menu__content');
const scrollDown = document.querySelector('.menu__scroll');
const scrollUp = document.querySelector('.menu__scroll__top');
if (scrollBody && scrollDown && scrollUp) {

	scrollBody.onscroll = function () { scrollFunction() };

	function scrollFunction() {
		if (scrollBody.scrollTop > 250 || document.documentElement.scrollTop > 250) {
			scrollUp.style.display = "block";
			scrollDown.style.display = "none";
		} else {
			scrollUp.style.display = "none";
			scrollDown.style.display = "block";
		}
	}


	scrollUp.addEventListener("click", () => {
		scrollBody.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	})
	scrollDown.addEventListener("click", () => {
		scrollBody.scrollTo({
			top: 2000,
			behavior: "smooth"
		});
	})
}

const mainContent = document.querySelector('.main__content');
const searchBlock = document.querySelector('.search__block');
const searchPrompt = document.querySelector('.main__search__prompt');
const mainSearch = document.querySelector('.main__search');
const footerItems = document.querySelectorAll('.footer__items');




searchBlock.addEventListener('mouseover', () => {
	mainSearch.classList.add('_active');
	mainInput.focus()
	mainInput.classList.remove('_active');
})

searchBlock.addEventListener('mouseleave', () => {
	mainSearch.classList.remove('_active');
	mainInput.classList.add('_active');

	if ((mainInput.value === "")) {
		searchPrompt.classList.remove('_active');
		for (let i = 0; i < footerItems.length; i++) {
			footerItems[i].classList.remove('active_');
			if (!(++i / 2 == 0)) {
				footerItems[i].classList.remove('_active');
			}
		}
	}
})

mainInput.onblur = function () {
	setTimeout(() => {
		searchPrompt.classList.remove('_active');
	}, "700")
	mainSearch.classList.remove('_active');
	for (let i = 0; i < footerItems.length; i++) {
		footerItems[i].classList.remove('active_');

		if (!(++i / 2 == 0)) {
			footerItems[i].classList.remove('_active');
		}
	}
}



mainInput.addEventListener('input', () => {
	searchPrompt.classList.add('_active');

	for (let i = 0; i < footerItems.length; i++) {
		footerItems[i].classList.add('active_');

		if (!(++i / 2 == 0)) {
			footerItems[i].classList.add('_active');
		}
	}
})


let searchPromptItem = document.querySelectorAll('.search__prompt__item');

for (let i = 0; i < searchPromptItem.length; i++) {
	searchPromptItem[i].addEventListener('click', () => {
		mainInput.value = searchPromptItem[i].textContent;
		searchPromptItem[i].classList.add('_active');
		setTimeout(() => {
			searchPromptItem[i].classList.remove('_active');
		}, "1000")
	})
}

mainSearch.addEventListener('click', () => {
	mainSearch.classList.add('_succes');
	setTimeout(() => {
		mainSearch.classList.remove('_succes');
	}, "500")
})


let footerSublink = document.querySelectorAll('.footer__item__sublink');
let footerSublinks = document.getElementById('itemSublinks');
let footerSublinks2 = document.getElementById('itemSublinks2');
let footerSublinks3 = document.getElementById('itemSublinks3');
let footerSublinks4 = document.getElementById('itemSublinks4');

// for (let i = 0; i < footerSublink.length; i++) {
// 	footerSublink[i].addEventListener('mouseover', () => {
// 		footerSublinks.firstElementChild.classList.remove('_active');
// 		footerSublinks2.firstElementChild.classList.remove('_active');
// 		footerSublinks3.firstElementChild.classList.remove('_active');
// 		footerSublinks4.firstElementChild.classList.remove('_active');
// 	})
// 	footerSublink[i].addEventListener('mouseleave', () => {
// 		footerSublinks.firstElementChild.classList.add('_active');
// 		footerSublinks2.firstElementChild.classList.add('_active');
// 		footerSublinks3.firstElementChild.classList.add('_active');
// 		footerSublinks4.firstElementChild.classList.add('_active');
// 	})
// }

const footerItem = document.querySelectorAll('.footer__item');
const footerLink = document.querySelectorAll('.footer__link__block');
for (let i = 0; i < footerLink.length; i++) {
	footerLink[i].addEventListener('mouseover', () => {
		footerLink[i].classList.add('_active');
	})
	footerItem[i].addEventListener('mouseleave', () => {
			footerLink[i].classList.remove('_active');
	})
}

const footerItemSublinks = document.querySelectorAll('.footer__item__sublinks');
// for (let i = 0; i < footerLink.length; i++) {
// 	footerLink[i].addEventListener('mouseover', (e) => {
// 		e.target.classList.add('_active');
// 	})
// 	footerItemSublinks[i].addEventListener("mouseleave", () => {
// 		setTimeout(() => {
// 			footerLink[i].classList.remove('_active');
// 		}, "200")
// 	})
// }



for (let i = 0; i < footerItems.length; i++) {
	footerItems[i].addEventListener('mouseover', (e) => {
		footerItemSublinks[i].classList.add('_active');
		footerLink[i].classList.add('_active');
	})
	footerItem[i].addEventListener('mouseleave', () => {
		footerItemSublinks[i].classList.remove('_active');	
			footerLink[i].classList.remove('_active');
	})
}

