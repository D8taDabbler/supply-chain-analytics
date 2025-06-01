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
    
    // Populate certifications data with all 17 certifications
    const certifications = [
        {
            name: "Google Business Intelligence",
            issuer: "Google",
            logo: "G",
            year: "2024",
            category: "Data Analytics"
        },
        {
            name: "Google Data Analytics",
            issuer: "Google",
            logo: "G",
            year: "2024",
            category: "Data Analytics"
        },
        {
            name: "Google AI Essentials",
            issuer: "Google",
            logo: "G",
            year: "2024",
            category: "AI & Machine Learning"
        },
        {
            name: "Google Cybersecurity",
            issuer: "Google",
            logo: "G",
            year: "2024",
            category: "Cybersecurity"
        },
        {
            name: "HubSpot Marketing Hub Software",
            issuer: "HubSpot",
            logo: "H",
            year: "2024",
            category: "Marketing Analytics"
        },
        {
            name: "HubSpot Reporting",
            issuer: "HubSpot",
            logo: "H",
            year: "2024",
            category: "Marketing Analytics"
        },
        {
            name: "Generative AI Overview for Project Managers",
            issuer: "Project School",
            logo: "PS",
            year: "2024",
            category: "AI & Project Management"
        },
        {
            name: "Fundamentals of Agile Project Management",
            issuer: "Project School",
            logo: "PS",
            year: "2024",
            category: "Project Management"
        },
        {
            name: "Fundamentals of Predictive Project Management",
            issuer: "Project School",
            logo: "PS",
            year: "2024",
            category: "Project Management"
        },
        {
            name: "Metrology Leading Teams",
            issuer: "Metrology",
            logo: "M",
            year: "2024",
            category: "Leadership"
        },
        {
            name: "WGU Certificate: Leadership Strategies",
            issuer: "Western Governors University",
            logo: "WGU",
            year: "2024",
            category: "Leadership"
        },
        {
            name: "WGU Certificate: Management Project and Technology Integration",
            issuer: "Western Governors University",
            logo: "WGU",
            year: "2024",
            category: "Management"
        },
        {
            name: "WGU Certificate: Strategic Thinking and Decision-Making",
            issuer: "Western Governors University",
            logo: "WGU",
            year: "2024",
            category: "Strategic Management"
        },
        {
            name: "Supply Chain Management: KPIs, Metrics, Inventory Performance",
            issuer: "Udemy",
            logo: "U",
            year: "2024",
            category: "Supply Chain"
        },
        {
            name: "Supply Chain Principles",
            issuer: "Coursera",
            logo: "C",
            year: "2024",
            category: "Supply Chain"
        }
    ];
    
    const certGrid = document.getElementById('certifications-grid');
    if (certGrid) {
        certGrid.innerHTML = certifications.map(cert => `
            <div class="cert-card">
                <div class="cert-logo">${cert.logo}</div>
                <h4>${cert.name}</h4>
                <p><span class="cert-issuer">${cert.issuer}</span> • ${cert.year}</p>
                <div class="cert-category" style="margin-top: 0.5rem; padding: 0.2rem 0.8rem; background: var(--bg-color); border-radius: 12px; font-size: 0.8rem; color: var(--text-light);">${cert.category}</div>
            </div>
        `).join('');
    }
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(44, 62, 80, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = 'var(--primary-color)';
            navbar.style.backdropFilter = 'none';
        }
    });
    
    // Dynamic counter animation for stats
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        function updateCounter() {
            start += increment;
            if (start < target) {
                if (target > 1) {
                    element.textContent = Math.floor(start);
                } else {
                    element.textContent = start.toFixed(1);
                }
                requestAnimationFrame(updateCounter);
            } else {
                if (element.textContent.includes('$')) {
                    element.textContent = `$${target}K`;
                } else if (element.textContent.includes('%')) {
                    element.textContent = `${target}%+`;
                } else {
                    element.textContent = target;
                }
            }
        }
        updateCounter();
    }
    
});
