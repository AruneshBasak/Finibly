import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface GradientCTAProps {
  title: string;
  description: string;
  primaryText: string;
  secondaryText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  className?: string;
}

const GradientCTA: React.FC<GradientCTAProps> = ({
  title,
  description,
  primaryText,
  secondaryText,
  onPrimaryClick,
  onSecondaryClick,
  className = ''
}) => {
  return (
    <motion.section
      className={`relative overflow-hidden rounded-3xl p-12 md:p-16 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-bg opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-background/20 to-background/40" />
      
      {/* Floating Elements */}
      <div className="absolute top-8 right-8 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-8 left-8 w-24 h-24 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.h2
          className="text-section font-display text-primary-foreground mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {title}
        </motion.h2>
        
        <motion.p
          className="text-lg text-primary-foreground/80 mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {description}
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button
            size="lg"
            onClick={onPrimaryClick}
            className="bg-background text-foreground hover:bg-background/90 hover-scale group"
          >
            {primaryText}
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
          </Button>
          
          {secondaryText && (
            <Button
              size="lg"
              variant="ghost"
              onClick={onSecondaryClick}
              className="text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10"
            >
              {secondaryText}
            </Button>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default GradientCTA;
