import { motion } from 'framer-motion'; // Import Framer Motion
import image from '../../assets/image1.png';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';
import image4 from '../../assets/image4.jpg';

const LifestyleMatchSection = () => {
  const roomTypes = [
    {
      image: image,
      title: "rooms with",
      subtitle: "shared bath",
      borderColor: "border-amber-500"
    },
    {
      image: image2,
      title: "rooms with",
      subtitle: "private bath",
      borderColor: "border-blue-400"
    },
    {
      image: image3,
      title: "private",
      subtitle: "studios",
      borderColor: "border-rose-700"
    },
    {
      image: image4,
      title: "entire",
      subtitle: "apartments",
      borderColor: "border-teal-800"
    }
  ];

  return (
    <motion.section
      className="relative py-10"
      initial={{ opacity: 0, y: 50 }} // Awal: Transparan dan bergeser ke bawah
      whileInView={{ opacity: 1, y: 0 }} // Akhir: Muncul di posisi semula
      viewport={{ once: true, amount: 0.2 }} // Animasi hanya terjadi sekali saat 20% elemen terlihat
      transition={{ duration: 0.8, ease: "easeOut" }} // Durasi dan jenis transisi
    >
      <div className="container mx-auto max-w-7xl mt-20 mb-10 px-4 md:px-10">
        {/* Order berbeda antara mobile dan desktop */}
        <div className="flex flex-col items-center">
          {/* Header text - tampil pertama di mobile, kedua di desktop */}
          <motion.div
            className="w-full mb-8 md:hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <h2 className="text-left md:text-right">
              <span className="block text-4xl md:text-5xl font-thin" style={{ color: "#d6cda4" }}>
                the right
              </span>
              <span className="block text-4xl md:text-5xl font-thin" style={{ color: "#d6cda4" }}>
                match
              </span>
              <span className="block text-5xl md:text-6xl font-bold" style={{ color: "#3d8361" }}>
                for your
              </span>
              <span className="block text-5xl md:text-6xl font-bold" style={{ color: "#3d8361" }}>
                lifestyle
              </span>
            </h2>
          </motion.div>

          {/* Layout Flex untuk desktop, blok normal untuk mobile */}
          <div className="flex flex-col lg:flex-row items-center w-full">
            {/* Room types cards */}
            <motion.div
              className="flex flex-row flex-wrap gap-4 flex-1 items-start justify-center md:justify-start"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {roomTypes.map((room, index) => (
                <div key={index} className="w-42 sm:w-48 h-58">
                  <div
                    className="h-full rounded-lg p-4 sm:p-6 shadow-sm border-t-4"
                    style={{ backgroundColor: "#d6cda4", borderColor: "#3d8361" }}
                  >
                    <div className="h-24 sm:h-28 flex items-center justify-center mb-4">
                      <img
                        src={room.image}
                        alt={`${room.title} ${room.subtitle}`}
                        className="max-h-full max-w-full"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-base sm:text-lg font-medium" style={{ color: "#163b34" }}>
                        {room.title}
                      </h3>
                      <h3 className="text-base sm:text-lg font-bold" style={{ color: "#163b34" }}>
                        {room.subtitle}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Header text - hanya tampil di desktop (hidden di mobile) */}
            <motion.div
              className="hidden md:block mt-8 lg:mt-0 lg:pl-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <h2 className="text-right">
                <span className="block text-5xl font-thin" style={{ color: "#d6cda4" }}>
                  the right
                </span>
                <span className="block text-5xl font-thin" style={{ color: "#d6cda4" }}>
                  match
                </span>
                <span className="block text-6xl font-bold" style={{ color: "#3d8361" }}>
                  for your
                </span>
                <span className="block text-6xl font-bold" style={{ color: "#3d8361" }}>
                  lifestyle
                </span>
              </h2>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default LifestyleMatchSection;