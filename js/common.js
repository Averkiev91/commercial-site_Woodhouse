document.addEventListener('DOMContentLoaded', function() {
// Menu
	const toggleMenu = document.querySelector('.menu-toggle')
	const topMenu = document.querySelector('.top-menu')

	toggleMenu.addEventListener('click', () => {
		topMenu.classList.toggle('top-menu_active')
		toggleMenu.classList.toggle('menu-toggle_active')
	})
	document.addEventListener('click', (e) => {
		if (e.target.closest('.menu-container')) return
		toggleMenu.classList.remove('menu-toggle_active')
		topMenu.classList.remove('top-menu_active')
	})

//Swiper Sliders

	const homeSlider = new Swiper('.home-slider', {
		speed: 800,
		effect: 'fade',
		ceneredSlides: true,
	})

})