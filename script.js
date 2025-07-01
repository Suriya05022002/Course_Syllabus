     function toggleFAQ(element) {
            const answer = element.nextElementSibling;
            const toggle = element.querySelector('span'); // Changed from .faq-toggle to span to match new structure
            
            // Close all other FAQs
            document.querySelectorAll('.faq-content').forEach(item => {
                if (item !== answer) {
                    item.style.maxHeight = '0';
                    item.style.paddingTop = '0';
                    item.style.paddingBottom = '0';
                }
            });
            
            document.querySelectorAll('.faq-item > label span').forEach(item => { // Corrected selector for other toggles
                if (item !== toggle) {
                    item.style.transform = 'rotate(0deg)';
                    item.textContent = '+';
                }
            });
            
            // Toggle current FAQ
            if (answer.style.maxHeight === '0px' || answer.style.maxHeight === '') {
                answer.style.maxHeight = '200px'; // Set to a value larger than content or calculate dynamically
                answer.style.paddingTop = '0.5rem';
                answer.style.paddingBottom = '0.5rem';
                toggle.style.transform = 'rotate(45deg)';
                toggle.textContent = '×';
            } else {
                answer.style.maxHeight = '0';
                answer.style.paddingTop = '0';
                answer.style.paddingBottom = '0';
                toggle.style.transform = 'rotate(0deg)';
                toggle.textContent = '+';
            }
        }

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Add scroll effect to header
        window.addEventListener('scroll', function() {
            const header = document.querySelector('.header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.backdropFilter = 'blur(10px)';
            } else {
                header.style.background = '#fff';
                header.style.backdropFilter = 'none';
            }
        });

        // Add animation on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all cards and sections
        document.querySelectorAll('.audience-card, .takeaway-article, .week-card, .location-button, .batch-card, .data-analytics-image-wrapper, .data-analytics-text-content, .location-map-info').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'all 0.6s ease';
            observer.observe(el);
        });