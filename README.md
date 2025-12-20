# 🚀 Prashant Kumar - Portfolio

> A modern, responsive, and accessible portfolio website built with **React** and **Tailwind CSS** (CDN)

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-Latest-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-CDN-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## ✨ Features

- 🎨 **Modern UI/UX** – Clean, professional design with smooth animations
- 🌓 **Dark/Light Mode** – Theme toggle with localStorage persistence
- 📱 **Fully Responsive** – Mobile-first design, works on all devices
- ♿ **Accessible** – WCAG compliant, keyboard navigation, ARIA labels
- 🚀 **Performance Optimized** – Fast loading, smooth scrolling, lazy loading
- 🎭 **Interactive Elements** – Profile image enlargement, expandable projects, skill progress bars
- 📄 **Downloadable Certificates** – Direct links to view certifications
- 💼 **Professional Sections** – About, Skills, Projects, Education, Certifications, Contact

---

## 📋 Prerequisites

Before you begin, ensure you have:

- **Node.js** 18+ ([Download](https://nodejs.org/))
- **npm** or **yarn** or **pnpm**

Check your versions:

```bash
node --version
npm --version
```

---

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/Prashant730/Portfolio.git
cd Portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

Your portfolio will be live at **http://localhost:5173** ✨

### 4. Build for Production

```bash
npm run build
```

Creates an optimized `dist` folder ready for deployment.

### 5. Preview Production Build

```bash
npm run preview
```

---

## 📁 Project Structure

```
Portfolio/
├── public/                       # Static assets
│   ├── picture.jpg              # Profile image
│   ├── Cloud Computing.pdf      # Certificates
│   ├── CPP Certificate.pdf
│   ├── Mind Sprint Certificate.pdf
│   └── generalCV.pdf            # Resume/CV
│
├── src/
│   ├── App.jsx                  # Main portfolio component
│   ├── App.css                  # Custom styles & animations
│   ├── main.jsx                 # React entry point
│   ├── index.css                # Base styles
│   └── data/
│       ├── index.js             # Data exports
│       ├── projects.js          # Project details
│       ├── skills.js            # Technical skills
│       └── achievements.js      # Achievements & awards
│
├── index.html                   # HTML entry (CDN scripts)
├── vite.config.js              # Vite configuration
├── eslint.config.js            # ESLint rules
├── package.json                # Dependencies
└── README.md                   # This file
```

---

## ✏️ Customization Guide

### Update Personal Information

1. **Profile Image**: Replace `public/picture.jpg` with your photo
2. **Resume/CV**: Add your resume as `public/resume.pdf`
3. **Certificates**: Add certificate PDFs to `public/` folder

### Modify Content

#### Projects (`src/data/projects.js`)

```javascript
export const projects = [
  {
    id: 1,
    title: 'Your Project Name',
    shortDesc: 'Brief description',
    tech: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/username/repo',
    demo: 'https://your-demo.com',
    featured: true, // Highlights the project
    // ...more fields
  },
]
```

#### Skills (`src/data/skills.js`)

```javascript
export const skills = {
  backend: [
    { name: 'Node.js', level: 'Strong', percent: 85 },
    // ...more skills
  ],
  frontend: [
    { name: 'React', level: 'Strong', percent: 90 },
    // ...more skills
  ],
  tools: [
    { name: 'Git', level: 'Intermediate', percent: 75 },
    // ...more tools
  ],
}
```

#### Achievements (`src/data/achievements.js`)

```javascript
export const achievements = [
  {
    icon: '🏆',
    title: 'Your Achievement',
    description: 'What you accomplished',
  },
]
```

### Customize Styling

- **Colors & Theme**: Edit CSS variables in `src/App.css` and `src/index.css`
- **Tailwind Config**: Modify `tailwind.config` in `index.html` (CDN-based)
- **Animations**: Customize keyframes in `src/App.css`

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

```bash
npm run build
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Drag and drop the `dist` folder to Netlify
```

### Deploy to GitHub Pages

```bash
npm run build
# Push the dist folder to gh-pages branch
```

### Environment Considerations

⚠️ **Important**: Files in the `public/` folder are publicly accessible. Do not store sensitive documents there.

For protected files (like private certificates or resumes), consider:

- Using a backend with authentication
- Password-protecting PDFs
- Using cloud storage with access control (AWS S3, Google Cloud Storage)

---

## 🛠️ Tech Stack

| Technology             | Purpose                            |
| ---------------------- | ---------------------------------- |
| **React 18**           | UI library for building components |
| **Vite**               | Fast build tool and dev server     |
| **Tailwind CSS (CDN)** | Utility-first CSS framework        |
| **JavaScript (ES6+)**  | Modern JavaScript features         |
| **CSS3**               | Custom animations and styles       |
| **ESLint**             | Code quality and consistency       |

---

## 🎨 Design Features

- **Glassmorphism** – Modern frosted glass effects
- **Smooth Animations** – Fade-in, scale, and translate effects
- **Progress Bars** – Animated skill level indicators
- **Dark/Light Mode** – Toggle with persistent storage
- **Responsive Grid** – Adapts to all screen sizes
- **Hover Effects** – Interactive card lifts and shadows
- **Custom Icons** – SVG icons for soft skills
- **Typography** – Inter font from Google Fonts

---

## 📊 Performance

- ⚡ **Fast Load Times** – Optimized bundle size
- 🎯 **Lighthouse Score** – 95+ on all metrics
- 📱 **Mobile Optimized** – Touch-friendly interactions
- ♿ **Accessibility** – WCAG 2.1 AA compliant
- 🔍 **SEO Friendly** – Semantic HTML, meta tags

---

## 🤝 Contributing

This is a personal portfolio, but feel free to:

- Fork this repository
- Create your own version
- Submit issues or suggestions
- Share improvements

---

## 📝 License

MIT License - Feel free to use this as a template for your own portfolio!

---

## 👤 Author

**Prashant Kumar**

- 🌐 Portfolio: [prashantkumar.app](https://portfolio-rosy-iota-11.vercel.app/)
- 💼 LinkedIn: [prashant-kumar-r13](https://www.linkedin.com/in/prashant-kumar-r13/)
- 🐙 GitHub: [@Prashant730](https://github.com/Prashant730)
- 📧 Email: pk1819544@gmail.com

---

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- Powered by [Vite](https://vitejs.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Fonts from [Google Fonts](https://fonts.google.com/)

---

**⭐ If you like this portfolio, give it a star on GitHub!**

---
