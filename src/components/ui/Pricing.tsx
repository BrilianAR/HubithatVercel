import { useRef, useEffect, useState } from 'react';

// Custom colors consolidated in one place
const COLORS = {
  background1: 'rgb(27, 85, 74)',
  background: '#163b34',
  primary: '#3d8361',
  secondary: '#d6cda4',
  white: '#ffffff',
  lightText: '#f5f5f5',
  darkText: '#222222',
};

// Pre-computed card styles to avoid recalculations
const CARD_STYLES = {
  shares: {
    background: `${COLORS.primary}20`,
    textColor: COLORS.primary,
    buttonBg: COLORS.primary,
    labelBg: COLORS.primary,
  },
  basics: {
    background: `${COLORS.primary}40`,
    textColor: COLORS.primary,
    buttonBg: COLORS.primary,
    labelBg: COLORS.primary,
  },
  classics: {
    background: `${COLORS.secondary}60`,
    textColor: COLORS.background,
    buttonBg: COLORS.secondary,
    labelBg: COLORS.secondary,
  },
  luxe: {
    background: `${COLORS.background}80`,
    textColor: COLORS.secondary,
    buttonBg: COLORS.background,
    labelBg: COLORS.background,
  },
};
// Define the possible tier types
type TierType = keyof typeof CARD_STYLES; // 'basics' | 'classics' | 'luxe'

// Define the props interface for TierCard
interface TierCardProps {
  type: TierType;
  averagePrice: string;
  description: string;
  isInView: boolean;
}

// Define the interface for tier data
interface TierData {
  type: TierType;
  averagePrice: string;
  description: string;
}

// Update TIERS_DATA with explicit typing
const TIERS_DATA: TierData[] = [
  {
    type: 'shares',
    averagePrice: '3jt',
    description: 'Made for new comer city hustler'
  },
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

const TierCard = ({ type, averagePrice, description, isInView }: TierCardProps) => {
  // Use pre-computed styles instead of calculating on each render
  const styles = CARD_STYLES[type] || CARD_STYLES.basics;
  
  return (
    <div
      className="flex flex-col p-6 rounded-lg mx-2 flex-shrink-0 md:flex-1 w-[85vw] md:w-auto"
      style={{
        backgroundColor: styles.background,
        borderLeft: type === 'basics' ? 'none' : 'border-l border-white/10',
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateX(0)' : 'translateX(50px)',
        transition: 'transform 0.8s ease-out, opacity 0.8s ease-out',
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
          color: type === 'classics' ? COLORS.darkText : COLORS.white,
        }}
      >
        <span>discover</span>
        <span style={{ fill: type === 'classics' ? COLORS.darkText : COLORS.white }}>
          Hubithat
        </span>
        <span className="ml-1 capitalize">{type}</span>
      </a>
    </div>
  );
};

const PricingTiers = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  
  // Use useEffect with a more efficient observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Clean up once triggered
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-10 md:py-16 mb-16 md:mb-24 mt-6 md:mt-10" 
      style={{ backgroundColor: COLORS.background1 }}
    >
      <div className="container mx-auto max-w-7xl px-2 md:px-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text section */}
          <div 
            className="w-full md:w-1/4 mb-8 md:mb-0 text-center md:text-left"
            style={{
              transform: isInView ? 'translateX(0)' : 'translateX(-50px)',
              opacity: isInView ? 1 : 0,
              transition: 'transform 0.8s ease-out, opacity 0.8s ease-out',
            }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white">
              <span className="font-light block mb-2">with great options</span>
              for every budget
            </h2>
          </div>
          
          {/* Cards section */}
          <div className="w-full md:w-3/4">
            {/* Desktop View */}
            <div className="hidden md:flex flex-row">
              <div 
                className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory"
                style={{ 
                  scrollbarWidth: 'none', 
                  msOverflowStyle: 'none',
                }}
              >
                {TIERS_DATA.map((tier) => (
                  <TierCard 
                    key={tier.type}
                    type={tier.type}
                    averagePrice={tier.averagePrice} 
                    description={tier.description}
                    isInView={isInView}
                  />
                ))}
              </div>
            </div>
            
            {/* Mobile View */}
            <div className="md:hidden">
              <div 
                className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory"
                style={{ 
                  scrollbarWidth: 'none', 
                  msOverflowStyle: 'none',
                }}
              >
                {TIERS_DATA.map((tier) => (
                  <div key={tier.type} className="snap-center">
                    <TierCard 
                      type={tier.type}
                      averagePrice={tier.averagePrice} 
                      description={tier.description}
                      isInView={isInView}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTiers;