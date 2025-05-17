import type { ReactNode } from "react";
import { useRef } from 'react'; // Import useRef as a value
import { motion } from "framer-motion";
import { Rocket, Heart } from "lucide-react";

// Define interface for Feature Card props
interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  darkBg: boolean;
}

// Feature Card Component
const FeatureCard = ({ icon, title, description, darkBg }: FeatureCardProps) => (
  <div className={`flex flex-col justify-start w-full max-w-[300px] px-8 py-20 ${darkBg ? "bg-[var(--bg-color)] text-white" : "bg-[var(--button-second)] text-black"}`}>
      <span className="text-4xl pb-8">
        {icon}
      </span>
      <span className="font-['Kumbh_Sans'] text-2xl font-medium py-2.5 text-left">
        <p>{title}</p>
      </span>
      <span className="font-['Kumbh_Sans'] text-base font-light leading-[26px] pb-2.5 text-left">
        <p>{description}</p>
      </span>
    </div>
);

// Define interface for Feature
interface Feature {
  icon: ReactNode;
  title: string; 
  description: string;
  darkBg: boolean;
}

export default function ResponsiveFeatureSection() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const features: Feature[] = [
    {
      icon: <Rocket className="text-white" />,
      title: "Green Oasis",
      description: "Escape the city bustle in our forest garden, with breathtaking cityscapes views.",
      darkBg: true
    },
    {
      icon: <Heart className="text-black" />,
      title: "Smart Capsule",
      description: "Experience smart and sleek design capsule designed for ultimate relaxation and privacy.",
      darkBg: false
    },
    {
      icon: (
        <div className="flex items-center justify-center h-7 w-7 rounded-full border-2 border-white">
          <svg className="text-white h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2a10 10 0 0 0-10 10 10 10 0 0 0 10 10V2z" />
          </svg>
        </div>
      ),
      title: "Eco-Friendly",
      description: "We make sustainable design with renewable energy and reusing and recycling water for the habitat.",
      darkBg: true
    }
  ];

  return (
      <div className="flex flex-col items-center w-full max-w-[1232px] py-24 mx-auto gap-y-5">
      <motion.span
                className="block w-full max-w-[550px] px-4 text-center"
                initial={{ opacity: 0, y: 50 }} // Awal: Transparan dan bergeser ke bawah
                whileInView={{ opacity: 1, y: 0 }} // Akhir: Muncul di posisi semula
                viewport={{ once: true, amount: 0.2 }} // Animasi hanya terjadi sekali saat 20% elemen terlihat
                transition={{ duration: 0.8, ease: "easeOut" }} // Durasi dan jenis transisi
              >
                <p className="font-['Kumbh_Sans'] text-4xl font-bold text-gray-800 leading-[50px]">
                  Discover Elevated Urban Sanctuaries
                </p>
              </motion.span>
      
              <motion.span
                className="block w-full max-w-[550px] text-center px-4 mb-5"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} // Tambahkan delay untuk animasi bertahap
              >
                <p className="font-['Kumbh_Sans'] text-lg font-normal text-gray-800 leading-7">
                  HubiThat reimagines longstay living in the modern cities by converting underutilized rooftops into forest and garden integrated with smart and compact cabin. We offer unique, sustainable escapes with stunning views, blending comfort, innovation, and nature integragtion definitely to make you more productive.
                </p>
              </motion.span>

      <motion.div
        className="w-full py-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      >
        {/* Desktop View - Horizontal cards */}
        <div className="hidden md:flex flex-wrap px-4 justify-center items-stretch w-full">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              darkBg={feature.darkBg}
            />
          ))}
        </div>

        {/* Mobile View - Horizontal scrollable cards */}
        <div className="md:hidden w-full pl-6 pr-0 ">
          <div className="relative">
            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {features.map((feature, index) => (
               <div key={index} className="flex-shrink-0 flex flex-wrap justify-center items-stretch">
                <FeatureCard
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                    darkBg={feature.darkBg}
                />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}