document.addEventListener("DOMContentLoaded", function() {
    const emailInput = document.querySelector('.form__input');
    const errorNotice = document.querySelector('.error__notice');
    const submitButton = document.querySelector('.form__button');

    submitButton.addEventListener('click', function(event) {
        event.preventDefault();
        const email = emailInput.value;

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            errorNotice.classList.add('show');
        } else {
            errorNotice.classList.remove('show');
            console.log("Email submitted:", email);
        }
    });

    emailInput.addEventListener('input', function() {
        errorNotice.classList.remove('show');
    });
});