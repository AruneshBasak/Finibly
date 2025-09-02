import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Pricing = () => {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Perfect for getting started with market analysis',
      icon: Star,
      features: [
        'Basic market data',
        'Limited AI insights',
        'Community access',
        'Email support',
        'Mobile app access',
        'Basic charts & tools'
      ],
      limitations: [
        'Up to 10 watchlist items',
        'Daily data updates',
        'Basic portfolio tracking'
      ],
      cta: 'Get Started Free',
      popular: false
    },
    {
      name: 'Finibly+',
      price: '$29',
      period: 'per month',
      description: 'Advanced features for serious investors',
      icon: Zap,
      features: [
        'Real-time market data',
        'Advanced AI insights',
        'Portfolio optimization',
        'Priority support',
        'Advanced charts',
        'API access',
        'Custom alerts',
        'Social trading features',
        'Alternative investments',
        'Tax optimization tools'
      ],
      limitations: [],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact us',
      description: 'For institutions and high-volume traders',
      icon: Crown,
      features: [
        'Everything in Finibly+',
        'White-label solutions',
        'Custom integrations',
        'Dedicated support',
        'Advanced analytics',
        'Institutional data feeds',
        'Multi-user management',
        'Custom reporting',
        'SLA guarantees',
        'On-premise deployment'
      ],
      limitations: [],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const faqs = [
    {
      question: 'What\'s included in the free plan?',
      answer: 'The free plan includes basic market data, limited AI insights, community access, and essential portfolio tracking features. Perfect for getting started with Finibly.'
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period.'
    },
    {
      question: 'Is there a free trial for Finibly+?',
      answer: 'Yes, we offer a 14-day free trial for Finibly+ with full access to all premium features. No credit card required to start.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers for enterprise customers.'
    },
    {
      question: 'Do you offer student discounts?',
      answer: 'Yes, we offer a 50% discount for students with valid student ID verification.'
    },
    {
      question: 'What about data security?',
      answer: 'We use bank-grade encryption and are SOC 2 Type II certified. Your data is protected with the highest security standards.'
    }
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
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Choose the plan that fits your investment journey. Start free and upgrade as you grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto justify-items-center">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative w-full max-w-sm ${plan.popular ? 'lg:scale-110 lg:-mt-6 lg:mb-6' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10 w-full flex justify-center">
                    <Badge className="gradient-bg text-primary-foreground px-4 py-1.5 text-xs font-semibold shadow-lg border border-primary/20 rounded-full whitespace-nowrap">
                      ✨ Most Popular Plan
                    </Badge>
                  </div>
                )}
                
                <Card className={`glass h-full hover-lift relative ${plan.popular ? 'ring-2 ring-primary shadow-elegant border-primary/30' : ''}`}>
                  <CardHeader className="text-center pb-8">
                    <div className={`mx-auto mb-4 gradient-bg rounded-2xl flex items-center justify-center ${plan.popular ? 'w-20 h-20' : 'w-16 h-16'}`}>
                      <plan.icon size={plan.popular ? 36 : 32} className="text-primary-foreground" />
                    </div>
                    <CardTitle className={`font-display text-foreground ${plan.popular ? 'text-3xl' : 'text-2xl'}`}>
                      {plan.name}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {plan.description}
                    </CardDescription>
                    <div className="mt-4">
                      <span className={`font-display font-bold gradient-text ${plan.popular ? 'text-5xl' : 'text-4xl'}`}>
                        {plan.price}
                      </span>
                      <span className="text-muted-foreground ml-2">
                        {plan.period}
                      </span>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <Button 
                      className={`w-full ${plan.popular ? 'gradient-bg hover-glow' : 'glass border-border hover:bg-secondary/20'}`}
                      size="lg"
                    >
                      {plan.cta}
                    </Button>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">
                        Features included:
                      </h4>
                      <ul className="space-y-2">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-center space-x-3">
                            <Check size={16} className="text-primary flex-shrink-0" />
                            <span className="text-muted-foreground text-sm">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {plan.limitations.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">
                          Limitations:
                        </h4>
                        <ul className="space-y-2">
                          {plan.limitations.map((limitation) => (
                            <li key={limitation} className="flex items-center space-x-3">
                              <div className="w-1 h-1 bg-muted-foreground rounded-full flex-shrink-0 mt-2" />
                              <span className="text-muted-foreground text-sm">
                                {limitation}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Got questions? We've got answers.
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass hover-lift">
                    <CardHeader>
                      <CardTitle className="text-lg text-foreground">
                        {faq.question}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-section font-display text-foreground mb-6">
              Ready to Transform Your Investing?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Join thousands of investors who trust Finibly for their financial decision-making.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-bg hover-glow">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="glass border-border hover:bg-secondary/20">
                Contact Sales
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
