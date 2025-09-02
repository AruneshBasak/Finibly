import React from 'react';
import { motion } from 'framer-motion';

const StockMarquee = () => {
  const stockData = [
    { symbol: 'AAPL', price: '$175.43', change: '+2.34%', positive: true },
    { symbol: 'GOOGL', price: '$2,847.63', change: '+1.87%', positive: true },
    { symbol: 'MSFT', price: '$378.85', change: '-0.45%', positive: false },
    { symbol: 'TSLA', price: '$248.50', change: '+4.22%', positive: true },
    { symbol: 'NVDA', price: '$875.28', change: '+6.78%', positive: true },
    { symbol: 'AMZN', price: '$3,127.45', change: '+0.92%', positive: true },
    { symbol: 'META', price: '$487.11', change: '-1.23%', positive: false },
    { symbol: 'NFLX', price: '$441.20', change: '+2.15%', positive: true },
    { symbol: 'AMD', price: '$108.76', change: '+3.45%', positive: true },
    { symbol: 'CRM', price: '$245.80', change: '-0.78%', positive: false },
    { symbol: 'ORCL', price: '$118.32', change: '+1.56%', positive: true },
    { symbol: 'INTC', price: '$42.85', change: '-2.10%', positive: false }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-secondary/20 backdrop-blur-sm border-t border-border">
      <div className="overflow-hidden py-3">
        <motion.div
          className="flex items-center space-x-8 whitespace-nowrap"
          animate={{
            x: [0, -50 * stockData.length]
          }}
          transition={{
            duration: 45, // Slower for readability
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {/* Duplicate the array to create seamless loop */}
          {[...stockData, ...stockData].map((stock, index) => (
            <div 
              key={`${stock.symbol}-${index}`} 
              className="flex items-center space-x-2 text-sm"
            >
              <span className="font-medium text-foreground">{stock.symbol}</span>
              <span className="text-muted-foreground">{stock.price}</span>
              <span className={`font-medium ${stock.positive ? 'text-green-500' : 'text-red-500'}`}>
                {stock.change}
              </span>
              <div className="w-1 h-1 bg-border rounded-full mx-2" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default StockMarquee;
