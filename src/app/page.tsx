import Link from 'next/link';
import { ArrowRight, FileText, Database, Smartphone, CheckCircle, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TestimonialCard from '@/components/TestimonialCard';

export default function Home() {
  const painPoints = [
    {
      icon: <FileText className="h-8 w-8 text-weya-brown" />,
      title: "Paper chaos",
      description: "Lost records, unclear transactions, and scattered data across multiple notebooks."
    },
    {
      icon: <Database className="h-8 w-8 text-weya-brown" />,
      title: "Spreadsheet spaghetti",
      description: "Complex formulas breaking, version conflicts, and data getting corrupted."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-weya-brown" />,
      title: "Budget blindspots",
      description: "No clear view of profitability, cash flow, or return on investment per crop."
    }
  ];

  const features = [
    {
      icon: <CheckCircle className="h-8 w-8 text-weya-green" />,
      title: "Real-Time Stock",
      description: "Know your inventory before you plant the next acre."
    },
    {
      icon: <Database className="h-8 w-8 text-weya-green" />,
      title: "Ledger Sync",
      description: "Sales & expenses flow straight into your books."
    },
    {
      icon: <Smartphone className="h-8 w-8 text-weya-green" />,
      title: "Offline-First Mobile",
      description: "Field techs capture data even without signal."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Namukasa",
      role: "Coffee Farmer, Mukono",
      content: "WeyaERP helped me track my coffee harvest and expenses so clearly. Now I know exactly which plots are most profitable.",
      rating: 5
    },
    {
      name: "James Okello",
      role: "Cooperative Manager, Lira",
      content: "Managing 50+ farmers&apos; data was a nightmare. WeyaERP made it simple and my members love the transparency.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-weya-brown mb-6">
              Know the weight, see the profit.
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              The first ERP built from Ugandan soil—track every kilo, shilling, and seed in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild 
                size="lg"
                className="bg-weya-green hover:bg-weya-green/90 text-white"
              >
                <Link href="/contact">
                  Book a Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-weya-green text-weya-green hover:bg-weya-green/10"
              >
                <Link href="/features">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-weya-green to-weya-gold rounded-2xl flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-6xl mb-4">🌱</div>
                <p className="text-lg">Hero Image Placeholder</p>
                <p className="text-sm opacity-75">Ugandan Farmland</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-weya-brown mb-4">
              Stop wrestling with chaos
            </h2>
            <p className="text-xl text-gray-600">
              Every farmer faces the same challenges. We built the solution.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {painPoints.map((point, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    {point.icon}
                  </div>
                  <h3 className="text-xl font-bold text-weya-brown mb-4">
                    {point.title}
                  </h3>
                  <p className="text-gray-600">
                    {point.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Teaser */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-weya-brown mb-4">
              Built for Uganda&apos;s farmers
            </h2>
            <p className="text-xl text-gray-600">
              Simple, powerful tools that work in the field
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-weya-brown mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-weya-brown mb-4">
              Farmers love WeyaERP
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from real farmers across Uganda
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-weya-green py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to transform your farm?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join hundreds of Ugandan farmers who&apos;ve already made the switch.
          </p>
          <Button 
            asChild 
            size="lg"
            className="bg-white text-weya-green hover:bg-gray-100"
          >
            <Link href="/contact">
              Start Your Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
