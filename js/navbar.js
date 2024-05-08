(function(){

	'use strict'

	// Function to clone the navigation menu items and append them to the mobile menu body
	var siteMenuClone = function() {
		// Select all elements with class 'js-clone-nav'
		var jsCloneNavs = document.querySelectorAll('.js-clone-nav');
		// Select the mobile menu body element
		var siteMobileMenuBody = document.querySelector('.site-mobile-menu-body');

		// Iterate over each 'js-clone-nav' element
		jsCloneNavs.forEach(nav => {
			// Clone the current navigation element
			var navCloned = nav.cloneNode(true);
			// Set the class of the cloned element to 'site-nav-wrap'
			navCloned.setAttribute('class', 'site-nav-wrap');
			// Append the cloned navigation element to the mobile menu body
			siteMobileMenuBody.appendChild(navCloned);
		});

		// Timeout function to ensure that the DOM manipulation is complete
		setTimeout(function(){
			// Select all elements with class 'has-children' within the mobile menu
			var hasChildrens = document.querySelector('.site-mobile-menu').querySelectorAll('.has-children');

			var counter = 0;
			// Iterate over each element with class 'has-children'
			hasChildrens.forEach( hasChild => {
				// Select the anchor tag within the current 'has-children' element
				var refEl = hasChild.querySelector('a');

				// Create a new 'span' element
				var newElSpan = document.createElement('span');
				// Set the class of the new 'span' element to 'arrow-collapse collapsed'
				newElSpan.setAttribute('class', 'arrow-collapse collapsed');

				// Insert the new 'span' element before the anchor tag
				hasChild.insertBefore(newElSpan, refEl);

				// Select the newly created 'span' element
				var arrowCollapse = hasChild.querySelector('.arrow-collapse');
				// Set data attributes for Bootstrap's collapse functionality
				arrowCollapse.setAttribute('data-bs-toggle', 'collapse');
				arrowCollapse.setAttribute('data-bs-target', '#collapseItem' + counter);

				// Select the dropdown element within the current 'has-children' element
				var dropdown = hasChild.querySelector('.dropdown');
				// Set the class of the dropdown element to 'collapse'
				dropdown.setAttribute('class', 'collapse');
				// Set the id of the dropdown element
				dropdown.setAttribute('id', 'collapseItem' + counter);

				// Increment the counter for unique id generation
				counter++;
			});

		}, 1000);

		// Click event listener for toggling the mobile menu
		var menuToggle = document.querySelectorAll(".js-menu-toggle");
		var mTog;
		menuToggle.forEach(mtoggle => {
			mTog = mtoggle;
			// Add click event listener to each menu toggle element
			mtoggle.addEventListener("click", (e) => {
				// Toggle the 'offcanvas-menu' class on the body element
				if ( document.body.classList.contains('offcanvas-menu') ) {
					document.body.classList.remove('offcanvas-menu');
					mtoggle.classList.remove('active');
					mTog.classList.remove('active');
				} else {
					document.body.classList.add('offcanvas-menu');
					mtoggle.classList.add('active');
					mTog.classList.add('active');
				}
			});
		});

		// Function to close the mobile menu when clicking outside of it
		var specifiedElement = document.querySelector(".site-mobile-menu");
		var mt, mtoggleTemp;
		document.addEventListener('click', function(event) {
			// Check if the click event occurred inside the mobile menu
			var isClickInside = specifiedElement.contains(event.target);
			menuToggle.forEach(mtoggle => {
				mtoggleTemp = mtoggle
				// Check if the click event occurred inside a menu toggle element
				mt = mtoggle.contains(event.target);
			})

			// Close the mobile menu if the click event occurred outside of it
			if (!isClickInside && !mt) {
				if ( document.body.classList.contains('offcanvas-menu') ) {
					document.body.classList.remove('offcanvas-menu');
					mtoggleTemp.classList.remove('active');
				}
			}

		});

	}; 
	// Call the siteMenuClone function
	siteMenuClone();

})()
