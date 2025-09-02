import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
const finiblyLogo = '/lovable-uploads/f2088add-4c08-461b-be68-cb0909c7d8fd.png';

const Footer = () => {
  const footerLinks = {
    Product: [
      { name: 'Features', href: '/product' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'API', href: '/api' },
      { name: 'Integrations', href: '/integrations' },
    ],
    Company: [
      { name: 'About', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press', href: '/press' },
    ],
    Resources: [
      { name: 'Documentation', href: '/docs' },
      { name: 'Help Center', href: '/help' },
      { name: 'Community', href: '/community' },
      { name: 'Status', href: '/status' },
    ],
    Legal: [
      { name: 'Privacy Policy', href: '/legal/privacy' },
      { name: 'Terms of Service', href: '/legal/terms' },
      { name: 'Cookie Policy', href: '/legal/cookies' },
      { name: 'Security', href: '/security' },
    ],
  };

  const socialLinks = [
    { icon: Mail, href: 'mailto:arunesh.basak@outlook.com', label: 'Email' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/arunesh-basak/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/AruneshBasak', label: 'GitHub' },
    { icon: Twitter, href: 'https://x.com/Arunesh_Basak', label: 'Twitter' },
  ];

  return (
    <footer className="relative bg-secondary/10 border-t border-border">
      <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
      
      <div className="relative container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img src={finiblyLogo} alt="Finibly" className="h-14 w-auto hover-scale transition-smooth" />
            </Link>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              The Universe of Finance in One Place. AI-powered investment insights, 
              real-time market data, and social trading platform.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass rounded-xl flex items-center justify-center hover-scale group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                >
                  <Icon size={18} className="text-muted-foreground group-hover:text-primary transition-smooth" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-display font-semibold text-foreground mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-smooth"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">
              © 2025 Finibly. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span>Made with ❤️ for finance enthusiasts</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
