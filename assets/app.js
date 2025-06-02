// Portfolio Data from JSON with updated HubSpot experience
const portfolioData = {
  "profile": {
    "name": "Your Name",
    "title": "AI Marketing Specialist & Supply Chain Professional",
    "email": "your.email@gmail.com",
    "phone": "+1 (555) 123-4567",
    "location": "Your City, State",
    "linkedin": "https://linkedin.com/in/yourprofile",
    "github": "https://github.com/d8tadabbler"
  },
  "experience": [
    {
      "company": "HubSpot",
      "position": "AI Marketing Intern",
      "duration": "Apr 2025 - Present (3 mos)",
      "location": "Remote",
      "achievements": [
        "Designed and executed multi-channel marketing campaigns using HubSpot's AI features",
        "Collaborated with teams to implement data-driven marketing initiatives",
        "Applied AI analytics for audience segmentation and content personalization",
        "Presented findings to clients demonstrating measurable business impact"
      ],
      "skills": ["Digital Marketing", "AI Marketing", "Marketing Analytics", "Campaign Management", "HubSpot"]
    },
    {
      "company": "Personal Development",
      "position": "Career Break",
      "duration": "May 2020 - Apr 2025 (5 yrs)",
      "location": "United States",
      "achievements": [
        "Provided primary care for family member while pursuing education",
        "Completed Bachelor's degree in Business Administration - Management",
        "Developed advanced empathy and project management skills",
        "Maintained commitment to continuous learning and personal achievement"
      ],
      "skills": ["Project Management", "Healthcare Communication", "Academic Excellence", "Adaptability"]
    }
  ],
  "skills": {
    "technical": [
      {"name": "AI Marketing Tools", "level": 85},
      {"name": "HubSpot Platform", "level": 90},
      {"name": "Marketing Analytics", "level": 80},
      {"name": "Supply Chain Management", "level": 95},
      {"name": "CNC Machinery", "level": 85},
      {"name": "TMS/WMS Systems", "level": 90},
      {"name": "Data Analysis", "level": 85}
    ],
    "soft": [
      {"name": "Project Management", "level": 95},
      {"name": "Client Relations", "level": 90},
      {"name": "Cross-cultural Communication", "level": 95},
      {"name": "Process Optimization", "level": 90},
      {"name": "Team Leadership", "level": 85}
    ]
  }
};

// DOM Elements
let hamburger, navMenu, navLinks, contactForm, adminPanel;
let isAdminAuthenticated = false;
let adminData = {};

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    console.log('Initializing Portfolio Application...');
    
    // Get DOM elements
    getDOMElements();
    
    // Load saved admin data
    loadAdminData();
    
    // Set up event listeners
    setupEventListeners();
    
    // Initialize animations
    initializeAnimations();
    
    // Populate content with data
    populateContent();
    
    // Initialize skills animation observer
    initializeSkillsAnimation();
    
    console.log('Portfolio application initialized successfully');
}

function getDOMElements() {
    hamburger = document.querySelector('.hamburger');
    navMenu = document.querySelector('.nav-menu');
    navLinks = document.querySelectorAll('.nav-link');
    contactForm = document.getElementById('contactForm');
    adminPanel = document.getElementById('adminPanel');
}

// Event Listeners Setup
function setupEventListeners() {
    // Mobile navigation
    if (hamburger) {
        hamburger.addEventListener('click', toggleMobileNav);
    }
    
    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            closeMobileNav();
            handleSmoothScroll(e);
        });
    });
    
    // Contact form
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    // Navbar scroll effect
    window.addEventListener('scroll', handleNavbarScroll);
    
    // Close admin panel when clicking outside
    if (adminPanel) {
        adminPanel.addEventListener('click', (e) => {
            if (e.target === adminPanel) {
                hideAdminPanel();
            }
        });
    }
    
    // Keyboard shortcuts
    document.addEventListener('keydown', handleKeyboardShortcuts);
    
    // Smooth scrolling for all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', handleSmoothScroll);
    });
}

// Mobile Navigation
function toggleMobileNav() {
    if (!navMenu || !hamburger) return;
    
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

function closeMobileNav() {
    if (!navMenu || !hamburger) return;
    
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
}

// Smooth Scrolling
function handleSmoothScroll(e) {
    const href = e.currentTarget.getAttribute('href');
    if (!href || !href.startsWith('#')) return;
    
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// Navbar Scroll Effect
function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 17, 40, 0.98)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(10, 17, 40, 0.95)';
        navbar.style.boxShadow = 'none';
    }
}

// Contact Form Handling
async function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Validation
    if (!name || !email || !subject || !message) {
        showNotification('Please fill in all fields', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }
    
    // Show loading state
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitButton.disabled = true;
    
    try {
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
        contactForm.reset();
        
        // Track form submission
        trackEvent('contact_form_submit', {
            has_name: !!name,
            has_subject: !!subject,
            subject_type: subject
        });
        
    } catch (error) {
        showNotification('Error sending message. Please try again.', 'error');
        console.error('Contact form error:', error);
    } finally {
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
    }
}

// Admin Panel Functions
function showAdminPanel() {
    if (!adminPanel) return;
    
    adminPanel.classList.remove('hidden');
    document.getElementById('adminLogin').classList.remove('hidden');
    document.getElementById('adminDashboard').classList.add('hidden');
    
    // Focus on password input
    const passwordInput = document.getElementById('adminPassword');
    if (passwordInput) {
        setTimeout(() => passwordInput.focus(), 100);
    }
}

function hideAdminPanel() {
    if (!adminPanel) return;
    
    adminPanel.classList.add('hidden');
    isAdminAuthenticated = false;
    
    // Clear password input
    const passwordInput = document.getElementById('adminPassword');
    if (passwordInput) {
        passwordInput.value = '';
    }
}

function verifyAdmin() {
    const passwordInput = document.getElementById('adminPassword');
    if (!passwordInput) return;
    
    const password = passwordInput.value;
    
    // Simple password check (in production, use proper authentication)
    if (password === 'admin123' || password === 'portfolio2025') {
        isAdminAuthenticated = true;
        document.getElementById('adminLogin').classList.add('hidden');
        document.getElementById('adminDashboard').classList.remove('hidden');
        populateAdminForm();
        showNotification('Admin access granted', 'success');
    } else {
        showNotification('Incorrect password', 'error');
        passwordInput.value = '';
        passwordInput.focus();
    }
}

function showTab(tabName) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.add('hidden');
    });
    
    // Remove active class from all tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected tab content
    const targetTab = document.getElementById(tabName + 'Tab');
    if (targetTab) {
        targetTab.classList.remove('hidden');
    }
    
    // Add active class to clicked button
    event.target.classList.add('active');
}

function populateAdminForm() {
    const data = getStoredAdminData();
    
    // Profile tab
    const profilePicture = document.getElementById('adminProfilePicture');
    const name = document.getElementById('adminName');
    const location = document.getElementById('adminLocation');
    
    if (profilePicture) profilePicture.value = data.profilePicture || '';
    if (name) name.value = data.name || portfolioData.profile.name;
    if (location) location.value = data.location || portfolioData.profile.location;
    
    // Social tab
    const linkedin = document.getElementById('adminLinkedin');
    const github = document.getElementById('adminGithub');
    
    if (linkedin) linkedin.value = data.linkedin || portfolioData.profile.linkedin;
    if (github) github.value = data.github || portfolioData.profile.github;
    
    // Contact tab
    const email = document.getElementById('adminEmail');
    const phone = document.getElementById('adminPhone');
    
    if (email) email.value = data.email || portfolioData.profile.email;
    if (phone) phone.value = data.phone || portfolioData.profile.phone;
}

function saveChanges() {
    if (!isAdminAuthenticated) {
        showNotification('Authentication required', 'error');
        return;
    }
    
    const newData = {
        profilePicture: document.getElementById('adminProfilePicture')?.value || '',
        name: document.getElementById('adminName')?.value || '',
        location: document.getElementById('adminLocation')?.value || '',
        linkedin: document.getElementById('adminLinkedin')?.value || '',
        github: document.getElementById('adminGithub')?.value || '',
        email: document.getElementById('adminEmail')?.value || '',
        phone: document.getElementById('adminPhone')?.value || ''
    };
    
    // Validate required fields
    if (!newData.name || !newData.email) {
        showNotification('Name and email are required', 'error');
        return;
    }
    
    if (!isValidEmail(newData.email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }
    
    // Save data
    saveAdminData(newData);
    updatePortfolioContent(newData);
    
    showNotification('Portfolio updated successfully!', 'success');
    hideAdminPanel();
}

function previewChanges() {
    if (!isAdminAuthenticated) {
        showNotification('Authentication required', 'error');
        return;
    }
    
    const previewData = {
        profilePicture: document.getElementById('adminProfilePicture')?.value || '',
        name: document.getElementById('adminName')?.value || '',
        location: document.getElementById('adminLocation')?.value || '',
        linkedin: document.getElementById('adminLinkedin')?.value || '',
        github: document.getElementById('adminGithub')?.value || '',
        email: document.getElementById('adminEmail')?.value || '',
        phone: document.getElementById('adminPhone')?.value || ''
    };
    
    updatePortfolioContent(previewData);
    showNotification('Preview updated - changes not saved yet', 'info');
}

// Data Management
function getStoredAdminData() {
    // In a real application, this would use localStorage or a database
    // For this sandbox environment, we'll use a simple object
    return adminData;
}

function saveAdminData(data) {
    try {
        adminData = { ...adminData, ...data };
        // In a real application, this would save to localStorage or send to server
        console.log('Admin data saved:', adminData);
        return true;
    } catch (error) {
        console.error('Error saving admin data:', error);
        showNotification('Error saving data', 'error');
        return false;
    }
}

function loadAdminData() {
    // In a real application, this would load from localStorage or server
    if (Object.keys(adminData).length > 0) {
        updatePortfolioContent(adminData);
    }
}

// Content Updates
function populateContent() {
    // Update profile information with default data
    updatePortfolioContent(portfolioData.profile);
}

function updatePortfolioContent(data) {
    // Update hero name
    const profileName = document.getElementById('profileName');
    if (profileName && data.name) {
        profileName.textContent = data.name;
    }
    
    // Update profile image
    const profileImg = document.getElementById('profileImg');
    if (profileImg && data.profilePicture) {
        profileImg.src = data.profilePicture;
        profileImg.alt = `${data.name || 'Professional'} Profile Photo`;
    }
    
    // Update location
    const profileLocation = document.getElementById('profileLocation');
    if (profileLocation && data.location) {
        profileLocation.textContent = data.location;
    }
    
    // Update all contact information
    updateContactElements(data);
    
    // Update social links
    updateSocialLinks(data);
    
    // Store data for persistence
    adminData = { ...adminData, ...data };
}

function updateContactElements(data) {
    // Email links
    const emailElements = ['emailLink', 'contactEmail'];
    emailElements.forEach(id => {
        const element = document.getElementById(id);
        if (element && data.email) {
            element.href = `mailto:${data.email}`;
            if (element.textContent && element.textContent.includes('@')) {
                element.textContent = data.email;
            }
        }
    });
    
    // Phone links
    const phoneElements = ['phoneLink', 'contactPhone'];
    phoneElements.forEach(id => {
        const element = document.getElementById(id);
        if (element && data.phone) {
            element.href = `tel:${data.phone}`;
            if (element.textContent && (element.textContent.includes('(') || element.textContent.includes('-'))) {
                element.textContent = data.phone;
            }
        }
    });
    
    // Location
    const locationElement = document.getElementById('contactLocation');
    if (locationElement && data.location) {
        locationElement.textContent = data.location;
    }
}

function updateSocialLinks(data) {
    // LinkedIn links
    const linkedinElements = ['linkedinLink', 'contactLinkedin'];
    linkedinElements.forEach(id => {
        const element = document.getElementById(id);
        if (element && data.linkedin) {
            element.href = data.linkedin;
        }
    });
    
    // GitHub links
    const githubElements = ['githubLink', 'contactGithub'];
    githubElements.forEach(id => {
        const element = document.getElementById(id);
        if (element && data.github) {
            element.href = data.github;
        }
    });
}

// Skills Animation
function initializeSkillsAnimation() {
    const skillsSection = document.getElementById('skills');
    if (!skillsSection) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars(entry.target);
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, {
        threshold: 0.3
    });
    
    observer.observe(skillsSection);
}

function animateSkillBars(skillsSection) {
    const skillBars = skillsSection.querySelectorAll('.skill-progress');
    skillBars.forEach((bar, index) => {
        setTimeout(() => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width;
        }, index * 200);
    });
}

// General Animations
function initializeAnimations() {
    // Fade in animation for sections
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe animated elements
    const animatedElements = document.querySelectorAll(
        '.timeline-item, .skill-category, .contact-method, .cert-item, .expertise-item, .education-item'
    );
    
    animatedElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(element);
    });
}

// Utility Functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type = 'info') {
    const container = document.getElementById('notificationContainer');
    if (!container) {
        // Create notification container if it doesn't exist
        const newContainer = document.createElement('div');
        newContainer.id = 'notificationContainer';
        document.body.appendChild(newContainer);
        return showNotification(message, type);
    }
    
    // Remove existing notifications of the same type
    const existingNotifications = container.querySelectorAll(`.notification.${type}`);
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    const icon = getNotificationIcon(type);
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 12px;">
            <i class="${icon}" style="font-size: 18px;"></i>
            <span>${message}</span>
            <button onclick="this.parentElement.parentElement.remove()" style="
                background: none; 
                border: none; 
                color: inherit; 
                font-size: 18px; 
                cursor: pointer; 
                margin-left: auto;
                width: 24px;
                height: 24px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: background 0.2s ease;
            " onmouseover="this.style.background='rgba(255,255,255,0.2)'" onmouseout="this.style.background='none'">×</button>
        </div>
    `;
    
    container.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOut 0.3s ease forwards';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

function getNotificationIcon(type) {
    switch (type) {
        case 'success': return 'fas fa-check-circle';
        case 'error': return 'fas fa-exclamation-circle';
        case 'warning': return 'fas fa-exclamation-triangle';
        case 'info': return 'fas fa-info-circle';
        default: return 'fas fa-info-circle';
    }
}

// Keyboard Shortcuts
function handleKeyboardShortcuts(e) {
    // Admin panel shortcuts
    if (e.ctrlKey && e.altKey && e.key === 'a') {
        e.preventDefault();
        showAdminPanel();
    }
    
    // Close admin panel with Escape
    if (e.key === 'Escape' && !adminPanel?.classList.contains('hidden')) {
        hideAdminPanel();
    }
    
    // Quick navigation shortcuts
    if (e.ctrlKey && e.key >= '1' && e.key <= '6') {
        e.preventDefault();
        const sections = ['home', 'about', 'experience', 'skills', 'education', 'contact'];
        const targetSection = document.getElementById(sections[parseInt(e.key) - 1]);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

// Analytics and Tracking
function trackEvent(eventName, properties = {}) {
    // Placeholder for analytics tracking
    console.log('Event tracked:', eventName, properties);
    
    // In a real implementation, you would send this to your analytics service
    // Example: gtag('event', eventName, properties);
}

// Social Media Tracking
function trackSocialClick(platform) {
    trackEvent('social_link_click', { platform });
}

// Performance Monitoring
function logPerformanceMetrics() {
    if ('performance' in window) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const navigation = performance.getEntriesByType('navigation')[0];
                if (navigation) {
                    const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
                    console.log(`Portfolio loaded in ${loadTime.toFixed(2)}ms`);
                    
                    trackEvent('page_load_time', {
                        load_time: Math.round(loadTime)
                    });
                }
            }, 0);
        });
    }
}

// Initialize performance monitoring
logPerformanceMetrics();

// Error Handling
window.addEventListener('error', (e) => {
    console.error('Application error:', e.error);
    trackEvent('javascript_error', {
        message: e.message,
        filename: e.filename,
        line: e.lineno
    });
});

// Unhandled Promise Rejections
window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
    trackEvent('promise_rejection', {
        reason: e.reason?.toString() || 'Unknown'
    });
});

// Page Visibility API
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        trackEvent('page_hidden');
    } else {
        trackEvent('page_visible');
    }
});

// Add social link tracking
document.addEventListener('DOMContentLoaded', () => {
    // Track social media clicks
    document.querySelectorAll('.social-link, .enhanced-social-link').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.href;
            let platform = 'unknown';
            
            if (href.includes('linkedin')) platform = 'linkedin';
            else if (href.includes('github')) platform = 'github';
            else if (href.includes('mailto')) platform = 'email';
            else if (href.includes('tel')) platform = 'phone';
            
            trackSocialClick(platform);
        });
    });
    
    // Initialize scroll animations for timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.2}s`;
    });
});

// Global functions for HTML onclick handlers
window.showAdminPanel = showAdminPanel;
window.hideAdminPanel = hideAdminPanel;
window.verifyAdmin = verifyAdmin;
window.showTab = showTab;
window.saveChanges = saveChanges;
window.previewChanges = previewChanges;

// Enhanced scroll behavior for better UX
function smoothScrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add smooth scroll to top on logo click
document.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('.nav-brand');
    if (logo) {
        logo.addEventListener('click', (e) => {
            e.preventDefault();
            smoothScrollToTop();
        });
        logo.style.cursor = 'pointer';
    }
});

// Enhanced form validation
function validateContactForm(formData) {
    const errors = [];
    
    if (!formData.get('name')?.trim()) {
        errors.push('Name is required');
    }
    
    if (!formData.get('email')?.trim()) {
        errors.push('Email is required');
    } else if (!isValidEmail(formData.get('email'))) {
        errors.push('Please enter a valid email address');
    }
    
    if (!formData.get('subject')?.trim()) {
        errors.push('Subject is required');
    }
    
    if (!formData.get('message')?.trim()) {
        errors.push('Message is required');
    } else if (formData.get('message').length < 10) {
        errors.push('Message must be at least 10 characters long');
    }
    
    return errors;
}

// Initialize lazy loading for images
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Final initialization
console.log('AI Marketing & Supply Chain Portfolio Application loaded successfully');
console.log('Admin access: Use Ctrl+Alt+A or click the gear icon');
console.log('Default admin password: admin123 or portfolio2025');

// Initialize additional features after DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeLazyLoading();
    
    // Add loading states to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.type === 'submit') {
                // Add loading state to submit buttons
                setTimeout(() => {
                    this.style.opacity = '0.8';
                }, 100);
            }
        });
    });
});