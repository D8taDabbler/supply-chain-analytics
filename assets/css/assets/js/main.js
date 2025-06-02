document.addEventListener('DOMContentLoaded', function() {
    // Enhanced smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            // Only handle in-page anchors, not just "#"
            if (href.length > 1 && document.querySelector(href)) {
                e.preventDefault();
                const target = document.querySelector(href);
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Optionally, update the URL hash without jumping
                history.pushState(null, null, href);
            }
        });
    });

    // External link handler (opens in new tab)
    document.querySelectorAll('a[target="_blank"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            window.open(this.href, '_blank', 'noopener,noreferrer');
        });
    });

    // Fix remaining white space at the bottom of the page
    function adjustLayout() {
        const body = document.body;
        const html = document.documentElement;
        const height = Math.max(
            body.scrollHeight, body.offsetHeight,
            html.clientHeight, html.scrollHeight, html.offsetHeight
        );
        body.style.minHeight = height + 'px';
    }
    window.addEventListener('resize', adjustLayout);
    adjustLayout();

    // Section fade-in animation on scroll
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-in-section').forEach(section => {
        fadeObserver.observe(section);
    });

    // Button ripple effect
    document.querySelectorAll('.btn-effect').forEach(button => {
        button.addEventListener('click', function(e) {
            // Remove old ripple if present
            const oldRipple = this.querySelector('.ripple');
            if (oldRipple) oldRipple.remove();
            // Create new ripple
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
            ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Populate certifications grid (example data, replace as needed)
    const certifications = [
        { name: "Google AI Essentials", issuer: "Coursera", logo: "G", year: "2024", category: "AI & Machine Learning" },
        { name: "HubSpot Reporting", issuer: "HubSpot Academy", logo: "H", year: "2024", category: "Marketing Analytics" },
        // ...add more certifications as needed...
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

    // Trigger chart rendering if needed (example for Chart.js or Plotly)
    if (typeof createInventoryChart === 'function') createInventoryChart();
    if (typeof createCostChart === 'function') createCostChart();
    if (typeof createForecastChart === 'function') createForecastChart();
    if (typeof createSupplierMatrix === 'function') createSupplierMatrix();

    // Navbar scroll effect (optional)
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(26, 26, 26, 0.98)';
                navbar.style.backdropFilter = 'blur(20px)';
                navbar.style.boxShadow = '0 8px 32px rgba(0,0,0,0.3)';
            } else {
                navbar.style.background = 'rgba(26, 26, 26, 0.95)';
                navbar.style.backdropFilter = 'blur(20px)';
                navbar.style.boxShadow = 'none';
            }
        }
    });

    // Animated counters for hero stats (if needed)
    document.querySelectorAll('.stat[data-target]').forEach(stat => {
        const numberElement = stat.querySelector('.stat-number');
        const target = parseFloat(stat.getAttribute('data-target'));
        if (numberElement && !isNaN(target)) {
            let current = 0;
            const duration = 2000;
            const increment = target / (duration / 16);
            function updateCounter() {
                current += increment;
                if (current < target) {
                    numberElement.textContent = target % 1 === 0 ? Math.floor(current) : current.toFixed(1);
                    requestAnimationFrame(updateCounter);
                } else {
                    numberElement.textContent = target;
                }
            }
            updateCounter();
        }
    });
});
