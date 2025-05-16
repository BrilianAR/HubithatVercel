import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion

interface TierProps {
  type: 'basics' | 'classics' | 'luxe';
  averagePrice: string;
  description: string;
}

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

const TierCard: React.FC<TierProps> = ({ type, averagePrice, description }) => {
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
    }
  };

  const styles = getCardStyles();

  return (
    <motion.div
      className="flex flex-col p-6 rounded-lg mx-2 flex-1 my-2 md:my-0"
      style={{
        backgroundColor: styles?.background,
        borderLeft: type === 'basics' ? 'none' : (window.innerWidth > 768 ? '1px solid rgba(255,255,255,0.1)' : 'none'),
        borderTop: type !== 'basics' && window.innerWidth <= 768 ? '1px solid rgba(255,255,255,0.1)' : 'none',
      }}
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <h3 className="mb-4">
        <span
          className="flex items-center rounded-lg px-3 py-2 text-white w-fit"
          style={{ backgroundColor: styles?.labelBg }}
        >
          Hubithat
          <span className="text-base font-bold text-white capitalize">-{type}</span>
        </span>
      </h3>
      <div className="mt-2 mb-4">
        <p className="text-xs font-bold text-white/60">average</p>
        <div className="mt-1 font-black" style={{ color: styles?.textColor }}>
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
          backgroundColor: styles?.buttonBg,
          color: type === 'classics' ? colors.darkText : colors.white,
        }}
      >
        <span>discover</span>
        <span className="" style={{ fill: type === 'classics' ? colors.darkText : colors.white }}>
          Hubithat
        </span>
        <span className="ml-1 capitalize">{type}</span>
      </a>
    </motion.div>
  );
};

const PricingTiers: React.FC = () => {
  // Effect to handle border styling on resize
  React.useEffect(() => {
    const handleResize = () => {
      // Force a re-render when window is resized
      // This ensures the borders are correctly applied based on screen size
      setState(prevState => !prevState);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Simple state to force re-render on resize
  const [state, setState] = React.useState(false);

  return (
    <section className="relative py-10 md:py-16 mb-16 md:mb-30 mt-6 md:mt-10" style={{ backgroundColor: colors.background1 }}>
      <div className="container mx-auto max-w-7xl px-4 md:px-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="w-full md:w-1/4 mb-8 md:mb-0 text-center md:text-left"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white">
              <span className="font-light block mb-2">with great options</span>
              for every budget
            </h2>
          </motion.div>
          <div className="w-full md:w-3/4 flex flex-col md:flex-row">
            <TierCard
              type="basics"
              averagePrice="5jt"
              description="Affordable gems that cater to the essentials at a great price"
            />
            <TierCard
              type="classics"
              averagePrice="7jt"
              description="Great quality, vast choice and an eye on budget"
            />
            <TierCard
              type="luxe"
              averagePrice="10jt"
              description="High-end units, with top specs in strategic locations"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTiers;