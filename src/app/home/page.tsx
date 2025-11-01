'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useApp } from '@/contexts/AppContext';
import { Navbar } from '@/components/navigation/Navbar';
import { Dashboard } from '@/components/dashboard/Dashboard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  BarChart3, 
  Leaf, 
  MapPin, 
  ArrowRight,
  TrendingUp,
  Target,
  Users,
  Calendar,
  HelpCircle,
  Info,
  Mail,
  Phone,
  MessageSquare
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function HomePage() {
  const { state } = useApp();
  const router = useRouter();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!state.isLoading && !state.isAuthenticated) {
      router.push('/');
    }
  }, [state.isAuthenticated, state.isLoading, router]);

  // Show loading state
  if (state.isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  // Show login prompt if not authenticated
  if (!state.isAuthenticated) {
    return null; // Will redirect
  }

  const quickActions = [
    {
      title: 'Crop Yield Prediction',
      description: 'Estimate crop yields based on soil properties',
      icon: BarChart3,
      href: '/home/crop_yield',
      color: 'bg-blue-500',
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Crop Recommendation',
      description: 'Get AI-powered crop suggestions for your soil',
      icon: Leaf,
      href: '/home/croprecommendation',
      color: 'bg-green-500',
      gradient: 'from-green-500 to-green-600',
    },
    {
      title: 'Know Your Soil Data',
      description: 'Analyze and visualize soil properties',
      icon: MapPin,
      href: '/home/soildata',
      color: 'bg-purple-500',
      gradient: 'from-purple-500 to-purple-600',
    },
  ];

  const stats = [
    {
      title: 'Total Estimations',
      value: '156',
      change: '+23',
      changeType: 'positive',
      icon: TrendingUp,
    },
    {
      title: 'Average Yield',
      value: '2,450 kg',
      change: '+12%',
      changeType: 'positive',
      icon: Target,
    },
    {
      title: 'Active Users',
      value: '1,234',
      change: '+5%',
      changeType: 'positive',
      icon: Users,
    },
    {
      title: 'This Month',
      value: '23',
      change: '+8',
      changeType: 'positive',
      icon: Calendar,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-6">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Welcome back, {state.user?.displayName || 'Farmer'}! 👨‍🌾
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your AI-powered agricultural assistant is ready to help you make informed decisions about your crops.
          </p>
        </motion.div>

        {/* Stats Overview */}
        

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <Card
                  key={action.title}
                  className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
                  onClick={() => router.push(action.href)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-xl ${action.color} text-white shadow-lg`}>
                        <Icon className="h-8 w-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-xl text-foreground mb-2">{action.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{action.description}</p>
                      </div>
                      <ArrowRight className="h-6 w-6 text-muted-foreground group-hover:text-foreground transition-all duration-300 group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </motion.div>

        {/* FAQs Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <HelpCircle className="h-8 w-8 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Frequently Asked Questions</h2>
          </div>
          <Card className="border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left font-semibold">
                    How accurate are the crop yield predictions?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Our AI-powered predictions use advanced machine learning models trained on extensive agricultural data. 
                    The accuracy varies by crop and region, but typically ranges between 85-95% when provided with accurate soil data.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left font-semibold">
                    What soil data do I need to provide?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    You'll need to provide key soil properties including nitrogen, phosphorus, and potassium levels (N-P-K), 
                    pH value, temperature, humidity, rainfall, and soil type. You can either input these manually or use our 
                    soil data integration feature.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left font-semibold">
                    How do crop recommendations work?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Our AI analyzes your soil properties and environmental conditions to suggest the most suitable crops. 
                    The recommendations consider factors like soil nutrients, climate compatibility, and potential yield, 
                    helping you make informed decisions for optimal agricultural outcomes.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left font-semibold">
                    Is my data secure and private?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes, absolutely. We prioritize data security and privacy. All your agricultural data is encrypted and 
                    stored securely. We never share your information with third parties and comply with data protection regulations.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left font-semibold">
                    Can I access market price information?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes! Our platform provides real-time market price information for various commodities. You can access 
                    current market prices to help you make better selling decisions and plan your crop production accordingly.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </motion.div>

        {/* About Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <Info className="h-8 w-8 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">About Us</h2>
          </div>
          <Card className="border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
            <CardContent className="p-6">
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  Welcome to <span className="font-semibold text-foreground">AI-Fasal</span>, your trusted AI-powered 
                  agricultural assistant designed to empower modern farmers with data-driven insights.
                </p>
                <p className="leading-relaxed">
                  Our mission is to revolutionize agriculture by leveraging cutting-edge artificial intelligence and machine 
                  learning technologies to help farmers make informed decisions about crop selection, yield estimation, and 
                  agricultural planning.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Our Vision</h3>
                    <p className="leading-relaxed">
                      To make advanced agricultural technology accessible to farmers worldwide, enabling sustainable and 
                      profitable farming practices through intelligent data analysis.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">What We Offer</h3>
                    <ul className="space-y-2 leading-relaxed">
                      <li>• AI-powered crop yield predictions</li>
                      <li>• Intelligent crop recommendations</li>
                      <li>• Comprehensive soil data analysis</li>
                      <li>• Real-time market price information</li>
                      <li>• Data-driven agricultural insights</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <Mail className="h-8 w-8 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Contact Us</h2>
          </div>
          <Card className="border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>
                Reach out to us through these channels
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground">aifasal0018@gmail.com</p>
                    
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <p className="text-muted-foreground">+91  9916910155</p>
                    <p className="text-muted-foreground text-sm">Mon-Fri, 9AM-5PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Address</h3>
                    <p className="text-muted-foreground">
                    Rajanukunte, Via Yalahanka,
                    Bengaluru, Karnataka 560 064<br />
                  
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
       
      </main>
    </div>
  );
}