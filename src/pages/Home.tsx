import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Brain, Search, Users, TrendingUp, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FeatureCard from '@/components/FeatureCard';
import MetricStat from '@/components/MetricStat';
import GradientCTA from '@/components/GradientCTA';
const finiblyLogo = '/lovable-uploads/f2088add-4c08-461b-be68-cb0909c7d8fd.png';
import financialTechBg from '@/assets/financial-tech-bg.jpg';
import marketDataOverlay from '@/assets/market-data-overlay.jpg';
import globalFinanceNetwork from '@/assets/global-finance-network.jpg';

const Home = () => {
  const features = [
    {
      icon: Globe,
      title: 'Global Market Data Hub',
      description: 'Access live data for stocks, crypto, forex, commodities, ETFs, and bonds with AI-powered sentiment analysis from multiple sources.',
    },
    {
      icon: Brain,
      title: 'AI Investment Command Center',
      description: 'Get AI-driven trade ideas, portfolio analysis, and what-if scenarios to make smarter investment decisions.',
    },
    {
      icon: Search,
      title: 'Financial Data Search Engine',
      description: 'Voice-powered search across fundamentals, analyst ratings, SEC filings, and news with instant results.',
    },
    {
      icon: Users,
      title: 'Market Social Club',
      description: 'Connect with verified traders, join asset discussions, and follow top performers in our social trading community.',
    },
  ];

  const stats = [
    { value: '1M+', label: 'Active Users' },
    { value: '50K+', label: 'Assets Tracked' },
    { value: '99.9%', label: 'Uptime' },
    { value: '150+', label: 'Countries' },
  ];

  const trustItems = [
    { icon: Shield, title: 'Bank-Grade Security', description: 'SOC 2 Type II certified with end-to-end encryption' },
    { icon: TrendingUp, title: 'Real-Time Data', description: 'Direct feeds from major exchanges and data providers' },
    { icon: Users, title: 'Trusted by Professionals', description: 'Used by hedge funds, institutions, and retail investors' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden hero-gradient">
        {/* Background Images */}
        <div className="absolute inset-0">
          <img 
            src={financialTechBg} 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-background/60" />
        </div>
        
        <div className="relative container mx-auto px-6 pt-32 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ 
                duration: 1.2,
                ease: "easeOut",
                scale: { type: "spring", stiffness: 260, damping: 20 },
                rotateY: { duration: 1.5, ease: "easeInOut" }
              }}
              whileHover={{ 
                scale: 1.1, 
                rotateY: [0, 15, -15, 0],
                transition: { duration: 0.6 }
              }}
            >
              <motion.img 
                src={finiblyLogo} 
                alt="Finibly" 
                className="h-24 mx-auto mb-8" 
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
            
            <motion.h1
              className="text-hero font-display gradient-text mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              The Universe of Finance
              <br />
              <span className="text-foreground">in One Place</span>
            </motion.h1>
            
            <motion.p
              className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Finibly+ – The Future of Finance, All in One Place. AI-powered investment insights, 
              real-time market data, and social trading platform for the modern investor.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button size="lg" className="gradient-bg hover-glow transition-spring group">
                Explore Finibly+
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
              </Button>
              <Button size="lg" variant="outline" className="glass border-border hover:bg-secondary/20">
                Get Started Free
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <MetricStat
                key={stat.label}
                value={stat.value}
                label={stat.label}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20">
        {/* Background */}
        <div className="absolute inset-0">
          <img 
            src={marketDataOverlay} 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover opacity-5"
          />
        </div>
        <div className="relative container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-section font-display gradient-text mb-6">
              Core Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to make informed investment decisions in one powerful platform.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="relative py-20 bg-secondary/5">
        {/* Background */}
        <div className="absolute inset-0">
          <img 
            src={globalFinanceNetwork} 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-secondary/20" />
        </div>
        <div className="relative container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-section font-display text-foreground mb-6">
              Trusted by Investors Worldwide
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built with security, reliability, and performance at its core.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trustItems.map((item, index) => (
              <FeatureCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <GradientCTA
            title="Stay Ahead of the Markets"
            description="Join thousands of investors who rely on Finibly for market insights, analysis, and opportunities. Get exclusive access to new features and market intelligence."
            primaryText="Subscribe to Newsletter"
            secondaryText="Learn More"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
