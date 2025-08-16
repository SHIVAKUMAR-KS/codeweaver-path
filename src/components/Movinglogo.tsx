import React from "react";
import { motion } from "framer-motion";
import { MorphingText } from '@/components/magicui/morphing-text';

// Marquee component: white, normal text, two rows, font-family cursive
const Movinglogo = ({
  texts = [
    "sklassics.com",
    "sklassicsai.com",
    "sklassicstech.com",
    "sklassicstutor.com",
    "sklassicslms.com",
    "sklassicsworld.com",
    "vlrws.com",
    "hanumancars.com",
  ],
  fontSize = "2rem",
  fontWeight = "normal", // changed from '900'
  speed = 25, // seconds
  rowGap = "3rem",
}) => {
  const repeatedTexts = [...texts, ...texts]; // for seamless scroll

  return (
    <div className="w-full overflow-hidden select-none py-2 relative">
      {/* First row: left to right */}
      <div
        className="whitespace-nowrap flex items-center"
        style={{
          animation: `scrollLR ${speed}s linear infinite`,
          direction: "ltr",
          gap: "2rem",
        }}
      >
        {repeatedTexts.map((text, idx) => (
          <span
            key={`lr-${idx}`}
            style={{
              fontSize,
              fontWeight,         // now normal
              marginRight: "2rem",
              whiteSpace: "nowrap",
              userSelect: "none",
              color: "#fff",
              fontFamily: "Fira Mono",
            }}
          >
            {text}
          </span>
        ))}
      </div>
      {/* Second row: right to left */}
      <div
        className="whitespace-nowrap flex items-center"
        style={{
          animation: `scrollRL ${speed}s linear infinite`,
          direction: "rtl",
          gap: "2rem",
          marginTop: rowGap,
        }}
      >
        {repeatedTexts.map((text, idx) => (
          <span
            key={`rl-${idx}`}
            style={{
              fontSize,
              fontWeight,         // now normal
              marginRight: "2rem",
              whiteSpace: "nowrap",
              userSelect: "none",
              color: "#fff",
              fontFamily: "JetBrains Mono",
            }}
          >
            {text}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes scrollLR {
          0% {transform: translateX(-100%);}
          100% {transform: translateX(100%);}
        }
        @keyframes scrollRL {
          0% {transform: translateX(100%);}
          100% {transform: translateX(-100%);}
        }
      `}</style>
    </div>
  );
};

export default Movinglogo;

// Example words for morph headline
const morphWords = ['Dominate', 'Interview', 'with', 'Sklassics-ai'];

// --- Usage example ---
const BrandShowcase = () => (
  <div className="relative w-full bg-black py-8">
    {/* Moving logo marquee */}
    <Movinglogo
      texts={[
        "sklassics.com",
        "sklassicsai.com",
        "sklassicstech.com",
        "sklassicsworld.com",
        "sklassicstutor.com",
        "sklassicslms.com",
        "vlrws.com",
        "hanumacars.com"
      ]}
      fontSize="clamp(1.4rem, 6vw, 2.5rem)"
      fontWeight="normal"
      speed={30}
      rowGap="4rem"
    />

    {/* Animated morphing text at bottom, normal font weight and cursive */}
    <motion.div
      className="absolute z-20 hidden w-full px-4 center-1/2 mt-0 transform -translate-x-1/2 lg:block max-w-7xl"
      initial={{ opacity: 0, scale: 0.3, z: -100 }}
      whileInView={{ opacity: 1, scale: 1, z: 0 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-100px' }}
    >
      <MorphingText
        texts={morphWords}
        className="text-[70pt] xl:text-[50pt] h-12 mt-5"
        style={{ fontFamily: 'cursive', fontWeight: "normal" }}
      />
    </motion.div>
  </div>
);

export { BrandShowcase };
