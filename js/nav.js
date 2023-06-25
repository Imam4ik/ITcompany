const navNode = document.querySelector('.nav')
const burger = document.querySelector('.nav__content-burger')


const navLogoText = document.querySelector('.nav-logo__text')
const navListItems = document.querySelectorAll('.nav-list__item')
const blueCircle = document.querySelectorAll('.blue-circle')
const logoNodes = document.querySelectorAll('.logo__vec')
const navMenu = document.querySelector('.nav__menu')
const navMenuLinks = document.querySelectorAll('.nav__menu-link')



let navClass = navNode.classList
console.log(navClass)

navNode.addEventListener('click', () => {
	navClass.toggle('active')
	
	navLogoText.classList.toggle('active')

	navListItems.forEach(el => {
		el.classList.toggle('active')
	})

	blueCircle.forEach(el => {
		el.classList.toggle('active')
	})
	
});


burger.addEventListener('click', () => {
	navNode.classList.toggle('open')
	
	logoNodes.forEach(el =>{
		el.classList.toggle('open')
	})

	navLogoText.classList.toggle('open')

	navMenu.classList.toggle('open')

	navListItems.forEach(el => {
		el.classList.toggle('open')
	})

	navMenuLinks.forEach(el => {
		el.classList.toggle('open')
	})
})








