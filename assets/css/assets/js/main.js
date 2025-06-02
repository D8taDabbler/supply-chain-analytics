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
    
    // Enhanced Chart Creation with Real 2025 Data
    function createInventoryChart() {
        const ctx = document.getElementById('inventoryChart');
        if (!ctx) return;
        
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: 'Achieved Turnover',
                    data: [7.2, 7.8, 8.1, 8.5, 8.9, 8.7, 8.3, 8.6, 8.8, 9.1, 8.9, 8.7],
                    borderColor: '#3498db',
                    backgroundColor: 'rgba(52, 152, 219, 0.1)',
                    tension: 0.4,
                    fill: true
                }, {
                    label: 'Industry Benchmark (Manufacturing)',
                    data: Array(12).fill(6),
                    borderColor: '#e74c3c',
                    borderDash: [5, 5],
                    fill: false
                }, {
                    label: 'Target (Best Practice)',
                    data: Array(12).fill(8),
                    borderColor: '#27ae60',
                    borderDash: [10, 5],
                    fill: false
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Monthly Inventory Turnover Performance vs Benchmarks',
                        color: '#ffffff'
                    },
                    legend: {
                        labels: {
                            color: '#b8c5d6'
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: '#30363d'
                        },
                        ticks: {
                            color: '#b8c5d6'
                        },
                        title: {
                            display: true,
                            text: 'Turnover Ratio',
                            color: '#b8c5d6'
                        }
                    },
                    x: {
                        grid: {
                            color: '#30363d'
                        },
                        ticks: {
                            color: '#b8c5d6'
                        }
                    }
                }
            }
        });
    }
    
    function createCostChart() {
        const ctx = document.getElementById('costChart');
        if (!ctx) return;
        
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Transportation', 'Warehousing', 'Inventory Carrying', 'Order Processing', 'Technology'],
                datasets: [{
                    label: 'Current Costs ($000s)',
                    data: [205, 45, 180, 12, 25],
                    backgroundColor: ['#3498db', '#27ae60', '#e74c3c', '#f39c12', '#9b59b6']
                }, {
                    label: 'Industry Average ($000s)',
                    data: [244, 52, 220, 18, 35],
                    backgroundColor: 'rgba(231, 76, 60, 0.6)'
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Cost Optimization Analysis (Monthly)',
                        color: '#ffffff'
                    },
                    legend: {
                        labels: {
                            color: '#b8c5d6'
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: '#30363d'
                        },
                        ticks: {
                            color: '#b8c5d6'
                        },
                        title: {
                            display: true,
                            text: 'Cost ($000s)',
                            color: '#b8c5d6'
                        }
                    },
                    x: {
                        grid: {
                            color: '#30363d'
                        },
                        ticks: {
                            color: '#b8c5d6'
                        }
                    }
                }
            }
        });
    }
    
    function createForecastChart() {
        const ctx = document.getElementById('forecastChart');
        if (!ctx) return;
        
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8'],
                datasets: [{
                    label: 'Actual Demand',
                    data: [2450, 2380, 2520, 2490, 2610, 2580, 2650, 2720],
                    borderColor: '#3498db',
                    backgroundColor: 'rgba(52, 152, 219, 0.1)',
                    fill: false
                }, {
                    label: 'Forecasted Demand',
                    data: [2420, 2390, 2510, 2480, 2600, 2570, 2640, 2710],
                    borderColor: '#27ae60',
                    borderDash: [5, 5],
                    fill: false
                }, {
                    label: 'Accuracy Range (±5%)',
                    data: [2550, 2470, 2650, 2620, 2740, 2710, 2780, 2860],
                    borderColor: '#e74c3c',
                    backgroundColor: 'rgba(231, 76, 60, 0.1)',
                    fill: '+1'
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Demand Forecasting Accuracy (94.5%)',
                        color: '#ffffff'
                    },
                    legend: {
                        labels: {
                            color: '#b8c5d6'
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        grid: {
                            color: '#30363d'
                        },
                        ticks: {
                            color: '#b8c5d6'
                        },
                        title: {
                            display: true,
                            text: 'Units',
                            color: '#b8c5d6'
                        }
                    },
                    x: {
                        grid: {
                            color: '#30363d'
                        },
                        ticks: {
                            color: '#b8c5d6'
                        }
                    }
                }
            }
        });
    }
    
    function createSupplierMatrix() {
        const suppliers = ['Global Mfg Co', 'Tech Solutions', 'BuildCorp', 'PharmaChem', 'AutoParts', 'QualityFirst', 'SpeedLog', 'ReliableCorp'];
        const onTimeRate = [98.2, 96.8, 94.5, 99.1, 97.3, 95.8, 96.2, 98.5];
        const qualityScore = [4.8, 4.6, 4.2, 4.9, 4.5, 4.3, 4.4, 4.7];
        const defectRate = [320, 450, 680, 280, 520, 580, 510, 380]; // PPM
        
        const trace = {
            x: onTimeRate,
            y: qualityScore,
            mode: 'markers+text',
            type: 'scatter',
            text: suppliers,
            textposition: 'top center',
            marker: {
                size: defectRate.map(rate => Math.max(8, 40 - (rate / 20))), // Larger = better (lower defect rate)
                color: defectRate.map(rate => rate < 400 ? '#27ae60' : rate < 500 ? '#f39c12' : '#e74c3c'),
                colorscale: 'RdYlGn',
                showscale: true,
                colorbar: {
                    title: 'Performance Score',
                    titlefont: {color: '#b8c5d6'},
                    tickfont: {color: '#b8c5d6'}
                },
                line: {
                    color: '#ffffff',
                    width: 2
                }
            },
            textfont: {
                color: '#ffffff',
                size: 10
            }
        };
        
        const layout = {
            title: {
                text: 'Supplier Performance Matrix (2025)',
                font: {color: '#ffffff', size: 16}
            },
            xaxis: {
                title: 'On-Time Delivery Rate (%)',
                color: '#b8c5d6',
                gridcolor: '#30363d',
                range: [93, 100]
            },
            yaxis: {
                title: 'Quality Score (1-5)',
                color: '#b8c5d6',
                gridcolor: '#30363d',
                range: [4, 5]
            },
            plot_bgcolor: '#21262d',
            paper_bgcolor: '#21262d',
            font: {color: '#b8c5d6'},
            annotations: [{
                text: 'Target Zone (>97% OTD, >4.5 Quality)',
                x: 98.5,
                y: 4.7,
                showarrow: false,
                font: {color: '#27ae60', size: 12}
            }]
        };
        
        Plotly.newPlot('supplierMatrix', [trace], layout, {responsive: true});
    }
    
    // Initialize charts when analytics section is visible
    const analyticsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    createInventoryChart();
                    createCostChart();
                    createForecastChart();
                    createSupplierMatrix();
                }, 500);
                analyticsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    const analyticsSection = document.querySelector('#analytics');
    if (analyticsSection) {
        analyticsObserver.observe(analyticsSection);
    }
    
    // Populate certifications with 2025 data
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
            name: "Supply Chain Management KPIs: Metric Inventory Performance",
            issuer: "Udemy",
            logo: "U",
            year: "2024",
            category: "Supply Chain Analytics"
        },
        {
            name: "CSCMP Supply Chain Foundations: Demand Planning Professional Certificate",
            issuer: "CSCMP",
            logo: "CSCMP",
            year: "2024",
            category: "Supply Chain Management"
        },
        {
            name: "Six Sigma Black Belt: Analytical Tools",
            issuer: "Skillsoft",
            logo: "6σ",
            year: "2024",
            category: "Quality Management"
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
            category: "Operations Optimization"
        },
        {
            name: "Fundamentals of Predictive Project Management",
            issuer: "Project Management Institute",
            logo: "PMI",
            year: "2024",
            category: "Predictive Analytics"
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

    // Enhanced click effects with professional feedback
    document.querySelectorAll('.btn-effect').forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
            
            // Handle external links
            if (this.href && !this.href.includes('#')) {
                e.preventDefault();
                setTimeout(() => {
                    window.open(this.href, '_blank');
                }, 200);
            }
        });
    });
    
    // Add ripple CSS dynamically
    if (!document.querySelector('#ripple-styles')) {
        const style = document.createElement('style');
        style.id = 'ripple-styles';
        style.textContent = `
            .ripple {
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.3);
                transform: scale(0);
                animation: ripple-animation 0.6s linear;
                pointer-events: none;
            }
            
            @keyframes ripple-animation {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Enhanced counter animations for hero stats
    function animateCounter(element, target, duration = 2000) {
        const startValue = 0;
        const increment = target / (duration / 16);
        let current = startValue;
        
        function updateCounter() {
            current += increment;
            if (current < target) {
                if (target.toString().includes('.')) {
                    element.textContent = current.toFixed(1);
                } else {
                    element.textContent = Math.floor(current);
                }
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        }
        updateCounter();
    }
    
    // Trigger counter animations when hero section is visible
    const heroObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const stats = entry.target.querySelectorAll('.stat');
                stats.forEach((stat, index) => {
                    const numberElement = stat.querySelector('.stat-number');
                    const targetAttr = stat.getAttribute('data-target');
                    
                    if (targetAttr) {
                        const target = parseFloat(targetAttr);
                        setTimeout(() => {
                            if (targetAttr.includes('.')) {
                                animateCounter(numberElement, target);
                            } else {
                                animateCounter(numberElement, target);
                            }
                        }, index * 200);
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
    
    // Professional loading states for charts
    const chartContainers = document.querySelectorAll('.chart-container');
    chartContainers.forEach(container => {
        container.classList.add('loading');
        setTimeout(() => {
            container.classList.remove('loading');
        }, 1000);
    });
    
    // Add professional hover effects to KPI cards
    const kpiCards = document.querySelectorAll('.kpi-card');
    kpiCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Professional analytics tracking
    document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
        button.addEventListener('click', function() {
            const action = this.textContent.trim();
            const section = this.closest('section')?.id || 'unknown';
            console.log(`Portfolio Analytics: ${action} clicked in ${section} section`);
            
            // Track specific interactions
            if (action.includes('Dashboard')) {
                console.log('User engaged with analytics dashboard');
            } else if (action.includes('LinkedIn')) {
                console.log('User navigated to LinkedIn profile');
            } else if (action.includes('GitHub')) {
                console.log('User viewed GitHub repository');
            }
        });
    });
    
});
