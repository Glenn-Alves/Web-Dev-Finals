(function () {

	'use strict'

	// Initialize AOS (Animate On Scroll) library with specified settings
	AOS.init({
		duration: 800, // Animation duration in milliseconds
		easing: 'slide', // Animation easing type
		once: true // Whether animation should happen only once
	});

	// Function to handle the preloader
	var preloader = function() {
		var loader = document.querySelector('.loader'); // Select the loader element
		var overlay = document.getElementById('overlayer'); // Select the overlay element

		// Function to gradually fade out an element
		function fadeOut(el) {
			el.style.opacity = 1; // Set initial opacity to 1
			(function fade() {
				if ((el.style.opacity -= .1) < 0) { // Reduce opacity by 0.1
					el.style.display = "none"; // Hide element when opacity is below 0
				} else {
					requestAnimationFrame(fade); // Continue fading
				}
			})();
		};

		// Fade out the loader and overlay after 200 milliseconds
		setTimeout(function() {
			fadeOut(loader);
			fadeOut(overlay);
		}, 200);
	};
	preloader();
	
	// Function to initialize the tiny-slider
	var tinyslider = function() {
		var slider = document.querySelectorAll('.features-slider'); // Select all feature sliders
		var postSlider = document.querySelectorAll('.post-slider'); // Select all post sliders
		var testimonialSlider = document.querySelectorAll('.testimonial-slider'); // Select all testimonial sliders
		
		// Initialize the features slider if it exists
		if (slider.length > 0) {
			var tnsSlider = tns({
				container: '.features-slider',
				mode: 'carousel',
				speed: 700,
				items: 3,
				gutter: 30,
				loop: false,
				controlsPosition: 'bottom',
				nav: false,
				autoplay: true,
				autoplayButtonOutput: false,
				controlsContainer: '#features-slider-nav',
				responsive: {
					0: { items: 1 },
					700: { items: 1 },
					900: { items: 2 },
					1000: { items: 3 }
				}
			});
		}

		// Initialize the post slider if it exists
		if (postSlider.length > 0) {
			var tnsPostSlider = tns({
				container: '.post-slider',
				mode: 'carousel',
				speed: 700,
				items: 3,
				gutter: 30,
				loop: true,
				edgePadding: 10,
				controlsPosition: 'bottom',
				navPosition: 'bottom',
				nav: false,
				autoplay: true,
				autoplayButtonOutput: false,
				controlsContainer: '#post-slider-nav',
				responsive: {
					0: { items: 1 },
					700: { items: 2 },
					900: { items: 2 },
					1000: { items: 3 }
				}
			});
		}

		// Initialize the testimonial slider if it exists
		if (testimonialSlider.length > 0) {
			var tnsTestimonialSlider = tns({
				container: '.testimonial-slider',
				mode: 'carousel',
				speed: 700,
				items: 3,
				gutter: 30,
				loop: true,
				edgePadding: 10,
				controlsPosition: 'bottom',
				navPosition: 'bottom',
				nav: false,
				autoplay: true,
				autoplayButtonOutput: false,
				controlsContainer: '#testimonial-slider-nav',
				responsive: {
					0: { items: 1 },
					700: { items: 2 },
					900: { items: 2 },
					1000: { items: 3 }
				}
			});
		}

		
	}
	tinyslider();

	// Initialize GLightbox for lightbox functionality
	var lightboxVideo = GLightbox({
		selector: '.glightbox'
	});

	// Event listeners for donation amount selection
	var jsAmount = document.querySelectorAll('.js-amount'); // Select all elements with class 'js-amount'
	var inputField = document.querySelector("[name=donate-value]"); // Select the donation input field

	// Add click event listener to each donation amount element
	Array.from(jsAmount).forEach(link => {
		link.addEventListener('click', function(event) {
			inputField.value = this.dataset.value; // Set input field value to the clicked amount
		});
	});

})()
