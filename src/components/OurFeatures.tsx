import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedStarButton from "@/components/ui/animated-star-button";

gsap.registerPlugin(ScrollTrigger);

// --- Card Component, now supports ref for hover ---
const FeatureCard = React.forwardRef<HTMLDivElement, any>(
  (
    {
      title,
      description,
      buttonText,
      buttonAction,
      buttonColor,
      bgGradient,
    },
    ref
  ) => {
    const colorMap = {
      indigo: { bg: "bg-indigo-300", text: "text-indigo-900", border: "border-indigo-300" },
      emerald: { bg: "bg-emerald-300", text: "text-emerald-900", border: "border-emerald-300" },
      orange: { bg: "bg-orange-300", text: "text-orange-900", border: "border-orange-300" },
    };
    return (
      <div
        ref={ref}
        className={`feature-card w-full max-w-[1250px] rounded-3xl min-h-[120px] md:min-h-[400px] p-8 py-12 ${bgGradient}
        border border-white/10 shadow-xl transition-all transform-gpu flex flex-col justify-center mx-auto`}
        style={{ willChange: "transform" }}
      >
        <h2 className="font-bruno text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
          {title}
        </h2>
        <p className="mt-6 text-lg text-neutral-200 flex-1">{description}</p>
        <div className="mt-8">
          <AnimatedStarButton
            onClick={buttonAction}
            bgColor={colorMap[buttonColor].bg}
            textColor={colorMap[buttonColor].text}
            borderColor={colorMap[buttonColor].border}
            hoverTextColor={`hover:${colorMap[buttonColor].bg.replace("bg-", "text-")}`}
            hoverShadow="hover:shadow-[0_0_25px_rgba(255,255,255,0.5)]"
            borderRadius="rounded-full"
          >
            {buttonText}
          </AnimatedStarButton>
        </div>
      </div>
    );
  }
);

FeatureCard.displayName = "FeatureCard";

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
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const hoverRefs = useRef<Array<HTMLDivElement | null>>([]);

  // Scroll shuffle/entrance
  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth < 1024) return;

    const ctx = gsap.context(() => {
      if (headerRef.current && cardRefs.current[0]) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 1, y: 0 },
          {
            opacity: 0,
            y: -80,
            pointerEvents: "none",
            scrollTrigger: {
              trigger: cardRefs.current[0],
              start: "top center",
              end: "+=100",
              scrub: true,
            },
          }
        );
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=" + 440 * featureCards.length,
          scrub: 0.5,
          pin: true,
        },
      });

      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        gsap.set(card, {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: featureCards.length - i,
          opacity: i === 0 ? 1 : 0,
          pointerEvents: i === 0 ? "auto" : "none",
          y: i === 0 ? "0%" : "100%",
          scale: i === 0 ? 1 : 0.96,
        });
      });

      cardRefs.current.forEach((card, i) => {
        if (i > 0 && card) {
          tl.to(
            card,
            {
              opacity: 1,
              y: "0%",
              scale: 1,
              pointerEvents: "auto",
              duration: 0.75,
              ease: "power3.out",
            },
            i
          );
          tl.to(
            cardRefs.current[i - 1],
            {
              opacity: 0,
              pointerEvents: "none",
              scale: 0.96,
              duration: 0.6,
              ease: "power2.in",
            },
            i
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [featureCards.length]);

  // Hover animation (desktop only)
  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth < 1024) return;

    // Remove previous listeners!
    hoverRefs.current.forEach((el) => {
      if (!el) return;
      el.onmousemove = null;
      el.onmouseleave = null;
    });

    hoverRefs.current.forEach((el) => {
      if (!el) return;

      el.onmousemove = (e: MouseEvent) => {
        const bounds = el.getBoundingClientRect();
        const x = e.clientX - bounds.left;
        const y = e.clientY - bounds.top;
        const rotateY = gsap.utils.mapRange(0, bounds.width, -10, 10, x);
        const rotateX = gsap.utils.mapRange(0, bounds.height, 8, -8, y);

        gsap.to(el, {
          rotateY,
          rotateX,
          scale: 1.03,
          boxShadow: "0 0 48px 0 #fff9  ,0 10px 24px rgba(0,0,0,0.4)",
          filter: "drop-shadow(0 0 40px rgba(255,255,255,0.08))",
          duration: 0.3,
          ease: "power2.out",
        });
      };

      el.onmouseleave = () => {
        gsap.to(el, {
          rotateY: 0,
          rotateX: 0,
          scale: 1,
          boxShadow: "0 8px 24px rgba(0,0,0,0.24)",
          filter: "none",
          duration: 0.7,
          ease: "elastic.out(1,0.4)",
        });
      };
    });
    // Clean up
    return () => {
      hoverRefs.current.forEach((el) => {
        if (!el) return;
        el.onmousemove = null;
        el.onmouseleave = null;
      });
    };
  }, [featureCards.length]);

  // Cards
  const cardsToRender = [
    <FeatureCard
      ref={(el) => {
        hoverRefs.current[0] = el;
      }}
      key="film"
      title="AI Film Making"
      description="Create stunning cinematic videos and compelling ads effortlessly with AI-powered filmmaking and dubbing..."
      buttonText="Try Workspace"
      buttonAction={() => handleNavigation("/problems")}
      buttonColor="indigo"
      bgGradient="bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-700"
    />,
    <FeatureCard
      ref={(el) => {
        hoverRefs.current[1] = el;
      }}
      key="report"
      title="Report Gen-AI"
      description="Generate insightful, data-driven reports effortlessly with AI tailored to your data stack..."
      buttonText="View Dashboard"
      buttonAction={() =>
        handleNavigation(authUser ? `/profile/${authUser.id}` : "/auth/login")
      }
      buttonColor="emerald"
      bgGradient="bg-gradient-to-br from-emerald-900 via-green-700 to-teal-800"
    />,
    <FeatureCard
      ref={(el) => {
        hoverRefs.current[2] = el;
      }}
      key="ctr"
      title="Alpha CTR"
      description="Produce engaging short-form videos at scale with AI-driven editing, smart captions..."
      buttonText="Try Workshop"
      buttonAction={() =>
        handleNavigation(authUser ? `/profile/${authUser.id}` : "/auth/login")
      }
      buttonColor="orange"
      bgGradient="bg-gradient-to-br from-orange-700 via-red-600 to-pink-600"
    />,
    <FeatureCard
      ref={(el) => {
        hoverRefs.current[3] = el;
      }}
      key="learn"
      title="Learn, Share, and Grow Together"
      description="Join a vibrant global community of coders inside Sklassics-ai Platform. Engage in real-time discussions, exchange ideas, ask questions. Learn from others, share your insights, and grow as a developer together."
      buttonText="Browse Sheets"
      buttonAction={() =>
        handleNavigation(authUser ? `/profile/${authUser.id}` : "/auth/login")
      }
      buttonColor="orange"
      bgGradient="bg-gradient-to-br from-pink-600 via-red-600 to-orange-600"
    />,
    <FeatureCard
      ref={(el) => {
        hoverRefs.current[4] = el;
      }}
      key="singing"
      title="AI Singing Voice Synthesis."
      description="Create personalized, studio-quality songs using advanced AI singing voice synthesis. Craft unique tracks with AI-generated lyrics, custom melodies, and realistic vocals that match your chosen style, mood, or language."
      buttonText="Browse Sheets"
      buttonAction={() =>
        handleNavigation(authUser ? `/profile/${authUser.id}` : "/auth/login")
      }
      buttonColor="orange"
      bgGradient="bg-gradient-to-br from-purple-700 via-red-600 to-blue-600"
    />,
    <FeatureCard
      ref={(el) => {
        hoverRefs.current[5] = el;
      }}
      key="interview"
      title="AI Interview Assistant."
      description="Experience realistic Mock interviews & Assessments with AI-powered feedback and comprehensive performance analysis."
      buttonText="Start Interview"
      buttonAction={() =>
        handleNavigation(authUser ? `/profile/${authUser.id}` : "/auth/login")
      }
      buttonColor="orange"
      bgGradient="bg-gradient-to-br from-gray-900 via-red-600 to-black"
    />,
  ];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-purple-700/30 blur-[150px]" />
        <div className="absolute top-1/3 -right-20 h-72 w-72 rounded-full bg-indigo-500/30 blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-amber-500/20 blur-[120px]" />
      </div>

      {/* Desktop */}
      <section className="hidden lg:block w-full px-0 pt-16 relative z-10">
        <div className="mx-auto max-w-none font-bruno font-bold">
          {/* HEADER with "Our Features" */}
          <div
            ref={headerRef}
            className="sticky top-0 left-0 right-0 z-20 backdrop-blur-lg bg-white/5 border-b border-white/10 rounded-xl shadow-lg py-6 transition-transform"
          >
            <div className="flex items-center justify-center w-full mb-4 mt-2">
              {/* Left arrow */}
              <div className="relative w-[120px] h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-yellow-400">
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-yellow-400 rounded-full" />
              </div>
              {/* Our Features */}
              <div className="inline-flex items-center px-4 py-1 mx-6 rounded-full bg-cyan-400/10 text-yellow-500 text-lg font-bold whitespace-nowrap shadow">
                Our Features
              </div>
              {/* Right arrow */}
              <div className="relative w-[120px] h-px bg-gradient-to-l from-transparent via-cyan-400/30 to-yellow-500">
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-yellow-500 rounded-full" />
              </div>
            </div>
            <h2 className="mb-2 text-5xl md:text-7xl font-akashi text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 text-center">
              Engineered for Excellence
            </h2>
            <p className="font-bruno text-xl max-w-4xl mx-auto leading-relaxed text-cyan-400/80 text-center">
              Ace every interview with confidence. Conduct seamless, automated interviews which save time and ensure quality.
            </p>
          </div>

          {/* Card animation container */}
          <div ref={containerRef} className="relative w-full max-w-none px-0 mt-1 mb-2" style={{ minHeight: 600 }}>
            {cardsToRender.map((node, idx) => (
              <div
                key={idx}
                ref={(el) => (cardRefs.current[idx] = el)}
                className="scroll-stack-card w-full"
                style={{ perspective: 1200 }}
              >
                {node}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile carousel unchanged */}
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
