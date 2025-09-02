import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, Brain, Search, Users, Heart, BarChart3, 
  TrendingUp, Shield, Zap, Target, DollarSign, 
  Briefcase, MapPin, Award, BookOpen, MessageSquare 
} from 'lucide-react';
import FeatureCard from '@/components/FeatureCard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Product = () => {
  const coreFeatures = [
    {
      icon: Globe,
      title: 'Global Market Data Hub',
      description: 'Access live-feeling data tiles for Stocks, Crypto, Forex, Commodities, ETFs, and Bonds. Features economic calendar, earnings tracker, and IPO insights with AI sentiment analysis from News, Twitter, Reddit, and YouTube.',
    },
    {
      icon: Brain,
      title: 'AI Investment Command Center',
      description: 'Unified portfolio dashboard with connected accounts, AI trade ideas with risk-reward ratios, and advanced what-if simulation tools for scenario planning.',
    },
    {
      icon: Search,
      title: 'Financial Data Search Engine',
      description: 'Voice-powered search delivering instant results with price data, fundamentals, analyst ratings, SEC filings, and news. Compare assets side-by-side with comprehensive analysis.',
    },
    {
      icon: Users,
      title: 'Market Social Club',
      description: 'Join asset-specific chatrooms, follow verified top traders, and compete in weekly/monthly leaderboards. Connect with like-minded investors and share insights.',
    },
    {
      icon: Heart,
      title: 'Hyper-Personalized Finance Feed',
      description: 'AI-tailored content based on your interests and risk profile. Get personalized modules, push notifications, and curated market intelligence.',
    },
  ];

  const extraFeatures = [
    {
      icon: Heart,
      title: 'AI-Powered Portfolio Doctor',
      description: 'Get health scores and rebalancing recommendations for optimal portfolio performance.',
      badge: 'AI-Driven'
    },
    {
      icon: BarChart3,
      title: 'Alternative Investments',
      description: 'Access tokenized assets and alternative investment opportunities.',
      badge: 'Exclusive'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Macro Dashboard',
      description: 'Rate, inflation, and GDP forecasts powered by advanced analytics.',
      badge: 'Pro Feature'
    },
    {
      icon: Shield,
      title: 'AI Tax & Compliance Assistant',
      description: 'Real-time tracking and automated report generation for tax compliance.',
      badge: 'Premium'
    },
    {
      icon: Target,
      title: 'Gamified Learning & Trading',
      description: 'Trading simulator with challenges and educational content.',
      badge: 'Interactive'
    },
    {
      icon: Briefcase,
      title: 'Investor Collaboration Workspaces',
      description: 'Private rooms and shared watchlists for team investing.',
      badge: 'Team Feature'
    },
    {
      icon: Zap,
      title: 'Real-Time Corporate Insights',
      description: 'Insider activity, earnings transcripts, and AI-generated summaries.',
      badge: 'Real-time'
    },
    {
      icon: MapPin,
      title: 'Sentiment Heatmaps & Trend Radar',
      description: 'Visual market sentiment tracking and trend identification.',
      badge: 'Visual'
    },
    {
      icon: DollarSign,
      title: 'Multi-Exchange Arbitrage Finder',
      description: 'Automated alerts for arbitrage opportunities across exchanges.',
      badge: 'Advanced'
    },
    {
      icon: Briefcase,
      title: 'Embedded Payment & Wallet System',
      description: 'P2P transfers and integrated payment solutions.',
      badge: 'FinTech'
    },
  ];

  const revenueStreams = [
    {
      title: 'Freemium + Premium',
      description: 'Free core features with advanced pro capabilities',
      icon: Award,
    },
    {
      title: 'Brokerage Partnerships',
      description: 'Revenue sharing with integrated trading platforms',
      icon: Users,
    },
    {
      title: 'API Data Licensing',
      description: 'Premium data feeds for institutional clients',
      icon: Zap,
    },
    {
      title: 'Ads & Sponsorships',
      description: 'Targeted financial product advertising',
      icon: Target,
    },
    {
      title: 'Signal Marketplace',
      description: 'Premium trading signals and research reports',
      icon: TrendingUp,
    },
  ];

  const premiumFeatures = [
    'Finverse+ PRO Traders Club',
    'B2B White-Label Solutions',
    'Premium Data Feeds',
    'Course Marketplace',
    'Advanced Analytics',
    'Priority Support',
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
              Finibly & Finibly+
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              A comprehensive suite of AI-powered financial tools designed for modern investors. 
              From real-time market data to social trading, everything you need is here.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Features */}
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
              Core Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The foundation of intelligent investing, all in one platform.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {coreFeatures.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.1}
                className="lg:col-span-1"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Streams */}
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
              Revenue Streams
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Sustainable business model with multiple revenue channels.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {revenueStreams.map((stream, index) => (
              <motion.div
                key={stream.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass hover-lift h-full">
                  <CardHeader>
                    <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mb-4">
                      <stream.icon size={24} className="text-primary-foreground" />
                    </div>
                    <CardTitle className="text-foreground">{stream.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{stream.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra Features */}
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
              Premium Feature Upgrades
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced capabilities for professional traders and institutions.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {extraFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass hover-lift h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center">
                        <feature.icon size={24} className="text-primary-foreground" />
                      </div>
                      <Badge variant="secondary" className="gradient-bg text-primary-foreground">
                        {feature.badge}
                      </Badge>
                    </div>
                    <CardTitle className="text-foreground">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Monetization */}
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
              Premium Monetization
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Exclusive features and services for our premium subscribers.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="glass">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-display gradient-text">
                  Finibly+ Premium Features
                </CardTitle>
                <CardDescription className="text-lg">
                  Unlock the full potential of intelligent investing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {premiumFeatures.map((feature, index) => (
                    <motion.div
                      key={feature}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-secondary/20 transition-smooth"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 gradient-bg rounded-full flex-shrink-0" />
                      <span className="text-foreground font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
