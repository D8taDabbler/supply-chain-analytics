# Complete Portfolio Deployment Guide
*For d8tadabbler.github.io with Updated HubSpot AI Marketing Experience*

## Overview
This guide provides complete step-by-step instructions for creating and deploying your updated professional portfolio featuring your new HubSpot AI Marketing Intern role, career break period, and complete work history.

## Repository Setup

### Step 1: Create Your Repository
1. Go to [GitHub.com](https://github.com)
2. Click the "+" icon in the top-right corner
3. Select "New repository"
4. Name your repository: `d8tadabbler.github.io`
5. Set visibility to "Public"
6. Initialize with README
7. Click "Create repository"

### Step 2: Enable GitHub Pages
1. Go to your repository Settings
2. Scroll to "Pages" in the left sidebar
3. Under "Source," select "Deploy from a branch"
4. Choose "main" branch and "/ (root)" folder
5. Click "Save"
6. Your site will be available at: https://d8tadabbler.github.io

## File Structure
Create the following directory structure:
```
d8tadabbler.github.io/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── images/
    ├── profile-image.png
    └── hubspot-logo.png
```

## Required Files

### 1. Main HTML File (index.html)
This file contains the complete portfolio structure with:
- Updated experience timeline including HubSpot AI Marketing Intern role
- Career break period (May 2020 - Apr 2025)
- All previous logistics and supply chain positions
- Modern dark theme design
- Interactive timeline
- Skills visualization
- Admin panel for content management

### 2. Styling (css/style.css)
Modern CSS featuring:
- Dark navy theme with teal accents
- Enhanced social link visibility
- Responsive design for all devices
- Smooth animations and transitions
- Professional typography
- Interactive hover effects

### 3. JavaScript Functionality (js/script.js)
Interactive features including:
- Mobile navigation menu
- Smooth scrolling
- Skill bar animations
- Admin panel functionality
- Local storage for content management
- Form validation

### 4. Required Images
- Professional headshot (profile-image.png)
- HubSpot company logo (hubspot-logo.png)

## Key Features Implemented

### Updated Experience Timeline
1. **HubSpot AI Marketing Intern** (Apr 2025 - Present)
   - Multi-channel marketing campaigns using AI features
   - Data-driven marketing initiatives
   - AI analytics for audience segmentation
   - Client relations and strategic solutions

2. **Career Break** (May 2020 - Apr 2025)
   - Primary care for family member
   - Bachelor's degree completion
   - Healthcare communication skills
   - Project management during caregiving

3. **Complete Work History**
   - Manufacturing Operations Specialist (Yong Qi Solutions)
   - Operations Coordinator (Nippon Express)
   - Call Center Representative
   - Commercial Logistics Coordinator (Liberty Global)
   - Administrative Specialist
   - Army Logistics Specialist

### Enhanced Design Elements
- **Dark Theme**: Navy background with teal accents
- **Social Links**: Bright teal with enhanced visibility
- **Interactive Timeline**: Hover effects and animations
- **Skills Bars**: Animated progress indicators
- **Admin Panel**: Password-protected content management

## Deployment Steps

### Method 1: Web Interface (Recommended for Beginners)
1. Create each file using GitHub's web interface
2. Upload files one by one using "Add file" → "Create new file"
3. Copy and paste the provided code for each file
4. Commit changes with descriptive messages

### Method 2: GitHub Desktop
1. Clone your repository to your computer
2. Create the file structure locally
3. Add all files with the provided code
4. Commit and push changes

### Method 3: Command Line
```bash
git clone https://github.com/d8tadabbler/d8tadabbler.github.io.git
cd d8tadabbler.github.io
# Create files and directories
mkdir css js images
# Add your files
git add .
git commit -m "Initial portfolio deployment with HubSpot experience"
git push origin main
```

## Customization Instructions

### Personal Information Updates
Replace these placeholders in index.html:
- "Your Name" → Your actual name
- "your.email@gmail.com" → Your email address
- "+1 (555) 123-4567" → Your phone number
- "Your City, State" → Your location
- Social media URLs

### Admin Panel Access
- Default password: "password123"
- Change in js/script.js, line with `const adminPassword`
- Access via the lock icon in navigation

### Image Requirements
1. **Profile Picture**: 400x400px square format, professional headshot
2. **HubSpot Logo**: Company logo in PNG format
3. Save in `images/` folder with exact filenames

## Testing Checklist
- [ ] All navigation links work
- [ ] Timeline displays correctly
- [ ] Skills animations function
- [ ] Admin panel login works
- [ ] Social links have proper URLs
- [ ] Mobile responsive design
- [ ] Images load correctly
- [ ] Contact information is accurate

## Maintenance
- Update admin password for security
- Add new experiences through admin panel
- Regularly update skills and certifications
- Keep contact information current
- Add new projects and achievements

## Live Website
Once deployed, your portfolio will be available at:
**https://d8tadabbler.github.io**

Changes typically take 5-10 minutes to appear after pushing to GitHub.

## Support
- GitHub Pages Documentation: https://docs.github.com/en/pages
- Web Development Resources: https://developer.mozilla.org/
- Portfolio Design Inspiration: https://www.awwwards.com/

---

*This portfolio showcases your unique transition from traditional logistics to AI-driven marketing, highlighting adaptability and technical growth while maintaining your extensive supply chain expertise.*