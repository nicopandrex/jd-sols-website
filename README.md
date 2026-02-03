# JD Sols - Web Design Agency Website

A modern, high-converting React website for JD Sols, a web design agency focused on helping local businesses generate real leads through modern websites and local visibility optimization.

## 🎯 Project Overview

This is a complete, production-ready React website built with:

- **React 19** (JavaScript, not TypeScript)
- **Vite** - Fast build tool
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first styling
- **Mobile-first design** with orange accent color

## 🚀 Quick Start

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

The site will be available at `http://localhost:5173` (or the next available port).

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
josh-site/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── Button.jsx
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── TestimonialCard.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── FAQItem.jsx
│   │   └── SEO.jsx
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── Privacy.jsx
│   ├── App.jsx          # Main app with routing
│   ├── main.jsx         # App entry point
│   └── index.css        # Tailwind CSS imports
├── index.html           # HTML template
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
├── vite.config.js       # Vite configuration
└── package.json         # Dependencies
```

## 📄 Pages & Routes

| Route       | Page     | Description                            |
| ----------- | -------- | -------------------------------------- |
| `/`         | Home     | Main landing page with all sections    |
| `/services` | Services | Detailed services and pricing packages |
| `/about`    | About    | Company story, values, and approach    |
| `/contact`  | Contact  | Contact form with validation           |
| `/privacy`  | Privacy  | Privacy policy                         |

## 🎨 Design Features

### Color Palette

- **Primary/Accent**: Orange (`#f97316`)
- **Text**: Gray-900 for primary text
- **Background**: White with gray-50 for sections
- **Borders**: Gray-200 for subtle separation

### Typography

- **Font**: Inter (loaded from Google Fonts)
- **Hierarchy**: Bold headings, regular body text
- **Scale**: Responsive text sizing

### Key Design Principles

- Mobile-first responsive design
- Clean, modern aesthetic (avoiding cookie-cutter SaaS look)
- Typography-focused layouts
- Asymmetric, varied section layouts
- Minimal icon usage
- High-converting CTA placement throughout

## 🔧 Components

### Button Component

Reusable button with variants:

- `primary` - Orange accent background
- `secondary` - Dark background
- `outline` - Bordered style
- `ghost` - Text-only style

Sizes: `sm`, `md`, `lg`

### SEO Component

Simple SEO component that sets document title and meta description for each page.

### TestimonialCard

Displays customer testimonials with:

- Star rating (1-5)
- Quote
- Customer name
- Business name

### ServiceCard

Displays service information with:

- Icon
- Title
- Description
- Outcomes list

### FAQItem

Accordion-style FAQ with expand/collapse functionality.

## 📝 Content Strategy

### Homepage Sections

1. **Hero** - Main value proposition with CTAs
2. **Social Proof** - Customer testimonials
3. **Why You Need a New Website** - Problem statements
4. **Services Overview** - Core service offerings
5. **Process** - 5-step process explanation
6. **Lead Tracking** - Explanation of tracking capabilities
7. **Free Strategy Call** - Main conversion offer
8. **FAQ** - Common questions
9. **Final CTA** - Last conversion opportunity

### Services Page

- Detailed service descriptions
- Three pricing packages (Starter, Growth, Pro)
- Add-on services
- Why choose JD Sols section

### About Page

- Company story and mission
- Values and approach
- Types of businesses served
- Core principles

### Contact Page

- Strategy call booking form
- Client-side validation
- Success state
- Contact information sidebar

## 🎯 Conversion Features

### CTAs Throughout

- Every CTA routes to `/contact` (booking form)
- Primary: "Book Free Strategy Call"
- Secondary: "Get a Quote", "Get Started"

### Form Validation

Contact form includes:

- Required field validation
- Email format validation
- Phone number format validation (optional field)
- Minimum length validation for project details
- Friendly error messages
- Success state with reset

### Mobile Optimization

- Sticky header with mobile menu
- Touch-friendly buttons and forms
- Optimized spacing and typography
- Fast loading times

## 🔌 Backend Integration

Currently, the contact form shows a success message without making API calls. To integrate with your custom backend:

1. Open `src/pages/Contact.jsx`
2. Find the `handleSubmit` function
3. Replace the success logic with your API call:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();

  // ... validation code ...

  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    return;
  }

  // YOUR BACKEND INTEGRATION HERE
  try {
    const response = await fetch("YOUR_API_ENDPOINT", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setIsSubmitted(true);
      // Handle success
    } else {
      // Handle error
    }
  } catch (error) {
    // Handle error
  }
};
```

## 🌐 SEO Configuration

Each page sets its own title and meta description using the SEO component:

```jsx
<SEO title="Page Title" description="Page description for search engines" />
```

The base title is "JD Sols" and page titles are appended automatically.

## 📱 Responsive Breakpoints

Using Tailwind's default breakpoints:

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 🎨 Tailwind CSS Setup

The project uses Tailwind CSS with custom configuration:

### Custom Colors

```javascript
colors: {
  primary: { ... }, // Orange shades
  accent: '#f97316', // Main orange
}
```

### Custom Font

```javascript
fontFamily: {
  sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
}
```

### Custom Utilities

```css
.section-container {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}
```

## 🚢 Deployment

### Build the Project

```bash
npm run build
```

This creates a `dist` folder with optimized production files.

### Deploy Options

- **Vercel**: Connect your GitHub repo and deploy automatically
- **Netlify**: Drag and drop the `dist` folder
- **Traditional hosting**: Upload contents of `dist` folder to your web server

### Environment Variables

Currently no environment variables are needed. When integrating with a backend, add a `.env` file:

```
VITE_API_URL=your_api_endpoint
```

Access in code: `import.meta.env.VITE_API_URL`

## 📦 Dependencies

### Production

- `react`: ^19.2.0
- `react-dom`: ^19.2.0
- `react-router-dom`: ^6.x.x

### Development

- `@vitejs/plugin-react`: ^5.1.1
- `vite`: ^7.2.4
- `tailwindcss`: ^3.x.x
- `postcss`: ^8.x.x
- `autoprefixer`: ^10.x.x
- `eslint`: ^9.39.1

## 🎯 Key Features Implemented

✅ Mobile-first responsive design  
✅ Sticky header with navigation  
✅ Smooth scrolling to sections  
✅ Client-side form validation  
✅ SEO meta tags per page  
✅ Reusable component library  
✅ Clean, non-cookie-cutter design  
✅ High-converting CTA placement  
✅ Testimonials section  
✅ FAQ accordion  
✅ Service packages with pricing  
✅ Contact form with success state  
✅ Footer with quick links  
✅ Privacy policy page  
✅ Orange accent color throughout  
✅ Fast load times  
✅ Accessibility considerations

## 📞 Support

For questions or issues:

- Email: hello@jdsols.com
- Phone: (555) 123-4567

## 📝 License

This is a custom-built website for JD Sols. All rights reserved.

---

Built with ❤️ using React, Vite, and Tailwind CSS
