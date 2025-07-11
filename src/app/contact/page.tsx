'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Phone, MapPin, Send, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';
import { sendEmail, ContactFormData } from '@/app/actions/sendEmail';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
});

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await sendEmail(data);
      
      if (result.success) {
        setSubmitStatus({ type: 'success', message: result.message || 'Thank you for your message!' });
        form.reset();
      } else {
        setSubmitStatus({ type: 'error', message: result.error || 'Something went wrong' });
      }
    } catch {
      setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-weya-green" />,
      title: "Email",
      content: "hello@weyaerp.com",
      description: "Send us an email anytime"
    },
    {
      icon: <Phone className="h-6 w-6 text-weya-green" />,
      title: "Phone",
      content: "+256 700 123 456",
      description: "Call us during business hours"
    },
    {
      icon: <MapPin className="h-6 w-6 text-weya-green" />,
      title: "Address",
      content: "Kampala, Uganda",
      description: "Visit our office"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-weya-brown mb-6">
            Let&apos;s talk about your farm
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your agricultural business? We&apos;re here to help you get started 
            with WeyaERP and answer any questions you might have.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-weya-brown">Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              {submitStatus && (
                <div className={`p-4 rounded-lg mb-6 flex items-center space-x-2 ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-50 text-green-700 border border-green-200' 
                    : 'bg-red-50 text-red-700 border border-red-200'
                }`}>
                  {submitStatus.type === 'success' ? (
                    <CheckCircle className="h-5 w-5" />
                  ) : (
                    <XCircle className="h-5 w-5" />
                  )}
                  <span>{submitStatus.message}</span>
                </div>
              )}

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Your full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input placeholder="+256 700 123 456" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your farm and how we can help..."
                            rows={6}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-weya-green hover:bg-weya-green/90 text-white"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-weya-brown mb-4">
                Get in touch
              </h2>
              <p className="text-lg text-gray-600">
                We&apos;re here to help you succeed. Whether you have questions about our features, 
                need help getting started, or want to discuss custom solutions for your farm, 
                we&apos;d love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-weya-brown mb-1">
                          {item.title}
                        </h3>
                        <p className="text-gray-900 font-medium mb-1">
                          {item.content}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-weya-green text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Book a Live Demo</h3>
                <p className="text-green-100 mb-4">
                  See WeyaERP in action with a personalized demo tailored to your farm&apos;s needs.
                </p>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-weya-green"
                >
                  Schedule Demo
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Quick answers"
            subtitle="Common questions from farmers like you"
            centered
          />
          
          <div className="space-y-6">
            {[
              {
                question: "How quickly can I get started?",
                answer: "You can start using WeyaERP immediately after signing up. We&apos;ll provide you with training materials and our support team will help you get your farm data imported within 24 hours."
              },
              {
                question: "Do you offer training in local languages?",
                answer: "Yes! We provide training and support in English, Luganda, and Runyankole. Our team understands that farming is local, and so is our support."
              },
              {
                question: "What if I don&apos;t have reliable internet?",
                answer: "WeyaERP works offline! You can record all your farm data without internet, and it will sync automatically when you&apos;re back online."
              },
              {
                question: "Can you help me migrate from my current system?",
                answer: "Absolutely. Whether you&apos;re using spreadsheets, paper records, or another system, our team will help you migrate your data for free."
              }
            ].map((faq, index) => (
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

      <Footer />
    </div>
  );
} 