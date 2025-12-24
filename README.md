# Orbantis Technologies - Corporate Website

A modern, professional corporate website built with Next.js 14, TypeScript, and Tailwind CSS for Orbantis Technologies - a leading IT company specializing in web development, mobile apps, AI automation, and digital transformation.

## 🚀 Features

- **Modern Design**: Clean, professional corporate design with navy blue and aqua color scheme
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Built with Next.js 14 for optimal performance
- **SEO Optimized**: Proper meta tags, structured data, and SEO-friendly URLs
- **Smooth Animations**: Beautiful animations using Framer Motion
- **Contact Form**: Functional contact form with validation
- **Professional Sections**: Hero, Services, Portfolio, About, Contact pages

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Poppins, Inter (Google Fonts)

## 📁 Project Structure

```
src/
├── app/                    # Next.js 14 App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   ├── about/            # About page
│   ├── services/         # Services page
│   ├── portfolio/        # Portfolio page
│   └── contact/         # Contact page
├── components/           # Reusable components
│   ├── Header.tsx       # Navigation header
│   ├── Footer.tsx       # Site footer
│   └── sections/        # Page sections
│       ├── Hero.tsx
│       ├── ServicesPreview.tsx
│       ├── PortfolioPreview.tsx
│       ├── Testimonials.tsx
│       └── CTA.tsx
```

## 🎨 Design System

### Colors
- **Primary Navy**: #0A1F44
- **Aqua**: #00C4CC
- **Gradients**: Navy to Aqua, Purple to Blue
- **Background**: White, Light Gray

### Typography
- **Headings**: Poppins (Bold, Modern)
- **Body**: Inter (Clean, Professional)

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   ```
   http://localhost:3000
   ```

## 📱 Pages

### Home Page
- Hero section with company tagline and CTA
- Services preview
- Portfolio showcase
- Client testimonials
- Call-to-action section

### About Page
- Company vision and mission
- Core values
- Team statistics
- Why choose Orbantis

### Services Page
- Detailed service offerings
- Web Development, Mobile Development, AI & Automation, UI/UX
- Development process
- Technology stack

### Portfolio Page
- Featured projects
- Project categories
- Case studies
- Technology showcase

### Contact Page
- Contact form with validation
- Multiple contact methods
- FAQ section
- Quick response promise

## 🎯 Key Features

### Navigation
- Responsive header with dropdown menus
- Smooth scroll navigation
- Mobile-friendly hamburger menu

### Animations
- Framer Motion animations
- Scroll-triggered animations
- Hover effects
- Loading states

### Contact Form
- Form validation
- Multiple input types
- Service selection
- Budget range selection
- Success/error states

### SEO Optimization
- Meta tags for all pages
- Open Graph tags
- Twitter Card support
- Structured data
- Semantic HTML

## 🔧 Customization

### Colors
Update colors in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    500: '#00C4CC',
    900: '#0A1F44',
  },
  navy: '#0A1F44',
  aqua: '#00C4CC',
}
```

### Content
- Update company information in components
- Modify services in Services page
- Add real projects to Portfolio
- Update contact information

## 📦 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on push to main branch

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Other Platforms
- Railway
- Render
- AWS Amplify
- DigitalOcean App Platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support or questions:
- Email: info@orbantistechnologies.com
- Phone: +1 (555) 123-4567
- WhatsApp: Available 24/7

---

**Orbantis Technologies** - Building the future, one innovation at a time.
