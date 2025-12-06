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

