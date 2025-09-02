import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';

const HeroTicker = () => {
  const globalMarketData = [
    // US Markets
    { symbol: 'SPY', price: '$482.67', change: '+0.87%', isUp: true, market: 'US' },
    { symbol: 'QQQ', price: '$392.45', change: '+1.23%', isUp: true, market: 'US' },
    { symbol: 'AAPL', price: '$182.31', change: '+2.47%', isUp: true, market: 'US' },
    { symbol: 'GOOGL', price: '$134.12', change: '+1.23%', isUp: true, market: 'US' },
    { symbol: 'TSLA', price: '$248.87', change: '-0.89%', isUp: false, market: 'US' },
    { symbol: 'MSFT', price: '$412.45', change: '+1.76%', isUp: true, market: 'US' },
    { symbol: 'AMZN', price: '$142.33', change: '+0.54%', isUp: true, market: 'US' },
    { symbol: 'NVDA', price: '$891.25', change: '+3.21%', isUp: true, market: 'US' },
    { symbol: 'META', price: '$478.92', change: '-1.12%', isUp: false, market: 'US' },
    
    // European Markets
    { symbol: 'DAX', price: '16,847', change: '+0.65%', isUp: true, market: 'DE' },
    { symbol: 'FTSE', price: '7,654', change: '+0.42%', isUp: true, market: 'UK' },
    { symbol: 'CAC40', price: '7,234', change: '-0.23%', isUp: false, market: 'FR' },
    { symbol: 'ASML', price: '€723.40', change: '+1.87%', isUp: true, market: 'NL' },
    { symbol: 'SAP', price: '€158.92', change: '+2.14%', isUp: true, market: 'DE' },
    
    // Asian Markets
    { symbol: 'NIKKEI', price: '38,451', change: '+1.45%', isUp: true, market: 'JP' },
    { symbol: 'HSI', price: '17,234', change: '-0.76%', isUp: false, market: 'HK' },
    { symbol: 'SENSEX', price: '73,456', change: '+0.98%', isUp: true, market: 'IN' },
    { symbol: 'SSE', price: '2,987', change: '+0.34%', isUp: true, market: 'CN' },
    { symbol: 'KOSPI', price: '2,645', change: '+0.56%', isUp: true, market: 'KR' },
    
    // Commodities & Crypto
    { symbol: 'GOLD', price: '$2,034', change: '+0.78%', isUp: true, market: 'COM' },
    { symbol: 'OIL', price: '$78.45', change: '-1.23%', isUp: false, market: 'COM' },
    { symbol: 'BTC', price: '$67,234', change: '+4.56%', isUp: true, market: 'CRY' },
    { symbol: 'ETH', price: '$3,421', change: '+2.34%', isUp: true, market: 'CRY' },
    { symbol: 'SOL', price: '$156.78', change: '+8.92%', isUp: true, market: 'CRY' },
    
    // Additional Major Indices
    { symbol: 'DOW', price: '38,789', change: '+0.45%', isUp: true, market: 'US' },
    { symbol: 'NASDAQ', price: '15,987', change: '+1.34%', isUp: true, market: 'US' },
    { symbol: 'ASX200', price: '7,456', change: '+0.67%', isUp: true, market: 'AU' },
    { symbol: 'TSX', price: '21,234', change: '+0.23%', isUp: true, market: 'CA' },
    { symbol: 'IBEX35', price: '10,567', change: '-0.45%', isUp: false, market: 'ES' },
  ];

  return (
    <div className="relative overflow-hidden bg-secondary/20 py-3 border-y border-border">
      <motion.div
        className="flex space-x-8 animate-ticker"
        style={{ minWidth: 'max-content' }}
      >
        {[...globalMarketData, ...globalMarketData].map((item, index) => (
          <div
            key={`${item.symbol}-${index}`}
            className="flex items-center space-x-3 whitespace-nowrap"
          >
            <span className="text-xs text-muted-foreground/60 uppercase tracking-wider">{item.market}</span>
            <span className="font-semibold text-foreground">{item.symbol}</span>
            <span className="text-muted-foreground">{item.price}</span>
            <div
              className={`flex items-center space-x-1 ${
                item.isUp ? 'text-finibly-teal' : 'text-red-400'
              }`}
            >
              {item.isUp ? (
                <TrendingUp size={14} />
              ) : (
                <TrendingDown size={14} />
              )}
              <span className="text-sm font-medium">{item.change}</span>
            </div>
          </div>
        ))}
      </motion.div>
      
      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />
    </div>
  );
};

export default HeroTicker;
