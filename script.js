// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Send form data to Formspree
    fetch(this.action, {
        method: this.method,
        headers: { 'Accept': 'application/json' },
        body: formData
    }).then(response => {
        if (response.ok) {
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        } else {
            alert('Oops! There was a problem submitting your form.');
        }
    }).catch(() => {
        alert('Oops! There was a problem submitting your form.');
    });
});

// Scroll Animation
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Add animation class to elements
document.querySelectorAll('.skill-card, .project-card').forEach(element => {
    element.classList.add('fade-in');
});

// Typing Animation for Hero Section
const heroText = document.querySelector('.hero-content h1');
const text = heroText.textContent;
heroText.textContent = '';

let i = 0;
function typeWriter() {
    if (i < text.length) {
        heroText.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

// Start typing animation when page loads
window.addEventListener('load', typeWriter);