import React from "react";
import { motion } from "framer-motion";

// ---------- FADE ANIMATIONS ----------

// 1. Basic Fade In - Elemen muncul dengan transisi opacity
export const FadeIn = ({ children, duration = 1, delay = 0 }) => (
  <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    transition={{ duration, delay }} 
    className="relative w-full"
  >
    {children}
  </motion.div>
);

// 2. Fade Out - Elemen menghilang dengan transisi opacity
export const FadeOut = ({ children, duration = 1, delay = 0 }) => (
  <motion.div 
    initial={{ opacity: 1 }} 
    animate={{ opacity: 0 }} 
    transition={{ duration, delay }} 
    className="relative w-full"
  >
    {children}
  </motion.div>
);

// 3. Staggered Fade In - Animasi fading bertahap untuk elemen anak
export const StaggeredFadeIn = ({ children }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  };
  
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="relative w-full"
    >
      {React.Children.map(children, child => (
        <motion.div variants={item}>{child}</motion.div>
      ))}
    </motion.div>
  );
};

// ---------- SLIDE ANIMATIONS ----------

// 4. Slide Up - Elemen muncul dari bawah ke atas
export const SlideUp = ({ children, duration = 1, delay = 0 }) => (
  <motion.div 
    initial={{ y: 50, opacity: 0 }} 
    animate={{ y: 0, opacity: 1 }} 
    transition={{ duration, delay }} 
    className="relative w-full"
  >
    {children}
  </motion.div>
);

// 5. Slide Down - Elemen muncul dari atas ke bawah
export const SlideDown = ({ children, duration = 1, delay = 0 }) => (
  <motion.div 
    initial={{ y: -50, opacity: 0 }} 
    animate={{ y: 0, opacity: 1 }} 
    transition={{ duration, delay }} 
    className="relative w-full"
  >
    {children}
  </motion.div>
);

// 6. Slide Left - Elemen muncul dari kanan ke kiri
export const SlideLeft = ({ children, duration = 1, delay = 0 }) => (
  <motion.div 
    initial={{ x: 50, opacity: 0 }} 
    animate={{ x: 0, opacity: 1 }} 
    transition={{ duration, delay }} 
    className="relative w-full"
  >
    {children}
  </motion.div>
);

// 7. Slide Right - Elemen muncul dari kiri ke kanan
export const SlideRight = ({ children, duration = 1, delay = 0 }) => (
  <motion.div 
    initial={{ x: -50, opacity: 0 }} 
    animate={{ x: 0, opacity: 1 }} 
    transition={{ duration, delay }} 
    className="relative w-full"
  >
    {children}
  </motion.div>
);

// 8. Slide Diagonal - Elemen muncul secara diagonal
export const SlideDiagonal = ({ children, duration = 1, delay = 0 }) => (
  <motion.div 
    initial={{ x: -50, y: 50, opacity: 0 }} 
    animate={{ x: 0, y: 0, opacity: 1 }} 
    transition={{ duration, delay }} 
    className="relative w-full"
  >
    {children}
  </motion.div>
);

// ---------- BOUNCE ANIMATIONS ----------

// 9. Bounce - Elemen bergerak naik turun secara berulang
export const Bounce = ({ children, duration = 1 }) => (
  <motion.div 
    animate={{ y: [0, -20, 0] }} 
    transition={{ repeat: Infinity, duration }} 
    className="relative w-full"
  >
    {children}
  </motion.div>
);

// 10. Bounce In - Elemen muncul dengan efek pantulan
export const BounceIn = ({ children, duration = 0.8, delay = 0 }) => (
  <motion.div 
    initial={{ scale: 0 }} 
    animate={{ scale: [0, 1.2, 1] }} 
    transition={{ duration, delay }} 
    className="relative w-full"
  >
    {children}
  </motion.div>
);

// 11. Horizontal Bounce - Elemen bergerak kiri-kanan secara berulang
export const HorizontalBounce = ({ children, duration = 1 }) => (
  <motion.div 
    animate={{ x: [0, 15, 0, -15, 0] }} 
    transition={{ repeat: Infinity, duration }} 
    className="relative w-full"
  >
    {children}
  </motion.div>
);

// ---------- ZOOM ANIMATIONS ----------

// 12. Zoom In - Elemen membesar dari kecil
export const ZoomIn = ({ children, duration = 1, delay = 0 }) => (
  <motion.div 
    initial={{ scale: 0.5, opacity: 0 }} 
    animate={{ scale: 1, opacity: 1 }} 
    transition={{ duration, delay }} 
    className="relative w-full"
  >
    {children}
  </motion.div>
);

// 13. Zoom Out - Elemen mengecil dari besar
export const ZoomOut = ({ children, duration = 1, delay = 0 }) => (
  <motion.div 
    initial={{ scale: 1.5, opacity: 0 }} 
    animate={{ scale: 1, opacity: 1 }} 
    transition={{ duration, delay }} 
    className="relative w-full"
  >
    {children}
  </motion.div>
);

// 14. Pulse - Elemen berdenyut dengan perubahan skala
export const Pulse = ({ children, duration = 1.5 }) => (
  <motion.div 
    animate={{ scale: [1, 1.05, 1] }} 
    transition={{ repeat: Infinity, duration }} 
    className="relative w-full"
  >
    {children}
  </motion.div>
);

// ---------- ROTATE ANIMATIONS ----------

// 15. Rotate - Elemen berputar 360 derajat
export const Rotate = ({ children, duration = 1, delay = 0 }) => (
  <motion.div 
    initial={{ rotate: 0 }} 
    animate={{ rotate: 360 }} 
    transition={{ duration, delay }} 
    className="relative w-full"
  >
    {children}
  </motion.div>
);

// 16. Rotate In - Elemen muncul dengan efek rotasi
export const RotateIn = ({ children, duration = 1, delay = 0 }) => (
  <motion.div 
    initial={{ rotate: -90, opacity: 0 }} 
    animate={{ rotate: 0, opacity: 1 }} 
    transition={{ duration, delay }} 
    className="relative w-full"
  >
    {children}
  </motion.div>
);

// 17. Swing - Elemen berayun seperti pendulum
export const Swing = ({ children, duration = 1 }) => (
  <motion.div 
    animate={{ rotate: [0, 15, 0, -15, 0] }} 
    transition={{ repeat: Infinity, duration }} 
    className="relative w-full"
  >
    {children}
  </motion.div>
);

// ---------- SPECIAL ANIMATIONS ----------

// 18. Flip - Elemen membalik dengan efek 3D
export const Flip = ({ children, duration = 0.8, delay = 0 }) => (
  <motion.div 
    initial={{ rotateY: 90, opacity: 0 }} 
    animate={{ rotateY: 0, opacity: 1 }} 
    transition={{ duration, delay }} 
    style={{ perspective: "1000px" }}
    className="relative w-full"
  >
    {children}
  </motion.div>
);

// 19. Shake - Elemen bergetar horizontal
export const Shake = ({ children, duration = 0.5 }) => (
  <motion.div 
    animate={{ x: [0, -10, 10, -10, 10, 0] }} 
    transition={{ duration }} 
    className="relative w-full"
  >
    {children}
  </motion.div>
);

// 20. Rubber - Elemen berubah bentuk seperti karet
export const Rubber = ({ children, duration = 0.8, delay = 0 }) => (
  <motion.div 
    animate={{ scaleX: [1, 1.25, 0.75, 1.15, 0.95, 1] }} 
    transition={{ duration, delay }} 
    className="relative w-full"
  >
    {children}
  </motion.div>
);

// 21. Float - Elemen mengambang naik turun dengan lembut
export const Float = ({ children, duration = 3 }) => (
  <motion.div 
    animate={{ y: [0, -10, 0] }} 
    transition={{ repeat: Infinity, duration, ease: "easeInOut" }} 
    className="relative w-full"
  >
    {children}
  </motion.div>
);

// 22. Blink - Elemen berkedip (menghilang dan muncul)
export const Blink = ({ children, duration = 1 }) => (
  <motion.div 
    animate={{ opacity: [1, 0, 1] }} 
    transition={{ repeat: Infinity, duration }} 
    className="relative w-full"
  >
    {children}
  </motion.div>
);

// 23. Typewriter - Efek teks yang muncul seperti mengetik
export const TypeWriter = ({ text }) => {
  const characters = Array.from(text);
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };
  
  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };
  
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="relative w-full"
    >
      {characters.map((char, index) => (
        <motion.span key={index} variants={child}>
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

// 24. ScaleOnHover - Elemen membesar saat dihover
export const ScaleOnHover = ({ children }) => (
  <motion.div 
    whileHover={{ scale: 1.1 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
    className="relative w-full"
  >
    {children}
  </motion.div>
);

// 25. RotateOnHover - Elemen berputar saat dihover
export const RotateOnHover = ({ children, degrees = 10 }) => (
  <motion.div 
    whileHover={{ rotate: degrees }} 
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
    className="relative w-full"
  >
    {children}
  </motion.div>
);

// 26. RevealCard - Kartu yang muncul dengan efek reveal dari tepi
export const RevealCard = ({ children, direction = "left", duration = 0.5, delay = 0 }) => {
  const directionMap = {
    left: { x: "-100%", y: 0 },
    right: { x: "100%", y: 0 },
    top: { x: 0, y: "-100%" },
    bottom: { x: 0, y: "100%" }
  };
  
  return (
    <motion.div 
      initial={directionMap[direction]}
      animate={{ x: 0, y: 0 }}
      transition={{ duration, delay, ease: "easeOut" }}
      className="relative w-full"
    >
      {children}
    </motion.div>
  );
};

// 27. AttentionSeeker - Animasi untuk menarik perhatian pengguna
export const AttentionSeeker = ({ children, duration = 1 }) => (
  <motion.div 
    animate={{ 
      scale: [1, 1.1, 1, 1.1, 1],
      rotate: [0, 0, 0, 0, 0],
      borderRadius: ["0%", "0%", "0%", "0%", "0%"]
    }}
    transition={{ duration }}
    className="relative w-full"
  >
    {children}
  </motion.div>
);

// 28. Jello - Animasi efek jello/gelatin
export const Jello = ({ children, duration = 0.8, delay = 0 }) => (
  <motion.div 
    animate={{ 
      transform: [
        "scale3d(1, 1, 1)", 
        "scale3d(1.25, 0.75, 1)", 
        "scale3d(0.75, 1.25, 1)", 
        "scale3d(1.15, 0.85, 1)", 
        "scale3d(0.95, 1.05, 1)", 
        "scale3d(1.05, 0.95, 1)", 
        "scale3d(1, 1, 1)"
      ] 
    }}
    transition={{ duration, delay }}
    className="relative w-full"
  >
    {children}
  </motion.div>
);

// 29. ProgressiveReveal - Animasi untuk konten yang muncul bertahap saat di-scroll
export const ProgressiveReveal = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5 }}
    className="relative w-full"
  >
    {children}
  </motion.div>
);

// 30. Wobble - Animasi efek goyang horizontal
export const Wobble = ({ children, duration = 0.8, delay = 0 }) => (
  <motion.div
    animate={{
      transform: [
        "translate3d(0%, 0%, 0) rotate3d(0, 0, 1, 0deg)",
        "translate3d(-25%, 0%, 0) rotate3d(0, 0, 1, -5deg)",
        "translate3d(20%, 0%, 0) rotate3d(0, 0, 1, 3deg)",
        "translate3d(-15%, 0%, 0) rotate3d(0, 0, 1, -3deg)",
        "translate3d(10%, 0%, 0) rotate3d(0, 0, 1, 2deg)",
        "translate3d(-5%, 0%, 0) rotate3d(0, 0, 1, -1deg)",
        "translate3d(0%, 0%, 0) rotate3d(0, 0, 1, 0deg)"
      ]
    }}
    transition={{ duration, delay }}
    className="relative w-full"
  >
    {children}
  </motion.div>
);