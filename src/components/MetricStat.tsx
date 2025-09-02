import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface MetricStatProps {
  value: string;
  label: string;
  delay?: number;
}

const MetricStat: React.FC<MetricStatProps> = ({ value, label, delay = 0 }) => {
  const [displayValue, setDisplayValue] = useState('0');
  
  useEffect(() => {
    const numericValue = parseInt(value.replace(/[^\d]/g, ''));
    if (isNaN(numericValue)) {
      setDisplayValue(value);
      return;
    }

    const duration = 2000;
    const steps = 60;
    const increment = numericValue / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        const formattedValue = Math.floor(current).toLocaleString();
        setDisplayValue(value.replace(/[\d,]+/, formattedValue));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <div className="text-hero gradient-text font-display mb-2">
        {displayValue}
      </div>
      <div className="text-muted-foreground font-medium">
        {label}
      </div>
    </motion.div>
  );
};

export default MetricStat;
