# Encure - AI-Driven Biotech Landing Page

A modern, responsive landing page for AI-centric biotech companies, built with a comprehensive design system featuring an updated sage-green color palette.

## 🎨 Design System

This project implements a sophisticated design system with:

- **Updated Color Palette**: Sage-green primary background (#EDF1EC) with deep navy navigation (#2D3749)
- **Modern Typography**: Montserrat font family with semantic sizing scale
- **Responsive Grid**: 12-column layout with intelligent breakpoints
- **Accessibility First**: AA contrast compliance and reduced motion support
- **Interactive Animations**: Smooth scrolling, staggered reveals, and parallax effects

### Color Palette

```css
--surface-light: #EDF1EC    /* Primary background */
--surface-dark: #2D3749     /* Deep accent/navigation */
--text-primary: #2D3749     /* Main text */
--text-secondary: #6F767E   /* Secondary text */
--text-tertiary: #87909B    /* Tertiary text */
--text-light: #73727D       /* Light text */
--accent-primary: #4D6BFF   /* Primary accent */
```

## 🚀 Features

### ✨ Modern UI Components
- **Hero Section**: Animated gradient background with floating elements
- **Navigation Bar**: Fixed header with scroll effects and active highlighting
- **Feature Cards**: Interactive cards with hover animations
- **Research Section**: Split layout with staggered animations

### 🎯 Interactive Elements
- Smooth scrolling navigation
- Intersection Observer animations
- Parallax background effects
- Responsive navigation highlighting
- Keyboard accessibility support

### 📱 Responsive Design
- Mobile-first approach
- Flexible grid system
- Optimized typography scaling
- Touch-friendly interactions

## 📁 Project Structure

```
Encure-site/
├── index.html              # Main HTML structure
├── styles.css              # Complete CSS with design system
├── script.js               # Interactive JavaScript features
├── design-system.json      # Design system documentation
└── README.md              # This file
```

## 🛠️ Setup & Usage

1. **Clone or download** the project files
2. **Open `index.html`** in a modern web browser
3. **Or serve locally** using any static server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (with live-server)
   npx live-server
   
   # PHP
   php -S localhost:8000
   ```

## 🎨 Customization

### Colors
Update the CSS custom properties in `styles.css`:
```css
:root {
  --surface-light: #EDF1EC;
  --surface-dark: #2D3749;
  /* ... other colors */
}
```

### Content
Modify the HTML content in `index.html`:
- Hero headline and subheadline
- Feature cards content
- Research section text
- Footer information

### Typography
The design system uses Montserrat from Google Fonts. To change:
1. Update the Google Fonts link in HTML
2. Modify `--font-family-base` in CSS

## 🚀 Performance Features

- **Throttled scroll events** for smooth performance
- **Intersection Observer** for efficient animations
- **Reduced motion support** for accessibility
- **Optimized CSS** with modern properties

## ♿ Accessibility

- **AA color contrast** compliance
- **Keyboard navigation** support
- **Screen reader** friendly structure
- **Reduced motion** preference respect
- **Focus management** for interactive elements

## 🎭 Animation System

The page includes several animation types:
- **Fade in up**: Hero content entrance
- **Staggered reveals**: Feature cards
- **Slide animations**: Research section
- **Parallax effects**: Hero background
- **Hover interactions**: Buttons and cards

## 🔧 Browser Support

- **Modern browsers**: Chrome 60+, Firefox 55+, Safari 12+, Edge 79+
- **Progressive enhancement**: Graceful degradation for older browsers
- **Mobile optimized**: iOS Safari 12+, Chrome Mobile 60+

## 📊 Design System JSON

The `design-system.json` file contains the complete design specification including:
- Color tokens and usage
- Typography scale and weights
- Spacing system
- Component specifications
- Motion and animation rules
- Accessibility guidelines

## 🎯 Use Cases

Perfect for:
- **Biotech startups** showcasing AI capabilities
- **Research institutions** with modern web presence
- **Healthcare technology** companies
- **Scientific organizations** needing professional landing pages

## 🤝 Contributing

Feel free to customize and extend this template for your specific needs. The modular design system makes it easy to:
- Add new color schemes
- Extend the component library
- Integrate with your favorite framework
- Add additional sections

## 📝 License

This project is open source and available under the MIT License.

---

Built with modern web standards and a focus on performance, accessibility, and user experience. Perfect for showcasing cutting-edge biotech innovations with a professional, trustworthy presence. 