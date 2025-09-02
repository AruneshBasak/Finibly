import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, MessageSquare, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      description: 'Send us an email anytime',
      value: 'arunesh.basak@outlook.com',
      href: 'mailto:arunesh.basak@outlook.com'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Chat with our support team',
      value: 'Available 24/7',
      href: '#'
    },
    {
      icon: Phone,
      title: 'Phone',
      description: 'Call us during business hours',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Office',
      description: 'Visit our headquarters',
      value: 'Mumbai, India',
      href: '#'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
  };

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
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Have questions about Finibly? We're here to help. Reach out to our team 
              and we'll get back to you as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="glass">
                <CardHeader>
                  <CardTitle className="text-2xl font-display text-foreground">
                    Send us a message
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          placeholder="John"
                          required
                          className="glass border-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          placeholder="Doe"
                          required
                          className="glass border-border"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        className="glass border-border"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="company">Company (Optional)</Label>
                      <Input
                        id="company"
                        placeholder="Your company name"
                        className="glass border-border"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        placeholder="What can we help you with?"
                        required
                        className="glass border-border"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your inquiry..."
                        required
                        rows={6}
                        className="glass border-border resize-none"
                      />
                    </div>
                    
                    <Button type="submit" className="w-full gradient-bg hover-glow group">
                      Send Message
                      <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-section font-display text-foreground mb-6">
                  Contact Information
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We're here to help and answer any question you might have. 
                  We look forward to hearing from you.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="glass hover-lift h-full">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center flex-shrink-0">
                            <info.icon size={24} className="text-primary-foreground" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-display font-semibold text-foreground mb-1">
                              {info.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-2">
                              {info.description}
                            </p>
                            {info.href !== '#' ? (
                              <a
                                href={info.href}
                                className="text-primary hover:text-accent transition-smooth font-medium"
                              >
                                {info.value}
                              </a>
                            ) : (
                              <span className="text-foreground font-medium">
                                {info.value}
                              </span>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
              
              {/* FAQ Link */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="glass">
                  <CardContent className="p-6">
                    <h3 className="font-display font-semibold text-foreground mb-2">
                      Frequently Asked Questions
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Find quick answers to common questions about Finibly.
                    </p>
                    <Button variant="outline" className="glass border-border hover:bg-secondary/20">
                      View FAQ
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support Hours */}
      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-section font-display text-foreground mb-6">
              Support Hours
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="font-display font-semibold text-foreground mb-2">
                  Email Support
                </h3>
                <p className="text-muted-foreground">
                  24/7 - We respond within 2 hours
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-display font-semibold text-foreground mb-2">
                  Live Chat
                </h3>
                <p className="text-muted-foreground">
                  Monday - Friday, 9 AM - 6 PM PST
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-display font-semibold text-foreground mb-2">
                  Phone Support
                </h3>
                <p className="text-muted-foreground">
                  Business hours only (Enterprise)
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
