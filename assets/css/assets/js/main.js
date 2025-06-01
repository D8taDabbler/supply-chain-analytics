document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Updated certifications data based on actual LinkedIn profile
    const certifications = [
        {
            name: "Google AI Essentials",
            issuer: "Coursera",
            logo: "G",
            year: "2024",
            category: "AI & Machine Learning"
        },
        {
            name: "HubSpot Reporting",
            issuer: "HubSpot Academy",
            logo: "H",
            year: "2024",
            category: "Marketing Analytics"
        },
        {
            name: "Fundamentals of Agile Project Management",
            issuer: "Project Management Institute",
            logo: "PMI",
            year: "2024",
            category: "Project Management"
        },
        {
            name: "Generative AI Overview for Project Managers",
            issuer: "Project Management Institute",
            logo: "PMI",
            year: "2024",
            category: "AI & Project Management"
        },
        {
            name: "Supply Chain Management KPIs: Metric Inventory Performance",
            issuer: "Udemy",
            logo: "U",
            year: "2024",
            category: "Supply Chain"
        },
        {
            name: "CSCMP Supply Chain Foundations: Demand Planning Professional Certificate",
            issuer: "CSCMP",
            logo: "CSCMP",
            year: "2024",
            category: "Supply Chain"
        },
        {
            name: "WGU Certificate: Strategic Thinking and Innovation",
            issuer: "Western Governors University",
            logo: "WGU",
            year: "2024",
            category: "Strategic Management"
        },
        {
            name: "Supply Chain Management Basics: Cutting Costs and Optimizing Delivery",
            issuer: "Skillsoft",
            logo: "S",
            year: "2024",
            category: "Supply Chain"
        },
        {
            name: "Six Sigma Black Belt: Analytical Tools",
            issuer: "Skillsoft",
            logo: "S",
            year: "2024",
            category: "Quality Management"
        },
        {
            name: "Fundamentals of Predictive Project Management",
            issuer: "Project Management Institute",
            logo: "PMI",
            year: "2024",
            category: "Project Management"
        }
    ];
    
    const certGrid = document.getElementById('certifications-grid');
    if (certGrid) {
        certGrid.innerHTML = certifications.map(cert => `
            <div class="cert-card">
                <div class="cert-logo">${cert.logo}</div>
                <h4>${cert.name}</h4>
                <p><span class="cert-issuer">${cert.issuer}</span> • ${cert.year}</p>
                <div class="cert-category">${cert.category}</div>
            </div>
        `).join('');
    }
    
    // Enhanced navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(26, 26, 26, 0.98)';
            navbar.style.backdropFilter = 'blur(20px)';
            navbar.style.boxShadow = '0 8px 32px rgba(0,0,0,0.3)';
        } else {
            navbar.style.background = 'rgba(26, 26, 26, 0.95)';
            navbar.style.backdropFilter = 'blur(20px)';
            navbar.style.boxShadow = 'none';
        }
    });
    
    // Fade-in animation observer
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in-section').forEach((section) => {
        fadeObserver.observe(section);
    });

    // Enhanced click effects
    document.querySelectorAll('.btn-effect').forEach(button => {
        button.addEventListener('click', function(e) {
            // Add a small delay to show the effect before navigation
            if (this.href && !this.href.includes('#')) {
                e.preventDefault();
                setTimeout(() => {
                    window.open(this.href, '_blank');
                }, 200);
            }
        });
    });
    
    // Intersection Observer for animations
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
    
    // Observe elements for animation
    document.querySelectorAll('.project-card, .cert-card, .timeline-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Dynamic counter animation for stats
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        function updateCounter() {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target + '+';
            }
        }
        updateCounter();
    }
    
    // Trigger counter animations when hero section is visible
    const heroStats = document.querySelectorAll('.stat-number');
    const heroObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                heroStats.forEach((stat, index) => {
                    const text = stat.textContent;
                    if (text.includes('7+')) {
                        setTimeout(() => animateCounter(stat, 7), index * 200);
                    } else if (text.includes('98%+')) {
                        setTimeout(() => animateCounter(stat, 98), index * 200);
                    } else if (text.includes('15+')) {
                        setTimeout(() => animateCounter(stat, 15), index * 200);
                    }
                });
                heroObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroObserver.observe(heroSection);
    }
    
    // Add click tracking for portfolio analytics
    document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
        button.addEventListener('click', function() {
            const action = this.textContent.trim();
            const section = this.closest('section')?.id || 'unknown';
            console.log(`Portfolio Analytics: ${action} clicked in ${section} section`);
        });
    });
    
});
