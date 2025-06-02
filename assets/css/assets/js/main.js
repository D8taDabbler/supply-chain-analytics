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
    
    // Generate Analytics Charts
    function createInventoryChart() {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const turnoverData = [7.2, 7.8, 8.1, 8.5, 8.9, 8.7, 8.3, 8.6, 8.8, 9.1, 8.9, 8.7];
        const benchmarkData = Array(12).fill(8.5);
        
        const trace1 = {
            x: months,
            y: turnoverData,
            type: 'scatter',
            mode: 'lines+markers',
            name: 'Actual Turnover',
            line: {color: '#3498db', width: 3},
            marker: {color: '#3498db', size: 8}
        };
        
        const trace2 = {
            x: months,
            y: benchmarkData,
            type: 'scatter',
            mode: 'lines',
            name: 'Industry Benchmark',
            line: {color: '#e74c3c', width: 2, dash: 'dash'}
        };
        
        const layout = {
            title: {
                text: 'Monthly Inventory Turnover vs Benchmark',
                font: {color: '#ffffff', size: 16}
            },
            xaxis: {
                title: 'Month',
                color: '#b8c5d6',
                gridcolor: '#30363d'
            },
            yaxis: {
                title: 'Turnover Ratio',
                color: '#b8c5d6',
                gridcolor: '#30363d'
            },
            plot_bgcolor: '#21262d',
            paper_bgcolor: '#21262d',
            font: {color: '#b8c5d6'},
            legend: {
                font: {color: '#b8c5d6'},
                bgcolor: 'rgba(33, 38, 45, 0.8)'
            }
        };
        
        Plotly.newPlot('inventory-chart', [trace1, trace2], layout, {responsive: true});
    }
    
    function createTransportationChart() {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const costData = [2.35, 2.28, 2.22, 2.18, 2.15, 2.12, 2.16, 2.19, 2.14, 2.11, 2.13, 2.18];
        const benchmarkData = Array(12).fill(2.27);
        
        const trace1 = {
            x: months,
            y: costData,
            type: 'bar',
            name: 'Actual Cost/Mile',
            marker: {color: '#27ae60'}
        };
        
        const trace2 = {
            x: months,
            y: benchmarkData,
            type: 'scatter',
            mode: 'lines',
            name: 'Industry Benchmark',
            line: {color: '#e74c3c', width: 3}
        };
        
        const layout = {
            title: {
                text: 'Transportation Cost per Mile Trend',
                font: {color: '#ffffff', size: 16}
            },
            xaxis: {
                title: 'Month',
                color: '#b8c5d6',
                gridcolor: '#30363d'
            },
            yaxis: {
                title: 'Cost per Mile ($)',
                color: '#b8c5d6',
                gridcolor: '#30363d'
            },
            plot_bgcolor: '#21262d',
            paper_bgcolor: '#21262d',
            font: {color: '#b8c5d6'},
            legend: {
                font: {color: '#b8c5d6'},
                bgcolor: 'rgba(33, 38, 45, 0.8)'
            }
        };
        
        Plotly.newPlot('transportation-chart', [trace1, trace2], layout, {responsive: true});
    }
    
    function createSupplierChart() {
        const suppliers = ['Global Mfg Co', 'Tech Solutions', 'BuildCorp', 'PharmaChem', 'AutoParts'];
        const onTimeRate = [98.2, 96.8, 94.5, 99.1, 97.3];
        const qualityScore = [4.8, 4.6, 4.2, 4.9, 4.5];
        
        const trace1 = {
            x: onTimeRate,
            y: qualityScore,
            mode: 'markers+text',
            type: 'scatter',
            text: suppliers,
            textposition: 'middle right',
            marker: {
                size: 15,
                color: '#3498db',
                line: {
                    color: '#ffffff',
                    width: 2
                }
            }
        };
        
        const layout = {
            title: {
                text: 'Supplier Performance Matrix',
                font: {color: '#ffffff', size: 16}
            },
            xaxis: {
                title: 'On-Time Delivery Rate (%)',
                color: '#b8c5d6',
                gridcolor: '#30363d'
            },
            yaxis: {
                title: 'Quality Score (1-5)',
                color: '#b8c5d6',
                gridcolor: '#30363d'
            },
            plot_bgcolor: '#21262d',
            paper_bgcolor: '#21262d',
            font: {color: '#b8c5d6'}
        };
        
        Plotly.newPlot('supplier-chart', [trace1], layout, {responsive: true});
    }
    
    function createForecastChart() {
        const dates = [];
        const actualDemand = [];
        const forecastDemand = [];
        
        // Generate sample time series data
        for (let i = 0; i < 365; i++) {
            const date = new Date();
            date.setDate(date.getDate() - 365 + i);
            dates.push(date.toISOString().split('T')[0]);
            
            // Generate sample demand with seasonality
            const seasonality = Math.sin((i / 365) * 2 * Math.PI) * 20;
            const trend = i * 0.1;
            const noise = (Math.random() - 0.5) * 10;
            
            if (i < 300) {
                actualDemand.push(100 + seasonality + trend + noise);
            } else {
                forecastDemand.push(100 + seasonality + trend);
            }
        }
        
        const trace1 = {
            x: dates.slice(0, 300),
            y: actualDemand,
            type: 'scatter',
            mode: 'lines',
            name: 'Actual Demand',
            line: {color: '#3498db', width: 2}
        };
        
        const trace2 = {
            x: dates.slice(300),
            y: forecastDemand,
            type: 'scatter',
            mode: 'lines',
            name: 'Forecast',
            line: {color: '#e74c3c', width: 2, dash: 'dash'}
        };
        
        const layout = {
            title: {
                text: 'Demand Forecasting with Prophet Model',
                font: {color: '#ffffff', size: 16}
            },
            xaxis: {
                title: 'Date',
                color: '#b8c5d6',
                gridcolor: '#30363d'
            },
            yaxis: {
                title: 'Demand Units',
                color: '#b8c5d6',
                gridcolor: '#30363d'
            },
            plot_bgcolor: '#21262d',
            paper_bgcolor: '#21262d',
            font: {color: '#b8c5d6'},
            legend: {
                font: {color: '#b8c5d6'},
                bgcolor: 'rgba(33, 38, 45, 0.8)'
            }
        };
        
        Plotly.newPlot('forecast-chart', [trace1, trace2], layout, {responsive: true});
    }
    
    function createManufacturingProcessChart() {
        const processes = ['Raw Materials', 'Assembly', 'Quality Check', 'Packaging', 'Shipping'];
        const beforeOptimization = [4.2, 3.8, 2.1, 1.9, 2.3];
        const afterOptimization = [3.6, 3.2, 1.8, 1.6, 1.9];
        
        const trace1 = {
            x: processes,
            y: beforeOptimization,
            type: 'bar',
            name: 'Before Optimization',
            marker: {color: '#e74c3c'}
        };
        
        const trace2 = {
            x: processes,
            y: afterOptimization,
            type: 'bar',
            name: 'After Optimization',
            marker: {color: '#27ae60'}
        };
        
        const layout = {
            title: {
                text: 'Manufacturing Process Time Reduction (Hours)',
                font: {color: '#ffffff', size: 16}
            },
            xaxis: {
                title: 'Process Stage',
                color: '#b8c5d6',
                gridcolor: '#30363d'
            },
            yaxis: {
                title: 'Time (Hours)',
                color: '#b8c5d6',
                gridcolor: '#30363d'
            },
            plot_bgcolor: '#21262d',
            paper_bgcolor: '#21262d',
            font: {color: '#b8c5d6'},
            legend: {
                font: {color: '#b8c5d6'},
                bgcolor: 'rgba(33, 38, 45, 0.8)'
            },
            barmode: 'group'
        };
        
        Plotly.newPlot('manufacturing-process-chart', [trace1, trace2], layout, {responsive: true});
    }
    
    // Initialize charts when analytics section is visible
    const analyticsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    createInventoryChart();
                    createTransportationChart();
                    createSupplierChart();
                    createForecastChart();
                }, 500);
                analyticsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    const analyticsSection = document.querySelector('#analytics');
    if (analyticsSection) {
        analyticsObserver.observe(analyticsSection);
    }
    
    // Initialize manufacturing chart when section is visible
    const manufacturingObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    createManufacturingProcessChart();
                }, 500);
                manufacturingObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    const manufacturingSection = document.querySelector('#manufacturing-demo');
    if (manufacturingSection) {
        manufacturingObserver.observe(manufacturingSection);
    }
    
    // Populate certifications
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
            if (this.href && !this.href.includes('#')) {
                e.preventDefault();
                setTimeout(() => {
                    window.open(this.href, '_blank');
                }, 200);
            }
        });
    });
    
    // Counter animations for stats
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
    
});
