import { CheckCircle, Database, Smartphone, TrendingUp, Users, BarChart3, Clock, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import AnimatedCounter from '@/components/AnimatedCounter';

export default function Features() {
  const features = [
    {
      icon: <CheckCircle className="h-12 w-12 text-weya-green" />,
      title: "Real-Time Inventory Tracking",
      description: "Monitor your seeds, fertilizers, and harvested crops in real-time. Get instant alerts when stock runs low and never miss a planting season again.",
      stats: {
        value: 99,
        suffix: "%",
        label: "Inventory Accuracy"
      }
    },
    {
      icon: <Database className="h-12 w-12 text-weya-green" />,
      title: "Integrated Financial Management",
      description: "All your income and expenses automatically sync to your ledger. Track profitability by crop, field, and season with detailed financial reports.",
      stats: {
        value: 47,
        suffix: "%",
        label: "Avg. Profit Increase"
      }
    },
    {
      icon: <Smartphone className="h-12 w-12 text-weya-green" />,
      title: "Mobile-First Design",
      description: "Record data directly from the field with our mobile app. Works offline and syncs when you're back online. Perfect for remote farming areas.",
      stats: {
        value: 500,
        suffix: "+",
        label: "Farmers Using Mobile"
      }
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-weya-green" />,
      title: "Smart Analytics & Insights",
      description: "Make data-driven decisions with our analytics dashboard. Track yield trends, identify your most profitable crops, and optimize your farming strategy.",
      stats: {
        value: 73,
        suffix: "%",
        label: "Better Decision Making"
      }
    },
    {
      icon: <Users className="h-12 w-12 text-weya-green" />,
      title: "Multi-User Collaboration",
      description: "Give your farm workers, agronomists, and family members the right access levels. Everyone stays informed and your data stays secure.",
      stats: {
        value: 25,
        suffix: "+",
        label: "Team Members per Farm"
      }
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-weya-green" />,
      title: "Comprehensive Reporting",
      description: "Generate detailed reports for banks, cooperatives, or government programs. Export data in multiple formats including PDF and Excel.",
      stats: {
        value: 50,
        suffix: "+",
        label: "Report Templates"
      }
    }
  ];

  const comparisonData = [
    {
      feature: "Real-time inventory tracking",
      weya: true,
      spreadsheet: false
    },
    {
      feature: "Automated financial calculations",
      weya: true,
      spreadsheet: false
    },
    {
      feature: "Mobile app with offline support",
      weya: true,
      spreadsheet: false
    },
    {
      feature: "Multi-user collaboration",
      weya: true,
      spreadsheet: false
    },
    {
      feature: "Data backup and security",
      weya: true,
      spreadsheet: false
    },
    {
      feature: "Customer support in Luganda",
      weya: true,
      spreadsheet: false
    },
    {
      feature: "Integration with mobile money",
      weya: true,
      spreadsheet: false
    },
    {
      feature: "Crop yield predictions",
      weya: true,
      spreadsheet: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-weya-brown mb-6">
            Features built for farmers
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every feature in WeyaERP is designed with Ugandan farmers in mind. 
            From the field to the market, we&apos;ve got you covered.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-weya-green py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="text-white">
              <AnimatedCounter end={1000} suffix="+" />
              <p className="text-green-100 mt-2">Active Farmers</p>
            </div>
            <div className="text-white">
              <AnimatedCounter end={25} suffix="K+" />
              <p className="text-green-100 mt-2">Acres Managed</p>
            </div>
            <div className="text-white">
              <AnimatedCounter end={15} suffix="+" />
              <p className="text-green-100 mt-2">Crop Types</p>
            </div>
            <div className="text-white">
              <AnimatedCounter end={99} suffix="%" />
              <p className="text-green-100 mt-2">Uptime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Everything you need to run your farm"
            subtitle="From seed to sale, WeyaERP handles every aspect of your agricultural business"
            centered
          />
          
          <div className="space-y-20">
            {features.map((feature, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col gap-12`}>
                <div className="flex-1">
                  <div className="flex items-center mb-6">
                    {feature.icon}
                    <h3 className="text-3xl font-bold text-weya-brown ml-4">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">
                    {feature.description}
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <AnimatedCounter 
                        end={feature.stats.value} 
                        suffix={feature.stats.suffix}
                      />
                      <p className="text-sm text-gray-600 mt-1">
                        {feature.stats.label}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="aspect-video bg-gradient-to-br from-weya-green/20 to-weya-gold/20 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-4">📊</div>
                      <p className="text-gray-600">Feature Demo</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="WeyaERP vs. Spreadsheets"
            subtitle="See why thousands of farmers are making the switch"
            centered
          />
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-4 font-semibold text-weya-brown">Feature</th>
                    <th className="text-center p-4 font-semibold text-weya-green">WeyaERP</th>
                    <th className="text-center p-4 font-semibold text-gray-600">Spreadsheets</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="p-4 font-medium text-gray-700">{row.feature}</td>
                      <td className="p-4 text-center">
                        {row.weya ? (
                          <CheckCircle className="h-6 w-6 text-weya-green mx-auto" />
                        ) : (
                          <span className="text-gray-400">—</span>
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {row.spreadsheet ? (
                          <CheckCircle className="h-6 w-6 text-weya-green mx-auto" />
                        ) : (
                          <span className="text-red-400">✗</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Why farmers choose WeyaERP"
            subtitle="Built specifically for Ugandan agriculture"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Clock className="h-12 w-12 text-weya-green mx-auto mb-4" />
                <h3 className="text-xl font-bold text-weya-brown mb-2">Save Time</h3>
                <p className="text-gray-600">
                  Reduce data entry time by 80% with our smart automation features.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 text-weya-green mx-auto mb-4" />
                <h3 className="text-xl font-bold text-weya-brown mb-2">Stay Secure</h3>
                <p className="text-gray-600">
                  Your data is encrypted and backed up automatically. Never lose important records again.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-weya-green mx-auto mb-4" />
                <h3 className="text-xl font-bold text-weya-brown mb-2">Local Support</h3>
                <p className="text-gray-600">
                  Get help in English, Luganda, or Runyankole from our Uganda-based support team.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 