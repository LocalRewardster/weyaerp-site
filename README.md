# WeyaERP Marketing Website

A modern, responsive marketing website for WeyaERP - an agricultural ERP system designed specifically for Ugandan farmers.

## 🌱 About WeyaERP

WeyaERP is the first ERP built from Ugandan soil, designed to help farmers track every kilo, shilling, and seed in one place. Our mission is to empower Ugandan farmers with technology that understands their unique challenges.

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation
- **Email**: Resend
- **Animations**: react-countup
- **Deployment**: Vercel

## 📁 Project Structure

```
weyaerp-site/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Home page
│   │   ├── features/         # Features page
│   │   ├── pricing/          # Pricing page
│   │   ├── about/           # About page
│   │   ├── contact/         # Contact page
│   │   └── actions/         # Server actions
│   ├── components/
│   │   ├── ui/              # shadcn/ui components
│   │   ├── Navbar.tsx       # Navigation component
│   │   ├── Footer.tsx       # Footer component
│   │   └── ...             # Other components
│   └── lib/
│       ├── utils.ts         # Utility functions
│       └── currency.ts      # Currency conversion
├── public/
│   ├── images/              # Images and media
│   ├── icons/               # PWA icons
│   └── manifest.json        # PWA manifest
└── ...
```

## 🎨 Design System

### Brand Colors
- **Weya Brown**: #4B3426 (soil/stability)
- **Weya Green**: #2F9E44 (growth)
- **Weya Gold**: #F5A623 (sunrise/optimism)

### Typography
- **Font**: Inter (system fallback)
- **Headings**: Weight 700
- **Body**: Weight 400

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd weyaerp-site
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Add your Resend API key to `.env.local`:
```
RESEND_API_KEY=your_resend_api_key_here
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📧 Email Configuration

This project uses [Resend](https://resend.com) for sending contact form emails. To set up:

1. Create a Resend account
2. Generate an API key
3. Add the API key to your `.env.local` file
4. Configure your domain (for production)

## 🌐 Pages

### Home (`/`)
- Hero section with value proposition
- Pain points that farmers face
- Feature highlights
- Customer testimonials
- Call-to-action sections

### Features (`/features`)
- Detailed feature descriptions
- Animated statistics
- Feature comparison table
- Benefits overview

### Pricing (`/pricing`)
- Three-tier pricing plans
- Dual currency display (UGX/USD)
- Feature comparison
- FAQ section

### About (`/about`)
- Company mission and values
- Founder story
- Company timeline
- Team information

### Contact (`/contact`)
- Contact form with validation
- Contact information
- Success/error handling
- FAQ section

## 📱 PWA Features

The site includes Progressive Web App features:
- Service worker (via next-pwa)
- App manifest
- Offline functionality
- App icons

## 🎯 Key Features

- **Responsive Design**: Works on all devices
- **SEO Optimized**: Proper meta tags and structured data
- **Performance**: Optimized images and code splitting
- **Accessibility**: WCAG compliant
- **Dark Mode**: System preference detection
- **Internationalization**: Ready for multiple languages

## 📊 Currency Display

The site displays prices in both UGX and USD:
- 1 USD = 3,750 UGX (constant rate)
- Automatic conversion and formatting
- Localized currency display

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Manual Build

```bash
npm run build
npm start
```

## 🔧 Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

## 🎨 Customization

### Adding New Pages
1. Create a new directory in `src/app/`
2. Add `page.tsx` file
3. Update navigation in `Navbar.tsx`

### Styling
- Use Tailwind CSS classes
- Brand colors are configured in `tailwind.config.ts`
- Custom components in `src/components/`

### Content Updates
- Update page content directly in component files
- Images in `public/images/`
- Icons from Lucide React

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support, email hello@weyaerp.com or join our community forums.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [shadcn/ui](https://ui.shadcn.com/) for beautiful components
- [Lucide](https://lucide.dev/) for the icon library
- [Resend](https://resend.com/) for email infrastructure
