# Professional Portfolio - Setup Instructions

## 🎯 How to Run Your Portfolio

### 1. Development Mode (for testing locally)
```bash
cd /Users/parisobedlopezmoreno/Documents/Programacion/Personal/portfolio
npm run dev
```
Your portfolio will be available at: http://localhost:3000

### 2. Production Build (for deployment)
```bash
npm run build
```
This creates an optimized build in the `out` folder ready for GitHub Pages.

## 🚀 Deploy to GitHub Pages

### Step 1: Create a GitHub Repository
1. Go to GitHub.com and create a new repository
2. Name it `portfolio` or `your-username.github.io`
3. Make it public
4. Don't initialize with README (we already have one)

### Step 2: Push Your Code
```bash
# In your project directory
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "GitHub Actions"
5. Your site will be available at: `https://YOUR-USERNAME.github.io/portfolio`

## ✏️ Customize Your Portfolio

### 1. Personal Information
Edit these files with your information:

**src/components/Hero.tsx** - Line 15:
```tsx
Your Name → Replace with your actual name
```

**src/components/Hero.tsx** - Lines 19, 46-56:
Update social media links and email

**src/components/About.tsx** - Lines 31-41:
Write your personal story and experience

**src/components/Contact.tsx** - Lines 67-81:
Update your contact information

### 2. Projects Section
**src/components/Projects.tsx** - Lines 8-33:
Replace the example projects with your actual projects:
- Add real project titles
- Update descriptions
- Add actual GitHub links
- Add live demo links
- Update technology stacks

### 3. Skills Section
**src/components/About.tsx** - Lines 9-28:
Update the skills to match your expertise

### 4. Resume
Add your resume PDF to the `public` folder and name it `resume.pdf`

## 🎨 Styling Tips

- The portfolio uses Tailwind CSS for styling
- Colors can be customized in the Tailwind classes
- Dark mode is automatically handled
- All components are responsive

## 📱 Features Included

✅ Responsive design (mobile, tablet, desktop)
✅ Dark/Light mode toggle
✅ Smooth animations
✅ SEO optimized
✅ Contact form (ready for integration)
✅ GitHub Pages deployment ready
✅ Professional design
✅ Fast loading
✅ Accessible design

## 🔧 Next Steps

1. **Replace placeholder content** with your real information
2. **Add your projects** with actual screenshots
3. **Test on mobile devices** to ensure responsiveness
4. **Add real project images** to the `public` folder
5. **Connect contact form** to a service like EmailJS or Formspree
6. **Add Google Analytics** if you want to track visitors

## 💡 Professional Tips

- Keep project descriptions concise but informative
- Use high-quality screenshots for projects
- Ensure all links work before deploying
- Test the site on different devices
- Update regularly with new projects
- Use professional email address
- Consider adding a blog section later

## 🆘 Troubleshooting

**If the site doesn't load:**
- Make sure you're in the correct directory
- Run `npm install` to install dependencies
- Check that port 3000 isn't being used by another app

**If GitHub Pages deployment fails:**
- Check that the repository is public
- Ensure GitHub Actions are enabled
- Verify the workflow file is correctly placed

## 📞 Need Help?

The portfolio is now ready to use! Follow the customization steps above to make it yours.
