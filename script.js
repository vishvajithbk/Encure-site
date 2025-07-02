// ===== SMOOTH SCROLLING FOR NAVIGATION LINKS =====
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    // Add smooth scrolling to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navHeight = document.querySelector('.navigation-bar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ===== ACTIVE NAVIGATION HIGHLIGHTING =====
    function updateActiveNavLink() {
        const scrollPosition = window.scrollY + 100; // Offset for better UX
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Remove active class from all links
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Add active class to current section link
                const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }
    
    // Update active link on scroll
    window.addEventListener('scroll', updateActiveNavLink);
    
    // ===== HERO SECTION ANIMATIONS =====
    const heroContent = document.querySelector('.hero-content');
    const heroSection = document.querySelector('.hero-section');
    
    // Intersection Observer for hero animations
    const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, {
        threshold: 0.3
    });
    
    if (heroContent) {
        heroObserver.observe(heroContent);
    }
    
    // ===== FEATURE CARDS ANIMATION =====
    const featureCards = document.querySelectorAll('.feature-card');
    
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add staggered animation delay
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 150);
            }
        });
    }, {
        threshold: 0.2
    });
    
    // Initialize feature cards with opacity 0
    featureCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        cardObserver.observe(card);
    });
    
    // ===== RESEARCH SECTION ANIMATION =====
    const researchText = document.querySelector('.research-text');
    const researchVisual = document.querySelector('.research-visual');
    
    const researchObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, {
        threshold: 0.3
    });
    
    if (researchText) {
        researchText.style.opacity = '0';
        researchText.style.transform = 'translateX(-30px)';
        researchText.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        researchObserver.observe(researchText);
    }
    
    if (researchVisual) {
        researchVisual.style.opacity = '0';
        researchVisual.style.transform = 'translateX(30px)';
        researchVisual.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        researchObserver.observe(researchVisual);
    }
    
    // ===== CTA BUTTON INTERACTION =====
    const ctaButton = document.querySelector('.primary-cta');
    
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add click animation
            this.style.transform = 'translateY(-2px) scale(0.98)';
            
            setTimeout(() => {
                this.style.transform = 'translateY(-2px) scale(1)';
            }, 150);
            
            // Scroll to features section or show modal
            const featuresSection = document.querySelector('#solutions');
            if (featuresSection) {
                const navHeight = document.querySelector('.navigation-bar').offsetHeight;
                const targetPosition = featuresSection.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }
    
    // ===== NAVIGATION BAR SCROLL EFFECT =====
    const navbar = document.querySelector('.navigation-bar');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add background blur effect when scrolling
        if (scrollTop > 50) {
            navbar.style.backgroundColor = 'rgba(45, 55, 73, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.backgroundColor = 'var(--surface-dark)';
            navbar.style.backdropFilter = 'none';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // ===== PARALLAX EFFECT FOR HERO BACKGROUND =====
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroSection = document.querySelector('.hero-section');
        
        if (heroSection && scrolled < heroSection.offsetHeight) {
            const rate = scrolled * -0.5;
            const heroBackground = heroSection.querySelector('::before');
            // Apply parallax through CSS custom property
            heroSection.style.setProperty('--parallax-offset', `translateY(${rate}px)`);
        }
    });
    
    // ===== KEYBOARD ACCESSIBILITY =====
    document.addEventListener('keydown', function(e) {
        // Escape key handling
        if (e.key === 'Escape') {
            // Close any open modals or dropdowns
            document.activeElement.blur();
        }
        
        // Tab navigation enhancement
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    // Remove keyboard navigation class on mouse use
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });
    
    // ===== PERFORMANCE OPTIMIZATION =====
    // Throttle scroll events for better performance
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }
    
    // Apply throttling to scroll events
    const throttledScroll = throttle(function() {
        updateActiveNavLink();
    }, 100);
    
    window.addEventListener('scroll', throttledScroll);
    
    // ===== LOADING ANIMATION =====
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Trigger hero animation after load
        setTimeout(() => {
            if (heroContent) {
                heroContent.classList.add('animate-in');
            }
        }, 200);
    });
});

// ===== UTILITY FUNCTIONS =====
// Check if user prefers reduced motion
function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// Disable animations if user prefers reduced motion
if (prefersReducedMotion()) {
    document.documentElement.style.setProperty('--duration-short', '0.01ms');
    document.documentElement.style.setProperty('--duration-medium', '0.01ms');
}

// ===== CONSOLE BRANDING =====
console.log('%c🧬 Encure - AI-Driven Biotech Innovation', 'color: #4D6BFF; font-size: 16px; font-weight: bold;');
console.log('%cInterested in joining our team? Visit our careers page!', 'color: #6F767E; font-size: 12px;'); 