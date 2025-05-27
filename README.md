# Professional Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This portfolio showcases projects, skills, and professional experience with a clean, attractive design optimized for GitHub Pages deployment.

## 🌟 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Dark/Light Mode**: Toggle between themes with smooth transitions (now fully functional!)
- **Modern UI**: Clean, professional design with smooth animations
- **Education Section**: Showcase your academic background and certifications
- **Contact Form**: Multiple options for static sites (mailto, Formspree, EmailJS, etc.)
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **GitHub Pages Ready**: Configured for easy deployment to GitHub Pages
- **TypeScript**: Full type safety throughout the application
- **Accessible**: Built with accessibility best practices

## 🚀 Quick Start

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Built With

- **Next.js 15** - React framework for production
- **TypeScript** - Static type checking
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful, customizable icons

## 📁 Project Structure

```
portfolio/
├── .github/workflows/    # GitHub Actions for deployment
├── public/              # Static assets
├── src/
│   ├── app/            # Next.js app directory
│   │   ├── globals.css # Global styles
│   │   ├── layout.tsx  # Root layout
│   │   └── page.tsx    # Home page
│   └── components/     # React components
│       ├── Navigation.tsx
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Projects.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
├── next.config.ts      # Next.js configuration
├── tailwind.config.ts  # Tailwind configuration
└── package.json
```

## 🎨 Customization

### Personal Information

Update the following files with your personal information:

1. **src/components/Hero.tsx**: Update name, title, and social links
2. **src/components/About.tsx**: Add your personal story and skills
3. **src/components/Projects.tsx**: Replace with your actual projects
4. **src/components/Contact.tsx**: Update contact information
5. **src/app/layout.tsx**: Update metadata (title, description, etc.)

### Styling

- Colors and themes can be customized in `tailwind.config.ts`
- Global styles are in `src/app/globals.css`
- Component-specific styles use Tailwind CSS classes

## 🚀 Deployment to GitHub Pages

### Automatic Deployment

This project includes GitHub Actions for automatic deployment:

1. Push your code to the `main` branch
2. GitHub Actions will automatically build and deploy to GitHub Pages
3. Your site will be available at `https://yourusername.github.io/portfolio`

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. The build output will be in the `out` directory
3. Deploy the contents of `out` to your hosting provider

### GitHub Pages Setup

1. Go to your repository settings
2. Navigate to "Pages" section
3. Set source to "GitHub Actions"
4. Push to main branch to trigger deployment

## 📧 Contact Form

The contact form is currently set up to log form data to the console. To make it functional, you can integrate with:

- **EmailJS**: For client-side email sending
- **Formspree**: Simple form handling service
- **Netlify Forms**: If deploying to Netlify
- **Custom API**: Build your own backend endpoint

## 🔧 Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint

## 📱 Responsive Breakpoints

- Mobile: 640px and below
- Tablet: 641px - 1024px
- Desktop: 1025px and above

## 🎯 Performance

- Optimized images with Next.js Image component
- Lazy loading for better performance
- Minimal bundle size with tree shaking
- Static site generation for fast loading

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/portfolio/issues).

## 💡 Tips for Job Seekers

1. **Customize Projects**: Replace example projects with your actual work
2. **Add Resume**: Place your resume PDF in the `public` folder
3. **Update Links**: Make sure all social media and project links work
4. **SEO**: Update meta descriptions and titles for better search visibility
5. **Analytics**: Consider adding Google Analytics to track visitors

---

Made with ❤️ using Next.js and Tailwind CSS
