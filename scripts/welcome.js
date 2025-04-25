// Sliding Hero Images
const heroSlides = document.querySelectorAll('.hero-slide');
let currentSlide = 0;

function changeSlide() {
    // Remove active class from current slide
    heroSlides[currentSlide].classList.remove('active');
    
    // Move to next slide
    currentSlide = (currentSlide + 1) % heroSlides.length;
    
    // Add active class to next slide
    heroSlides[currentSlide].classList.add('active');
}

// Change slide every 5 seconds
setInterval(changeSlide, 5000);

// Stagger Feature Card Animations
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach((card, index) => {
    card.style.setProperty('--delay', index + 1);
});