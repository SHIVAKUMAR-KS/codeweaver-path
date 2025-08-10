import React, { useRef, useEffect } from "react";
import ScrollStack, { ScrollStackItem } from './ui/ScrollStack';
import AnimatedStarButton from '@/components/ui/animated-star-button';
import SplineModel from "./SplineModel";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AdvancedFeaturesSectionProps {
  featureCards: React.ReactNode[];
  featureIdx: number;
  setFeatureIdx: React.Dispatch<React.SetStateAction<number>>;
  handleNavigation: (path: string) => void;
  authUser: any;
}

const AdvancedFeaturesSection: React.FC<AdvancedFeaturesSectionProps> = ({
  featureCards,
  featureIdx,
  setFeatureIdx,
  handleNavigation,
  authUser,
}) => {
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth < 1024) return;

    const header = headerRef.current;
    const triggerEl = document.querySelector(".scroll-stack-card"); // first card

    if (header && triggerEl) {
      gsap.fromTo(
        header,
        { opacity: 1, y: 0 },
        {
          opacity: 0,
          y: -80,
          pointerEvents: "none",
          scrollTrigger: {
            trigger: triggerEl,
            start: "top center",  // when cards start coming in
            end: "top top",       // when first card reaches top
            scrub: true
          }
        }
      );
    }
  }, []);

  return (
    <section className="w-full px-4 bg-gradient-to-br from-background via-background to-accent/5">
      
      {/* Desktop (ScrollStack) */}
      <section className="hidden lg:block w-full px-4 mt-2">
        <div className="mx-auto max-w-7xl font-bruno font-bold">

          {/* This entire header will fade/move up on scroll */}
          <div 
            ref={headerRef}
            className="sticky top-0 left-0 right-0 z-20 bg-background py-2 border-b border-accent/20"
          >
            <div className="flex items-center justify-center w-full mb-2 text-center mt-2">
              {/* Left arrow */}
              <div className="relative w-[120px] h-px bg-gradient-to-r from-transparent via-[#f5ac01]/30 to-[#f5ac01]">
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-[#f5ac01] rounded-full" />
              </div>

              {/* Our Features Label */}
              <div className="inline-flex items-center px-4 py-1 mx-6 rounded-full bg-[#f5b210]/10 text-[#f5ac01] text-lg font-bold whitespace-nowrap shadow">
                Our Features
              </div>

              {/* Right arrow */}
              <div className="relative w-[120px] h-px bg-gradient-to-l from-transparent via-[#f5ac01]/30 to-[#f5ac01]">
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-[#f5ac01] rounded-full" />
              </div>
            </div>

            <h2 className="mb-2 text-4xl font-bold md:text-6xl font-akashi text-center">
              Engineered for Excellence
            </h2>
            <p className="font-bruno text-xl max-w-3xl mx-auto leading-relaxed text-[#f5ac01] text-center">
              Ace Every Interview with Confidence Conduct seamless, automated interviews which save time and ensure quality.
            </p>
          </div>

          {/* ScrollStack Cards */}
          <ScrollStack itemDistance={300} className="h-screen flex items-center justify-center mt-0">
            <ScrollStackItem itemClassName="bg-transparent shadow-none border-none">
              <div className="text-center">{/* Title in sticky above */}</div>
            </ScrollStackItem>
             <ScrollStackItem itemClassName="bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-700">
              <div className="max-w-lg">
                <h2 className="font-bruno text-left text-xl md:text-2xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  AI Film Making
                </h2>
                <p className="mt-4 text-left text-base/6 text-neutral-200">
                  Create stunning cinematic videos and compelling ads effortlessly with AI-powered filmmaking and dubbing...
                </p>
                <div className="mt-6">
                  <AnimatedStarButton
                    onClick={() => handleNavigation("/problems")}
                    bgColor="bg-indigo-300"
                    textColor="text-indigo-900"
                    borderColor="border-indigo-300"
                    hoverTextColor="hover:text-indigo-300"
                    hoverShadow="hover:shadow-[0_0_25px_rgba(99,102,241,0.5)]"
                    borderRadius="rounded-full"
                  >
                    Try Workspace
                  </AnimatedStarButton>
                </div>
              </div>
            </ScrollStackItem>

            

            
          <ScrollStackItem itemClassName="bg-gradient-to-br from-emerald-900 via-emerald-700 to-teal-800">
            <div className="max-w-lg">
              <h2 className="font-bruno text-left text-balance text-xl md:text-2xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Report Gen-AI
              </h2>
              <p className="mt-4 text-left text-base/6 text-neutral-200">
                Generate insightful, data-driven reports effortlessly with AI tailored to your specific data stack. Whether you're working with spreadsheets, databases, cloud warehouses, or business intelligence tools, AI-powered report generation helps you uncover key trends, visualize metrics, and deliver actionable insights in seconds.
              </p>
              <div className="mt-6">
                <AnimatedStarButton
                  onClick={() =>
                    handleNavigation(
                      authUser ? `/profile/${authUser.id}` : '/auth/login'
                    )
                  }
                  bgColor="bg-emerald-300"
                  textColor="text-emerald-900"
                  borderColor="border-emerald-300"
                  hoverTextColor="hover:text-emerald-300"
                  hoverShadow="hover:shadow-[0_0_25px_rgba(16,185,129,0.5)]"
                  borderRadius="rounded-md"
                >
                  View Dashboard
                </AnimatedStarButton>
              </div>
            </div>
          </ScrollStackItem>

          <ScrollStackItem itemClassName="bg-gradient-to-br from-[#1a1a1a] via-[#6e40c9] via-[#ff8c00] to-[#ff206e]">
            <div className="max-w-lg">
              <h2 className="font-bruno text-left text-balance text-xl md:text-2xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Alpha CTR
              </h2>
              <p className="mt-4 text-left text-base/6 text-neutral-200">
                Produce engaging short-form videos at scale with AI-driven editing, smart captions, and high-converting thumbnails optimized for maximum Alpha CTR. Leverage AI to analyze audience behavior, auto-generate attention-grabbing visuals, and craft content that stops the scroll.
              </p>
              <div className="mt-6">
                <AnimatedStarButton
                  onClick={() =>
                    handleNavigation(
                      authUser ? `/profile/${authUser.id}` : '/auth/login'
                    )
                  }
                  bgColor="bg-emerald-300"
                  textColor="text-emerald-900"
                  borderColor="border-emerald-300"
                  hoverTextColor="hover:text-emerald-300"
                  hoverShadow="hover:shadow-[0_0_25px_rgba(16,185,129,0.5)]"
                  borderRadius="rounded-md"
                >
                  Try Workshop
                </AnimatedStarButton>
              </div>
            </div>
          </ScrollStackItem>
    
        <ScrollStackItem itemClassName="bg-gradient-to-br from-orange-600 to-red-700">
          <div className="max-w-lg">
            <h2 className="font-bruno text-left text-balance text-2xl md:text-3xl lg:text-4xl font-semibold tracking-[-0.015em] text-white">
              Learn, Share, and Grow Together
            </h2>
            <p className="mt-4 text-left text-base/6 text-neutral-200">
              Join a vibrant global community of coders inside Sklassics-ai Platform. Engage in real-time discussions, exchange ideas, ask questions. Learn from others, share your insights, and grow as a developer together.
            </p>
            <div className="mt-6">
              <AnimatedStarButton
                onClick={() => handleNavigation('/community')}
                bgColor="bg-orange-300"
                textColor="text-orange-900"
                borderColor="border-orange-300"
                hoverTextColor="hover:text-orange-300"
                hoverShadow="hover:shadow-[0_0_25px_rgba(249,115,22,0.5)]"
                borderRadius="rounded-xl"
              >
                Browse Sheets
              </AnimatedStarButton>
            </div>
          </div>
        </ScrollStackItem>
        <ScrollStackItem itemClassName="bg-gradient-to-br from-violet-600 via-purple-600 to-blue-600">
          <div className="max-w-lg">
            <h2 className="font-bruno text-left text-balance text-2xl md:text-3xl lg:text-4xl font-semibold tracking-[-0.015em] text-white">
              AI Singing Voice Synthesis.
            </h2>
            <p className="mt-4 text-left text-base/6 text-neutral-200">
              Create personalized, studio-quality songs using advanced AI singing voice synthesis. Craft unique tracks with AI-generated lyrics, custom melodies, and realistic vocals that match your chosen style, mood, or language. Whether you're a music producer, content creator, or just looking to surprise someone with a custom tune, this technology brings your musical ideas to life—no vocal training or recording equipment needed.
            </p>
            <div className="mt-6">{/* Optionally, CTA button here */}</div>
          </div>
        </ScrollStackItem>

            <ScrollStackItem itemClassName="bg-gradient-to-br from-black via-black to-black">
              <div className="max-w-lg">
                <h2 className="font-bruno text-left text-2xl md:text-3xl lg:text-4xl font-semibold tracking-[-0.015em] text-white">
                  AI Interview Assistant
                </h2>
                <p className="mt-4 text-left text-base/6 text-neutral-200">
                  Experience realistic Mock interviews & Assessments with AI-powered feedback and comprehensive performance analysis.
                </p>
                <div className="mt-6">
                  <AnimatedStarButton
                    onClick={() => handleNavigation("/interview")}
                    bgColor="bg-gray-300"
                    textColor="text-gray-900"
                    borderColor="border-gray-300"
                    hoverTextColor="hover:text-gray-300"
                    hoverShadow="hover:shadow-[0_0_25px_rgba(107,114,128,0.5)]"
                    borderRadius="rounded-sm"
                  >
                    Start Interview
                  </AnimatedStarButton>
                </div>
              </div>
              <div className="absolute right-10 bottom-10 w-32 h-32 flex items-center justify-center z-50">
                <SplineModel />
              </div>
            </ScrollStackItem>
          </ScrollStack>

            {/* ALL your normal feature ScrollStackItem cards here, unchanged */}
            {/* ... */}
            
          
          
        </div>
      </section>

      {/* Mobile view unchanged */}
      <section className="block lg:hidden w-full px-1 max-w-lg mx-auto">
        {/* Header */}
        <div className="text-center mb-4 mt-2">
          <div className="flex items-center justify-center mb-4">
            <div className="relative w-full max-w-[60px] h-px bg-gradient-to-r from-transparent via-[#f5ac01]/30 to-[#f5ac01]" />
            <div className="inline-flex items-center px-2 py-0.5 mx-2 rounded-full bg-[#f5b210]/10 text-[#f5ac01] text-xs font-bold">Our Features</div>
            <div className="relative w-full max-w-[60px] h-px bg-gradient-to-l from-transparent via-[#f5ac01]/30 to-[#f5ac01]" />
          </div>
          <h2 className="mb-2 text-2xl font-bold font-akashi tracking-wide">
            Engineered for Excellence
          </h2>
          <p className="font-bruno text-sm max-w-xs mx-auto leading-normal text-[#f5ac01]">
            Ace Every Interview with Confidence. Conduct seamless, automated interviews which save time and ensure quality.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative w-full">
          {featureCards[featureIdx]}
          <div className="flex items-center justify-center gap-6 mt-4">
            <button
              aria-label="Previous"
              className="rounded-full bg-gray-700/80 hover:bg-gray-400 text-white w-10 h-10 flex items-center justify-center shadow"
              onClick={() => setFeatureIdx(idx => idx === 0 ? featureCards.length - 1 : idx - 1)}
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <button
              aria-label="Next"
              className="rounded-full bg-gray-700/80 hover:bg-gray-400 text-white w-10 h-10 flex items-center justify-center shadow"
              onClick={() => setFeatureIdx(idx => (idx + 1) % featureCards.length)}
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l6 6-6 6" /></svg>
            </button>
          </div>
          {/* Dots */}
          <div className="flex items-center justify-center mt-4 gap-1">
            {featureCards.map((_, idx) => (
              <span key={idx} className={`inline-block w-2 h-2 rounded-full transition ${featureIdx === idx ? 'bg-[#f5ac01]' : 'bg-gray-400'}`} />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default AdvancedFeaturesSection;
