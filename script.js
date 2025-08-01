document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('header nav a, .footer-links a, .cta-buttons a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Only apply to links that start with #
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 80, // Offset for fixed header
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Sticky header with scroll effect
    const header = document.querySelector('header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.padding = '10px 0';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.padding = '15px 0';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
        }
        
        // Hide/show header on scroll
        if (scrollTop > lastScrollTop && scrollTop > 300) {
            // Scrolling down
            header.style.top = '-100px';
        } else {
            // Scrolling up
            header.style.top = '0';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Contact form validation and submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            let isValid = true;
            
            // Reset previous error messages
            const errorElements = document.querySelectorAll('.error-message');
            errorElements.forEach(el => el.remove());
            
            // Validate name
            if (name === '') {
                showError('name', 'Please enter your name');
                isValid = false;
            }
            
            // Validate email
            if (email === '') {
                showError('email', 'Please enter your email');
                isValid = false;
            } else if (!isValidEmail(email)) {
                showError('email', 'Please enter a valid email address');
                isValid = false;
            }
            
            // Validate message
            if (message === '') {
                showError('message', 'Please enter your message');
                isValid = false;
            }
            
            // If form is valid, submit it (or show success message for demo)
            if (isValid) {
                // In a real application, you would send the form data to a server
                // For demo purposes, we'll just show a success message
                contactForm.innerHTML = `
                    <div class="success-message">
                        <i class="fas fa-check-circle"></i>
                        <h3>Thank you for your message!</h3>
                        <p>We have received your inquiry and will get back to you shortly.</p>
                    </div>
                `;
            }
        });
    }
    
    // Helper function to show error messages
    function showError(fieldId, message) {
        const field = document.getElementById(fieldId);
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        field.parentNode.insertBefore(errorDiv, field.nextSibling);
        field.style.borderColor = '#ff6b6b';
        
        // Remove error when field is focused
        field.addEventListener('focus', function() {
            field.style.borderColor = '';
            if (errorDiv.parentNode) {
                errorDiv.parentNode.removeChild(errorDiv);
            }
        });
    }
    
    // Helper function to validate email format
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Add animation to feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    
    if (featureCards.length > 0) {
        // Add staggered animation delay to each card
        featureCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.transitionDelay = `${index * 0.1}s`;
        });
        
        // Function to check if element is in viewport
        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.bottom >= 0
            );
        }
        
        // Function to handle scroll animation
        function handleScrollAnimation() {
            featureCards.forEach(card => {
                if (isInViewport(card)) {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }
            });
        }
        
        // Initial check and add scroll event listener
        handleScrollAnimation();
        window.addEventListener('scroll', handleScrollAnimation);
    }
    
    // Add testimonial slider functionality
    const testimonialSlider = document.querySelector('.testimonial-slider');
    
    if (testimonialSlider && testimonialSlider.children.length > 1) {
        let isDown = false;
        let startX;
        let scrollLeft;
        
        testimonialSlider.addEventListener('mousedown', (e) => {
            isDown = true;
            testimonialSlider.style.cursor = 'grabbing';
            startX = e.pageX - testimonialSlider.offsetLeft;
            scrollLeft = testimonialSlider.scrollLeft;
        });
        
        testimonialSlider.addEventListener('mouseleave', () => {
            isDown = false;
            testimonialSlider.style.cursor = 'grab';
        });
        
        testimonialSlider.addEventListener('mouseup', () => {
            isDown = false;
            testimonialSlider.style.cursor = 'grab';
        });
        
        testimonialSlider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - testimonialSlider.offsetLeft;
            const walk = (x - startX) * 2; // Scroll speed
            testimonialSlider.scrollLeft = scrollLeft - walk;
        });
        
        // Set initial cursor style
        testimonialSlider.style.cursor = 'grab';
    }
    
    // Add mobile menu toggle functionality
    const createMobileMenu = () => {
        const header = document.querySelector('header');
        const nav = document.querySelector('nav');
        
        // Create mobile menu button
        const mobileMenuBtn = document.createElement('button');
        mobileMenuBtn.className = 'mobile-menu-btn';
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        header.querySelector('.container').appendChild(mobileMenuBtn);
        
        // Style the button
        mobileMenuBtn.style.display = 'none';
        mobileMenuBtn.style.background = 'none';
        mobileMenuBtn.style.border = 'none';
        mobileMenuBtn.style.fontSize = '1.5rem';
        mobileMenuBtn.style.color = 'var(--primary-color)';
        mobileMenuBtn.style.cursor = 'pointer';
        
        // Add toggle functionality
        mobileMenuBtn.addEventListener('click', () => {
            nav.classList.toggle('active');
            mobileMenuBtn.innerHTML = nav.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : 
                '<i class="fas fa-bars"></i>';
        });
        
        // Handle responsive behavior
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                mobileMenuBtn.style.display = 'block';
                nav.style.position = 'absolute';
                nav.style.top = '100%';
                nav.style.left = '0';
                nav.style.width = '100%';
                nav.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                nav.style.padding = '20px';
                nav.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.1)';
                nav.style.transform = 'translateY(-10px)';
                nav.style.opacity = '0';
                nav.style.visibility = 'hidden';
                nav.style.transition = 'all 0.3s ease';
                
                // Style the nav items for mobile
                const navUl = nav.querySelector('ul');
                navUl.style.flexDirection = 'column';
                navUl.style.gap = '15px';
                
                const navItems = navUl.querySelectorAll('li');
                navItems.forEach(item => {
                    item.style.margin = '0';
                });
                
                // Show menu when active class is added
                if (nav.classList.contains('active')) {
                    nav.style.transform = 'translateY(0)';
                    nav.style.opacity = '1';
                    nav.style.visibility = 'visible';
                }
            } else {
                mobileMenuBtn.style.display = 'none';
                nav.style = null; // Reset all inline styles
                nav.classList.remove('active');
                
                const navUl = nav.querySelector('ul');
                navUl.style = null;
                
                const navItems = navUl.querySelectorAll('li');
                navItems.forEach(item => {
                    item.style = null;
                });
            }
        };
        
        // Initial call and add resize listener
        handleResize();
        window.addEventListener('resize', handleResize);
    };
    
    // Initialize mobile menu
    createMobileMenu();
    
    // Add CSS for error and success messages
    const addCustomStyles = () => {
        const style = document.createElement('style');
        style.textContent = `
            .error-message {
                color: #ff6b6b;
                font-size: 0.85rem;
                margin-top: 5px;
            }
            
            .success-message {
                text-align: center;
                padding: 40px 20px;
            }
            
            .success-message i {
                font-size: 4rem;
                color: #4CAF50;
                margin-bottom: 20px;
            }
            
            .success-message h3 {
                font-size: 1.5rem;
                margin-bottom: 10px;
                color: var(--primary-color);
            }
            
            .success-message p {
                color: var(--text-light);
            }
        `;
        document.head.appendChild(style);
    };
    
    addCustomStyles();
});