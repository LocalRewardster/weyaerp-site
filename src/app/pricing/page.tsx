'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import PricingCard from '@/components/PricingCard';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const pricingPlans = [
    {
      title: "Starter",
      price: isAnnual ? 990000 : 99000, // UGX per year or month
      period: isAnnual ? "year" : "month",
      description: "Perfect for small farms and individual farmers",
      features: [
        "Up to 3 users",
        "1 farm management",
        "Basic inventory tracking",
        "Income & expense tracking",
        "Mobile app access",
        "Email support",
        "Basic reporting"
      ],
      popular: false,
      ctaText: "Start Free Trial",
      ctaAction: () => window.location.href = '/contact'
    },
    {
      title: "Growth",
      price: isAnnual ? 2990000 : 299000, // UGX per year or month
      period: isAnnual ? "year" : "month",
      description: "For growing farms and cooperatives",
      features: [
        "Up to 10 users",
        "Multi-farm management",
        "Advanced inventory tracking",
        "Financial management",
        "Advanced analytics",
        "Mobile money integration",
        "Priority support",
        "Custom reports",
        "API access"
      ],
      popular: true,
      ctaText: "Start Free Trial",
      ctaAction: () => window.location.href = '/contact'
    },
    {
      title: "Enterprise",
      price: 0, // Custom pricing
      period: "custom",
      description: "For large farms and agricultural organizations",
      features: [
        "Unlimited users",
        "Unlimited farms",
        "Custom integrations",
        "Dedicated account manager",
        "Custom training",
        "24/7 phone support",
        "Advanced security",
        "Custom features",
        "Data migration support"
      ],
      popular: false,
      ctaText: "Contact Sales",
      ctaAction: () => window.location.href = 'mailto:sales@weyaerp.com'
    }
  ];

  const faqs = [
    {
      question: "Can I try WeyaERP for free?",
      answer: "Yes! We offer a 14-day free trial for all plans. No credit card required."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept mobile money (MTN, Airtel), bank transfers, and major credit cards. We also offer annual payment discounts."
    },
    {
      question: "Can I change my plan later?",
      answer: "Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately."
    },
    {
      question: "Do you offer training?",
      answer: "Yes, we provide comprehensive training in English, Luganda, and Runyankole. Growth and Enterprise plans include dedicated training sessions."
    },
    {
      question: "Is my data secure?",
      answer: "Your data is encrypted and backed up daily. We use industry-standard security measures and comply with international data protection standards."
    },
    {
      question: "What if I need help?",
      answer: "Our support team is available via email, phone, and WhatsApp. Enterprise customers get 24/7 priority support."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-weya-brown mb-6">
            Simple, transparent pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the plan that fits your farm. Start free, scale as you grow.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`text-sm ${!isAnnual ? 'text-weya-green font-semibold' : 'text-gray-600'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isAnnual ? 'bg-weya-green' : 'bg-gray-200'
              }`}
            >
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                isAnnual ? 'translate-x-6' : 'translate-x-1'
              }`} />
            </button>
            <span className={`text-sm ${isAnnual ? 'text-weya-green font-semibold' : 'text-gray-600'}`}>
              Annual
            </span>
            {isAnnual && (
              <Badge className="bg-weya-gold text-weya-brown">
                Save 20%
              </Badge>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              {...plan}
            />
          ))}
        </div>
      </section>

      {/* Features Comparison */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Compare all features"
            subtitle="Everything you need to know about our plans"
            centered
          />
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-4 font-semibold text-weya-brown">Feature</th>
                    <th className="text-center p-4 font-semibold text-weya-green">Starter</th>
                    <th className="text-center p-4 font-semibold text-weya-green">Growth</th>
                    <th className="text-center p-4 font-semibold text-weya-green">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 font-medium text-gray-700">Number of users</td>
                    <td className="p-4 text-center">Up to 3</td>
                    <td className="p-4 text-center">Up to 10</td>
                    <td className="p-4 text-center">Unlimited</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-4 font-medium text-gray-700">Farm management</td>
                    <td className="p-4 text-center">1 farm</td>
                    <td className="p-4 text-center">Multi-farm</td>
                    <td className="p-4 text-center">Unlimited</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium text-gray-700">Mobile app</td>
                    <td className="p-4 text-center"><Check className="h-5 w-5 text-weya-green mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="h-5 w-5 text-weya-green mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="h-5 w-5 text-weya-green mx-auto" /></td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-4 font-medium text-gray-700">Mobile money integration</td>
                    <td className="p-4 text-center">—</td>
                    <td className="p-4 text-center"><Check className="h-5 w-5 text-weya-green mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="h-5 w-5 text-weya-green mx-auto" /></td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium text-gray-700">API access</td>
                    <td className="p-4 text-center">—</td>
                    <td className="p-4 text-center"><Check className="h-5 w-5 text-weya-green mx-auto" /></td>
                    <td className="p-4 text-center"><Check className="h-5 w-5 text-weya-green mx-auto" /></td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-4 font-medium text-gray-700">24/7 support</td>
                    <td className="p-4 text-center">—</td>
                    <td className="p-4 text-center">—</td>
                    <td className="p-4 text-center"><Check className="h-5 w-5 text-weya-green mx-auto" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Frequently asked questions"
            subtitle="Everything you need to know about our pricing"
            centered
          />
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-weya-brown mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-weya-green py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Still have questions?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Our team is here to help you choose the right plan for your farm.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg"
              className="bg-white text-weya-green hover:bg-gray-100"
            >
              <Link href="/contact">
                <Mail className="mr-2 h-4 w-4" />
                Contact Sales
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              <Link href="/features">View Features</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 