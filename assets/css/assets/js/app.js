// Portfolio Data Storage
let portfolioData = {
  "personalInfo": {
    "name": "Supply Chain Professional",
    "title": "Supply Chain & Logistics Professional | AI-Driven Process Optimization | Sustainability Advocate",
    "email": "your.email@example.com",
    "phone": "+1 (555) 123-4567",
    "linkedin": "https://linkedin.com/in/yourprofile",
    "location": "Your City, State",
    "profileImage": ""
  },
  "aboutText": "As a former Automated Logistics Specialist with extensive experience managing mission-critical military systems, I bring proven expertise to international freight coordination, supply chain operations, and AI-driven marketing analytics through my current HubSpot internship. What I Bring to Organizations: Operational Excellence, Technical Innovation, Sustainability Leadership. Following a strategic career transition to complete my Business Administration degree while providing family care, I've returned to the workforce with enhanced focus on AI and digital innovations. My unique blend of military precision, business operations knowledge, and cutting-edge technology enables me to transform theoretical knowledge with practical execution, testing cutting-edge tools in real client campaigns while building expertise in demand forecasting.",
  "skillCategories": [
    {
      "name": "Logistics Management",
      "icon": "truck",
      "skills": [
        {"name": "Supply Chain Operations", "level": 5},
        {"name": "Inventory Management", "level": 5},
        {"name": "International Freight", "level": 4},
        {"name": "Quality Management", "level": 4}
      ]
    },
    {
      "name": "AI & Analytics",
      "icon": "chart",
      "skills": [
        {"name": "HubSpot Marketing Analytics", "level": 4},
        {"name": "Data Analysis", "level": 4},
        {"name": "Process Optimization", "level": 5},
        {"name": "Demand Forecasting", "level": 3}
      ]
    },
    {
      "name": "Leadership",
      "icon": "users",
      "skills": [
        {"name": "Team Management", "level": 5},
        {"name": "Strategic Planning", "level": 4},
        {"name": "Problem Solving", "level": 5},
        {"name": "Operational Excellence", "level": 5}
      ]
    },
    {
      "name": "Sustainability",
      "icon": "leaf",
      "skills": [
        {"name": "Sustainable Operations", "level": 4},
        {"name": "Process Innovation", "level": 4},
        {"name": "Environmental Compliance", "level": 3},
        {"name": "Resource Optimization", "level": 4}
      ]
    }
  ],
  "experience": [
    {
      "title": "HubSpot Marketing Analytics Intern",
      "company": "Current Position",
      "duration": "2024 - Present",
      "description": "Applying AI-driven marketing analytics and testing cutting-edge tools in real client campaigns while building expertise in demand forecasting and digital transformation.",
      "achievements": ["AI-driven analytics implementation", "Client campaign optimization", "Demand forecasting development"]
    },
    {
      "title": "Automated Logistics Specialist",
      "company": "U.S. Military",
      "duration": "Previous Role",
      "description": "Managed mission-critical military systems and international freight coordination with focus on operational excellence and process optimization.",
      "achievements": ["Mission-critical systems management", "International freight coordination", "Process standardization", "Quality compliance"]
    }
  ],
  "education": [
    {
      "degree": "Bachelor of Science, Business Administration — Management",
      "institution": "Western Governors University",
      "year": "Completed",
      "description": "Recipient of Excellence Awards for outstanding academic achievements."
    }
  ],
  "certifications": [
    {"name": "HubSpot Marketing Hub Software", "issuer": "HubSpot", "year": "2024"},
    {"name": "Google Business Intelligence", "issuer": "Google", "year": "2024"},
    {"name": "Google Cybersecurity", "issuer": "Google", "year": "2024"},
    {"name": "Google Data Analytics", "issuer": "Google", "year": "2024"},
    {"name": "Supply Chain Management", "issuer": "Professional Certification", "year": "2024"},
    {"name": "Project Management", "issuer": "Professional Certification", "year": "2024"}
  ],
  "awards": [
    {
      "title": "Excellence Award",
      "issuer": "Western Governors University",
      "date": "Nov 2024",
      "description": "Awarded for an exemplary adaptation of a logistics management system (LMS), praised for its logical organization, clear discussion of problem resolution, and an effective implementation diagram that demonstrated innovative solutions."
    },
    {
      "title": "Excellence Award",
      "issuer": "Western Governors University",
      "date": "Oct 2024",
      "description": "Awarded for delivering advanced, insightful, and comprehensive understanding of key concepts, including emotional and cultural intelligence."
    }
  ],
  "socialLinks": {
    "github": "",
    "twitter": "",
    "facebook": "",
    "instagram": "",
    "website": ""
  }
};

// Application State
let isAdminMode = false;
const ADMIN_PASSWORD = "admin123";

// Icon SVGs
const ICONS = {
  truck: `<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM21 17a2 2 0 11-4 0 2 2 0 014 0zM13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h8zm0 0h6V9a1 1 0 00-1-1h-2l-2 2z"></path>
  </svg>`,
  chart: `<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
  </svg>`,
  users: `<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a4 4 0 11-8 0 4 4 0 018 0z"></path>
  </svg>`,
  leaf: `<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
  </svg>`,
  certificate: `<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
  </svg>`,
  award: `<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
  </svg>`
};

// DOM Elements
const adminBtn = document.getElementById('adminBtn');
const portfolioView = document.getElementById('portfolioView');
const adminView = document.getElementById('adminView');
const loginModal = document.getElementById('loginModal');

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    renderPortfolio();
    setupEventListeners();
    setupSmoothScrolling();
    setupScrollAnimations();
});

// Event Listeners Setup
function setupEventListeners() {
    // Admin button
    adminBtn.addEventListener('click', showLoginModal);
    
    // Login form
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
    document.getElementById('cancelLogin').addEventListener('click', hideLoginModal);
    
    // Logout button
    document.getElementById('logoutBtn').addEventListener('click', logout);
    
    // Tab navigation
    setupTabNavigation();
    
    // Form submissions
    setupFormHandlers();
    
    // Image upload
    setupImageUpload();
}

// Smooth Scrolling Navigation
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll Animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                
                // Animate skill bars
                const skillBars = entry.target.querySelectorAll('.skill-progress');
                skillBars.forEach(bar => {
                    const width = bar.style.width;
                    bar.style.width = '0%';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 300);
                });
            }
        });
    }, observerOptions);

    // Observe sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Portfolio Rendering
function renderPortfolio() {
    renderPersonalInfo();
    renderAbout();
    renderSkills();
    renderExperience();
    renderEducation();
    renderCertifications();
    renderAwards();
    renderSocialLinks();
}

function renderPersonalInfo() {
    const { personalInfo } = portfolioData;
    
    document.getElementById('profileName').textContent = personalInfo.name;
    document.getElementById('profileTitle').textContent = personalInfo.title;
    document.getElementById('profileEmail').textContent = personalInfo.email;
    document.getElementById('profilePhone').textContent = personalInfo.phone;
    document.getElementById('profileLocation').textContent = personalInfo.location;
    
    // Update contact section
    document.getElementById('contactEmail').textContent = personalInfo.email;
    document.getElementById('contactPhone').textContent = personalInfo.phone;
    
    const linkedinLink = document.getElementById('profileLinkedin');
    const contactLinkedinLink = document.getElementById('contactLinkedin');
    if (personalInfo.linkedin) {
        linkedinLink.href = personalInfo.linkedin;
        contactLinkedinLink.href = personalInfo.linkedin;
    }
    
    const profileImage = document.getElementById('profileImage');
    if (personalInfo.profileImage) {
        profileImage.src = personalInfo.profileImage;
    }
}

function renderAbout() {
    document.getElementById('aboutText').textContent = portfolioData.aboutText;
}

function renderSkills() {
    const skillsList = document.getElementById('skillsList');
    skillsList.innerHTML = '';
    
    portfolioData.skillCategories.forEach(category => {
        const categoryElement = document.createElement('div');
        categoryElement.className = 'skill-category';
        
        categoryElement.innerHTML = `
            <div class="skill-category-header">
                <div class="skill-category-icon">
                    ${ICONS[category.icon] || ICONS.chart}
                </div>
                <h3 class="skill-category-title">${category.name}</h3>
            </div>
            <div class="skills-list">
                ${category.skills.map(skill => {
                    const levelText = ['', 'Beginner', 'Basic', 'Intermediate', 'Advanced', 'Expert'][skill.level];
                    const percentage = (skill.level / 5) * 100;
                    
                    return `
                        <div class="skill-item">
                            <div class="skill-header">
                                <span class="skill-name">${skill.name}</span>
                                <span class="skill-level">${levelText}</span>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-progress" style="width: ${percentage}%"></div>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
        
        skillsList.appendChild(categoryElement);
    });
}

function renderExperience() {
    const experienceList = document.getElementById('experienceList');
    experienceList.innerHTML = '';
    
    portfolioData.experience.forEach(exp => {
        const expItem = document.createElement('div');
        expItem.className = 'timeline-item';
        expItem.innerHTML = `
            <div class="timeline-content">
                <div class="timeline-header">
                    <div class="timeline-title">${exp.title}</div>
                    <div class="timeline-subtitle">${exp.company}</div>
                    <div class="timeline-meta">${exp.duration}</div>
                </div>
                <div class="timeline-description">${exp.description}</div>
                ${exp.achievements ? `
                    <ul style="margin-top: 1rem; padding-left: 1rem;">
                        ${exp.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                    </ul>
                ` : ''}
            </div>
        `;
        experienceList.appendChild(expItem);
    });
}

function renderEducation() {
    const educationList = document.getElementById('educationList');
    educationList.innerHTML = '';
    
    portfolioData.education.forEach(edu => {
        const eduItem = document.createElement('div');
        eduItem.className = 'timeline-item';
        eduItem.innerHTML = `
            <div class="timeline-content">
                <div class="timeline-header">
                    <div class="timeline-title">${edu.degree}</div>
                    <div class="timeline-subtitle">${edu.institution}</div>
                    <div class="timeline-meta">${edu.year}</div>
                </div>
                ${edu.description ? `<div class="timeline-description">${edu.description}</div>` : ''}
            </div>
        `;
        educationList.appendChild(eduItem);
    });
}

function renderCertifications() {
    const certificationsList = document.getElementById('certificationsList');
    certificationsList.innerHTML = '';
    
    portfolioData.certifications.forEach(cert => {
        const certItem = document.createElement('div');
        certItem.className = 'grid-item';
        certItem.innerHTML = `
            <div class="grid-item-header">
                <div class="grid-item-icon">
                    ${ICONS.certificate}
                </div>
            </div>
            <div class="grid-item-title">${cert.name}</div>
            <div class="grid-item-subtitle">${cert.issuer}</div>
            <div class="grid-item-meta">${cert.year}</div>
        `;
        certificationsList.appendChild(certItem);
    });
}

function renderAwards() {
    const awardsList = document.getElementById('awardsList');
    awardsList.innerHTML = '';
    
    portfolioData.awards.forEach(award => {
        const awardItem = document.createElement('div');
        awardItem.className = 'timeline-item';
        awardItem.innerHTML = `
            <div class="timeline-content">
                <div class="timeline-header">
                    <div class="timeline-title">${award.title}</div>
                    <div class="timeline-subtitle">${award.issuer}</div>
                    <div class="timeline-meta">${award.date}</div>
                </div>
                <div class="timeline-description">${award.description}</div>
            </div>
        `;
        awardsList.appendChild(awardItem);
    });
}

function renderSocialLinks() {
    const socialLinks = document.getElementById('socialLinks');
    socialLinks.innerHTML = '';
    
    const socialPlatforms = {
        github: { name: 'GitHub', icon: `<svg class="icon" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>` },
        twitter: { name: 'Twitter', icon: `<svg class="icon" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>` },
        facebook: { name: 'Facebook', icon: `<svg class="icon" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>` },
        instagram: { name: 'Instagram', icon: `<svg class="icon" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>` },
        website: { name: 'Website', icon: `<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>` }
    };
    
    Object.entries(portfolioData.socialLinks).forEach(([platform, url]) => {
        if (url && socialPlatforms[platform]) {
            const link = document.createElement('a');
            link.href = url;
            link.target = '_blank';
            link.className = 'social-link';
            link.innerHTML = socialPlatforms[platform].icon;
            link.title = socialPlatforms[platform].name;
            socialLinks.appendChild(link);
        }
    });
}

// Login/Logout Functions
function showLoginModal() {
    loginModal.classList.remove('hidden');
    document.getElementById('adminPassword').focus();
}

function hideLoginModal() {
    loginModal.classList.add('hidden');
    document.getElementById('adminPassword').value = '';
    document.getElementById('loginError').classList.add('hidden');
}

function handleLogin(e) {
    e.preventDefault();
    const password = document.getElementById('adminPassword').value;
    
    if (password === ADMIN_PASSWORD) {
        isAdminMode = true;
        hideLoginModal();
        showAdminView();
        populateAdminForms();
    } else {
        const errorElement = document.getElementById('loginError');
        errorElement.textContent = 'Invalid password. Please try again.';
        errorElement.classList.remove('hidden');
    }
}

function logout() {
    isAdminMode = false;
    showPortfolioView();
}

function showAdminView() {
    portfolioView.classList.add('hidden');
    adminView.classList.remove('hidden');
    adminBtn.style.display = 'none';
}

function showPortfolioView() {
    adminView.classList.add('hidden');
    portfolioView.classList.remove('hidden');
    adminBtn.style.display = 'block';
}

// Tab Navigation
function setupTabNavigation() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.dataset.tab;
            
            // Remove active class from all tabs
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked tab
            button.classList.add('active');
            document.getElementById(`${targetTab}Tab`).classList.add('active');
        });
    });
}

// Form Handlers
function setupFormHandlers() {
    // Profile form
    document.getElementById('profileForm').addEventListener('submit', handleProfileSubmit);
    
    // Contact form
    document.getElementById('contactForm').addEventListener('submit', handleContactSubmit);
    
    // Social form
    document.getElementById('socialForm').addEventListener('submit', handleSocialSubmit);
    
    // About form
    document.getElementById('aboutForm').addEventListener('submit', handleAboutSubmit);
    
    // Skills form
    document.getElementById('addSkillForm').addEventListener('submit', handleAddSkill);
    
    // Experience form
    document.getElementById('addExperienceForm').addEventListener('submit', handleAddExperience);
    
    // Education form
    document.getElementById('addEducationForm').addEventListener('submit', handleAddEducation);
    
    // Certifications form
    document.getElementById('addCertificationForm').addEventListener('submit', handleAddCertification);
    
    // Awards form
    document.getElementById('addAwardForm').addEventListener('submit', handleAddAward);
}

function handleProfileSubmit(e) {
    e.preventDefault();
    portfolioData.personalInfo.name = document.getElementById('editName').value;
    portfolioData.personalInfo.title = document.getElementById('editTitle').value;
    
    renderPersonalInfo();
    showSuccessMessage('Profile updated successfully!');
}

function handleContactSubmit(e) {
    e.preventDefault();
    portfolioData.personalInfo.email = document.getElementById('editEmail').value;
    portfolioData.personalInfo.phone = document.getElementById('editPhone').value;
    portfolioData.personalInfo.linkedin = document.getElementById('editLinkedin').value;
    portfolioData.personalInfo.location = document.getElementById('editLocation').value;
    
    renderPersonalInfo();
    showSuccessMessage('Contact information updated successfully!');
}

function handleSocialSubmit(e) {
    e.preventDefault();
    portfolioData.socialLinks.github = document.getElementById('editGithub').value;
    portfolioData.socialLinks.twitter = document.getElementById('editTwitter').value;
    portfolioData.socialLinks.facebook = document.getElementById('editFacebook').value;
    portfolioData.socialLinks.instagram = document.getElementById('editInstagram').value;
    portfolioData.socialLinks.website = document.getElementById('editWebsite').value;
    
    renderSocialLinks();
    showSuccessMessage('Social links updated successfully!');
}

function handleAboutSubmit(e) {
    e.preventDefault();
    portfolioData.aboutText = document.getElementById('editAbout').value;
    
    renderAbout();
    showSuccessMessage('About section updated successfully!');
}

function handleAddSkill(e) {
    e.preventDefault();
    const name = document.getElementById('newSkillName').value;
    const level = parseInt(document.getElementById('newSkillLevel').value);
    
    // Add to first category for simplicity
    if (portfolioData.skillCategories.length > 0) {
        portfolioData.skillCategories[0].skills.push({ name, level });
    }
    
    document.getElementById('addSkillForm').reset();
    renderSkills();
    renderSkillsEditor();
    showSuccessMessage('Skill added successfully!');
}

function handleAddExperience(e) {
    e.preventDefault();
    const experience = {
        title: document.getElementById('newExpTitle').value,
        company: document.getElementById('newExpCompany').value,
        duration: document.getElementById('newExpDuration').value,
        description: document.getElementById('newExpDescription').value
    };
    
    portfolioData.experience.unshift(experience);
    
    document.getElementById('addExperienceForm').reset();
    renderExperience();
    renderExperienceEditor();
    showSuccessMessage('Experience added successfully!');
}

function handleAddEducation(e) {
    e.preventDefault();
    const education = {
        degree: document.getElementById('newEduDegree').value,
        institution: document.getElementById('newEduInstitution').value,
        year: document.getElementById('newEduYear').value,
        description: document.getElementById('newEduDescription').value
    };
    
    portfolioData.education.unshift(education);
    
    document.getElementById('addEducationForm').reset();
    renderEducation();
    renderEducationEditor();
    showSuccessMessage('Education added successfully!');
}

function handleAddCertification(e) {
    e.preventDefault();
    const certification = {
        name: document.getElementById('newCertName').value,
        issuer: document.getElementById('newCertIssuer').value,
        year: document.getElementById('newCertYear').value
    };
    
    portfolioData.certifications.unshift(certification);
    
    document.getElementById('addCertificationForm').reset();
    renderCertifications();
    renderCertificationsEditor();
    showSuccessMessage('Certification added successfully!');
}

function handleAddAward(e) {
    e.preventDefault();
    const award = {
        title: document.getElementById('newAwardTitle').value,
        issuer: document.getElementById('newAwardIssuer').value,
        date: document.getElementById('newAwardDate').value,
        description: document.getElementById('newAwardDescription').value
    };
    
    portfolioData.awards.unshift(award);
    
    document.getElementById('addAwardForm').reset();
    renderAwards();
    renderAwardsEditor();
    showSuccessMessage('Award added successfully!');
}

// Image Upload
function setupImageUpload() {
    const fileInput = document.getElementById('profileImageUpload');
    const preview = document.getElementById('imagePreview');
    
    fileInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const imageUrl = e.target.result;
                portfolioData.personalInfo.profileImage = imageUrl;
                
                // Show preview
                preview.innerHTML = `<img src="${imageUrl}" alt="Profile Preview" style="max-width: 200px; max-height: 200px; border-radius: 12px; border: 1px solid var(--color-border);">`;
                
                // Update public view
                renderPersonalInfo();
            };
            reader.readAsDataURL(file);
        }
    });
}

// Success Message
function showSuccessMessage(message) {
    // Create success notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 2rem;
        right: 2rem;
        background: var(--color-success);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: var(--radius-base);
        box-shadow: var(--shadow-lg);
        z-index: 10001;
        animation: slideInRight 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Admin Form Population
function populateAdminForms() {
    const { personalInfo } = portfolioData;
    
    // Profile tab
    document.getElementById('editName').value = personalInfo.name;
    document.getElementById('editTitle').value = personalInfo.title;
    
    // Contact tab
    document.getElementById('editEmail').value = personalInfo.email;
    document.getElementById('editPhone').value = personalInfo.phone;
    document.getElementById('editLinkedin').value = personalInfo.linkedin;
    document.getElementById('editLocation').value = personalInfo.location;
    
    // Social tab
    document.getElementById('editGithub').value = portfolioData.socialLinks.github;
    document.getElementById('editTwitter').value = portfolioData.socialLinks.twitter;
    document.getElementById('editFacebook').value = portfolioData.socialLinks.facebook;
    document.getElementById('editInstagram').value = portfolioData.socialLinks.instagram;
    document.getElementById('editWebsite').value = portfolioData.socialLinks.website;
    
    // About tab
    document.getElementById('editAbout').value = portfolioData.aboutText;
    
    // Render editors
    renderSkillsEditor();
    renderExperienceEditor();
    renderEducationEditor();
    renderCertificationsEditor();
    renderAwardsEditor();
}

// Admin Editors
function renderSkillsEditor() {
    const skillsEditList = document.getElementById('skillsEditList');
    skillsEditList.innerHTML = '';
    
    portfolioData.skillCategories.forEach((category, categoryIndex) => {
        category.skills.forEach((skill, skillIndex) => {
            const levelText = ['', 'Beginner', 'Basic', 'Intermediate', 'Advanced', 'Expert'][skill.level];
            const skillItem = document.createElement('div');
            skillItem.className = 'skill-edit-item';
            skillItem.innerHTML = `
                <span class="skill-edit-name">${skill.name}</span>
                <span class="skill-edit-level">${levelText}</span>
                <div class="skill-edit-actions">
                    <button class="btn btn--sm btn--danger" onclick="removeSkill(${categoryIndex}, ${skillIndex})">Remove</button>
                </div>
            `;
            skillsEditList.appendChild(skillItem);
        });
    });
}

function renderExperienceEditor() {
    const experienceEditList = document.getElementById('experienceEditList');
    experienceEditList.innerHTML = '';
    
    portfolioData.experience.forEach((exp, index) => {
        const expItem = document.createElement('div');
        expItem.className = 'edit-item';
        expItem.innerHTML = `
            <div class="edit-item-header">
                <div class="edit-item-content">
                    <div class="edit-item-title">${exp.title}</div>
                    <div class="edit-item-subtitle">${exp.company}</div>
                    <div class="edit-item-meta">${exp.duration}</div>
                    <div class="edit-item-description">${exp.description}</div>
                </div>
            </div>
            <div class="edit-item-actions">
                <button class="btn btn--sm btn--danger" onclick="removeExperience(${index})">Remove</button>
            </div>
        `;
        experienceEditList.appendChild(expItem);
    });
}

function renderEducationEditor() {
    const educationEditList = document.getElementById('educationEditList');
    educationEditList.innerHTML = '';
    
    portfolioData.education.forEach((edu, index) => {
        const eduItem = document.createElement('div');
        eduItem.className = 'edit-item';
        eduItem.innerHTML = `
            <div class="edit-item-header">
                <div class="edit-item-content">
                    <div class="edit-item-title">${edu.degree}</div>
                    <div class="edit-item-subtitle">${edu.institution}</div>
                    <div class="edit-item-meta">${edu.year}</div>
                    ${edu.description ? `<div class="edit-item-description">${edu.description}</div>` : ''}
                </div>
            </div>
            <div class="edit-item-actions">
                <button class="btn btn--sm btn--danger" onclick="removeEducation(${index})">Remove</button>
            </div>
        `;
        educationEditList.appendChild(eduItem);
    });
}

function renderCertificationsEditor() {
    const certificationsEditList = document.getElementById('certificationsEditList');
    certificationsEditList.innerHTML = '';
    
    portfolioData.certifications.forEach((cert, index) => {
        const certItem = document.createElement('div');
        certItem.className = 'edit-item';
        certItem.innerHTML = `
            <div class="edit-item-header">
                <div class="edit-item-content">
                    <div class="edit-item-title">${cert.name}</div>
                    <div class="edit-item-subtitle">${cert.issuer}</div>
                    <div class="edit-item-meta">${cert.year}</div>
                </div>
            </div>
            <div class="edit-item-actions">
                <button class="btn btn--sm btn--danger" onclick="removeCertification(${index})">Remove</button>
            </div>
        `;
        certificationsEditList.appendChild(certItem);
    });
}

function renderAwardsEditor() {
    const awardsEditList = document.getElementById('awardsEditList');
    awardsEditList.innerHTML = '';
    
    portfolioData.awards.forEach((award, index) => {
        const awardItem = document.createElement('div');
        awardItem.className = 'edit-item';
        awardItem.innerHTML = `
            <div class="edit-item-header">
                <div class="edit-item-content">
                    <div class="edit-item-title">${award.title}</div>
                    <div class="edit-item-subtitle">${award.issuer}</div>
                    <div class="edit-item-meta">${award.date}</div>
                    <div class="edit-item-description">${award.description}</div>
                </div>
            </div>
            <div class="edit-item-actions">
                <button class="btn btn--sm btn--danger" onclick="removeAward(${index})">Remove</button>
            </div>
        `;
        awardsEditList.appendChild(awardItem);
    });
}

// Remove Functions
function removeSkill(categoryIndex, skillIndex) {
    if (confirm('Are you sure you want to remove this skill?')) {
        portfolioData.skillCategories[categoryIndex].skills.splice(skillIndex, 1);
        renderSkills();
        renderSkillsEditor();
    }
}

function removeExperience(index) {
    if (confirm('Are you sure you want to remove this experience?')) {
        portfolioData.experience.splice(index, 1);
        renderExperience();
        renderExperienceEditor();
    }
}

function removeEducation(index) {
    if (confirm('Are you sure you want to remove this education entry?')) {
        portfolioData.education.splice(index, 1);
        renderEducation();
        renderEducationEditor();
    }
}

function removeCertification(index) {
    if (confirm('Are you sure you want to remove this certification?')) {
        portfolioData.certifications.splice(index, 1);
        renderCertifications();
        renderCertificationsEditor();
    }
}

function removeAward(index) {
    if (confirm('Are you sure you want to remove this award?')) {
        portfolioData.awards.splice(index, 1);
        renderAwards();
        renderAwardsEditor();
    }
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);