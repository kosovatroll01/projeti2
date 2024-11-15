// Event Listener për Formën e Rezervimit
document.addEventListener("DOMContentLoaded", function() {
    const reservationForm = document.querySelector(".reservation-form form");

    if (reservationForm) {
        reservationForm.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Your table has been reserved! We look forward to your visit.");
            reservationForm.reset();
        });
    }

    // Event Listener për Formën e Kontaktit
    const contactForm = document.querySelector(".contact-form form");

    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Thank you for reaching out to us! We will respond as soon as possible.");
            contactForm.reset();
        });
    }
});
