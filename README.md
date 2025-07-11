# WeyaERP - Agricultural ERP System

A modern, comprehensive agricultural ERP system built with Next.js 15, designed to streamline farming operations and agricultural business management.

## 🚀 Live Deployment

- **Production URL:** https://weyaerp-site-cmyfuijdq-localrewardsters-projects.vercel.app
- **GitHub Repository:** https://github.com/LocalRewardster/weyaerp-site
- **Domain:** weyaerp.com (configuration in progress)

## 🌟 Features

- **Inventory Management:** Track seeds, fertilizers, equipment, and harvest inventory
- **Financial Management:** Monitor expenses, revenue, and profit margins
- **Crop Planning:** Plan and schedule planting, maintenance, and harvesting
- **Weather Integration:** Real-time weather data for informed decision-making
- **Reporting & Analytics:** Comprehensive reports and data visualization
- **Multi-language Support:** Available in multiple languages for global use

## 🛠️ Tech Stack

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI + shadcn/ui
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod validation
- **Email:** Resend API
- **Deployment:** Vercel
- **Version Control:** Git + GitHub

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18 or higher
- npm, yarn, or pnpm
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/LocalRewardster/weyaerp-site.git
cd weyaerp-site
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration:
```env
# Email Configuration
RESEND_API_KEY=your_resend_api_key_here

# Next.js Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📦 Build & Deployment

### Build for Production

```bash
npm run build
npm run start
```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

## 🌐 Domain Configuration

To connect your custom domain to the Vercel deployment:

1. **Add Domain in Vercel Dashboard:**
   - Go to your Vercel project dashboard
   - Navigate to the "Domains" tab
   - Add your custom domain (e.g., weyaerp.com)

2. **Configure DNS Records:**
   Add these DNS records to your domain provider:
   ```
   Type: A
   Name: @
   Value: 76.76.19.19

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

3. **SSL Certificate:**
   Vercel automatically provisions and manages SSL certificates for your domain.

## 🔧 Development

### Project Structure

```
weyaerp-site/
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/       # React components
│   │   ├── ui/          # shadcn/ui components
│   │   └── ...          # Custom components
│   └── lib/             # Utility functions
├── public/              # Static assets
├── tailwind.config.ts   # Tailwind CSS configuration
├── next.config.ts       # Next.js configuration
└── package.json         # Dependencies and scripts
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📝 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `RESEND_API_KEY` | API key for email functionality | Yes |
| `NEXT_PUBLIC_SITE_URL` | Base URL of your application | Yes |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support, email support@weyaerp.com or create an issue in the GitHub repository.

## 🎯 Roadmap

- [ ] Mobile app development
- [ ] Advanced reporting features
- [ ] Integration with IoT sensors
- [ ] Multi-farm management
- [ ] API for third-party integrations
- [ ] Offline functionality

---

Built with ❤️ by the WeyaERP Team
