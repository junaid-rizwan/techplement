window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') {
            e.preventDefault();
            return;
        }
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        
        if (navMenu.classList.contains('active')) {
            toggleMobileMenu();
        }
    });
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});

const courseCards = document.querySelectorAll('.course-card');
courseCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
});

const testimonialCards = document.querySelectorAll('.testimonial-card');
testimonialCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;
});

document.querySelectorAll('.course-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const courseTitle = this.closest('.course-card').querySelector('.course-title').textContent;
        alert(`Thank you for your interest in "${courseTitle}"! Redirecting to enrollment page...`);
        
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
});

const logo = document.querySelector('.logo');
logo.addEventListener('mouseenter', function() {
    this.style.animation = 'pulse 0.6s ease-in-out';
});
logo.addEventListener('animationend', function() {
    this.style.animation = '';
});

const mobileMenu = document.querySelector('.mobile-menu');
const navMenu = document.querySelector('.nav-menu');
const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');

function toggleMobileMenu() {
    mobileMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
    mobileMenuOverlay.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
}

mobileMenu.addEventListener('click', toggleMobileMenu);

mobileMenuOverlay.addEventListener('click', toggleMobileMenu);

window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const rate = Math.min(scrolled * -0.2, 100);
    hero.style.transform = `translateY(${rate}px)`;
});

const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}

window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});