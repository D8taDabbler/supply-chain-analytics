// ===== PORTFOLIO DATA MANAGEMENT =====
class PortfolioManager {
    constructor() {
        this.adminPassword = 'SupplyChain2025!'; // Change this password
        this.portfolioData = this.loadPortfolioData();
        this.init();
    }

    // Initialize portfolio functionality
    init() {
        this.setupNavigation();
        this.setupScrollAnimations();
        this.setupSkillBars();
        this.setupAdminPanel();
        this.setupMobileMenu();
        this.loadStoredData();
    }

    // ===== DATA PERSISTENCE =====
    loadPortfolioData() {
        const defaultData = {
            profile: {
                name: "Your Name",
                title: "Supply Chain & Logistics Professional | AI-Driven Process Optimization",
                image: "assets/images/profile.jpg",
                email: "your.email@example.com",
                phone: "+1 (555) 123-4567",
                location: "New York, NY",
                linkedin: "https://linkedin.com/in/yourusername",
                github: "https://github.com/d8tadabbler"
            },
            experience: [
                {
                    company: "HubSpot",
                    position: "AI Marketing Intern",
                    duration: "Apr 2025 - Present",
                    location: "Remote",
                    type: "Internship",
                    description: "Contributing to AI-driven marketing strategies for real-world clients using HubSpot's digital tools.",
                    achievements: [
                        "Designed and executed multi-channel marketing campaigns",
                        "Collaborated with project teams on data-driven marketing initiatives",
                        "Applied AI analytics for audience segmentation and content personalization",
                        "Engaged directly with clients to deliver actionable insights"
                    ],
                    skills: ["Digital Marketing", "AI Marketing", "Marketing Analytics", "Campaign Management"]
                },
                {
                    company: "Career Break",
                    position: "Professional Development",
                    duration: "May 2020 - Apr 2025",
                    location: "United States",
                    type: "Career Break",
                    description: "Purposeful career break for family care while pursuing Bachelor's degree in Business Administration.",
                    achievements: [
                        "Managed complex medical appointments and healthcare communications",
                        "Applied project management principles to balance caregiving and academics",
                        "Developed advanced empathy and advocacy skills",
                        "Maintained commitment to continuous learning despite challenges"
                    ],
                    skills: ["Project Management", "Healthcare Communication", "Adaptability", "Resilience"]
                },
                {
                    company: "Yong Qi Solutions",
                    position: "Manufacturing Operations Specialist",
                    duration: "Nov 2017 - Jun 2022",
                    location: "Taipei City, Taiwan",
                    type: "Full-time",
                    description: "Supported manufacturing and assembly operations, supply chain coordination, and onsite installations for tech and semiconductor clients.",
                    achievements: [
                        "Operated CNC machinery and led assembly tasks for complex industrial equipment",
                        "Coordinated material procurement and tracked shipments",
                        "Built strategic supplier partnerships",
                        "Contributed to process improvement initiatives"
                    ],
                    skills: ["Supply Chain Management", "Vendor Relations", "CNC Operations", "Process Improvement"]
                }
            ],
            skills: {
                "Supply Chain & Logistics": [
                    { name: "Supply Chain Management", level: 95 },
                    { name: "Logistics Operations", level: 90 },
                    { name: "Vendor Relations", level: 85 },
                    { name: "Process Optimization", level: 88 }
                ],
                "AI & Technology": [
                    { name: "AI Marketing", level: 80 },
                    { name: "Data Analytics", level: 75 },
                    { name: "Marketing Automation", level: 85 },
                    { name: "Digital Tools", level: 90 }
                ],
                "Management & Leadership": [
                    { name: "Project Management", level: 92 },
                    { name: "Team Collaboration", level: 88 },
                    { name: "Client Relations", level: 85 },
                    { name: "Problem Solving", level: 90 }
                ]
            }
        };

        const stored = localStorage.getItem('portfolioData');
        return stored ? { ...defaultData, ...JSON.parse(stored) } : defaultData;
    }

    savePortfolioData() {
        localStorage.setItem('portfolioData', JSON.stringify(this.portfolioData));
    }

    // ===== NAVIGATION FUNCTIONALITY =====
    setupNavigation() {
        const navbar = document.querySelector('.navbar');
        const navLinks = document.querySelectorAll('.nav-link');

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Smooth scrolling for navigation links
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }

                // Update active link
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');

                // Close mobile menu if open
                const navMenu = document.querySelector('.nav-menu');
                navMenu.classList.remove('active');
            });
        });

        // Update active link on scroll
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section[id]');
            const scrollPos = window.scrollY + 100;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');

                if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        });
    }

    // ===== MOBILE MENU =====
    setupMobileMenu() {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');

        if (hamburger && navMenu) {
            hamburger.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                hamburger.classList.toggle('active');
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                    navMenu.classList.remove('active');
                    hamburger.classList.remove('active');
                }
            });
        }
    }

    // ===== SCROLL ANIMATIONS =====
    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                }
            });
        }, observerOptions);

        // Observe all elements with animation class
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });
    }

    // ===== SKILL BAR ANIMATIONS =====
    setupSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');
        
        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const skillBar = entry.target;
                    const percentage = skillBar.getAttribute('data-percentage');
                    
                    setTimeout(() => {
                        skillBar.style.width = percentage + '%';
                    }, 200);
                }
            });
        }, { threshold: 0.5 });

        skillBars.forEach(bar => {
            skillObserver.observe(bar);
        });
    }

    // ===== ADMIN PANEL FUNCTIONALITY =====
    setupAdminPanel() {
        // Admin panel toggle (hidden by default)
        document.addEventListener('keydown', (e) => {
            // Press Ctrl+Shift+A to open admin panel
            if (e.ctrlKey && e.shiftKey && e.code === 'KeyA') {
                e.preventDefault();
                this.toggleAdminPanel();
            }
        });

        // Setup admin form handlers
        this.setupAdminForm();
    }

    toggleAdminPanel() {
        const adminPanel = document.getElementById('adminPanel');
        if (adminPanel) {
            const isVisible = adminPanel.style.display === 'block';
            adminPanel.style.display = isVisible ? 'none' : 'block';
            
            if (!isVisible) {
                document.getElementById('adminPassword').focus();
            }
        }
    }

    setupAdminForm() {
        const adminPanel = document.getElementById('adminPanel');
        if (!adminPanel) return;

        // Password verification
        const passwordInput = document.getElementById('adminPassword');
        const loginBtn = document.getElementById('adminLogin');
        const adminContent = document.getElementById('adminContent');

        if (loginBtn) {
            loginBtn.addEventListener('click', () => {
                if (passwordInput.value === this.adminPassword) {
                    adminContent.style.display = 'block';
                    passwordInput.style.display = 'none';
                    loginBtn.style.display = 'none';
                    this.populateAdminForm();
                } else {
                    alert('Incorrect password');
                    passwordInput.value = '';
                }
            });
        }

        // Close admin panel
        const closeBtn = document.querySelector('.close-admin');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                this.closeAdminPanel();
            });
        }

        // Save changes
        const saveBtn = document.getElementById('saveChanges');
        if (saveBtn) {
            saveBtn.addEventListener('click', () => {
                this.saveAdminChanges();
            });
        }

        // Profile image upload
        const profileUpload = document.getElementById('profileImageUpload');
        if (profileUpload) {
            profileUpload.addEventListener('change', (e) => {
                this.handleImageUpload(e);
            });
        }
    }

    populateAdminForm() {
        // Populate form with current data
        const profile = this.portfolioData.profile;
        
        document.getElementById('profileName').value = profile.name || '';
        document.getElementById('profileTitle').value = profile.title || '';
        document.getElementById('profileEmail').value = profile.email || '';
        document.getElementById('profilePhone').value = profile.phone || '';
        document.getElementById('profileLocation').value = profile.location || '';
        document.getElementById('linkedinUrl').value = profile.linkedin || '';
        document.getElementById('githubUrl').value = profile.github || '';
    }

    saveAdminChanges() {
        // Update portfolio data with form values
        this.portfolioData.profile.name = document.getElementById('profileName').value;
        this.portfolioData.profile.title = document.getElementById('profileTitle').value;
        this.portfolioData.profile.email = document.getElementById('profileEmail').value;
        this.portfolioData.profile.phone = document.getElementById('profilePhone').value;
        this.portfolioData.profile.location = document.getElementById('profileLocation').value;
        this.portfolioData.profile.linkedin = document.getElementById('linkedinUrl').value;
        this.portfolioData.profile.github = document.getElementById('githubUrl').value;

        // Save to localStorage
        this.savePortfolioData();
        
        // Update display
        this.updateProfileDisplay();
        
        alert('Changes saved successfully!');
        this.closeAdminPanel();
    }

    handleImageUpload(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                this.portfolioData.profile.image = e.target.result;
                this.savePortfolioData();
                this.updateProfileImage();
            };
            reader.readAsDataURL(file);
        }
    }

    updateProfileImage() {
        const profileImg = document.querySelector('.profile-image');
        if (profileImg) {
            profileImg.src = this.portfolioData.profile.image;
        }
    }

    updateProfileDisplay() {
        const profile = this.portfolioData.profile;
        
        // Update hero section
        document.querySelector('.hero-title').textContent = profile.name;
        document.querySelector('.hero-subtitle').textContent = profile.title;
        
        // Update social links
        const linkedinLink = document.querySelector('a[href*="linkedin"]');
        const githubLink = document.querySelector('a[href*="github"]');
        const emailLink = document.querySelector('a[href^="mailto"]');
        
        if (linkedinLink) linkedinLink.href = profile.linkedin;
        if (githubLink) githubLink.href = profile.github;
        if (emailLink) emailLink.href = `mailto:${profile.email}`;
    }

    closeAdminPanel() {
        const adminPanel = document.getElementById('adminPanel');
        const adminContent = document.getElementById('adminContent');
        const passwordInput = document.getElementById('adminPassword');
        const loginBtn = document.getElementById('adminLogin');

        adminPanel.style.display = 'none';
        adminContent.style.display = 'none';
        passwordInput.style.display = 'block';
        loginBtn.style.display = 'block';
        passwordInput.value = '';
    }

    loadStoredData() {
        this.updateProfileDisplay();
        this.updateProfileImage();
    }

    // ===== UTILITY FUNCTIONS =====
    formatDate(dateString) {
        const options = { year: 'numeric', month: 'long' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    }

    calculateDuration(startDate, endDate = null) {
        const start = new Date(startDate);
        const end = endDate ? new Date(endDate) : new Date();
        
        const diffTime = Math.abs(end - start);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        const years = Math.floor(diffDays / 365);
        const months = Math.floor((diffDays % 365) / 30);
        
        if (years > 0) {
            return `${years} year${years > 1 ? 's' : ''} ${months} month${months > 1 ? 's' : ''}`;
        } else {
            return `${months} month${months > 1 ? 's' : ''}`;
        }
    }

    // ===== CONTACT FORM =====
    setupContactForm() {
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleContactSubmission(e.target);
            });
        }
    }

    handleContactSubmission(form) {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send data to a server
        console.log('Contact form submission:', data);
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        form.reset();
    }
}

// ===== PERFORMANCE OPTIMIZATION =====
class PerformanceOptimizer {
    constructor() {
        this.setupLazyLoading();
        this.setupImageOptimization();
    }

    setupLazyLoading() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }

    setupImageOptimization() {
        // Add loading="lazy" to images
        document.querySelectorAll('img').forEach(img => {
            if (!img.hasAttribute('loading')) {
                img.setAttribute('loading', 'lazy');
            }
        });
    }
}

// ===== ANALYTICS INTEGRATION =====
class AnalyticsManager {
    constructor() {
        this.setupEventTracking();
    }

    setupEventTracking() {
        // Track navigation clicks
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                this.trackEvent('Navigation', 'Click', link.textContent);
            });
        });

        // Track social link clicks
        document.querySelectorAll('.social-link').forEach(link => {
            link.addEventListener('click', () => {
                this.trackEvent('Social', 'Click', link.getAttribute('href'));
            });
        });

        // Track scroll depth
        this.setupScrollTracking();
    }

    trackEvent(category, action, label) {
        // Integration with Google Analytics or other analytics service
        if (typeof gtag !== 'undefined') {
            gtag('event', action, {
                event_category: category,
                event_label: label
            });
        }
        
        console.log(`Analytics: ${category} - ${action} - ${label}`);
    }

    setupScrollTracking() {
        let maxScroll = 0;
        const milestones = [25, 50, 75, 100];
        const trackedMilestones = new Set();

        window.addEventListener('scroll', () => {
            const scrollPercent = Math.round(
                (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
            );
            
            if (scrollPercent > maxScroll) {
                maxScroll = scrollPercent;
                
                milestones.forEach(milestone => {
                    if (scrollPercent >= milestone && !trackedMilestones.has(milestone)) {
                        trackedMilestones.add(milestone);
                        this.trackEvent('Scroll', 'Depth', `${milestone}%`);
                    }
                });
            }
        });
    }
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    // Initialize main portfolio functionality
    window.portfolioManager = new PortfolioManager();
    
    // Initialize performance optimizations
    new PerformanceOptimizer();
    
    // Initialize analytics
    new AnalyticsManager();
    
    console.log('Portfolio initialized successfully!');
});

// ===== ERROR HANDLING =====
window.addEventListener('error', (e) => {
    console.error('Portfolio error:', e.error);
    // Could send error reports to monitoring service
});

// ===== SERVICE WORKER REGISTRATION (Optional) =====
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// ===== EXPORT FOR TESTING =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PortfolioManager, PerformanceOptimizer, AnalyticsManager };
}
