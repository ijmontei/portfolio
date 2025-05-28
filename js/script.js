document.addEventListener('DOMContentLoaded', () => {
    const welcomeHeadline = document.querySelector('#welcome h2');

    if (welcomeHeadline) {
        // Ensure the element is present before trying to animate it
        welcomeHeadline.style.opacity = '0'; // Set initial state via JS for fallback

        // Trigger the fade-in after a short delay to ensure CSS is applied
        setTimeout(() => {
            welcomeHeadline.style.opacity = '1';
        }, 100); // 100ms delay
    }
});
