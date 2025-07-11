import { Target, Heart, Users, Lightbulb, Rocket, Users as UsersIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import Timeline from '@/components/Timeline';

export default function About() {
  const milestones = [
    {
      date: "2022",
      title: "The Idea",
      description: "After seeing farmers struggle with paper records and spreadsheets, we realized there had to be a better way to manage agricultural data.",
      icon: <Lightbulb className="h-6 w-6 text-weya-gold" />
    },
    {
      date: "2023",
      title: "MVP Development",
      description: "Built the first version of WeyaERP with basic inventory and financial tracking features, designed specifically for Ugandan farmers.",
      icon: <Rocket className="h-6 w-6 text-weya-green" />
    },
    {
      date: "2024",
      title: "Pilot Program",
      description: "Launched with 50 farmers across Kampala and Mukono districts. Received invaluable feedback that shaped our current platform.",
      icon: <UsersIcon className="h-6 w-6 text-weya-brown" />
    },
    {
      date: "2025",
      title: "Official Launch",
      description: "Today, we're proud to serve over 1,000 farmers across Uganda, helping them increase profitability and streamline operations.",
      icon: <Target className="h-6 w-6 text-weya-green" />
    }
  ];

  const values = [
    {
      icon: <Heart className="h-8 w-8 text-weya-green" />,
      title: "Farmer-First",
      description: "Every decision we make is guided by what's best for the farmers who depend on us."
    },
    {
      icon: <Users className="h-8 w-8 text-weya-green" />,
      title: "Community-Driven",
      description: "We build features based on real feedback from real farmers in the field."
    },
    {
      icon: <Target className="h-8 w-8 text-weya-green" />,
      title: "Locally Relevant",
      description: "Built for Uganda&apos;s unique agricultural landscape, culture, and needs."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-weya-brown mb-6">
            Built from the soil up
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            WeyaERP was born from a simple observation: Uganda&apos;s farmers deserve technology 
            that understands their unique challenges and helps them thrive.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-weya-green py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
          <p className="text-xl text-green-100 leading-relaxed">
            To empower every Ugandan farmer with the tools they need to maximize their harvest, 
            understand their finances, and build sustainable agricultural businesses that feed 
            their families and communities.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-weya-brown mb-6">
                Meet Our Founder
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  <strong className="text-weya-brown">Sarah Namugga</strong> grew up on her family&apos;s 
                  coffee farm in Mukono district. After studying Computer Science at Makerere University, 
                  she worked as a software developer for international companies.
                </p>
                <p>
                  But her heart always remained with the farm. When she returned home and saw her 
                  father struggling with the same record-keeping challenges she remembered from childhood, 
                  she knew there had to be a better way.
                </p>
                <p>
                  &ldquo;I realized that the technology skills I&apos;d learned abroad could be used to solve 
                  real problems here at home. That&apos;s when WeyaERP was born,&rdquo; says Sarah.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-weya-green to-weya-gold rounded-full flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-4">👩‍💻</div>
                  <p className="text-lg">Sarah Namugga</p>
                  <p className="text-sm opacity-75">Founder & CEO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Our Journey"
            subtitle="From idea to impact - the story of WeyaERP"
            centered
          />
          
          <Timeline items={milestones} />
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Our Values"
            subtitle="The principles that guide everything we do"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-weya-brown mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-weya-brown py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="text-white">
              <div className="text-4xl font-bold text-weya-gold mb-2">1,000+</div>
              <p className="text-gray-300">Farmers Served</p>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold text-weya-gold mb-2">25,000+</div>
              <p className="text-gray-300">Acres Managed</p>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold text-weya-gold mb-2">15</div>
              <p className="text-gray-300">Districts Reached</p>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold text-weya-gold mb-2">47%</div>
              <p className="text-gray-300">Avg. Profit Increase</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Our Team"
            subtitle="Passionate people building technology for farmers"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-weya-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">SN</span>
                </div>
                <h3 className="text-xl font-bold text-weya-brown mb-2">Sarah Namugga</h3>
                <p className="text-gray-600 mb-4">Founder & CEO</p>
                <p className="text-sm text-gray-500">
                  Computer Science graduate from Makerere University with 8 years of software development experience.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-weya-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">JK</span>
                </div>
                <h3 className="text-xl font-bold text-weya-brown mb-2">John Kiwanuka</h3>
                <p className="text-gray-600 mb-4">CTO</p>
                <p className="text-sm text-gray-500">
                  Former lead developer at MTN Uganda, specializing in mobile applications and offline-first systems.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-weya-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">MN</span>
                </div>
                <h3 className="text-xl font-bold text-weya-brown mb-2">Mary Nakato</h3>
                <p className="text-gray-600 mb-4">Head of Farmer Success</p>
                <p className="text-sm text-gray-500">
                  Agricultural extension officer with 12 years of experience working directly with farmers across Uganda.
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