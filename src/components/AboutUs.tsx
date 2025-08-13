import React from "react";

const AboutUs: React.FC = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-background via-background to-accent/5 text-white py-20 px-6 overflow-hidden mt-12">
      {/* Background Blobs / Futuristic Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-purple-700/20 blur-[180px]" />
        <div className="absolute top-1/3 -right-20 h-80 w-80 rounded-full bg-indigo-500/20 blur-[150px]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-pink-500/10 blur-[120px]" />
      </div>

      <div className="relative max-w-5xl mx-auto z-10 text-center">
        {/* Title */}
        <div className="flex items-center justify-center w-full mb-4 mt-2">
              {/* Left arrow */}
              <div className="relative w-[120px] h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-yellow-400">
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-yellow-400 rounded-full" />
              </div>
              {/* Our Features */}
              <div className="inline-flex items-center px-4 py-1 mx-6 rounded-full bg-cyan-400/10 text-yellow-500 text-lg font-bold whitespace-nowrap shadow">
                About Us
              </div>
              {/* Right arrow */}
              <div className="relative w-[120px] h-px bg-gradient-to-l from-transparent via-cyan-400/30 to-yellow-500">
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-yellow-500 rounded-full" />
              </div>
            </div>

        {/* Intro paragraph */}
        <p className="mt-6 text-lg md:text-xl text-cyan-300/80 max-w-3xl mx-auto leading-relaxed">
          We’re a mix of AI engineers, HR experts, and career coaches with one goal —
          make interview prep smarter and easier.
        </p>

        {/* Bullet points */}
        <ul className="mt-10 max-w-3xl mx-auto text-left space-y-6">
          {[
            "We turn practice into real-world readiness.",
            "We make tech work for your confidence.",
            "We believe everyone deserves to ace their next interview."
          ].map((point, idx) => (
            <li
              key={idx}
              className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 hover:bg-white/10 
                         transition border border-white/10 hover:border-cyan-400/30 
                         shadow-lg hover:shadow-cyan-400/30"
            >
              <span className="w-3 h-3 mt-2 rounded-full bg-gradient-to-r from-pink-400 to-cyan-400 flex-shrink-0 shadow-glow" />
              <p className="text-lg text-neutral-200">{point}</p>
            </li>
          ))}
        </ul>

        {/* Closing tagline */}
        <p className="mt-10 text-xl md:text-2xl text-yellow-400 font-semibold">
          Your success is our mission — and we’re here to get you there.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
