// Navbar Toggle (Mobile)
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Active link highlighting on click
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// Detect OS and redirect to appropriate store
const downloadBtn = document.getElementById('downloadBtn');

const ANDROID_URL = 'https://play.google.com/store/apps/details?id=com.neuer.fielhin';
const IOS_URL = 'https://apps.apple.com/us/app/fel7in/id6480135409';

downloadBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Check for iOS
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        window.location.href = IOS_URL;
    }
    // Check for Android
    else if (/android/i.test(userAgent)) {
        window.location.href = ANDROID_URL;
    }
    // Default fallback (show both or go to Android)
    else {
        // On desktop, you can choose to show a modal or redirect to one
        // Here we default to Android Play Store
        window.location.href = ANDROID_URL;
    }
});


// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});