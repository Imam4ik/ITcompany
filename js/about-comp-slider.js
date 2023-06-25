new Swiper('.image-slider', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	

	
	breakpoints: {
		320: {
			slidesPerView: 1.25,
		},
		410: {
			slidesPerView: 1.5,
		},
		540: {
			slidesPerView: 2
		},
		1050: {
			slidesPerView: 2.5,
		},
		1200: {
			slidesPerView: 3,
		},
		1320: {
			slidesPerView: 3.5,
		},
		1480: {
			slidesPerView: 4,
		}
	},
})