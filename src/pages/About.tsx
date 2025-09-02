import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Twitter, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import founderImage from '@/assets/founder-arunesh-basak.jpg';

const About = () => {
  const socialLinks = [
    {
      icon: Mail,
      href: 'mailto:arunesh.basak@outlook.com',
      label: 'Email',
      username: 'arunesh.basak@outlook.com'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/arunesh-basak/',
      label: 'LinkedIn',
      username: '/in/arunesh-basak'
    },
    {
      icon: Github,
      href: 'https://github.com/AruneshBasak',
      label: 'GitHub',
      username: '@AruneshBasak'
    },
    {
      icon: Twitter,
      href: 'https://x.com/Arunesh_Basak',
      label: 'Twitter',
      username: '@Arunesh_Basak'
    },
  ];

  const timeline = [
    {
      year: '2025',
      title: 'Finibly Launch',
      description: 'Finibly was officially launched with the mission to democratize finance through AI and modern technology.'
    },
    {
      year: '2024',
      title: 'Platform Development',
      description: 'Intensive development phase focusing on AI algorithms, market data integration, and user experience design.'
    },
    {
      year: '2023',
      title: 'Concept & Research',
      description: 'Initial concept development and extensive market research to identify gaps in existing financial platforms.'
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-hero font-display gradient-text mb-6">
              About Finibly
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Launched in 2025, Finibly represents the future of financial technology—where 
              artificial intelligence meets user-first design to create the ultimate investment platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-section font-display text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We believe that everyone deserves access to institutional-grade financial tools and insights. 
                Finibly breaks down the barriers between retail and professional investing by providing 
                AI-powered analysis, real-time data, and social collaboration features.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our platform combines cutting-edge technology with intuitive design to make complex 
                financial markets accessible to investors of all levels—from beginners to seasoned professionals.
              </p>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="glass rounded-3xl p-8 hover-lift">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 gradient-bg rounded-full" />
                    <span className="text-foreground font-medium">AI-Driven Insights</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 gradient-bg rounded-full" />
                    <span className="text-foreground font-medium">Real-Time Market Data</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 gradient-bg rounded-full" />
                    <span className="text-foreground font-medium">Social Trading Community</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 gradient-bg rounded-full" />
                    <span className="text-foreground font-medium">User-First Design</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-section font-display text-foreground mb-6">
              Founder
            </h2>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="glass overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  {/* Founder Image */}
                  <motion.div
                    className="lg:col-span-1"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <div className="aspect-square lg:aspect-auto lg:h-full relative overflow-hidden">
                      <img
                        src="/lovable-uploads/f2481589-9e46-4f80-95aa-56537905dc28.png"
                        alt="Arunesh Basak - Founder of Finibly"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>
                  
                  {/* Founder Info */}
                  <motion.div
                    className="lg:col-span-2 p-8"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                      Arunesh Basak
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Finibly was launched in 2025 by Arunesh Basak, a builder passionate about AI-driven 
                      finance and user-first products. With expertise in fintech innovation, product leadership, 
                      and artificial intelligence, Arunesh brings a unique vision of democratizing sophisticated 
                      financial tools for everyday investors. His experience in building scalable technology 
                      solutions drives Finibly's mission to revolutionize how people interact with financial markets.
                    </p>
                    
                    <div className="flex flex-wrap gap-3">
                      {socialLinks.map((link) => (
                        <motion.a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button variant="outline" size="sm" className="glass border-border hover:bg-secondary/20">
                            <link.icon size={16} className="mr-2" />
                            {link.username}
                          </Button>
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-section font-display text-foreground mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From concept to launch, here's how Finibly came to life.
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent" />
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    className="relative flex items-start space-x-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    {/* Timeline Dot */}
                    <div className="flex-shrink-0 w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center shadow-elegant">
                      <Calendar size={24} className="text-primary-foreground" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 pb-8">
                      <div className="glass rounded-2xl p-6 hover-lift">
                        <div className="flex items-center space-x-3 mb-3">
                          <span className="text-2xl font-display font-bold gradient-text">
                            {item.year}
                          </span>
                        </div>
                        <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
