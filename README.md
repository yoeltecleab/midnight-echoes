<style>
/* Base Styles */
body {
    font-family: 'Inter', 'Inconsolata', sans-serif !important;
    background: #0d1421;
    color: #e2e8f0;
    line-height: 1.8;
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

/* Custom Scrollbar */
body::-webkit-scrollbar {
    width: 12px;
}
body::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #e74c3c 0%, #c0392b 100%);
    border-radius: 8px;
    border: 2px solid #0d1421;
}
body::-webkit-scrollbar-track {
    background: #232b3e;
    border-radius: 8px;
}

/* Headings */
h1, h2, h3, h4, h5, h6 {
    color: #4fa3ff;
    font-weight: 700;
    margin-top: 2rem;
    margin-bottom: 1rem;
    letter-spacing: -0.02em;
}

h1 {
    font-size: 2.5rem;
    background: linear-gradient(135deg, #4fa3ff 0%, #818cf8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    border-bottom: 3px solid #4fa3ff;
    padding-bottom: 0.5rem;
}

h2 {
    font-size: 2rem;
    color: #60a5fa;
    border-left: 4px solid #4fa3ff;
    padding-left: 1rem;
}

h3 {
    font-size: 1.5rem;
    color: #7dd3fc;
}

/* Paragraphs and Text */
p {
    margin-bottom: 1rem;
    color: #cbd5e1;
}

strong {
    color: #f8fafc;
    font-weight: 600;
}

em {
    color: #94a3b8;
}

/* Links */
a {
    color: #60a5fa;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: all 0.2s ease;
}

a:hover {
    color: #7dd3fc;
    border-bottom-color: #60a5fa;
}

/* Code Blocks */
code {
    font-family: 'Monaspace Radon Var', 'JetBrains Mono', 'Fira Code', 'Inconsolata', monospace;
    background: rgba(99, 102, 241, 0.1);
    color: #a5b4fc;
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-size: 0.9em;
    border: 1px solid rgba(99, 102, 241, 0.2);
}

pre {
    background: #1e293b;
    border: 1px solid #334155;
    border-radius: 8px;
    padding: 1.5rem;
    overflow-x: auto;
    margin: 1.5rem 0;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

pre > code {
    font-family: 'Monaspace Neon Var', 'JetBrains Mono', 'Fira Code', 'Inconsolata', monospace !important;
    background: transparent;
    color: #e2e8f0;
    padding: 0;
    border: none;
    font-size: 0.95em;
    line-height: 1.6;
}

/* Lists */
ul, ol {
    margin-bottom: 1.5rem;
    padding-left: 2rem;
    color: #cbd5e1;
}

li {
    margin-bottom: 0.5rem;
    line-height: 1.6;
}

ul li::marker {
    color: #60a5fa;
}

ol li::marker {
    color: #60a5fa;
    font-weight: 600;
}

/* Checkboxes */
input[type="checkbox"] {
    margin-right: 0.5rem;
    accent-color: #60a5fa;
}

/* Tables */
table {
    width: 100%;
    border-collapse: collapse;
    margin: 1.5rem 0;
    background: rgba(30, 41, 59, 0.5);
    border-radius: 8px;
    overflow: hidden;
}

th, td {
    padding: 1rem;
    text-align: left;
    border-bottom: 1px solid #334155;
}

th {
    background: rgba(99, 102, 241, 0.2);
    color: #4fa3ff;
    font-weight: 600;
}

tr:hover {
    background: rgba(99, 102, 241, 0.05);
}

/* Blockquotes */
blockquote {
    border-left: 4px solid #4fa3ff;
    padding: 1rem 1.5rem;
    margin: 1.5rem 0;
    background: rgba(79, 163, 255, 0.05);
    border-radius: 0 8px 8px 0;
    color: #cbd5e1;
    font-style: italic;
}

/* Horizontal Rules */
hr {
    border: none;
    height: 2px;
    background: linear-gradient(90deg, transparent, #4fa3ff, transparent);
    margin: 2rem 0;
}

/* Badges/Labels */
.badge {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    border-radius: 12px;
    font-size: 0.85rem;
    font-weight: 600;
    background: rgba(99, 102, 241, 0.2);
    color: #a5b4fc;
    border: 1px solid rgba(99, 102, 241, 0.3);
}

/* Emoji Enhancement */
img[alt="emoji"] {
    height: 1.2em;
    width: 1.2em;
    margin: 0 0.05em 0 0.1em;
    vertical-align: -0.1em;
}

/* Selection */
selection {
    background: rgba(96, 165, 250, 0.3);
    color: #f8fafc;
}

/* Print Styles */
@media print {
    body {
        background: white;
        color: black;
    }
    h1, h2, h3, h4, h5, h6 {
        color: black;
    }
}
</style>

# The Midnight Echoes - Band Website

A modern, accessible React-based website for the indie rock band "The Midnight Echoes". Built with React, Vite, and CSS Modules.

## 🎸 Features

- **5 Pages**: Home, About, Music, Tour, Contact
- **Responsive Design**: Mobile-first approach with fluid layouts
- **3 Dynamic JS Features**:
  1. Interactive Photo Gallery with Lightbox (About page)
  2. Advanced Contact Form with Real-Time Validation
  3. Tour Date Filter with Interactive Display
- **Accessibility**: WCAG compliant with ARIA labels, keyboard navigation, skip links
- **Modern Stack**: React 19, Vite 7, React Router 7

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 📁 Project Structure

```
midnight-echoes/
├── index.html                 # Entry point
├── src/
│   ├── App.jsx               # Main app component with routing
│   ├── App.css               # Global styles
│   ├── main.jsx              # React entry point
│   ├── components/
│   │   ├── Header.jsx        # Navigation header
│   │   ├── Header.module.css
│   │   ├── Footer.jsx        # Footer with validation links
│   │   └── Footer.module.css
│   ├── pages/
│   │   ├── Home.jsx          # Landing page
│   │   ├── About.jsx         # Band info & gallery
│   │   ├── Music.jsx         # Discography
│   │   ├── Tour.jsx          # Tour dates
│   │   └── Contact.jsx       # Contact form
│   └── assets/
│       └── images/           # 14 optimized images
├── PROJECT_DOCUMENTATION.md  # Full project documentation
├── package.json
├── vite.config.js
└── eslint.config.js
```

## ✨ Key Features Breakdown

### 1. Interactive Photo Gallery (About Page)
- Click images to open full-screen lightbox
- Navigation controls (prev/next)
- Keyboard shortcuts (arrows, ESC, Z to zoom)
- Smooth animations
- Body scroll lock when open

### 2. Contact Form Validation (Contact Page)
- Real-time validation for all fields
- Email and phone format checking
- Dynamic fields based on inquiry type
- Honeypot spam protection
- Accessible error messages with ARIA
- Success/error notifications

### 3. Tour Date Filtering (Tour Page)
- Filter by All/Upcoming/Past shows
- Interactive venue location display
- Email signup for tour alerts
- Responsive date cards
- Smooth scroll to map section

## ♿ Accessibility Features

- **Skip Navigation Link**: Keyboard users can skip to main content
- **ARIA Labels**: All interactive elements properly labeled
- **Focus Styles**: Clear focus indicators for keyboard navigation
- **Screen Reader Support**: `aria-live` regions for notifications
- **Form Accessibility**: Error messages linked with `aria-describedby`
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Alt Text**: Descriptive alt text for all images

## 🎨 Design Principles (CRAP)

### Contrast
- Dark theme (#0a0e27) with bright text (#f8fafc)
- Electric blue/purple accents for interactive elements
- Layered shadows for depth

### Repetition
- Consistent header/footer across all pages
- Unified card design pattern
- Same button styles (primary/secondary)
- Consistent typography and spacing

### Alignment
- CSS Grid for responsive card layouts
- Centered content with max-width constraints
- Aligned form elements
- Responsive navigation

### Proximity
- Related content grouped in sections
- Card-based content organization
- Form field grouping
- Footer organized by category

## 🔍 Validation

All pages include validation buttons in the footer:
- **HTML Validation**: W3C Markup Validator
- **CSS Validation**: W3C CSS Validator
- **WCAG Check**: WAVE Accessibility Checker

## 🛠️ Technologies

- **React** 19.2.0 - UI framework
- **Vite** 7.2.4 - Build tool
- **React Router** 7.9.6 - Client-side routing
- **CSS Modules** - Scoped styling
- **ESLint** - Code quality

## 📱 Responsive Breakpoints

- Mobile: < 480px
- Tablet: 480px - 768px
- Desktop: > 768px

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 Documentation

See `PROJECT_DOCUMENTATION.md` for comprehensive documentation including:
- Detailed feature explanations
- CRAP design principles analysis
- Peer critique responses
- Stakeholder needs assessment
- Future development plans

## 👤 Developer

**Yoel Tecleab**
- Course: ITIS-3135
- Institution: UNC Charlotte
- Date: December 2025

## 📝 License

This project is created for educational purposes as part of ITIS-3135 course requirements.

## 🚢 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify

```bash
# Build
npm run build

# Upload dist/ folder to Netlify
```

### Deploy to GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
# "deploy": "npm run build && gh-pages -d dist"

# Deploy
npm run deploy
```

## 🧪 Testing Checklist

- [ ] All pages load without errors
- [ ] Navigation works on all pages
- [ ] Mobile menu toggles correctly
- [ ] Contact form validation works
- [ ] Photo gallery lightbox functions
- [ ] Tour date filter works
- [ ] All links are functional
- [ ] Images load properly
- [ ] Responsive on mobile/tablet/desktop
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] No console errors
- [ ] Build completes successfully
- [ ] HTML/CSS/WCAG validation links work

## 📞 Support

For questions or issues, contact through the website's contact form or reach out to the developer.

---

**Note**: This is a student project created for ITIS-3135. The band "The Midnight Echoes" and its content are fictional and created for educational purposes.

