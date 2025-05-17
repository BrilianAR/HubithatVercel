import { useRef, useEffect, useState } from 'react';

// Custom colors based on provided values
const colors = {
  background1: 'rgb(27, 85, 74)',
  background: '#163b34',
  primary: '#3d8361',
  secondary: '#d6cda4',
  white: '#ffffff',
  lightText: '#f5f5f5',
  darkText: '#222222',
};

const TierCard = ({ type, averagePrice, description }: any) => {
  const getCardStyles = () => {
    switch (type) {
      case 'basics':
        return {
          background: `${colors.primary}20`, // 20% opacity
          textColor: colors.primary,
          buttonBg: colors.primary,
          labelBg: colors.primary,
        };
      case 'classics':
        return {
          background: `${colors.secondary}30`, // 30% opacity
          textColor: colors.background,
          buttonBg: colors.secondary,
          labelBg: colors.secondary,
        };
      case 'luxe':
        return {
          background: `${colors.background}80`, // 80% opacity
          textColor: colors.secondary,
          buttonBg: colors.background,
          labelBg: colors.background,
        };
      default:
        return {
          background: `${colors.primary}20`,
          textColor: colors.primary,
          buttonBg: colors.primary,
          labelBg: colors.primary,
        };
    }
  };

  const styles = getCardStyles();
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  return (
    <div
      className="flex flex-col p-6 rounded-lg mx-2 flex-shrink-0 md:flex-1 w-[85vw] md:w-auto"
      style={{
        backgroundColor: styles.background,
        borderLeft: type === 'basics' ? 'none' : (!isMobile ? '1px solid rgba(255,255,255,0.1)' : 'none'),
        borderTop: type !== 'basics' && isMobile ? '1px solid rgba(255,255,255,0.1)' : 'none',
      }}
    >
      <h3 className="mb-4">
        <span
          className="flex items-center rounded-lg px-3 py-2 text-white w-fit"
          style={{ backgroundColor: styles.labelBg }}
        >
          Hubithat
          <span className="text-base font-bold text-white capitalize">-{type}</span>
        </span>
      </h3>
      <div className="mt-2 mb-4">
        <p className="text-xs font-bold text-white/60">average</p>
        <div className="mt-1 font-black" style={{ color: styles.textColor }}>
          <span className="text-base text-white/80">IDR</span>
          <span className="ml-1 text-4xl">{averagePrice}</span>
          <span className="text-base text-white/80"> / month</span>
        </div>
      </div>
      <p className="mb-6 text-white/90">{description}</p>
      <a
        className="mt-auto rounded-full font-bold inline-flex gap-2 justify-center items-center border-0 outline-none transition-all px-6 py-3 text-sm hover:opacity-90"
        href={`/hubithat-place?tier=${type}`}
        style={{
          backgroundColor: styles.buttonBg,
          color: type === 'classics' ? colors.darkText : colors.white,
        }}
      >
        <span>discover</span>
        <span style={{ fill: type === 'classics' ? colors.darkText : colors.white }}>
          Hubithat
        </span>
        <span className="ml-1 capitalize">{type}</span>
      </a>
    </div>
  );
};

const PricingTiers = () => {
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef(null);

  // Detect mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Data for the cards
  const tiers = [
    {
      type: 'basics',
      averagePrice: '5jt',
      description: 'Affordable gems that cater to the essentials at a great price'
    },
    {
      type: 'classics',
      averagePrice: '7jt',
      description: 'Great quality, vast choice and an eye on budget'
    },
    {
      type: 'luxe',
      averagePrice: '10jt',
      description: 'High-end units, with top specs in strategic locations'
    }
  ];

  return (
    <section className="relative py-10 md:py-16 mb-16 md:mb-30 mt-6 md:mt-10" style={{ backgroundColor: colors.background1 }}>
      <div className="container mx-auto max-w-7xl px-2 md:px-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/4 mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-bold text-white">
              <span className="font-light block mb-2">with great options</span>
              for every budget
            </h2>
          </div>
          
          <div className="w-full md:w-3/4">
            {/* Desktop View */}
            <div className="hidden md:flex flex-row">
              {tiers.map((tier) => (
                <TierCard 
                  key={tier.type}
                  type={tier.type} 
                  averagePrice={tier.averagePrice} 
                  description={tier.description} 
                />
              ))}
            </div>
            
            {/* Mobile View - Slider with Arrow Navigation */}
            <div className="md:hidden">
              <div className="relative">
                <div 
                  ref={sliderRef}
                  className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {tiers.map((tier) => (
                    <div key={tier.type} className="snap-center">
                      <TierCard 
                        type={tier.type} 
                        averagePrice={tier.averagePrice} 
                        description={tier.description} 
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTiers;