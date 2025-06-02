// ===== PORTFOLIO DATA MANAGEMENT =====
class PortfolioManager {
    constructor() {
        this.adminPassword = 'SupplyChain2025!';
        this.portfolioData = this.loadPortfolioData();
        this.init();
    }

    init() {
        this.setupNavigation();
        this.setupScrollAnimations();
        this.setupAdminPanel();
        this.setupMobileMenu();
        this.loadStoredData();
    }

    loadPortfolioData() {
        const defaultData = {
            profile: {
                name: "John Doe",
                title: "Supply Chain & Logistics Professional | AI-Driven Process Optimization | Sustainability Advocate",
                image: "assets/images/profile.jpg",
                email: "john.doe@example.com",
                phone: "+1 (555) 123-4567",
                location: "New York, NY",
                linkedin: "https://linkedin.com/in/johndoe",
                github: "https://github.com/d8tadabbler"
            },
            about: "As a former Automated Logistics Specialist with extensive experience managing mission-critical military supply systems, I bring proven expertise in optimizing complex, multi-stage operations across global supply chains. Today, I apply that disciplined, results-oriented approach to international freight coordination, semiconductor manufacturing operations, and AI-driven marketing analytics through my current HubSpot internship.",
            experience: [
                {
                    company: "HubSpot",
                    position: "AI Marketing Intern",
                    duration: "Apr 2025 - Present",
                    location: "Remote",
                    type: "Internship",
                    logo: "assets/images/hubspot-logo.png",
                    description: "Contributing to a dynamic, hands-on internship focused on developing and executing AI-driven marketing strategies for real-world clients using HubSpot's digital tools.",
                    achievements: [
                        "Designed and executed multi-channel marketing campaigns tailored to client goals, leveraging HubSpot's AI features",
                        "Collaborated with project teams to implement and optimize data-driven marketing initiatives from concept to completion",
                        "Applied AI and analytics tools for audience segmentation, content personalization, and campaign performance measurement",
                        "Engaged directly with clients to clarify objectives, deliver actionable insights, and recommend strategic solutions",
                        "Presented findings and strategies to clients, mentors, and program stakeholders, demonstrating measurable business impact"
                    ],
                    skills: ["Digital Marketing", "AI Marketing", "Marketing Analytics", "Campaign Management", "Content Marketing", "Customer Segmentation", "Data Analysis", "Client Relations", "Marketing Automation"]
                },
                {
                    company: "Career Break",
                    position: "Professional Development",
                    duration: "May 2020 - Apr 2025",
                    location: "United States",
                    type: "Career Break",
                    description: "Took a purposeful career break to provide primary care for a family member while pursuing a Bachelor's degree in Business Administration – Management.",
                    achievements: [
                        "Managed complex medical appointments and healthcare communications, demonstrating exceptional adaptability and resilience",
                        "Applied project management principles to balance intensive caregiving responsibilities with full-time academic study",
                        "Developed advanced empathy and advocacy skills through daily support and coordination with healthcare professionals",
                        "Maintained commitment to continuous learning and personal achievement despite significant personal challenges"
                    ],
                    skills: ["Project Management", "Healthcare Communication", "Adaptability", "Resilience", "Time Management"]
                },
                {
                    company: "Yong Qi Solutions",
                    position: "Manufacturing Operations Specialist",
                    duration: "Nov 2017 - Jun 2022",
                    location: "Taipei City, Taiwan",
                    type: "Full-time",
                    logo: "assets/images/yongqi-logo.png",
                    description: "Supported manufacturing and assembly operations, supply chain coordination, and onsite installations for industrial clients, including major players in the tech and semiconductor sectors.",
                    achievements: [
                        "Operated CNC machinery and led assembly tasks for complex industrial equipment, ensuring adherence to quality and safety standards",
                        "Coordinated material procurement and tracked inbound/outbound shipments while maintaining production schedules to meet critical project deadlines",
                        "Built strategic supplier partnerships and resolved logistical challenges to support successful equipment installations at client facilities",
                        "Contributed to process improvement initiatives, providing operational insights and feedback to streamline manufacturing workflows"
                    ],
                    skills: ["Supply Chain Management", "Vendor Relations", "Project Management", "Operations Management", "TMS", "WMS", "Assembly/Production", "Process Improvement"]
                }
            ]
        };

        const stored = localStorage.getItem('portfolioData');
        return stored ? { ...defaultData, ...JSON.parse(stored) } : defaultData;
    }

    setupNavigation() {
        const navbar = document.querySelector('.navbar');
        const navLinks = document.querySelectorAll('.nav-link');

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar?.classList.add('scrolled');
            } else {
                navbar?.classList.remove('scrolled');
            }
        });

        // Smooth scrolling for navigation links
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href')?.substring(1);
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
            });
        });
    }

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

        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });
    }

    setupAdminPanel() {
        // Admin panel toggle (Ctrl+Shift+A)
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.shiftKey && e.code === 'KeyA') {
                e.preventDefault();
                this.toggleAdminPanel();
            }
        });

        this.setupAdminForm();
    }

    toggleAdminPanel() {
        const adminPanel = document.getElementById('adminPanel');
        if (adminPanel) {
            const isVisible = adminPanel.style.display === 'block';
            adminPanel.style.display = isVisible ? 'none' : 'block';
            
            if (!isVisible) {
                document.getElementById('adminPassword')?.focus();
            }
        }
    }

    setupAdminForm() {
        const loginBtn = document.getElementById('adminLogin');
        const passwordInput = document.getElementById('adminPassword');
        const adminContent = document.getElementById('adminContent');

        if (loginBtn) {
            loginBtn.addEventListener('click', () => {
                if (passwordInput?.value === this.adminPassword) {
                    if (adminContent) adminContent.style.display = 'block';
                    if (passwordInput) passwordInput.style.display = 'none';
                    if (loginBtn) loginBtn.style.display = 'none';
                    this.populateAdminForm();
                } else {
                    alert('Incorrect password');
                    if (passwordInput) passwordInput.value = '';
                }
            });
        }

        // Save changes functionality
        const saveBtn = document.getElementById('saveChanges');
        if (saveBtn) {
            saveBtn.addEventListener('click', () => {
                this.saveAdminChanges();
            });
        }

        // Close admin panel
        const closeBtn = document.querySelector('.close-admin');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                this.closeAdminPanel();
            });
        }
    }

    populateAdminForm() {
        const profile = this.portfolioData.profile;
        
        const fields = {
            'profileName': profile.name,
            'profileTitle': profile.title,
            'profileEmail': profile.email,
            'profilePhone': profile.phone,
            'profileLocation': profile.location,
            'linkedinUrl': profile.linkedin,
            'githubUrl': profile.github
        };

        Object.entries(fields).forEach(([id, value]) => {
            const element = document.getElementById(id);
            if (element) element.value = value || '';
        });
    }

    saveAdminChanges() {
        const profile = this.portfolioData.profile;
        
        const fields = {
            'profileName': 'name',
            'profileTitle': 'title',
            'profileEmail': 'email',
            'profilePhone': 'phone',
            'profileLocation': 'location',
            'linkedinUrl': 'linkedin',
            'githubUrl': 'github'
        };

        Object.entries(fields).forEach(([inputId, profileKey]) => {
            const element = document.getElementById(inputId);
            if (element) profile[profileKey] = element.value;
        });

        localStorage.setItem('portfolioData', JSON.stringify(this.portfolioData));
        this.updateProfileDisplay();
        
        alert('Changes saved successfully!');
        this.closeAdminPanel();
    }

    updateProfileDisplay() {
        const profile = this.portfolioData.profile;
        
        // Update hero section
        const heroTitle = document.querySelector('.hero-title');
        const heroSubtitle = document.querySelector('.hero-subtitle');
        
        if (heroTitle) heroTitle.textContent = profile.name;
        if (heroSubtitle) heroSubtitle.textContent = profile.title;
        
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

        if (adminPanel) adminPanel.style.display = 'none';
        if (adminContent) adminContent.style.display = 'none';
        if (passwordInput) {
            passwordInput.style.display = 'block';
            passwordInput.value = '';
        }
        if (loginBtn) loginBtn.style.display = 'block';
    }

    setupMobileMenu() {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');

        if (hamburger && navMenu) {
            hamburger.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                hamburger.classList.toggle('active');
            });
        }
    }

    loadStoredData() {
        this.updateProfileDisplay();
    }
}

// Initialize portfolio when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.portfolioManager = new PortfolioManager();
    console.log('Portfolio initialized successfully!');
});

// Error handling
window.addEventListener('error', (e) => {
    console.error('Portfolio error:', e.error);
});

