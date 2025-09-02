import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  delay = 0,
  className = ''
}) => {
  return (
    <motion.div
      className={`glass rounded-2xl p-6 hover-lift group ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center group-hover:glow transition-smooth">
            <Icon size={24} className="text-primary-foreground" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-feature font-display mb-2 text-foreground">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
