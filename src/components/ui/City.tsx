import { useState, useEffect } from 'react';
import svg1 from '../../assets/1.svg';
import svg2 from '../../assets/2.svg';
import svg3 from '../../assets/3.svg';
import svg4 from '../../assets/4.svg';
import svg5 from '../../assets/5.svg';
import svg6 from '../../assets/6.svg';

export default function SVGSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [svgContents, setSvgContents] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // Data untuk slider (teks dan nama file)
  const sliderData = [
    { text: "Keindahan Alam Indonesia", filename: svg1 },
    { text: "Teknologi Masa Depan", filename: svg2 },
    { text: "Kreativitas Tanpa Batas", filename: svg3 },
    { text: "Kebersamaan dalam Keberagaman", filename: svg4 },
    { text: "Perjalanan Menuju Sukses", filename: svg5 },
    { text: "Harmoni dengan Alam", filename: svg6 }
  ];

  // Fungsi untuk memuat file SVG
  useEffect(() => {
    async function loadSVGs() {
      setIsLoading(true);
      const svgs = {};
      
      for (const slide of sliderData) {
        try {
          // Coba membaca file SVG
          const response = await fetch(slide.filename);
          if (!response.ok) throw new Error(`Failed to load ${slide.filename}`);
          const svgText = await response.text();
          svgs[slide.filename] = svgText;
        } catch (error) {
          console.error(`Error loading SVG ${slide.filename}:`, error);
          // Gunakan SVG placeholder jika file tidak ditemukan
          svgs[slide.filename] = `<svg viewBox="0 0 200 150">
            <rect width="200" height="150" fill="#f1f5f9" />
            <text x="100" y="75" font-size="12" text-anchor="middle">
              ${slide.filename} tidak ditemukan
            </text>
          </svg>`;
        }
      }
      
      setSvgContents(svgs);
      setIsLoading(false);
    }
    
    loadSVGs();
  }, []);

  // Fungsi untuk pindah ke slide berikutnya
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === sliderData.length - 1 ? 0 : prev + 1));
  };

  // Fungsi untuk pindah ke slide sebelumnya
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? sliderData.length - 1 : prev - 1));
  };

  // Otomatis pindah slide setiap 3 detik
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  // Menyiapkan SVG untuk ditampilkan dengan aman
  const createMarkup = (svgContent) => {
    return { __html: svgContent };
  };

  if (isLoading) {
    return (
      <div className="w-full max-w-2xl mx-auto flex items-center justify-center h-64 bg-gray-100 rounded-lg">
        <p className="text-gray-500">Memuat gambar SVG...</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative overflow-hidden rounded-lg shadow-lg bg-white">
        {/* SVG Container */}
        <div className="relative h-64">
          {/* Text Overlay */}
          <div className="absolute inset-0 flex items-start justify-center pt-4 z-10">
            <h2 className="text-2xl font-bold px-4 py-2 bg-black bg-opacity-50 text-white rounded">
              {sliderData[currentSlide].text}
            </h2>
          </div>
          
          {/* SVG Image */}
          <div 
            className="h-full w-full"
            dangerouslySetInnerHTML={createMarkup(svgContents[sliderData[currentSlide].filename])}
          />
          
          {/* Controls */}
          <div className="absolute bottom-4 right-4 flex space-x-2">
            <button 
              onClick={prevSlide}
              className="p-2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full text-gray-900 transition-all"
            >
              ◀
            </button>
            <button 
              onClick={nextSlide}
              className="p-2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full text-gray-900 transition-all"
            >
              ▶
            </button>
          </div>
          
          {/* Indicators */}
          <div className="absolute bottom-4 left-0 right-0">
            <div className="flex justify-center space-x-2">
              {sliderData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentSlide === index ? "bg-white" : "bg-gray-400 bg-opacity-50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}