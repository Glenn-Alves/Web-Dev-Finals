document.addEventListener('DOMContentLoaded', function() {
    // Find the donation form
    var donationForm = document.querySelector('.donation-form');

    // Find the counters
    var newCausesCounter = document.querySelector('.section-counter .counter:nth-child(1) .countup');
    var fundRaisedCounter = document.querySelector('.section-counter .counter:nth-child(2) .countup');
    var donorsCounter = document.getElementById('donorsCounter');
    var messageCounter = document.getElementById('messageCounter');

    // Listen for form submission event
    donationForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get the form inputs
        var nameInput = donationForm.querySelector('input[type="text"]');
        var emailInput = donationForm.querySelector('input[type="email"]');
        var messageInput = donationForm.querySelector('textarea');
        var amountInput = donationForm.querySelector('input[type="number"]');
        var selectedOption = donationForm.querySelector('select').value;

        // Validate name and email
        var name = nameInput.value.trim();
        var email = emailInput.value.trim();
        var message = messageInput.value.trim();
        var donationAmount = parseInt(amountInput.value);

        if (!name || !email || (selectedOption === 'php' && (!message || isNaN(donationAmount) || donationAmount <= 0))) {
            alert('Please fill out all fields.'); // Show warning message if any required field is empty or if donation amount is not valid
            return; // Exit early
        }

        // Validate email format
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.'); // Show warning message if email format is invalid
            return; // Exit early
        }

        // Update the counters only if a donation is made
        if (selectedOption === "php") {
            fundRaisedCounter.textContent = parseInt(fundRaisedCounter.textContent) + donationAmount;
            donorsCounter.textContent = parseInt(donorsCounter.textContent) + 1;
            messageCounter.textContent = parseInt(messageCounter.textContent) + 1;
        }


        // Reset the form fields
        donationForm.reset();
    });
});








