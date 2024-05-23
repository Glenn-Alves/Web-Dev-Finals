//It is a good thing that my fam paid for chatgpt premium HAHAHA, less hassle.
(function () {
    'use strict';

    // Duration of the animation in milliseconds,  2 seconds!!!
    const animationDuration = 2000;

    // Calculate the duration of each animation frame for a target frame rate of 60 frames per second
    const frameDuration = 1000 / 60;

    // Calculate the total number of frames needed to complete the animation
    const totalFrames = Math.round(animationDuration / frameDuration);

    // An ease-out function that slows the animation as it progresses
    const easeOutQuad = t => t * (2 - t);

    const numberWithCommas = n => { // this ensures that the number will convert it into string why is that? because comma in a number is not allowed.
        return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');	
    };

    // Animation function that increments numbers inside an element
    const animateCountUp = el => {
        let frame = 0;
        const countTo = parseInt(el.innerHTML, 10);

        // Start the animation running at 60 frames per second
        const counter = setInterval(() => {
            frame++;

            // Calculate progress between 0 and 1 and apply easing function
            const progress = easeOutQuad(frame / totalFrames);

            // Calculate the current count based on progress
            const currentCount = Math.round(countTo * progress);

            // Update the element if the count has changed
            if (parseInt(el.innerHTML, 10) !== currentCount) {
                el.innerHTML = numberWithCommas(currentCount);
            }

            // Stop the animation if we've reached the last frame
            if (frame === totalFrames) {
                clearInterval(counter);
            }
        }, frameDuration);
    };

    // Run the animation on all elements with a class of 'countup' 
    const runAnimations = () => {
        const countupEls = document.querySelectorAll('.countup');
        countupEls.forEach(animateCountUp);
    };

    // Initialization for 'In View' functionality
    let elements;
    let windowHeight;

    function init() {
        elements = document.querySelectorAll('.section-counter');
        windowHeight = window.innerHeight;
    }

    // Check if elements are in view and trigger animation
    function checkPosition() {
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            const positionFromTop = elements[i].getBoundingClientRect().top;

            if (positionFromTop - windowHeight <= 0) {
                if (!element.classList.contains('viewed')) {
                    element.classList.add('viewed');
                    runAnimations();
                } else {
                    // Animation has already been triggered for this element
                }
            }
        }
    }

    // Add event listeners for scroll and resize events
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);

    // Initialize on page load
    init();
    checkPosition();
})();


