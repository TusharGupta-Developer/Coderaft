document.addEventListener('DOMContentLoaded', function () {
    // Smooth scroll for anchor links in the navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission alert
    const contactForm = document.querySelector('#contactForm');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        alert('Thank you for contacting us!');
    });
});
